import type { WebsitesData } from '~/types';

const websites: WebsitesData = {
  favorites: {
    title: 'SNS Links',
    sites: [
      {
        id: 'my-github',
        title: 'Github',
        img: 'img/sites/github.svg',
        link: 'https://github.com/linhdangquang'
      },
      {
        id: 'my-linkedin',
        title: 'Linkedin',
        img: 'img/sites/linkedin.svg',
        link: 'https://www.linkedin.com/in/linhdangquang'
      },
      {
        id: 'my-email',
        title: 'Email',
        img: 'img/sites/gmail.svg',
        link: 'mailto:dangquanglinh48@gmail.com'
      }
    ]
  },
  freq: {
    title: 'Frequently Visited',
    sites: [
      {
        id: 'github',
        title: 'Github',
        img: 'img/sites/github.svg',
        link: 'https://github.com/'
      },
      {
        id: 'leetcode',
        title: 'LeetCode',
        img: 'img/sites/leetcode.svg',
        link: 'https://leetcode.com/'
      },
      {
        id: 'reddit',
        title: 'Reddit',
        img: 'img/sites/reddit.svg',
        link: 'https://www.reddit.com/'
      },
      {
        id: 'hacker-news',
        title: 'Hacker News',
        img: 'img/sites/hacker.svg',
        link: 'https://news.ycombinator.com/'
      },
      {
        id: 'oh-my-cv',
        title: 'OhMyCV',
        img: 'https://ohmycv.app/apple-touch-icon.png',
        link: 'https://ohmycv.app/'
      }
    ]
  }
};

export default websites;
