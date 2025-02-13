# Project Structure Documentation

## Overview

This is a monorepo project using pnpm workspaces, containing a Next.js web application, NestJS backend server, and shared packages for UI components, types, and configurations. The project is built with TypeScript and follows modern development practices.

## Repository Structure

```
├── apps/
│   ├── web/                 # Next.js frontend application
│   └── server/             # NestJS backend application
├── packages/
│   ├── ui/                 # Shared UI component library
│   ├── types/             # Shared TypeScript types/interfaces
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
```

## Technology Stack

### Core Technologies
- **Package Manager**: pnpm with workspaces
- **Monorepo Management**: Turborepo
- **Language**: TypeScript
- **Frontend**: Next.js 14 (App Router)
- **Backend**: NestJS
- **UI Components**: Shadcn UI
- **Styling**: TailwindCSS
- **Internationalization**: Next-Intl

### Development Tools
- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript for static type checking
- **Build System**: Turborepo for optimized builds and task running

## Applications

### Web Application (apps/web)
- Built with Next.js 14 using the App Router
- Implements internationalization using next-intl
- Uses Shadcn UI components
- Follows a feature-based directory structure:
  ```
  ├── app/                  # Next.js app directory
  ├── components/          # Shared components
  ├── hooks/              # Custom React hooks
  ├── lib/                # Utility functions
  ├── messages/          # i18n translation files
  ```

### Server Application (apps/server)
- Built with NestJS
- Implements authentication with JWT strategy
- Features a modular architecture:
  ```
  ├── src/
  │   ├── auth/           # Authentication module
  │   ├── users/         # Users module
  │   ├── app.module.ts  # Root application module
  │   └── main.ts        # Application entry point
  ```

## Shared Packages

### UI Library (packages/ui)
- Built with React and TypeScript
- Uses Shadcn UI as the component foundation
- Implements TailwindCSS for styling
- Structure:
  ```
  ├── src/
  │   ├── components/    # React components
  │   ├── hooks/        # Shared React hooks
  │   ├── lib/          # Utility functions
  │   └── styles/       # Global styles and TailwindCSS configuration
  ```

### Types Package (packages/types)
- Contains shared TypeScript types and interfaces
- Includes DTOs for API communication
- Structure:
  ```
  ├── src/
  │   ├── dto/          # Data Transfer Objects
  │   └── index.ts      # Type exports
  ```

### Configuration Packages
- **typescript-config**: Shared TypeScript configurations for different project types
- **eslint-config**: Shared ESLint rules and configurations

## Type Definitions

Types are managed in two main ways:

1. **Shared Types Package**:
   - Located in `packages/types`
   - Contains shared interfaces, types, and DTOs
   - Used by both frontend and backend applications

2. **Local Types**:
   - Application-specific types are defined within their respective apps
   - Frontend types in `apps/web/types`
   - Backend types in `apps/server/src/**/entities`

## UI Components

The UI system follows a component-driven development approach:

1. **Base Components**:
   - Located in `packages/ui/src/components`
   - Built on top of Shadcn UI
   - Customized using TailwindCSS
   - Fully typed with TypeScript

2. **Application Components**:
   - Located in `apps/web/components`
   - Use base components from the UI package
   - Implement specific business logic and layouts

## Development Workflow

1. **Package Management**:
   - Use pnpm for package management
   - Workspaces defined in `pnpm-workspace.yaml`
   - Dependencies managed at root level

2. **Build Process**:
   - Turborepo manages the build pipeline
   - Configured in `turbo.json`
   - Optimizes builds through caching

3. **Code Quality**:
   - Shared ESLint configurations ensure consistent code style
   - TypeScript configurations provide type safety
   - Pre-configured development tools through shared packages