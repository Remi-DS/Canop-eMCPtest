import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ItemTabBar } from './ItemTabBar';

const meta: Meta<typeof ItemTabBar> = {
  title: 'Atomes/ItemTabBar',
  component: ItemTabBar,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['Prospect', 'Client'],
    },
    device: {
      control: 'select',
      options: ['desk', 'mob'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ItemTabBar>;

export const Default: Story = {
  args: {
    text: 'Mes contrats',
    theme: 'Prospect',
    device: 'desk',
    state: 'default',
  },
};

export const Selected: Story = {
  args: {
    text: 'Mes contrats',
    theme: 'Prospect',
    device: 'desk',
    state: 'selected',
  },
};

export const ClientTheme: Story = {
  args: {
    text: 'Mes contrats',
    theme: 'Client',
    device: 'desk',
    state: 'selected',
  },
};

export const Mobile: Story = {
  args: {
    text: 'Mes contrats',
    theme: 'Prospect',
    device: 'mob',
    state: 'default',
  },
};

export const TabBarGrid: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #eee' }}>
        <ItemTabBar text="Mes contrats" state="selected" />
        <ItemTabBar text="Mes devis" state="default" />
        <ItemTabBar text="Mes sinistres" state="default" />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #eee' }}>
        <ItemTabBar text="Accueil" state="selected" device="mob" />
        <ItemTabBar text="Profil" state="default" device="mob" />
        <ItemTabBar text="Aide" state="default" device="mob" />
      </div>
    </div>
  ),
};

export const LiveDemo: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = React.useState('contrats');
    
    return (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px', color: '#666' }}>Testez le clic et le survol ici :</p>
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #eee' }}>
          <ItemTabBar 
            text="Mes contrats" 
            state={selectedTab === 'contrats' ? 'selected' : 'default'} 
            onClick={() => setSelectedTab('contrats')}
          />
          <ItemTabBar 
            text="Mes devis" 
            state={selectedTab === 'devis' ? 'selected' : 'default'} 
            onClick={() => setSelectedTab('devis')}
          />
          <ItemTabBar 
            text="Mes sinistres" 
            state={selectedTab === 'sinistres' ? 'selected' : 'default'} 
            onClick={() => setSelectedTab('sinistres')}
          />
        </div>
      </div>
    );
  },
};
