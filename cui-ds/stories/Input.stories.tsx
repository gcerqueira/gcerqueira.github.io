import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Label', placeholder: 'Enter text...' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const WithHelper: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', helperText: 'We will never share your email' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const ErrorState: Story = {
  args: { label: 'Password', error: true, errorMessage: 'Password is required', type: 'password' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const Disabled: Story = {
  args: { label: 'Disabled', placeholder: 'Cannot type here', disabled: true },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
