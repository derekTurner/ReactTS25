# AI Agent Instructions for ReactTS25

## Project Overview
This is a React + TypeScript + Vite project that serves as a presentation viewer application. It uses React Router for navigation and ReactMarkdown for rendering markdown content.

## Key Architecture Components

### Routing Structure
- Uses React Router v7 with hash router configuration (`src/components/Routes.tsx`)
- Main routes:
  - `/` - Presentation view
  - `/tutorial` - Tutorial view
  - `*` - NoMatch (404) view

### Data Flow
1. Markdown content is loaded via route loaders from static files in `assets/`
2. Content is passed to components through `useRouteLoaderData` hook
3. ReactMarkdown component renders the content with custom styling

## Development Workflow

### Getting Started
```bash
cd react25
npm install
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server with HMR (uses `--host` for network access)
- `npm run build` - Type check and build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

### Project Conventions

#### TypeScript Configuration
- Multiple tsconfig files for different purposes:
  - `tsconfig.json` - Base configuration
  - `tsconfig.app.json` - App-specific settings
  - `tsconfig.node.json` - Node environment settings

#### Component Structure
- Functional components with TypeScript FC type
- Props interfaces defined in component files
- React.FC typing for function components

#### Important Dependencies
- React 19.1.1 with experimental React Compiler enabled
- Vite 7.x for build tooling
- Bootstrap 5.x for styling
- React Router 7.x for routing

## Integration Points
- Markdown files in `assets/` directory are key content sources
- Bootstrap styles and components for UI elements
- React Router for client-side navigation and data loading

## Common Tasks
1. Adding a new route:
   - Add route configuration in `Routes.tsx`
   - Create corresponding component in `components/`
   - Add markdown content in `assets/` if needed

2. Styling:
   - Use Bootstrap classes for layout and components
   - Custom styles in component-specific CSS files

3. Content Updates:
   - Markdown files in `assets/` directory
   - Images in corresponding `assets/*/images/` folders