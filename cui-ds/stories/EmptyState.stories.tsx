import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../src/components/EmptyState';
import { Button } from '../src/components/Button';
import React from 'react';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Element: Story = {
  args: {
    title: 'No transactions found',
    description: 'There are no transactions matching your current filters.',
  },
};

export const WithAction: Story = {
  args: {
    type: 'Page',
    title: 'No accounts yet',
    description: 'Get started by opening your first account.',
    action: <Button>Open Account</Button>,
  },
};
