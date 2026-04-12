import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['XS', 'S', 'M', 'L'] },
    state: { control: 'select', options: ['primary', 'secondary', 'disabled', 'error', 'warning', 'success'] },
    style: { control: 'radio', options: ['with-bg', 'without-bg'] },
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const EXAMPLE_ICON = "http://localhost:3845/assets/41f083c30d44a0e4cbdbdccd333bc8f3d67aa99a.svg";

export const Playground: Story = {
  args: {
    size: 'M',
    state: 'primary',
    style: 'with-bg',
    theme: 'Prospect',
    iconSrc: EXAMPLE_ICON
  },
};

export const StatesWithBg: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icon state="primary" iconSrc={EXAMPLE_ICON} />
      <Icon state="secondary" iconSrc={EXAMPLE_ICON} />
      <Icon state="success" iconSrc={EXAMPLE_ICON} />
      <Icon state="error" iconSrc={EXAMPLE_ICON} />
      <Icon state="warning" iconSrc={EXAMPLE_ICON} />
      <Icon state="disabled" iconSrc={EXAMPLE_ICON} />
    </div>
  ),
};

export const Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon theme="Prospect" state="primary" iconSrc={EXAMPLE_ICON} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Prospect (Rond)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon theme="Client" state="primary" iconSrc={EXAMPLE_ICON} />
        <p style={{ marginTop: 8, fontSize: 12 }}>Client (Carré arrondi)</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon size="XS" iconSrc={EXAMPLE_ICON} />
      <Icon size="S" iconSrc={EXAMPLE_ICON} />
      <Icon size="M" iconSrc={EXAMPLE_ICON} />
      <Icon size="L" iconSrc={EXAMPLE_ICON} />
    </div>
  ),
};
