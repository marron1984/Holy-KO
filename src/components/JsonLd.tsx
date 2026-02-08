import { siteConfig } from "@/lib/site-config";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  authorName: string;
  image?: string;
  url: string;
}

export function ArticleJsonLd({
  title,
  description,
  date,
  lastUpdated,
  authorName,
  image,
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${siteConfig.url}/og-image.jpg`,
    datePublished: date,
    dateModified: lastUpdated || date,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: "NPO法人ホーリーバジル普及協会",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
