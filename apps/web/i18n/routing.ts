import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en-US', 'fr-FR'],
  defaultLocale: 'en-US',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-US': '/en',
      'fr-FR': '/fr'
    }
  },
  pathnames: {
    '/': '/',
    '/organization': {
      'en-US': '/organization',
      'fr-FR': '/organisation'
    },
    '/features': {
      'en-US': '/features',
      'fr-FR': '/fonctionnalites'
    },
    '/getting-started': {
      'en-US': '/getting-started',
      'fr-FR': '/guide-de-demarrage'
    },
    '/roadmap': {
      'en-US': '/roadmap',
      'fr-FR': '/feuille-de-route'
    },
    '/pricing': {
      'en-US': '/pricing',
      'fr-FR': '/tarifs'
    },
    '/install': {
      'en-US': '/install',
      'fr-FR': '/installation'
    },
    '/signin': {
      'en-US': '/signin',
      'fr-FR': '/connexion'
    },
    '/dashboard': {
      'en-US': '/dashboard',
      'fr-FR': '/tableau-de-bord'
    },
    '/contact': {
      'en-US': '/contact',
      'fr-FR': '/contact'
    },
    '/settings': {
      'en-US': '/settings',
      'fr-FR': '/settings'
    },
    '/about': {
      'en-US': '/about',
      'fr-FR': '/a-propos'
    },
    '/privacy': {
      'en-US': '/privacy',
      'fr-FR': '/politique-de-confidentialite'
    },
    '/terms': {
      'en-US': '/terms',
      'fr-FR': '/conditions'
    }
  }

});


export type ValidPaths = keyof typeof routing.pathnames;

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);