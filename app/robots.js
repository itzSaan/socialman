export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/_next/",
      },
    ],
    sitemap: "https://www.socialman.in/sitemap.xml",
  };
}