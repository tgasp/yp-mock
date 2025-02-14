import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en': '/en',
      'fr': '/fr'
    }
  },
  pathnames: {
    '/': '/',
    '/organization': {
      'en': '/organization',
      'fr': '/organisation'
    },
    '/features': {
      'en': '/features',
      'fr': '/fonctionnalites'
    },
    '/getting-started': {
      'en': '/getting-started',
      'fr': '/guide-de-demarrage'
    },
    '/roadmap': {
      'en': '/roadmap',
      'fr': '/feuille-de-route'
    },
    '/pricing': {
      'en': '/pricing',
      'fr': '/tarifs'
    },
    '/install': {
      'en': '/install',
      'fr': '/installation'
    },
    '/signin': {
      'en': '/signin',
      'fr': '/connexion'
    },
    '/dashboard': {
      'en': '/dashboard',
      'fr': '/tableau-de-bord'
    },
    '/contact': {
      'en': '/contact',
      'fr': '/contact'
    },
    '/settings': {
      'en': '/settings',
      'fr': '/settings'
    },
    '/about': {
      'en': '/about',
      'fr': '/a-propos'
    },
    '/privacy': {
      'en': '/privacy',
      'fr': '/politique-de-confidentialite'
    },
    '/terms': {
      'en': '/terms',
      'fr': '/conditions',
    }
  }

});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = typeof routing.locales[number];

export const localesLabels: { [key in Locale]: string } = {
  'en': 'English',
  'fr': 'Français',
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);