export interface IFooterNavigationLink {
    label: string;
    href: string;
    hash?: string;
    target?: '_blank' | '_self';
}

export interface IFooterNavigationItem {
    label: string;
    links: IFooterNavigationLink[];
}

export const FOOTER_NAVIGATION_DATA: IFooterNavigationItem[] = [
  {
    label: 'Product',
    links: [
        {label: 'Dictation', href: '/dictation', hash: '#dictation'},
        {label: 'Agent', href: '/agent', hash: '#agent'},
        {label: 'Memory', href: '/memory', hash: '#memory'},
    ]
  },
  {
    label: 'On this page',
    links: [
        {label: 'How it works', href: '/', hash: '#how-it-works'},
        {label: 'Use cases', href: '/', hash: '#use-cases'},
        {label: 'Manifesto', href: '/', hash: '#manifesto'},
        {label: 'Pricing', href: '/', hash: '#pricing'},
        {label: 'FAQ', href: '/', hash: '#faq'},
    ]
  },
  {
    label: 'Company',
    links: [
        {label: 'Contact us', href: '/', hash: '#contacts'},
    ]
  },
  {
    label: 'Legal',
    links: [
        {label: 'Privacy', href: '/privacy', target: '_blank'},
        {label: 'Security', href: '/security', target: '_blank'},
        {label: 'Terms of Use', href: '/terms', target: '_blank'},
    ]
  },
];