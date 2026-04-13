import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../src/components/Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    appearance: { control: 'select', options: ['Text', 'LinkButton Primary', 'LinkButton Secondary', 'LinkButton Outline'] },
    size: { control: 'select', options: ['Medium', 'Large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const TextLink: Story = { args: { children: 'Learn more', appearance: 'Text', href: '#' } };
export const ButtonPrimary: Story = { args: { children: 'Get Started', appearance: 'LinkButton Primary', href: '#' } };
export const ButtonSecondary: Story = { args: { children: 'Learn More', appearance: 'LinkButton Secondary', href: '#' } };
export const ButtonOutline: Story = { args: { children: 'Sign Up', appearance: 'LinkButton Outline', href: '#' } };
export const Disabled: Story = { args: { children: 'Disabled Link', disabled: true, href: '#' } };
