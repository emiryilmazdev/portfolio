import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsDiscord as DiscordIcon,
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import {
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },

  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  {
    title: 'Guestbook',
    href: '/guestbook',
    icon: <ChatIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Chat',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:emmiryilmaz@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/emiryilmazdev',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/emir-y-17669a33a/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: LinkedIn',
    className: '!bg-blue-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Discord',
    href: '#', // Discord linkini sonra ekleyeceksin
    icon: <DiscordIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Discord',
    className: '!bg-indigo-500 border border dark:border-neutral-700',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: 'https://cloud.umami.is/share/Ho1t8IqLooblTUId',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
