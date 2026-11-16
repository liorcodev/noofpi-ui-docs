export interface DocsNavItem {
  title: string;
  slug: string;
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
      { title: 'Badge', slug: 'components/badge' },
      { title: 'Chip', slug: 'components/chip' },
      { title: 'Avatar', slug: 'components/avatar' },
      { title: 'User', slug: 'components/user' },
      { title: 'Progress', slug: 'components/progress' },
      { title: 'Card & Stat', slug: 'components/card' },
      { title: 'Data List', slug: 'components/data-list' },
      { title: 'Marquee', slug: 'components/marquee' }
    ]
  },
  {
    group: 'Layout',
    items: [
      { title: 'Page Header', slug: 'layout/page-header' },
      { title: 'Hero Page', slug: 'layout/hero-page' },
      { title: 'Header', slug: 'layout/header' },
      { title: 'Footer', slug: 'layout/footer' },
      { title: 'Dashboard & Sidebar', slug: 'layout/dashboard' }
    ]
  },
  {
    group: 'Data',
    items: [{ title: 'Table', slug: 'data/table' }]
  },
  {
    group: 'Forms',
    items: [
      { title: 'Form', slug: 'forms/form' },
      { title: 'Form Field & Input', slug: 'forms/input' },
      { title: 'Number Input', slug: 'forms/number-input' },
      { title: 'Pin Input', slug: 'forms/pin-input' },
      { title: 'Checkbox', slug: 'forms/checkbox' },
      { title: 'Check Button', slug: 'forms/check-button' },
      { title: 'Switch', slug: 'forms/switch' },
      { title: 'Slider', slug: 'forms/slider' },
      { title: 'Checkbox & Radio Group', slug: 'forms/groups' },
      { title: 'Select', slug: 'forms/select' },
      { title: 'Combobox', slug: 'forms/combobox' },
      { title: 'Calendar', slug: 'forms/calendar' },
      { title: 'Date Picker', slug: 'forms/date-picker' },
      { title: 'Auth Form', slug: 'forms/auth-form' }
    ]
  },
  {
    group: 'Navigation',
    items: [
      { title: 'Menu', slug: 'navigation/menu' },
      { title: 'Tabs', slug: 'navigation/tabs' },
      { title: 'Breadcrumb', slug: 'navigation/breadcrumb' },
      { title: 'Stepper', slug: 'navigation/stepper' },
      { title: 'Pagination', slug: 'navigation/pagination' },
      { title: 'Accordion', slug: 'navigation/accordion' }
    ]
  },
  {
    group: 'Feedback',
    items: [
      { title: 'Toast', slug: 'feedback/toast' },
      { title: 'Alert', slug: 'feedback/alert' },
      { title: 'Skeleton', slug: 'feedback/skeleton' },
      { title: 'Dialog', slug: 'feedback/dialog' },
      { title: 'Drawer', slug: 'feedback/drawer' },
      { title: 'Scroll To Top', slug: 'feedback/scroll-to-top' },
      { title: 'Loading Indicator', slug: 'feedback/loading-indicator' }
    ]
  },
  {
    group: 'More',
    items: [{ title: 'Development', slug: 'development' }]
  }
];
