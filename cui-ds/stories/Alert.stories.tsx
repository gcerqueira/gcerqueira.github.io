import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Account Updated',
    description: 'Your account information has been successfully updated.',
  },
  decorators: [(Story) => <div style={{ width: 480 }}><Story /></div>],
};

export const WithActions: Story = {
  args: {
    title: 'Confirm Transfer',
    description: 'Are you sure you want to transfer $500 to Savings?',
    primaryAction: { label: 'Confirm', onClick: () => {} },
    secondaryAction: { label: 'Cancel', onClick: () => {} },
  },
  decorators: [(Story) => <div style={{ width: 480 }}><Story /></div>],
};
