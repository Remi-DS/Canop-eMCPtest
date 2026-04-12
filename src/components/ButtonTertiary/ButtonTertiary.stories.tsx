import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTertiary } from './ButtonTertiary';

const meta: Meta<typeof ButtonTertiary> = {
  title: 'Molecules/Actions/Button Tertiary',
  component: ButtonTertiary,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    state: { control: 'radio', options: ['--default', '--hover', '--active', '--disabled'] },
    label: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonTertiary>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--default',
    label: 'Tertiary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Prospect — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonTertiary theme="Prospect" device="--desk" state="--default" label="Default" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--hover" label="Hover" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--active" label="Active" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Client — Desktop</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonTertiary theme="Client" device="--desk" state="--default" label="Default" />
          <ButtonTertiary theme="Client" device="--desk" state="--hover" label="Hover" />
          <ButtonTertiary theme="Client" device="--desk" state="--active" label="Active" />
          <ButtonTertiary theme="Client" device="--desk" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ButtonTertiary theme="Prospect" device="--mob" state="--default" label="Prospect mob" />
          <ButtonTertiary theme="Client" device="--mob" state="--default" label="Client mob" />
        </div>
      </section>
    </div>
  ),
};
