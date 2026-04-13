import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '../src/components/Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    style: { control: 'select', options: ['Neutral', 'Positive', 'Warning', 'Negative', 'Info', 'Brand'] },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: { style: 'Info', children: 'Your session will expire in 5 minutes.' },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
      <Callout style="Neutral">Neutral callout message</Callout>
      <Callout style="Positive">Success! Your changes have been saved.</Callout>
      <Callout style="Warning">Warning: Low account balance.</Callout>
      <Callout style="Negative">Error: Transaction failed.</Callout>
      <Callout style="Info">Info: New features available.</Callout>
      <Callout style="Brand">Brand: Special announcement.</Callout>
    </div>
  ),
};
