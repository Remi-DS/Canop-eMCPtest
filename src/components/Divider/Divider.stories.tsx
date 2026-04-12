import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    position: { control: 'radio', options: ['Horizontal', 'Vertical'] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { theme: 'Prospect', position: 'Horizontal' },
  decorators: [(Story) => <div style={{ width: '300px', padding: '16px' }}><Story /></div>],
};

export const Vertical: Story = {
  args: { theme: 'Prospect', position: 'Vertical' },
  decorators: [(Story) => <div style={{ height: '80px', display: 'flex', alignItems: 'center', padding: '16px' }}><Story /></div>],
};

export const ClientHorizontal: Story = {
  args: { theme: 'Client', position: 'Horizontal' },
  decorators: [(Story) => <div style={{ width: '300px', padding: '16px' }}><Story /></div>],
};
