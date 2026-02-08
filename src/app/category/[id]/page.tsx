import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Leaf } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = siteConfig.categories.find((c) => c.id === params.id);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = siteConfig.categories.find((c) => c.id === params.id);
  if (!category) notFound();

  const articles = getArticlesByCategory(params.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-sage-700 mb-3">
          {category.name}
        </h1>
        <p className="text-sage-500">{category.description}</p>
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-beige-50 rounded-xl">
          <Leaf className="h-12 w-12 text-sage-300 mx-auto mb-4" />
          <p className="text-sage-500 font-serif text-lg">
            このカテゴリの記事を準備中です
          </p>
          <p className="text-sage-400 text-sm mt-2">
            まもなくコンテンツが公開されます。
          </p>
        </div>
      )}
    </div>
  );
}
