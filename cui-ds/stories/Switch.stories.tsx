import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = { args: { label: 'Notifications', checked: false } };
export const On: Story = { args: { label: 'Notifications', checked: true } };

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch label="Dark Mode" checked={checked} onChange={setChecked} />;
  },
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch label="Label Right" labelPosition="Right" checked />
      <Switch label="Label Left" labelPosition="Left" checked />
      <Switch labelPosition="None" checked />
    </div>
  ),
};
