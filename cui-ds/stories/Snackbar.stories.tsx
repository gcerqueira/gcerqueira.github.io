import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from '../src/components/Snackbar';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40, minHeight: 200 }}>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          message="Transaction completed successfully"
          action={{ label: 'Undo', onClick: () => setOpen(false) }}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
