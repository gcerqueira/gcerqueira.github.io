import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../src/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Inactive: Story = { args: { children: 'Checking' } };
export const Active: Story = { args: { children: 'Checking', active: true } };
export const WithDropdown: Story = { args: { children: 'Filter', dropdown: true } };

export const ChipGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip active>All</Chip>
      <Chip>Checking</Chip>
      <Chip>Savings</Chip>
      <Chip>Loans</Chip>
    </div>
  ),
};
