import { Author } from "@/types/article";

export const authors: Record<string, Author> = {
  tanaka: {
    name: "田中 美咲",
    role: "NPO法人ホーリーバジル普及協会 理事",
    description:
      "ホーリーバジルの栽培歴15年。NPO法人を通じて、ホーリーバジルの素晴らしさを日本中に届ける活動を行っています。",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&q=80",
  },
  suzuki: {
    name: "鈴木 花",
    role: "オーガニック美容研究家",
    description:
      "オーガニック化粧品メーカーでの10年の経験を経て、現在はフリーランスのオーガニック美容研究家として活動中。",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&q=80",
  },
};
