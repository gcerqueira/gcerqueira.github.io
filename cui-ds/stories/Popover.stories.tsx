import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../src/components/Popover';
import { Button } from '../src/components/Button';
import React from 'react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    title: 'Account Info',
    content: 'Your checking account balance is $12,450.00.',
    children: <Button variant="Secondary">Show Info</Button>,
  },
};

export const NoTitle: Story = {
  args: {
    content: 'Click outside to dismiss this popover.',
    children: <Button variant="Outline">Click me</Button>,
  },
};
