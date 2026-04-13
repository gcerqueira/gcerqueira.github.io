import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../src/components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Accounts', href: '#' },
      { label: 'Checking' },
    ],
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Accounts', href: '#' },
      { label: 'Checking', href: '#' },
      { label: 'Details' },
    ],
  },
};
