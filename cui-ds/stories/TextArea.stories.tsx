import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../src/components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: { label: 'Message', placeholder: 'Type your message...' },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const WithHelper: Story = {
  args: { label: 'Notes', placeholder: 'Add notes...', helperText: 'Max 500 characters' },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const Error: Story = {
  args: { label: 'Description', error: true, errorMessage: 'Description is required' },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};
