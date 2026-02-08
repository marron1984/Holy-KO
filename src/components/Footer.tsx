import Link from "next/link";
import { Leaf } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-sage-700 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-gold-300" />
              <span className="font-serif font-bold text-lg">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sage-200 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif font-bold mb-4 text-gold-300">
              カテゴリ
            </h3>
            <ul className="space-y-2">
              {siteConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="text-sage-200 hover:text-white text-sm transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-bold mb-4 text-gold-300">
              インフォメーション
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sage-200 hover:text-white text-sm transition-colors"
                >
                  このサイトについて
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sage-200 hover:text-white text-sm transition-colors"
                >
                  免責事項・プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-sage-600" />

        <div className="text-center text-sage-300 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="mt-1">
            運営: NPO法人ホーリーバジル普及協会
          </p>
        </div>
      </div>
    </footer>
  );
}
