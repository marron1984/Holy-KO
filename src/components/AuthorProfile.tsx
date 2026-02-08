import Image from "next/image";
import { User } from "lucide-react";

interface AuthorProfileProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export function AuthorProfile({
  name,
  role,
  description,
  image,
}: AuthorProfileProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-beige-50 rounded-xl border border-sage-200 my-6">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-sage-200 flex items-center justify-center overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="56px"
            className="object-cover"
          />
        ) : (
          <User className="h-7 w-7 text-sage-500" />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-serif font-bold text-sage-700">{name}</span>
          <span className="text-xs bg-sage-100 text-sage-600 px-2 py-0.5 rounded-full">
            {role}
          </span>
        </div>
        <p className="text-sm text-sage-500 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
