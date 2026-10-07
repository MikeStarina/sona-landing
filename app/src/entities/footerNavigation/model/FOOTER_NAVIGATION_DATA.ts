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
        {label: 'Dictation', href: '/', hash: '#href-product'},
        {label: 'Agent', href: '/', hash: '#href-product'},
        {label: 'Memory', href: '/', hash: '#href-product'},
    ]
  },
  {
    label: 'On this page',
    links: [
        {label: 'How it works', href: '/', hash: '#href-how-it-works'},
        {label: 'Use cases', href: '/', hash: '#href-use-cases'},
        {label: 'Manifesto', href: '/', hash: '#href-manifesto'},
        {label: 'Pricing', href: '/', hash: '#href-pricing'},
        {label: 'FAQ', href: '/', hash: '#href-faq'},
    ]
  },
  {
    label: 'Company',
    links: [
        {label: 'Contact us', href: '/', hash: '#href-contacts'},
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