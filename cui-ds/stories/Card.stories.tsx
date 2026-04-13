import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#424242' }}>Card content goes here with some description text.</p>
      </div>
    ),
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export const Selected: Story = {
  args: {
    selected: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Selected Card</h3>
        <p style={{ margin: 0, color: '#424242' }}>This card is in selected state.</p>
      </div>
    ),
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};
