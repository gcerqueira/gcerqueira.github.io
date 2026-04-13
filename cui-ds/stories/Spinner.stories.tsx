import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../src/components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: { size: { control: 'select', options: ['Small', 'Medium', 'Large'] } },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Small: Story = { args: { size: 'Small' } };
export const Medium: Story = { args: { size: 'Medium' } };
export const Large: Story = { args: { size: 'Large' } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Spinner size="Small" />
      <Spinner size="Medium" />
      <Spinner size="Large" />
    </div>
  ),
};
