import type { Meta, StoryObj } from '@storybook/react';
import { ClickIcon } from './ClickIcon';

const meta: Meta<typeof ClickIcon> = {
  title: 'Molecules/Actions/Click Icon',
  component: ClickIcon,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    style: { control: 'radio', options: ['--default', '--ghost'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active', '--disabled'] },
    size: { control: 'radio', options: ['S', 'XS'] },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ClickIcon>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    style: '--default',
    state: '--default',
    size: 'S',
    ariaLabel: 'Action',
    icon: '✏️',
  },
};

// Helper : icône SVG inline simple
const IconEdit = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
);

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* PROSPECT DEFAULT S */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Default — Size S</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <ClickIcon theme="Prospect" style="--default" state="--default" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--hover" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--active" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--disabled" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
        </div>
      </section>
      {/* PROSPECT GHOST S */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Ghost — Size S</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <ClickIcon theme="Prospect" style="--ghost" state="--default" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--ghost" state="--hover" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--ghost" state="--active" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--ghost" state="--disabled" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
        </div>
      </section>
      {/* SIZE XS */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Default — Size XS</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <ClickIcon theme="Prospect" style="--default" state="--default" size="XS" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--hover" size="XS" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--active" size="XS" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Prospect" style="--default" state="--disabled" size="XS" icon={<IconEdit />} ariaLabel="Éditer" />
        </div>
      </section>
      {/* CLIENT */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Default / Ghost — Size S</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <ClickIcon theme="Client" style="--default" state="--default" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Client" style="--default" state="--hover" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Client" style="--ghost" state="--default" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
          <ClickIcon theme="Client" style="--ghost" state="--hover" size="S" icon={<IconEdit />} ariaLabel="Éditer" />
        </div>
      </section>
    </div>
  ),
};
