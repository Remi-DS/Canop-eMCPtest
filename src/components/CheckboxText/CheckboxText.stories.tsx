import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { CheckboxText } from './CheckboxText';

const meta = {
  title: 'Molecules/CheckboxText',
  component: CheckboxText,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['Prospect', 'Client'],
      description: 'Thème du composant'
    },
    device: {
      control: 'radio',
      options: ['--desk', '--mob'],
      description: 'Contexte d\'affichage (taille de typographie)'
    },
    state: {
      control: 'select',
      options: ['--unselected', '--hover', '--selected', '--error', '--hover_error'],
      description: 'État du composant'
    },
    text: {
      control: 'text',
      description: 'Texte du label'
    },
    errorMessage: {
      control: 'text',
      description: 'Message d\'erreur affiché sous le label (uniquement pour --error et --hover_error)'
    },
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof CheckboxText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper avec toggle interactif
const InteractiveCheckboxText = (args: any) => {
  const [currentState, setCurrentState] = useState(args.state);

  useEffect(() => {
    setCurrentState(args.state);
  }, [args.state]);

  const handleToggle = () => {
    setCurrentState((prev: string) => {
      if (prev === '--selected') return '--unselected';
      if (prev === '--unselected' || prev === '--hover') return '--selected';
      return prev; // On ne touche pas aux états error
    });
  };

  return <CheckboxText {...args} state={currentState} onClick={handleToggle} />;
};

// --- PLAYGROUND INTERACTIF ---
export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--unselected',
    text: 'Cocher cette option pour continuer',
    errorMessage: 'Veuillez cocher cette case',
  },
  render: (args) => <InteractiveCheckboxText {...args} />,
};

// --- DÉCLINAISONS ---
export const ProspectDesktopSelected: Story = {
  args: { theme: 'Prospect', device: '--desk', state: '--selected', text: 'Option sélectionnée' },
};

export const ProspectDesktopError: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--error',
    text: 'J\'accepte les conditions générales',
    errorMessage: 'Ce champ est obligatoire pour continuer',
  },
};

export const ClientMobileUnselected: Story = {
  args: { theme: 'Client', device: '--mob', state: '--unselected', text: 'Client (Mobile)' },
};

export const ClientMobileError: Story = {
  args: {
    theme: 'Client',
    device: '--mob',
    state: '--error',
    text: 'Confirmer mon choix',
    errorMessage: 'Champ obligatoire',
  },
};
