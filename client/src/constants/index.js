import { createCampaign, dashboard, logout, payment, profile, nft, message } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/org',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: 'create-campaign',
  },
  {
    name: 'community',
    imgUrl: message,
    link: 'community',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: 'profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  },
];
