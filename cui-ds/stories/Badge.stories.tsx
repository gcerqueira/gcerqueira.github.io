import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    status: { control: 'select', options: ['Positive', 'Warning', 'Negative', 'Info', 'Neutral'] },
    background: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Positive: Story = { args: { status: 'Positive', children: 'Active' } };
export const Warning: Story = { args: { status: 'Warning', children: 'Pending' } };
export const Negative: Story = { args: { status: 'Negative', children: 'Error' } };
export const Info: Story = { args: { status: 'Info', children: 'New' } };
export const Neutral: Story = { args: { status: 'Neutral', children: 'Draft' } };

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge status="Positive">Active</Badge>
      <Badge status="Warning">Pending</Badge>
      <Badge status="Negative">Error</Badge>
      <Badge status="Info">New</Badge>
      <Badge status="Neutral">Draft</Badge>
    </div>
  ),
};

export const WithoutBackground: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge status="Positive" background={false}>Active</Badge>
      <Badge status="Negative" background={false}>Error</Badge>
      <Badge status="Info" background={false}>New</Badge>
    </div>
  ),
};
