import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'radio', options: ['Underline', 'Default', 'Inverse'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active'] },
    label: { control: 'text' },
    href: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: 'Underline',
    state: '--default',
    label: 'En savoir plus',
    iconRight: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* UNDERLINE */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Underline — Prospect</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link theme="Prospect" device="--desk" style="Underline" state="--default" label="Default" />
          <Link theme="Prospect" device="--desk" style="Underline" state="--hover" label="Hover" />
          <Link theme="Prospect" device="--desk" style="Underline" state="--active" label="Active" />
        </div>
      </section>
      {/* DEFAULT */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Default — Prospect (avec icône)</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link theme="Prospect" device="--desk" style="Default" state="--default" label="Voir plus" iconRight />
          <Link theme="Prospect" device="--desk" style="Default" state="--hover" label="Voir plus" iconRight />
          <Link theme="Prospect" device="--desk" style="Default" state="--active" label="Voir plus" iconRight />
        </div>
      </section>
      {/* INVERSE */}
      <section style={{ background: '#00008f', padding: 16, borderRadius: 8 }}>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#fff' }}>Inverse — Prospect</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link theme="Prospect" device="--desk" style="Inverse" state="--default" label="Lien inverse" />
          <Link theme="Prospect" device="--desk" style="Inverse" state="--hover" label="Hover" />
          <Link theme="Prospect" device="--desk" style="Inverse" state="--active" label="Active" />
        </div>
      </section>
      {/* CLIENT */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Underline / Default</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link theme="Client" device="--desk" style="Underline" state="--default" label="Lien Client" />
          <Link theme="Client" device="--desk" style="Default" state="--default" label="Avec icône" iconRight />
        </div>
      </section>
      {/* MOBILE */}
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link theme="Prospect" device="--mob" style="Underline" state="--default" label="Mobile Underline" />
          <Link theme="Prospect" device="--mob" style="Default" state="--default" label="Mobile Default" iconRight />
        </div>
      </section>
    </div>
  ),
};
