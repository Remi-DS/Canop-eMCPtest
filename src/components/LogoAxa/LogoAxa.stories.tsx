import type { Meta, StoryObj } from '@storybook/react';
import { LogoAxa } from './LogoAxa';

const meta: Meta<typeof LogoAxa> = {
  title: 'Atoms/Logo AXA',
  component: LogoAxa,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: 'select', 
      options: ['Solid blue', 'Open blue', 'Open white', 'Wealth'] 
    },
    size: { control: { type: 'number', min: 24, max: 200, step: 8 } },
  },
};

export default meta;
type Story = StoryObj<typeof LogoAxa>;

export const Playground: Story = {
  args: {
    type: 'Solid blue',
    size: 48,
  },
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <LogoAxa type="Solid blue" size={64} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Solid blue</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <LogoAxa type="Open blue" size={64} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Open blue</p>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#00008f', padding: '16px', borderRadius: '8px', color: 'white' }}>
        <LogoAxa type="Open white" size={64} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Open white</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <LogoAxa type="Wealth" size={64} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Wealth</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
      <LogoAxa type="Solid blue" size={32} />
      <LogoAxa type="Solid blue" size={48} />
      <LogoAxa type="Solid blue" size={80} />
      <LogoAxa type="Solid blue" size={120} />
    </div>
  ),
};
