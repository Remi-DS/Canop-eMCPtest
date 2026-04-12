import type { Meta, StoryObj } from '@storybook/react';
import { GhostButton } from './GhostButton';

const meta: Meta<typeof GhostButton> = {
  title: 'Atoms/Ghost Button',
  component: GhostButton,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active'] },
    label: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GhostButton>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--default',
    label: 'Voir plus',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Desktop</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <GhostButton theme="Prospect" device="--desk" state="--default" label="Voir plus" />
          <GhostButton theme="Prospect" device="--desk" state="--hover" label="Voir plus" />
          <GhostButton theme="Prospect" device="--desk" state="--active" label="Voir plus" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Desktop</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <GhostButton theme="Client" device="--desk" state="--default" label="Voir plus" />
          <GhostButton theme="Client" device="--desk" state="--hover" label="Voir plus" />
          <GhostButton theme="Client" device="--desk" state="--active" label="Voir plus" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <GhostButton theme="Prospect" device="--mob" state="--default" label="Voir plus" />
          <GhostButton theme="Client" device="--mob" state="--default" label="Voir plus" />
        </div>
      </section>
    </div>
  ),
};
