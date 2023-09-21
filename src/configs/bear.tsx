import type { BearData } from '~/types';

const bear: BearData[] = [
  {
    id: 'profile',
    title: 'Profile',
    icon: 'i-fa-solid:paw',
    md: [
      {
        id: 'about-me',
        title: 'About Me',
        file: 'markdown/about-me.md',
        icon: 'i-la:dragon',
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: 'github-stats',
        title: 'Github Stats',
        file: 'markdown/github-stats.md',
        icon: 'i-icon-park-outline:github',
        excerpt: 'Here are some status about my github account...'
      },
      {
        id: 'about-site',
        title: 'About This Site',
        file: 'markdown/about-site.md',
        icon: 'i-octicon:browser',
        excerpt: 'Something about this personal portfolio site...'
      }
    ]
  },
  {
    id: 'project',
    title: 'Projects',
    icon: 'i-octicon:repo',
    md: [
      {
        id: 'italic-ecommerce',
        title: 'Italic Ecommerce',
        file: 'https://raw.githubusercontent.com/linhdangquang/italic-ecommerce-fe/main/README.md',
        icon: 'i-game-icons:fish-escape',
        excerpt:
          'Ecommerce website for Italic, a fashion brand that sells luxury goods without the luxury markup.',
        link: ''
      }
    ]
  }
];

export default bear;
