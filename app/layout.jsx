import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Welcome to SocialMan | Expert Social Media Management & Digital Solutions",
    template: "%s | SocialMan",
  },
  description:
    "SocialMan is your one-stop solution for all things digital. We specialize in social media management, website development, social media marketing, content creation, and graphic design. Our goal is to help businesses grow their online presence, engage with their audience, and drive results through creative, tailored strategies. Let us take your brand to the next level!",
  keywords:
    "Social Media Management, Website Development, Social Media Marketing, Content Creation, Graphic Design, Digital Marketing, Online Presence, Brand Development, Digital Solutions, Creative Design, Business Growth, Social Media Strategy, Content Strategy, Website Design, Marketing Campaigns, Social Media Advertising, SEO Services, Web Design, Online Branding, Digital Content, Social Media Engagement",
  authors: [{ name: "SocialMan" }],
  metadataBase: new URL("https://www.socialman.in"),
  openGraph: {
    title: "Welcome to SocialMan | Expert Social Media Management & Digital Solutions",
    description:
      "SocialMan is your one-stop solution for all things digital. We specialize in social media management, website development, social media marketing, content creation, and graphic design.",
    url: "https://www.socialman.in",
    siteName: "SocialMan",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "SocialMan - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to SocialMan | Expert Social Media Management & Digital Solutions",
    description:
      "SocialMan is your one-stop solution for all things digital. We specialize in social media management, website development, social media marketing, content creation, and graphic design.",
    images: ["/meta-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/s-black.png", media: "(prefers-color-scheme: light)" },
      { url: "/s-white.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/s-black.png", media: "(prefers-color-scheme: light)" },
      { url: "/s-white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.socialman.in" />

        {/* Google Fonts */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Google Material Icons */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@200&display=optional"
          rel="stylesheet"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SocialMan",
              url: "https://www.socialman.in",
              logo: "https://www.socialman.in/s-black.png",
              description:
                "Expert social media management, website development, digital marketing, content creation, and graphic design services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                addressCountry: "IN",
                postalCode: "751010",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9090814214",
                contactType: "customer service",
                email: "hello.socialman@gmail.com",
              },
              sameAs: [
                "https://facebook.com/msocialman/",
                "https://instagram.com/socialman.officail/",
                "https://x.com/socialman.officail/",
                "https://linkedin.com/in/socialman.officail/",
              ],
            }),
          }}
        />
      </head>
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
          defer
        />
      </body>
    </html>
  );
}