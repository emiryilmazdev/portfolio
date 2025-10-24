/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://emiryilmaz.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/dashboard/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/dashboard/'],
      },
    ],
    additionalSitemaps: [
      'https://emiryilmaz.dev/sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different pages
    const customPriority = {
      '/': 1.0,
      '/about': 0.9,
      '/projects': 0.9,
      '/guestbook': 0.8,
      '/contact': 0.8,
      '/dashboard': 0.5,
    };

    const customChangefreq = {
      '/': 'daily',
      '/about': 'weekly',
      '/projects': 'weekly',
      '/guestbook': 'daily',
      '/contact': 'monthly',
      '/dashboard': 'daily',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};