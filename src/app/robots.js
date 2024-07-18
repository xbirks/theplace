export default function robots() {
    return {
      rules: [
        {
          userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
          allow: ['/'],
        },
      ],
      sitemap: 'https://placevlc.com/sitemap.xml',
    }
  }