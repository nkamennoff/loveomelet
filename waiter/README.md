# Loveomelet - Create Memorable Experiences Together

Loveomelet is a SaaS application for couples to engage in monthly activities together over the course of a year. Each month, a random word ("egg") is assigned, and the couple must complete an activity related to that word. The application allows for sharing thoughts, uploading photos, and creating a memory book at the end of the year.

## Project Overview

### Key Features
- Monthly word assignments from a curated list of rare words
- Two game modes: "Loving Chefs" and "Chef and Critic"
- Reflection tools for planning activities
- Photo and comment sharing
- Year-end memory book generation
- Multilingual support (English and French)

## Setup

### Prerequisites
- Node.js (v16 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

3. Install additional required packages:

```bash
# For i18n (multilingual support)
npm install @nuxtjs/i18n

# Add other required packages here
```

4. Update the nuxt.config.ts file to uncomment the i18n module

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

## Project Structure

```
loveomelet/
├── src/              # Source code directory
│   ├── assets/       # Static assets (images, fonts, etc.)
│   ├── components/   # Vue components
│   ├── composables/  # Composable functions
│   ├── layouts/      # Page layouts
│   ├── middleware/   # Route middleware
│   ├── pages/        # Application pages
│   ├── plugins/      # Vue plugins
│   ├── server/       # Server-side code
│   ├── stores/       # Pinia stores
│   └── locales/      # Translation files
├── public/           # Public static assets (remains at root level)
└── .nuxt/            # Build directory (generated)
```

## Implementation Roadmap

See the [TASKS.md](./TASKS.md) file for a detailed implementation plan.

### Phase 1: Foundation
1. Project structure and configuration
2. Authentication and user management
3. Basic UI components
4. Landing page

### Phase 2: Core Game Mechanics
1. Game setup and management
2. Monthly word assignment
3. Reflection phase tools
4. Activity documentation

### Phase 3: Enhanced Features
1. Year-end memory book
2. Documentation and help system
3. Multilingual support refinement
4. UI/UX polish

### Phase 4: Optimization and Launch
1. Testing and quality assurance
2. Performance optimization
3. Deployment setup
4. Analytics and monitoring

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## Next Steps

1. Create the locales directory and add translation files for English and French
2. Implement authentication and user management
3. Create additional pages (about, how-it-works, login, register, etc.)
4. Implement the game mechanics and user flows

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deployment options.
