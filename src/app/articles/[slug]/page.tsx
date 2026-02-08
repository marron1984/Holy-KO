import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuthorProfile } from "@/components/AuthorProfile";
import { AdSlot } from "@/components/AdSlot";
import { ArticleJsonLd } from "@/components/JsonLd";
import {
  getArticleBySlug,
  getArticleSlugs,
  getArticleHtml,
} from "@/lib/articles";
import { authors } from "@/lib/authors";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.lastUpdated || article.date,
      images: [{ url: article.thumbnail || siteConfig.ogImage }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const htmlContent = await getArticleHtml(article.content);
  const author = authors[article.author];
  const category = siteConfig.categories.find(
    (c) => c.id === article.category
  );

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        date={article.date}
        lastUpdated={article.lastUpdated}
        authorName={author?.name || article.author}
        image={article.thumbnail}
        url={`${siteConfig.url}/articles/${article.slug}`}
      />

      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              トップに戻る
            </Link>
          </Button>
        </div>

        {/* Thumbnail Image */}
        {article.thumbnail && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-sage-100">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {category && (
            <Link href={`/category/${category.id}`}>
              <Badge variant="secondary" className="mb-3">
                {category.name}
              </Badge>
            </Link>
          )}
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-sage-700 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-sage-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>
                {format(new Date(article.date), "yyyy年M月d日", {
                  locale: ja,
                })}
              </time>
            </div>
            {article.lastUpdated && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>
                  更新:{" "}
                  {format(new Date(article.lastUpdated), "yyyy年M月d日", {
                    locale: ja,
                  })}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Author Profile (E-E-A-T) */}
        {author && (
          <AuthorProfile
            name={author.name}
            role={author.role}
            description={author.description}
            image={author.image}
          />
        )}

        {/* Ad Slot: After author profile */}
        <AdSlot slot="article-top" format="horizontal" />

        {/* Article Body */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Ad Slot: After article body */}
        <AdSlot slot="article-bottom" format="rectangle" />

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-beige-50 rounded-lg border border-sage-200 text-xs text-sage-400 leading-relaxed">
          <p>
            ※ この記事にはアフィリエイトリンクが含まれている場合があります。
            リンクを経由して商品をご購入いただくと、売上の一部がNPO法人の活動支援に充てられます。
          </p>
          <p className="mt-2">
            ※ 本記事の内容は一般的な情報提供を目的としたものであり、
            医療行為や医学的なアドバイスを意図するものではありません。
            健康上の問題がある場合は、必ず医師にご相談ください。
          </p>
        </div>
      </article>
    </>
  );
}
