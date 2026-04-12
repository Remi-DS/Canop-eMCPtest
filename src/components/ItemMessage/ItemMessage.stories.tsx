import type { Meta, StoryObj } from '@storybook/react';
import { ItemMessage } from './ItemMessage';
import './ItemMessage.css'; // S'assure que les variables CSS sont chargées

// Configuration globale pour le composant dans Storybook
const meta = {
  title: 'Atoms/ItemMessage',
  component: ItemMessage,
  // Le tag 'autodocs' permet à Storybook de générer automatiquement sa documentation
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['Prospect', 'Client'],
      description: 'Le thème de visualisation du message',
      table: { defaultValue: { summary: 'Prospect' } }
    },
    device: {
      control: 'inline-radio',
      options: ['--desk', '--mob'],
      description: 'Gère la taille de la typographie et de l\'icône selon le support',
      table: { defaultValue: { summary: '--desk' } }
    },
    status: {
      control: 'select',
      options: ['--sucess', '--warning', '--error'],
      description: 'Le statut d\'alerte modifiant la couleur et l\'icône',
      table: { defaultValue: { summary: '--sucess' } }
    },
    text: {
      control: 'text',
      description: 'Le contenu texte du message'
    },
    className: {
      table: { disable: true } // On masque cette propriété pour ne pas polluer l'interface
    }
  },
} satisfies Meta<typeof ItemMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- STORY INTERACTIVE ---
// C'est celle-ci que vous pourrez modifier à la volée avec les boutons radios sur Storybook
export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    status: '--sucess',
    text: 'Votre configuration a bien été enregistrée.',
  },
};

// --- AUTRES DÉCLINAISONS ---

export const ProspectDesktopSuccess: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    status: '--sucess',
    text: 'Validation du contrat effectuée.',
  },
};

export const ProspectMobileError: Story = {
  args: {
    theme: 'Prospect',
    device: '--mob',
    status: '--error',
    text: 'Oups, une erreur est survenue lors de la saisie.',
  },
};

export const ClientDesktopWarning: Story = {
  args: {
    theme: 'Client',
    device: '--desk',
    status: '--warning',
    text: 'La date d\'expiration approche.',
  },
};

export const ClientMobileSuccess: Story = {
  args: {
    theme: 'Client',
    device: '--mob',
    status: '--sucess',
    text: 'Vos informations sont à jour.',
  },
};
