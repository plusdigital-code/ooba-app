import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/starter',
    title: 'Listings',
    icon: 'fas fa-home',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/agent',
    title: 'Agent',
    icon: 'fas fa-id-badge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/contact',
    title: 'Leads',
    icon: 'fas fa-id-card',
    class: '',
    extralink: false,
    submenu: []
  }
];
