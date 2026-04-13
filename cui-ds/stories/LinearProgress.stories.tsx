import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from '../src/components/LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Indeterminate: Story = {
  args: { state: 'Default' },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};

export const Determinate50: Story = {
  args: { state: 'Determinate', value: 50 },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};

export const Large: Story = {
  args: { state: 'Determinate', value: 75, size: 'Large' },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};
