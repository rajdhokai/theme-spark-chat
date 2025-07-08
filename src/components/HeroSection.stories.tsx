
import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Landing/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="storybook-theme">
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="storybook-theme">
          <div className="dark">
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
};
