import type { Meta, StoryObj } from '@storybook/react';
import { ItemPagination } from './ItemPagination';

const meta: Meta<typeof ItemPagination> = {
  title: 'Atoms/Item Pagination',
  component: ItemPagination,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'radio', options: ['default', 'active', 'disabled'] },
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ItemPagination>;

export const Playground: Story = {
  args: {
    state: 'default',
    label: '1',
    theme: 'Prospect',
  },
};

export const CompleteBar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ItemPagination state="default" label="1" />
      <ItemPagination state="active" label="2" />
      <ItemPagination state="default" label="3" />
      <ItemPagination state="disabled" label="..." />
      <ItemPagination state="default" label="10" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: 100, fontSize: 14 }}>Default</span>
        <ItemPagination state="default" label="5" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: 100, fontSize: 14 }}>Active</span>
        <ItemPagination state="active" label="5" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: 100, fontSize: 14 }}>Disabled</span>
        <ItemPagination state="disabled" label="5" />
      </div>
    </div>
  ),
};
