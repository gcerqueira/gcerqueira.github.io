import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../src/components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  decorators: [(Story) => (
    <div style={{ width: 400 }}>
      <p>Content above</p>
      <Story />
      <p>Content below</p>
    </div>
  )],
};
