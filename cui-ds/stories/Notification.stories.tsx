import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../src/components/Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: { size: { control: 'select', options: ['Small', 'Medium', 'Large'] } },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = { args: { count: 3 } };
export const HighCount: Story = { args: { count: 150 } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Notification size="Small" count={2} />
      <Notification size="Medium" count={5} />
      <Notification size="Large" count={12} />
    </div>
  ),
};
