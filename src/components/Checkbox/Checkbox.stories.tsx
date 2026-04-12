import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';
import './Checkbox.css';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['Prospect', 'Client'],
      description: 'Détermine l\'arrondi (border-radius) et les spécificités de couleurs'
    },
    state: {
      control: 'select',
      options: ['--unselected', '--hover', '--selected', '--error', '--hover_error'],
      description: 'L\'état de la Checkbox (au repos, sélectionné, ou en erreur)'
    },
    onClick: { action: 'clicked',  description: 'Événement émis lors du clic' }
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper React simple pour gérer l'interaction sans polluer les dépendances Storybook v10
const InteractiveCheckbox = (args: any) => {
  const [currentState, setCurrentState] = useState(args.state);

  // Synchronise si vous changez l'état via le menu de contrôle
  useEffect(() => {
    setCurrentState(args.state);
  }, [args.state]);

  const handleToggle = () => {
    setCurrentState((prev: string) => prev === '--selected' ? '--unselected' : '--selected');
  };

  return <Checkbox {...args} state={currentState} onClick={handleToggle} />;
};

// --- STORY INTERACTIVE ---
export const Playground: Story = {
  args: {
    theme: 'Prospect',
    state: '--unselected',
  },
  render: (args) => <InteractiveCheckbox {...args} />,
};

// --- AUTRES DÉCLINAISONS ---
export const ProspectSelected: Story = {
  args: { theme: 'Prospect', state: '--selected' },
};

export const ProspectUnselected: Story = {
  args: { theme: 'Prospect', state: '--unselected' },
};

export const ClientUnselected: Story = {
  args: { theme: 'Client', state: '--unselected' },
};

export const ClientError: Story = {
  args: { theme: 'Client', state: '--error' },
};

export const ClientHoverError: Story = {
  args: { theme: 'Client', state: '--hover_error' },
};
