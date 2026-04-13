import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: 'Accept terms', checked: false } };
export const Checked: Story = { args: { label: 'Accept terms', checked: true } };
export const Disabled: Story = { args: { label: 'Disabled option', checked: false, disabled: true } };

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="Toggle me" checked={checked} onChange={setChecked} />;
  },
};
