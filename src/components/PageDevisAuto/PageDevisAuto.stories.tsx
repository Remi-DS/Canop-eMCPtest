import type { Meta, StoryObj } from '@storybook/react';
import { PageDevisAuto } from './PageDevisAuto';

const meta = {
  title: 'Templates/PageDevisAuto',
  component: PageDevisAuto,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Étape actuelle du parcours',
    },
    totalSteps: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Nombre total d\'étapes',
    },
    pageTitle: {
      control: 'text',
      description: 'Titre principal de la page (H1)',
    },
    infoMessage: {
      control: 'text',
      description: 'Message informatif affiché en haut du formulaire',
    },
    question: {
      control: 'text',
      description: 'Intitulé de la question du formulaire',
    },
    options: {
      control: 'object',
      description: 'Liste des options radio',
    },
    ctaLabel: {
      control: 'text',
      description: 'Texte du bouton d\'action principal',
    },
  },
} satisfies Meta<typeof PageDevisAuto>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- DESKTOP (par défaut) ---
export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    currentStep: 1,
    totalSteps: 3,
    stepLabel: 'Étape {current} sur {total}',
    pageTitle: 'Votre besoin',
    infoMessage: 'Obtenez votre tarif en 5 minutes !',
    question: 'Qui souhaitez-vous assurer ?',
    options: ['Madame', 'Monsieur', 'Titre', 'Titre'],
    ctaLabel: 'Suivant',
  },
};

// --- MOBILE ---
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    currentStep: 1,
    totalSteps: 3,
    stepLabel: 'Étape {current} sur {total}',
    pageTitle: 'Votre besoin',
    infoMessage: 'Obtenez votre tarif en 5 minutes !',
    question: 'Qui souhaitez-vous assurer ?',
    options: ['Madame', 'Monsieur', 'Titre', 'Titre'],
    ctaLabel: 'Suivant',
  },
};

// --- ÉTAPE 2 ---
export const Etape2: Story = {
  args: {
    currentStep: 2,
    totalSteps: 3,
    pageTitle: 'Votre véhicule',
    infoMessage: 'Renseignez les informations de votre véhicule.',
    question: 'Quel est votre type de véhicule ?',
    options: ['Berline', 'SUV', 'Citadine', 'Utilitaire'],
    ctaLabel: 'Suivant',
  },
};

// --- ÉTAPE 3 ---
export const Etape3: Story = {
  args: {
    currentStep: 3,
    totalSteps: 3,
    pageTitle: 'Votre profil',
    infoMessage: 'Quelques informations sur votre historique de conduite.',
    question: 'Avez-vous eu un sinistre ces 3 dernières années ?',
    options: ['Oui', 'Non'],
    ctaLabel: 'Obtenir mon devis',
  },
};
