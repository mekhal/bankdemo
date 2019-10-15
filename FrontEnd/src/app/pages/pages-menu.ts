import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Access Control',
    icon: 'keypad',
    children: [
      {
        title: 'User',
        icon: 'people',
        link: '/pages/access-control/user',
      }
    ],
  },
  {
    title: 'Transaction',
    icon: 'layout-outline',
    children: [
      {
        title: 'Deposit',
        icon: 'trending-up',
        link: '/pages/transaction/deposit',
      },
      {
        title: 'Transfer',
        icon: 'swap',
        link: '/pages/transaction/transfer',
      }
    ],
  }
];
