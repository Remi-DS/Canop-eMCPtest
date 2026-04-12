import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Radio } from './Radio';

const meta = {
  title: 'Atomes/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    state: { control: 'select', options: ['--unselected', '--hover', '--selected', '--error', '--hover_error'] },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveRadio = (args: any) => {
  const [currentState, setCurrentState] = useState(args.state);
  useEffect(() => { setCurrentState(args.state); }, [args.state]);
  const handleToggle = () => setCurrentState((p: string) => p === '--selected' ? '--unselected' : '--selected');
  return <Radio {...args} state={currentState} onClick={handleToggle} />;
};

export const Playground: Story = {
  args: { theme: 'Prospect', state: '--unselected' },
  render: (args) => <InteractiveRadio {...args} />,
};

export const Selected: Story =   { args: { theme: 'Prospect', state: '--selected' } };
export const Error: Story =      { args: { theme: 'Prospect', state: '--error' } };
export const ClientUnselected: Story = { args: { theme: 'Client', state: '--unselected' } };
export const ClientSelected: Story =   { args: { theme: 'Client', state: '--selected' } };
