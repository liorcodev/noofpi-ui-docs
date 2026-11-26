export interface DocsNavItem {
  title: string;
  slug: string;
  versions?: string[];
  /** ISO date (YYYY-MM-DD) the component was added; shows a "New" badge for NEW_DAYS. */
  added?: string;
}

export const NEW_DAYS = 30;

export function isNewItem(added: string | undefined, now: number): boolean {
  if (!added) return false;
  const age = now - new Date(`${added}T00:00:00Z`).getTime();
  return age < NEW_DAYS * 24 * 60 * 60 * 1000;
}

export interface DocsNavGroup {
  group: string;
  items: DocsNavItem[];
}

export const DOCS_NAV: DocsNavGroup[] = [
  {
    group: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Installation', slug: 'installation' },
      { title: 'Theming', slug: 'theming' },
      { title: 'Icons', slug: 'icons' }
    ]
  },
  {
    group: 'Components',
    items: [
      { title: 'Button', slug: 'components/button' },
      {
        title: 'Copy Button',
        slug: 'components/copy-button',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      { title: 'Badge', slug: 'components/badge' },
      { title: 'Chip', slug: 'components/chip' },
      { title: 'Avatar', slug: 'components/avatar' },
      { title: 'User', slug: 'components/user' },
      { title: 'Progress', slug: 'components/progress' },
      { title: 'Card & Stat', slug: 'components/card' },
      { title: 'Data List', slug: 'components/data-list' },
      { title: 'Marquee', slug: 'components/marquee' },
      {
        title: 'Carousel',
        slug: 'components/carousel',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Timeline',
        slug: 'components/timeline',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Separator',
        slug: 'components/separator',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'QR Code',
        slug: 'components/qr-code',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      {
        title: 'Chat',
        slug: 'components/chat',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      {
        title: 'Empty State',
        slug: 'components/empty-state',
        versions: [
          'v1.1.0',
          'v1.2.0',
          'v1.3.0',
          'v1.4.0',
          'v1.4.1',
          'v1.5.0',
          'v1.6.0',
          'v1.7.0',
          'v1.8.0',
          'v1.9.0'
        ]
      }
    ]
  },
  {
    group: 'Layout',
    items: [
      { title: 'Page Header', slug: 'layout/page-header' },
      { title: 'Hero Page', slug: 'layout/hero-page' },
      { title: 'Header', slug: 'layout/header' },
      { title: 'Footer', slug: 'layout/footer' },
      { title: 'Dashboard & Sidebar', slug: 'layout/dashboard' },
      {
        title: 'Inbox',
        slug: 'layout/inbox',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      }
    ]
  },
  {
    group: 'Backgrounds',
    items: [
      {
        title: 'Blobs',
        slug: 'backgrounds/blobs',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Shapes',
        slug: 'backgrounds/shapes',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      }
    ]
  },
  {
    group: 'Data',
    items: [
      { title: 'Table', slug: 'data/table' },
      {
        title: 'File Explorer',
        slug: 'data/file-explorer',
        versions: ['v1.4.0', 'v1.4.1', 'v1.5.0', 'v1.6.0', 'v1.7.0', 'v1.8.0', 'v1.9.0'],
        added: '2026-11-19'
      },
      {
        title: 'Kanban',
        slug: 'data/kanban',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      {
        title: 'Filter Bar',
        slug: 'data/filter-bar',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      {
        title: 'Infinite Scroll',
        slug: 'data/infinite-scroll',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      }
    ]
  },
  {
    group: 'Forms',
    items: [
      { title: 'Form', slug: 'forms/form' },
      { title: 'Form Field & Input', slug: 'forms/input' },
      {
        title: 'Textarea',
        slug: 'forms/textarea',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Tags Input',
        slug: 'forms/tags-input',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      { title: 'Number Input', slug: 'forms/number-input' },
      { title: 'Pin Input', slug: 'forms/pin-input' },
      { title: 'Checkbox', slug: 'forms/checkbox' },
      { title: 'Check Button', slug: 'forms/check-button' },
      {
        title: 'Toggle Group',
        slug: 'forms/toggle-group',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      { title: 'Switch', slug: 'forms/switch' },
      { title: 'Slider', slug: 'forms/slider' },
      {
        title: 'Rating',
        slug: 'forms/rating',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Field Array',
        slug: 'forms/field-array',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      { title: 'Checkbox & Radio Group', slug: 'forms/groups' },
      { title: 'Select', slug: 'forms/select' },
      { title: 'Combobox', slug: 'forms/combobox' },
      { title: 'Calendar', slug: 'forms/calendar' },
      { title: 'Date Picker', slug: 'forms/date-picker' },
      {
        title: 'Date Time Picker',
        slug: 'forms/date-time-picker',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      {
        title: 'Color Picker',
        slug: 'forms/color-picker',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      { title: 'Auth Form', slug: 'forms/auth-form' },
      {
        title: 'File Upload',
        slug: 'forms/file-upload',
        versions: [
          'v1.1.0',
          'v1.2.0',
          'v1.3.0',
          'v1.4.0',
          'v1.4.1',
          'v1.5.0',
          'v1.6.0',
          'v1.7.0',
          'v1.8.0',
          'v1.9.0'
        ]
      }
    ]
  },
  {
    group: 'Navigation',
    items: [
      { title: 'Menu', slug: 'navigation/menu' },
      {
        title: 'Context Menu',
        slug: 'navigation/context-menu',
        versions: ['v1.4.0', 'v1.4.1', 'v1.5.0', 'v1.6.0', 'v1.7.0', 'v1.8.0', 'v1.9.0'],
        added: '2026-11-19'
      },
      {
        title: 'Tree',
        slug: 'navigation/tree',
        versions: ['v1.4.0', 'v1.4.1', 'v1.5.0', 'v1.6.0', 'v1.7.0', 'v1.8.0', 'v1.9.0'],
        added: '2026-11-19'
      },
      { title: 'Tabs', slug: 'navigation/tabs' },
      { title: 'Breadcrumb', slug: 'navigation/breadcrumb' },
      { title: 'Stepper', slug: 'navigation/stepper' },
      { title: 'Pagination', slug: 'navigation/pagination' },
      { title: 'Accordion', slug: 'navigation/accordion' },
      {
        title: 'Collapsible',
        slug: 'navigation/collapsible',
        versions: ['v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      {
        title: 'Command Palette',
        slug: 'navigation/command-palette',
        versions: [
          'v1.1.0',
          'v1.2.0',
          'v1.3.0',
          'v1.4.0',
          'v1.4.1',
          'v1.5.0',
          'v1.6.0',
          'v1.7.0',
          'v1.8.0',
          'v1.9.0'
        ]
      }
    ]
  },
  {
    group: 'Feedback',
    items: [
      { title: 'Toast', slug: 'feedback/toast' },
      { title: 'Alert', slug: 'feedback/alert' },
      {
        title: 'Banner',
        slug: 'feedback/banner',
        versions: ['v1.9.0'],
        added: '2026-11-27'
      },
      { title: 'Skeleton', slug: 'feedback/skeleton' },
      { title: 'Dialog', slug: 'feedback/dialog' },
      { title: 'Drawer', slug: 'feedback/drawer' },
      {
        title: 'Tooltip',
        slug: 'feedback/tooltip',
        versions: [
          'v1.1.0',
          'v1.2.0',
          'v1.3.0',
          'v1.4.0',
          'v1.4.1',
          'v1.5.0',
          'v1.6.0',
          'v1.7.0',
          'v1.8.0',
          'v1.9.0'
        ]
      },
      {
        title: 'Popover',
        slug: 'feedback/popover',
        versions: ['v1.4.0', 'v1.4.1', 'v1.5.0', 'v1.6.0', 'v1.7.0', 'v1.8.0', 'v1.9.0'],
        added: '2026-11-19'
      },
      { title: 'Scroll To Top', slug: 'feedback/scroll-to-top' },
      {
        title: 'Accessibility',
        slug: 'feedback/accessibility',
        versions: ['v1.7.0', 'v1.8.0', 'v1.9.0'],
        added: '2026-11-23'
      },
      { title: 'Loading Indicator', slug: 'feedback/loading-indicator' }
    ]
  },
  {
    group: 'More',
    items: [{ title: 'Development', slug: 'development' }]
  }
];
