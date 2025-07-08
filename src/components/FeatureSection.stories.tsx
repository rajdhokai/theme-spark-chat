
import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection } from './FeatureSection';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Landing/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="storybook-theme">
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark" storageKey="storybook-theme">
        <div className="dark">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
