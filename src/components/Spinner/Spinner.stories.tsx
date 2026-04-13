import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atomes/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['Prospect', 'Client'],
    },
    size: {
      control: 'select',
      options: ['--24', '--32', '--40'],
    },
    color: {
      control: 'select',
      options: ['--primary', '--secondary', '--tertiary'],
    },
    animation: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const DefaultProspect: Story = {
  args: {
    theme: 'Prospect',
    size: '--40',
    color: '--primary',
  },
};

export const ClientTheme: Story = {
  args: {
    theme: 'Client',
    size: '--32',
    color: '--primary',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'Prospect',
    size: '--24',
    color: '--secondary',
  },
};

export const InverseOnBlue: Story = {
  args: {
    theme: 'Client',
    size: '--40',
    color: '--tertiary',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#00008f', padding: '2rem', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllThemesAndSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <span>Prospect:</span>
        <Spinner theme="Prospect" size="--24" />
        <Spinner theme="Prospect" size="--32" />
        <Spinner theme="Prospect" size="--40" />
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <span>Client:</span>
        <Spinner theme="Client" size="--24" />
        <Spinner theme="Client" size="--32" />
        <Spinner theme="Client" size="--40" />
      </div>
    </div>
  ),
};
