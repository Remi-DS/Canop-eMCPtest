import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Prospect', 'Client'] },
    device: { control: 'radio', options: ['--desk', '--mob'] },
    style: { control: 'radio', options: ['--default', '--vertical'] },
    currentStep: { control: 'number', min: 0, max: 4 },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const defaultSteps = [
  { id: '1', label: 'Personal Info' },
  { id: '2', label: 'Address' },
  { id: '3', label: 'Payment' },
  { id: '4', label: 'Review' },
  { id: '5', label: 'Confirmation' },
];

export const Playground: Story = {
  render: (args) => {
    const [current, setCurrent] = useState(args.currentStep ?? 0);
    return (
      <Stepper
        {...args}
        currentStep={current}
        onStepClick={(index) => setCurrent(index)}
      />
    );
  },
  args: {
    steps: defaultSteps,
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    currentStep: 0,
  },
};

export const Horizontal: Story = {
  args: {
    steps: defaultSteps,
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    currentStep: 2,
  },
};

export const Vertical: Story = {
  args: {
    steps: defaultSteps,
    theme: 'Prospect',
    device: '--desk',
    style: '--vertical',
    currentStep: 1,
  },
};

export const ClientTheme: Story = {
  args: {
    steps: defaultSteps,
    theme: 'Client',
    device: '--desk',
    style: '--default',
    currentStep: 3,
  },
};

export const Mobile: Story = {
  args: {
    steps: defaultSteps,
    theme: 'Prospect',
    device: '--mob',
    style: '--default',
    currentStep: 1,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Completed: Story = {
  args: {
    steps: defaultSteps,
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    currentStep: 4,
  },
};
