
import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput } from './ChatInput';
import { fn } from '@storybook/test';

const meta = {
  title: 'Chat/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    onSendMessage: {
      action: 'message sent',
      description: 'Callback when a message is sent',
    },
  },
  args: {
    onSendMessage: fn(),
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type a message...",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Message #general",
  },
};

export const InContainer: Story = {
  args: {
    placeholder: "Type a message...",
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};
