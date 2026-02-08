import { Metadata } from "next";
import { Leaf, Users, MapPin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "Holy Basil Life は、NPO法人ホーリーバジル普及協会が運営するメディアサイトです。ホーリーバジルの普及活動とオーガニック美容の情報発信を行っています。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <Badge variant="gold" className="mb-3">
          About Us
        </Badge>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-sage-700 mb-4">
          このサイトについて
        </h1>
        <p className="text-sage-500 leading-relaxed">
          Holy Basil Life
          は、ホーリーバジル（トゥルシー）の素晴らしさを日本中に届けるために
          NPO法人ホーリーバジル普及協会が運営するオーガニックライフメディアです。
        </p>
      </header>

      <Separator className="my-8" />

      {/* Mission */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          私たちのミッション
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-sage-500" />
                </div>
                <h3 className="font-serif font-bold text-sage-700">
                  普及活動
                </h3>
              </div>
              <p className="text-sm text-sage-500 leading-relaxed">
                ホーリーバジルの栽培方法や活用法を広め、日本の家庭や地域にこのハーブを届ける活動を行っています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-sage-500" />
                </div>
                <h3 className="font-serif font-bold text-sage-700">
                  コミュニティ
                </h3>
              </div>
              <p className="text-sm text-sage-500 leading-relaxed">
                ワークショップや栽培イベントを通じて、ホーリーバジル愛好家のコミュニティを形成しています。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About NPO */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          運営団体
        </h2>
        <Card className="bg-beige-50">
          <CardContent className="pt-6">
            <h3 className="font-serif font-bold text-lg text-sage-700 mb-4">
              NPO法人ホーリーバジル普及協会
            </h3>
            <div className="space-y-3 text-sm text-sage-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sage-400 flex-shrink-0 mt-0.5" />
                <p>東京都（所在地はお問い合わせください）</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sage-400 flex-shrink-0 mt-0.5" />
                <p>info@holy-basil-life.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Editorial Policy */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          編集方針
        </h2>
        <div className="space-y-4 text-sage-600 leading-relaxed">
          <p>
            当サイトでは、ホーリーバジルやオーガニック美容に関する情報を、
            以下の方針に基づいて発信しています。
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-sage-700">正確性：</strong>
              科学的なエビデンスや専門家の知見に基づいた情報を掲載します。
            </li>
            <li>
              <strong className="text-sage-700">透明性：</strong>
              アフィリエイトリンクを含む記事にはその旨を明記します。
            </li>
            <li>
              <strong className="text-sage-700">独立性：</strong>
              製品レビューは公正な視点で行い、NPOの活動と収益化を適切に分離します。
            </li>
            <li>
              <strong className="text-sage-700">安全性：</strong>
              健康に関する情報は医療行為ではない旨を明記し、専門家への相談を推奨します。
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
