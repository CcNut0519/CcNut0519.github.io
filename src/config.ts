import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'CcNut`s Blog',
  subtitle: '分享知识，记录生活',
  lang: 'zh-CN',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',
    //   external: true,
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://image-host.pages.dev/learn/2024-04-08-logo.jpg',
  name: 'CcNut',
  bio: '一名北邮学生的个人小站',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561198363042775/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/CcNut0519',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
