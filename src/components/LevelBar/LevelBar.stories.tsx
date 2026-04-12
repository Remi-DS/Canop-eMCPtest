import type { Meta, StoryObj } from '@storybook/react';
import { LevelBar } from './LevelBar';

const meta = {
  title: 'Atoms/Level Bar',
  component: LevelBar,
  tags: ['autodocs'],
  argTypes: {
    device: { control: 'radio', options: ['Desktop', 'Mobile'] },
    state: { control: 'radio', options: ['Unselected', 'Selected', 'Hovered'] },
    theme: { control: 'radio', options: ['Client', 'Prospect'] },
  },
} satisfies Meta<typeof LevelBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    device: 'Desktop',
    state: 'Selected',
    theme: 'Prospect',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Desktop (Hauteur: 16px)</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <LevelBar device="Desktop" state="Unselected" />
          <LevelBar device="Desktop" state="Hovered" />
          <LevelBar device="Desktop" state="Selected" />
        </div>
      </section>
      
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Mobile (Hauteur: 24px)</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <LevelBar device="Mobile" state="Unselected" />
          <LevelBar device="Mobile" state="Hovered" />
          <LevelBar device="Mobile" state="Selected" />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, color: '#333' }}>Exemple d'intégration (Étapes)</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Unselected" />
        </div>
      </section>
    </div>
  ),
};
