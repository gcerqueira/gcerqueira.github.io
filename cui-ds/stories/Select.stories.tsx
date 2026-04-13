import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/components/Select';

const options = [
  { value: 'checking', label: 'Checking Account' },
  { value: 'savings', label: 'Savings Account' },
  { value: 'money_market', label: 'Money Market' },
  { value: 'cd', label: 'Certificate of Deposit' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { label: 'Account Type', options },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const WithError: Story = {
  args: { label: 'Account Type', options, error: true, errorMessage: 'Please select an account type' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const Disabled: Story = {
  args: { label: 'Account Type', options, disabled: true },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
