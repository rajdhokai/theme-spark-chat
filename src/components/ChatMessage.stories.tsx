
import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from './ChatMessage';

const meta = {
  title: 'Chat/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    isUser: {
      control: 'boolean',
      description: 'Whether the message is from the current user',
    },
    message: {
      control: 'text',
      description: 'The message content',
    },
    timestamp: {
      control: 'text',
      description: 'Message timestamp',
    },
    username: {
      control: 'text',
      description: 'Username (for non-user messages)',
    },
    avatar: {
      control: 'text',
      description: 'Avatar URL',
    },
  },
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    message: "Hey everyone! Welcome to the general channel 👋",
    isUser: true,
    timestamp: "10:30 AM",
  },
};

export const OtherUserMessage: Story = {
  args: {
    message: "Thanks for the warm welcome! Excited to be here.",
    isUser: false,
    timestamp: "10:32 AM",
    username: "John Doe",
  },
};

export const LongMessage: Story = {
  args: {
    message: "This is a much longer message to demonstrate how the chat component handles text that spans multiple lines. It should wrap nicely and maintain proper spacing and alignment.",
    isUser: false,
    timestamp: "10:35 AM",
    username: "Jane Smith",
  },
};

export const WithEmoji: Story = {
  args: {
    message: "Great work on the new feature! 🎉🚀 Looking forward to testing it out.",
    isUser: true,
    timestamp: "10:37 AM",
  },
};
