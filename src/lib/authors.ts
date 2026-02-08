import { Author } from "@/types/article";

export const authors: Record<string, Author> = {
  tanaka: {
    name: "田中 美咲",
    role: "NPO法人ホーリーバジル普及協会 理事",
    description:
      "ホーリーバジルの栽培歴15年。NPO法人を通じて、ホーリーバジルの素晴らしさを日本中に届ける活動を行っています。",
    image: "/authors/tanaka.jpg",
  },
  suzuki: {
    name: "鈴木 花",
    role: "オーガニック美容研究家",
    description:
      "オーガニック化粧品メーカーでの10年の経験を経て、現在はフリーランスのオーガニック美容研究家として活動中。",
    image: "/authors/suzuki.jpg",
  },
};
