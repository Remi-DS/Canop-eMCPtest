import type { Meta, StoryObj } from '@storybook/react';

// Un composant fantôme pour accrocher la documentation Storybook
const FoundationsDummy = () => <div />;

const meta: Meta<typeof FoundationsDummy> = {
  title: 'Foundations/Tokens & Couleurs',
  component: FoundationsDummy,
};

export default meta;
type Story = StoryObj<typeof FoundationsDummy>;

// Helper pour afficher une couleur
const ColorBox = ({ name, color, varName }: { name: string; color: string; varName: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: 140, marginBottom: 24 }}>
    <div style={{ height: 80, backgroundColor: `var(${varName})`, borderRadius: 8, border: '1px solid #e0e0e0', marginBottom: 8 }} />
    <span style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>{name}</span>
    <span style={{ fontSize: 12, color: '#666', fontFamily: 'monospace', marginTop: 4 }}>{color}</span>
    <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace', wordBreak: 'break-all', marginTop: 4 }}>{varName}</span>
  </div>
);

// Helper pour la typo
const TypeSample = ({ weight, label }: { weight: string; label: string }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontWeight: weight, fontSize: 32, color: '#333', fontFamily: 'var(--font-family-primary)' }}>
      La proximité et la prévoyance
    </div>
    <div style={{ fontSize: 14, color: '#666', marginTop: 8 }}>
      Source Sans Pro - {label} ({weight})
    </div>
  </div>
);

export const VueDEnsemble: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-primary)', padding: '0 20px', maxWidth: 900 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8, color: '#00008f' }}>Fondations du Design System</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 48 }}>
        Toutes les variables CSS fondamentales (Couleurs et Typographie) de l'application.
      </p>

      <h2 style={{ fontSize: 24, borderBottom: '2px solid #eee', paddingBottom: 8, marginBottom: 24 }}>1. Couleurs Primaires (AXA)</h2>
      
      <h3 style={{ fontSize: 18, color: '#666', marginBottom: 16 }}>AXA Bleu (Thèmes Prospect & Client)</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        <ColorBox name="Base" color="#00008f" varName="--color-primary-base" />
        <ColorBox name="Hover" color="#000072" varName="--color-primary-hover" />
        <ColorBox name="Active" color="#3333a5" varName="--color-primary-active" />
      </div>

      <h3 style={{ fontSize: 18, color: '#666', marginBottom: 16 }}>AXA Business (Urgence / Vente)</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <ColorBox name="Base" color="#c94e14" varName="--color-business-base" />
        <ColorBox name="Hover" color="#bf4a13" varName="--color-business-hover" />
        <ColorBox name="Active" color="#d47143" varName="--color-business-active" />
      </div>

      <h2 style={{ fontSize: 24, borderBottom: '2px solid #eee', paddingBottom: 8, marginBottom: 24 }}>2. Neutres & Gris</h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        <ColorBox name="White" color="#ffffff" varName="--color-neutral-white" />
        <ColorBox name="Black" color="#000000" varName="--color-neutral-black" />
        <ColorBox name="Main Text" color="#333333" varName="--color-text-main" />
      </div>
      
      <h3 style={{ fontSize: 18, color: '#666', marginBottom: 16 }}>Palette de Gris (Fonds, bordures, états inactifs)</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <ColorBox name="Gray 100" color="#f5f5f5" varName="--color-gray-100" />
        <ColorBox name="Gray 200" color="#ebebf6" varName="--color-gray-200" />
        <ColorBox name="Gray 300" color="#e5e5f4" varName="--color-gray-300" />
        <ColorBox name="Gray 400" color="#e2e2e2" varName="--color-gray-400" />
        <ColorBox name="Gray 500" color="#cccccc" varName="--color-gray-500" />
        <ColorBox name="Gray 600" color="#999999" varName="--color-gray-600" />
      </div>

      <h2 style={{ fontSize: 24, borderBottom: '2px solid #eee', paddingBottom: 8, marginBottom: 24 }}>3. Typographie (Source Sans Pro)</h2>
      <TypeSample weight="400" label="Regular" />
      <TypeSample weight="600" label="SemiBold (Boutons/Labels)" />
      <TypeSample weight="700" label="Bold (Titres)" />
    </div>
  ),
};
