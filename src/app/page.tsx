import Link from "next/link";
import { ArrowRight, Leaf, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";
export default function HomePage() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 relative">
          <Badge variant="gold" className="mb-4 text-sm">
            NPO法人ホーリーバジル普及協会 公式メディア
          </Badge>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            聖なるハーブで整う暮らし
          </h1>
          <p className="text-lg md:text-xl text-sage-100 max-w-2xl mb-8 leading-relaxed">
            古代インドから伝わる神聖なハーブ「ホーリーバジル（トゥルシー）」。
            その癒しの力とオーガニック美容の知恵で、
            心と体を自然に整える暮らしをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link href="/category/holy-basil">
                <Leaf className="h-5 w-5 mr-2" />
                ホーリーバジルを知る
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/about">
                このサイトについて
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-7 w-7 text-sage-500" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sage-700 mb-2">
              ホーリーバジルの全て
            </h3>
            <p className="text-sm text-sage-500 leading-relaxed">
              効能・育て方・レシピまで、ホーリーバジルに関する情報を網羅的にお届けします。
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-sage-500" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sage-700 mb-2">
              オーガニック美容
            </h3>
            <p className="text-sm text-sage-500 leading-relaxed">
              厳選されたオーガニック製品のレビューと、ナチュラルスキンケアの知識をご紹介。
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-7 w-7 text-sage-500" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sage-700 mb-2">
              信頼できる情報
            </h3>
            <p className="text-sm text-sage-500 leading-relaxed">
              NPO法人の監修のもと、エビデンスに基づいた正確な情報を発信しています。
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold text-sage-700">
            最新記事
          </h2>
          <Link
            href="/category/holy-basil"
            className="text-sm text-sage-500 hover:text-sage-400 transition-colors flex items-center gap-1"
          >
            すべての記事
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {latestArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-beige-50 rounded-xl">
            <Leaf className="h-12 w-12 text-sage-300 mx-auto mb-4" />
            <p className="text-sage-500 font-serif text-lg">
              記事を準備中です
            </p>
            <p className="text-sage-400 text-sm mt-2">
              まもなくコンテンツが公開されます。
            </p>
          </div>
        )}
      </section>

      {/* NPO Section */}
      <section className="bg-beige-100 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              NPO法人について
            </Badge>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-sage-700 mb-6">
              ホーリーバジル普及協会
            </h2>
            <p className="text-sage-600 leading-relaxed mb-8">
              私たちNPO法人ホーリーバジル普及協会は、ホーリーバジル（トゥルシー）の栽培普及と、
              その素晴らしい効能を正しく伝える活動を行っています。
              地域の農家さんと連携した栽培支援や、ワークショップの開催を通じて、
              ホーリーバジルのある暮らしを日本中に広めていきます。
            </p>
            <Button variant="default" size="lg" asChild>
              <Link href="/about">
                活動内容を詳しく見る
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
