import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from './ButtonSecondary';

const meta: Meta<typeof ButtonSecondary> = {
  title: 'Molecules/Actions/Button Secondary',
  component: ButtonSecondary,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'radio', options: ['--default', '--inverse'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active', '--disabled'] },
    label: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSecondary>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    state: '--default',
    label: 'Secondary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Default — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section style={{ background: '#00008f', padding: 16, borderRadius: 8 }}>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#fff' }}>Prospect — Inverse — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Default — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile — Prospect / Client</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonSecondary theme="Prospect" device="--mob" style="--default" state="--default" label="Prospect mob" />
          <ButtonSecondary theme="Client" device="--mob" style="--default" state="--default" label="Client mob" />
        </div>
      </section>
    </div>
  ),
};
