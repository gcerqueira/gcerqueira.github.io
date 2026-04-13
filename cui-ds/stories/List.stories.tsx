import type { Meta, StoryObj } from '@storybook/react';
import { List } from '../src/components/List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    title: 'Account Details',
    items: [
      { label: 'Account Number', rightText: '****4521' },
      { label: 'Routing Number', rightText: '021000021' },
      { label: 'Account Type', rightText: 'Checking' },
      { label: 'Balance', rightText: '$12,450.00' },
    ],
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export const NoDividers: Story = {
  args: {
    items: [
      { label: 'Item one' },
      { label: 'Item two' },
      { label: 'Item three' },
    ],
    dividers: false,
  },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};
