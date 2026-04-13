import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components/Table';
import { Badge } from '../src/components/Badge';
import React from 'react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  { key: 'date', header: 'Date', width: '120px' },
  { key: 'description', header: 'Description' },
  { key: 'amount', header: 'Amount', width: '120px' },
  { key: 'status', header: 'Status', width: '100px' },
];

const data = [
  { date: 'Apr 12', description: 'Direct Deposit - Payroll', amount: '+$3,200.00', status: <Badge status="Positive">Complete</Badge> },
  { date: 'Apr 11', description: 'Netflix Subscription', amount: '-$15.99', status: <Badge status="Positive">Complete</Badge> },
  { date: 'Apr 10', description: 'Transfer to Savings', amount: '-$500.00', status: <Badge status="Warning">Pending</Badge> },
  { date: 'Apr 09', description: 'Grocery Store', amount: '-$87.43', status: <Badge status="Positive">Complete</Badge> },
];

export const Default: Story = {
  args: { columns, data },
  decorators: [(Story) => <div style={{ width: 600 }}><Story /></div>],
};

export const Striped: Story = {
  args: { columns, data, striped: true },
  decorators: [(Story) => <div style={{ width: 600 }}><Story /></div>],
};
