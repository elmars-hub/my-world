/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://elmarshub.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://elmarshub.vercel.app/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/projects') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
