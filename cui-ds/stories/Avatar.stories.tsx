import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = { args: { initials: 'GC', size: 48 } };
export const Small: Story = { args: { initials: 'AB', size: 32 } };
export const Large: Story = { args: { initials: 'XY', size: 64 } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar initials="SM" size={24} />
      <Avatar initials="MD" size={32} />
      <Avatar initials="LG" size={48} />
      <Avatar initials="XL" size={64} />
    </div>
  ),
};
