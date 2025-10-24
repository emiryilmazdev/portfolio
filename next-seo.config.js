const canonicalUrl = 'https://emiryilmaz.dev';
const metaImage = 'https://emiryilmaz.dev/images/emir-new.png';
const metaDescription =
  'Full Stack Developer & Software Engineer specializing in React, Next.js, Node.js. Creating modern web applications with exceptional user experiences.';

const defaultSEOConfig = {
  defaultTitle: 'Emir Yılmaz - Full Stack Developer & Software Engineer',
  description: metaDescription,
  canonical: canonicalUrl,
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Emir Yılmaz, Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Development, Software Engineer, Frontend, Backend',
    },
    {
      name: 'author',
      content: 'Emir Yılmaz',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'language',
      content: 'English',
    },
    {
      name: 'revisit-after',
      content: '7 days',
    },
  ],
  openGraph: {
    url: canonicalUrl,
    title: 'Emir Yılmaz - Full Stack Developer & Software Engineer',
    description: metaDescription,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: metaImage,
        alt: 'Emir Yılmaz - Full Stack Developer',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
    site_name: 'Emir Yılmaz Portfolio',
  },
  twitter: {
    handle: '@emiryilmazdev',
    site: '@emiryilmazdev',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
  ],
};

export default defaultSEOConfig;
