import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Rect: Story = {
  args: { type: 'Rect', width: 300, height: 20 },
};

export const Circle: Story = {
  args: { type: 'Circle', width: 48, height: 48 },
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
      <Skeleton type="Circle" width={48} height={48} />
      <Skeleton width="80%" height={16} />
      <Skeleton width="100%" height={12} />
      <Skeleton width="60%" height={12} />
    </div>
  ),
};
