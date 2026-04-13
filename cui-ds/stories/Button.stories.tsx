import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['Primary', 'Secondary', 'Text', 'Outline', 'Icon'] },
    size: { control: 'select', options: ['Medium', 'Large'] },
    buttonStyle: { control: 'select', options: ['Brand', 'White'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Button', variant: 'Primary' },
};

export const Secondary: Story = {
  args: { children: 'Button', variant: 'Secondary' },
};

export const Text: Story = {
  args: { children: 'Button', variant: 'Text' },
};

export const Outline: Story = {
  args: { children: 'Button', variant: 'Outline' },
};

export const Large: Story = {
  args: { children: 'Button', variant: 'Primary', size: 'Large' },
};

export const Disabled: Story = {
  args: { children: 'Button', variant: 'Primary', disabled: true },
};

export const WhiteStyle: Story = {
  args: { children: 'Button', variant: 'Primary', buttonStyle: 'White' },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [(Story) => <div style={{ background: '#7146b5', padding: 40 }}><Story /></div>],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['Primary', 'Secondary', 'Text', 'Outline'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant={variant}>Default</Button>
          <Button variant={variant} disabled>Disabled</Button>
          <Button variant={variant} size="Large">Large</Button>
        </div>
      ))}
    </div>
  ),
};
