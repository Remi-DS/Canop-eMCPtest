import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Atomes/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    style: { control: 'radio', options: ['--default', '--disabled'] },
    state: { control: 'radio', options: ['--unselected', '--selected'] },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveToggle = (args: any) => {
  const [currentState, setCurrentState] = useState(args.state);
  useEffect(() => { setCurrentState(args.state); }, [args.state]);
  const handleToggle = () => {
    if (args.style !== '--disabled') {
      setCurrentState((p: string) => p === '--selected' ? '--unselected' : '--selected');
    }
  };
  return <Toggle {...args} state={currentState} onClick={handleToggle} />;
};

export const Playground: Story = {
  args: { theme: 'Prospect', style: '--default', state: '--unselected' },
  render: (args) => <InteractiveToggle {...args} />,
};

export const ProspectSelected: Story =    { args: { theme: 'Prospect', style: '--default',   state: '--selected'   } };
export const ProspectDisabled: Story =    { args: { theme: 'Prospect', style: '--disabled',  state: '--unselected' } };
export const ClientUnselected: Story =    { args: { theme: 'Client',   style: '--default',   state: '--unselected' } };
export const ClientSelected: Story =      { args: { theme: 'Client',   style: '--default',   state: '--selected'   } };
export const ClientDisabledOn: Story =    { args: { theme: 'Client',   style: '--disabled',  state: '--selected'   } };
