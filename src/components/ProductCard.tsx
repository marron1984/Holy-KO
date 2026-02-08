import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  amazonUrl?: string;
  rakutenUrl?: string;
  officialUrl?: string;
}

export function ProductCard({
  name,
  description,
  image,
  amazonUrl,
  rakutenUrl,
  officialUrl,
}: ProductCardProps) {
  return (
    <Card className="my-8 overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 bg-beige-50 flex items-center justify-center p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="w-full max-w-[200px] h-auto object-contain rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-xl">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sage-600 text-sm mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {amazonUrl && (
                <Button variant="amazon" asChild className="flex-1">
                  <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Amazonで見る
                  </a>
                </Button>
              )}
              {rakutenUrl && (
                <Button variant="rakuten" asChild className="flex-1">
                  <a
                    href={rakutenUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    楽天で見る
                  </a>
                </Button>
              )}
              {officialUrl && (
                <Button variant="default" asChild className="flex-1">
                  <a
                    href={officialUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    公式サイト
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
