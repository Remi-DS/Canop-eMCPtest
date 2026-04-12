import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ButtonPrimary } from './ButtonPrimary';

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Actions/Button Primary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'radio', options: ['--default', '--business', '--inverse'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active', '--disabled'] },
    label: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

export const Playground: Story = {
  render: (args) => {
    const [clicked, setClicked] = useState(false);
    return (
      <ButtonPrimary
        {...args}
        label={clicked ? '✓ Cliqué !' : args.label}
        onClick={() => setClicked(!clicked)}
      />
    );
  },
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    state: "--disabled",
    label: 'Primary',
    iconLeft: false,
    iconRight: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* PROSPECT DEFAULT */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Default — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* PROSPECT BUSINESS */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Business — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* PROSPECT INVERSE */}
      <section style={{ background: '#00008f', padding: 16, borderRadius: 8 }}>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#fff' }}>Prospect — Inverse — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* CLIENT DEFAULT */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Default — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* CLIENT INVERSE */}
      <section style={{ background: '#00008f', padding: 16, borderRadius: 8 }}>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#fff' }}>Client — Inverse — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* MOBILE */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonPrimary theme="Prospect" device="--mob" style="--default" state="--default" label="Prospect" />
          <ButtonPrimary theme="Client" device="--mob" style="--default" state="--default" label="Client" />
          <ButtonPrimary theme="Prospect" device="--mob" style="--business" state="--default" label="Business" />
        </div>
      </section>
    </div>
  ),
};
