import type { Meta, StoryObj } from '@storybook/react';
import { ItemLabel } from './ItemLabel';

const meta: Meta<typeof ItemLabel> = {
  title: 'Atoms/Item Label',
  component: ItemLabel,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'radio', options: ['--default', '--modify'] },
    label: { control: 'text' },
    description: { control: 'text' },
    champObligatoire: { control: 'boolean' },
    afficheDescription: { control: 'boolean' },
    afficherLienInfo: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ItemLabel>;

export const Playground: Story = {
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    label: 'Votre âge',
    description: 'Indiquez l\'âge du conducteur principal',
    champObligatoire: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <section>
        <h3 style={{ marginBottom: 16, fontSize: 14, color: '#666' }}>Style Default (Label + Description + Info)</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <ItemLabel label="Label Desktop" description="Ceci est une description desktop" device="--desk" />
          <ItemLabel label="Label Mobile" description="Ceci est une description mobile" device="--mob" />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 16, fontSize: 14, color: '#666' }}>Style Modify (Label + Description + Bouton Modifier)</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <ItemLabel 
            style="--modify" 
            label="Date de naissance" 
            description="12/05/1985" 
            theme="Prospect" 
          />
          <ItemLabel 
            style="--modify" 
            label="Option Client" 
            description="Premium XL" 
            theme="Client" 
          />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 16, fontSize: 14, color: '#666' }}>États secondaires</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <ItemLabel label="Optionnel" champObligatoire={false} description="Pas d'astérisque ici" />
          <ItemLabel label="Sans description" afficheDescription={false} />
          <ItemLabel label="Sans lien info" afficherLienInfo={false} />
        </div>
      </section>
    </div>
  ),
};
