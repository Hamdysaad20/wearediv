import { navigation } from './navigation';

export interface FooterItem {
  title: string;
  url: string;
  status?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterItem[];
}

export interface CompanyInfo {
  tagline: string;
  address: string;
}

export interface SocialMediaLink {
  url: string;
  title: string;
  icon: React.ComponentType;
}

export interface FooterConfig {
  sections: FooterSection[];
  companyInfo: CompanyInfo;
  socialMediaLinks: SocialMediaLink[];
}

import { YouTubeIcon } from "../components/ui/icons/YouTubeIcon";
import { GitHubIcon } from "../components/ui/icons/GitHubIcon";
import { LinkedInIcon } from "../components/ui/icons/LinkedInIcon";

const organizeFooterNavigation = (): FooterSection[] => {
  const platformAndServices = {
    title: "Products & Services",
    links: [
      ...navigation.primary[1].children?.map(child => ({
        title: child.name,
        url: child.href,
        status: false
      })) || [],
      ...navigation.primary[2].children?.map(child => ({
        title: child.name,
        url: child.href,
        status: false
      })) || []
    ]
  };

  const resourcesAndSupport = {
    title: "Resources & Support",
    links: [
      ...navigation.primary[3].children?.map(child => ({
        title: child.name,
        url: child.href,
        status: false
      })) || [],
      ...navigation.primary[5].children?.map(child => ({
        title: child.name,
        url: child.href,
        status: false
      })) || []
    ]
  };

  const company = {
    title: "Company",
    links: navigation.primary[4].children?.map(child => ({
      title: child.name,
      url: child.href,
      status: false
    })) || []
  };

  return [platformAndServices, resourcesAndSupport, company];
};

export const footerNavigation: FooterConfig = {
  companyInfo: {
    tagline: "Prepare for the future. Just say the magic word: ready for a sprint?",
    address: "USA Inc. (HQ), 30 N Gould St Ste R, Sheridan, WY 82801, USA"
  },
  socialMediaLinks: [
    {
      url: "https://www.linkedin.com/company/divzoon/",
      title: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      url: "https://x.com/wearednetwork",
      title: "X (Twitter)",
      icon: GitHubIcon,
    },
    {
      url: "https://www.instagram.com/wearednetwork/",
      title: "Instagram",
      icon: YouTubeIcon,
    },
  ],
  sections: [
    ...organizeFooterNavigation(),
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", url: "/legal/privacy-policy", status: true },
        { title: "Terms and Conditions", url: "/legal/terms-and-conditions", status: true },
        { title: "Cookie Policy", url: "/legal/cookie-policy", status: true },
      ],
    },
  ],
};