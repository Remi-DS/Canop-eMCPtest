import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atomes/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['prospect', 'client'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inverse'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    theme: 'prospect',
    size: 'md',
    color: 'primary',
  },
};

export const ClientTheme: Story = {
  args: {
    theme: 'client',
    size: 'lg',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'prospect',
    size: 'md',
    color: 'secondary',
  },
};

export const Inverse: Story = {
  args: {
    theme: 'prospect',
    size: 'lg',
    color: 'inverse',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#00008f', padding: '2rem', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  ),
};
