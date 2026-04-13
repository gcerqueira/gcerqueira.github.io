import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src/components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = { args: { label: 'Option A', checked: false } };
export const Checked: Story = { args: { label: 'Option A', checked: true } };
export const Disabled: Story = { args: { label: 'Disabled', checked: false, disabled: true } };

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Radio label="Option A" name="group" value="a" checked={value === 'a'} onChange={setValue} />
        <Radio label="Option B" name="group" value="b" checked={value === 'b'} onChange={setValue} />
        <Radio label="Option C" name="group" value="c" checked={value === 'c'} onChange={setValue} />
      </div>
    );
  },
};
