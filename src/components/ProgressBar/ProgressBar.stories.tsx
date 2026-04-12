import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 5 }, description: 'Valeur de 0 à 100' },
    showPercentage: { control: 'boolean', description: 'Affiche le % à droite' },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { theme: 'Prospect', value: 50, showPercentage: true },
  decorators: [(Story) => <div style={{ width: '300px', padding: '16px' }}><Story /></div>],
};

export const ProspectEmpty: Story = { args: { theme: 'Prospect', value: 0, showPercentage: false } };
export const ProspectFull: Story = { args: { theme: 'Prospect', value: 100, showPercentage: true } };
export const ClientHalf: Story = { args: { theme: 'Client', value: 50, showPercentage: true } };
