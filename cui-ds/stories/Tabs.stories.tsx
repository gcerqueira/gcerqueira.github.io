import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <div style={{ width: 400 }}>
        <Tabs
          tabs={[
            { label: 'Overview', value: 'overview' },
            { label: 'Transactions', value: 'transactions' },
            { label: 'Settings', value: 'settings' },
          ]}
          activeTab={active}
          onChange={setActive}
        />
      </div>
    );
  },
};
