/**
 * Image URLs from free stock photo sites (Unsplash).
 * All images are free to use under the Unsplash License.
 * These will load directly in the user's browser.
 */

export const images = {
  // Hero / OG image - lush green herbs
  hero: "https://images.unsplash.com/photo-1515694346937-94d85e39a29a?w=1600&h=900&fit=crop&q=80",
  ogImage:
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=630&fit=crop&q=80",

  // Article thumbnails
  articles: {
    "holy-basil-benefits":
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=450&fit=crop&q=80",
    "organic-skincare-beginners":
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=450&fit=crop&q=80",
    "growing-holy-basil":
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=450&fit=crop&q=80",
    "holy-basil-tea-recipe":
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=450&fit=crop&q=80",
  } as Record<string, string>,

  // Author avatars
  authors: {
    tanaka:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&q=80",
    suzuki:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&q=80",
  } as Record<string, string>,
};
