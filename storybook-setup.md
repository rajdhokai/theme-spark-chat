
# Storybook Setup

To complete the Storybook setup, you need to add these scripts to your package.json:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

## Running Storybook

After adding the scripts, you can run:

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Components with Stories

The following components now have Storybook stories:

- **ChatMessage** - Different message types (user/other, with avatars, long messages)
- **ChatInput** - Input component with different placeholders
- **ThemeToggle** - Theme switching component
- **Navigation** - Main navigation bar
- **HeroSection** - Landing page hero section
- **FeatureSection** - Landing page features

## Features Included

- **Theme Support** - All stories support light/dark mode
- **Interactive Controls** - Modify component props in real-time
- **Auto-documentation** - Generated docs from TypeScript types
- **Responsive Design** - Components adapt to different screen sizes

You can now build and document your component library systematically with Storybook!
