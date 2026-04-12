import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Atomes/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'select', options: ['--info', '--success', '--warning', '--error', '--neutral'] },
    text: { control: 'text' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { theme: 'Prospect', device: '--desk', style: '--info', text: 'Texte' },
};

export const Info: Story =    { args: { style: '--info',    text: 'Info'    } };
export const Success: Story = { args: { style: '--success', text: 'Succès'  } };
export const Warning: Story = { args: { style: '--warning', text: 'Attention' } };
export const Error: Story =   { args: { style: '--error',   text: 'Erreur'  } };
export const Neutral: Story = { args: { style: '--neutral', text: 'Neutre'  } };
export const Mobile: Story =  { args: { device: '--mob',   text: 'Mobile'  } };
