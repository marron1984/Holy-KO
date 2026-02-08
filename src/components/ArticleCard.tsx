import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/types/article";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { siteConfig } from "@/lib/site-config";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = siteConfig.categories.find(
    (c) => c.id === article.category
  );

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-video bg-sage-100 relative overflow-hidden">
          {article.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sage-400">
              <span className="font-serif text-lg">Holy Basil Life</span>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            {category && (
              <Badge variant="secondary">{category.name}</Badge>
            )}
          </div>
          <CardTitle className="group-hover:text-sage-500 transition-colors line-clamp-2">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-sage-500 line-clamp-2 mb-3">
            {article.description}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-sage-400">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={article.date}>
              {format(new Date(article.date), "yyyy年M月d日", { locale: ja })}
            </time>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
