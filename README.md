# V4 Boilerplate Alpha

A modern, full-stack monorepo template built with Next.js, NestJS, and shadcn/ui. This template provides a robust foundation for building scalable web applications with a focus on developer experience and best practices.

## Features

- 🏗️ **Monorepo Structure** - Organized with pnpm workspaces and Turborepo
- 🎨 **Modern UI** - Built with shadcn/ui and TailwindCSS
- 🌐 **Full-Stack** - Next.js frontend and NestJS backend
- 🌍 **Internationalization** - Built-in i18n support with next-intl
- 📦 **Shared Packages** - Common UI components, types, and configurations
- 🔒 **Authentication** - JWT-based auth system with role-based access control
- 🛠️ **Developer Experience** - ESLint, TypeScript, and Prettier pre-configured

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
pnpm install

# Copy and configure environment variables
cp apps/server/.env.example apps/server/.env

# Start development servers
pnpm dev
```

## Project Structure

```
├── apps/
│   ├── web/                 # Next.js frontend application
│   └── server/             # NestJS backend application
├── packages/
│   ├── ui/                 # Shared UI component library
│   ├── types/             # Shared TypeScript types
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
```

For detailed documentation about the project structure, see [project_structure.md](./project_structure.md).

## Development Workflow

### Available Scripts

```bash
# Start all applications in development mode
pnpm dev

# Build all applications and packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

### Adding UI Components

To add shadcn/ui components to your app, run the following command:

```bash
pnpm dlx shadcn@latest add [component-name] -c apps/web
```

This will place the UI components in the `packages/ui/src/components` directory.

### Using Components

Import components from the UI package:

```tsx
import { Button } from "@workspace/ui/components/ui/button"
```

## Environment Setup

### Frontend (.env)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)

```env
PORT=3001
JWT_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

## Tailwind Configuration

The project comes with a pre-configured Tailwind setup:

- `tailwind.config.ts` is configured for both the web app and UI package
- Global styles are managed in `packages/ui/src/styles/globals.css`
- Components automatically inherit the Tailwind configuration

## Authentication

The template includes a JWT-based authentication system:

- Role-based access control
- Protected API routes
- Secure session management
- Refresh token rotation

## Internationalization

Internationalization is implemented using next-intl:

- Message files in `apps/web/messages/`
- Locale switching component included
- Route-based language detection
- Type-safe translations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
