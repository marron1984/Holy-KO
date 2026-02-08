import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "免責事項・プライバシーポリシー",
  description: "Holy Basil Life の免責事項およびプライバシーポリシーについて。",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-sage-700 mb-4">
          免責事項・プライバシーポリシー
        </h1>
      </header>

      {/* 免責事項 */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          免責事項
        </h2>
        <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
          <p>
            当サイト「Holy Basil Life」（以下「当サイト」）に掲載されている情報は、
            一般的な情報提供を目的としたものであり、医療行為や医学的なアドバイスを
            意図するものではありません。
          </p>
          <p>
            ホーリーバジルやその他のハーブ・自然療法に関する情報は、
            伝統的な知識や研究論文に基づいていますが、個人の健康状態によって
            効果や安全性は異なります。健康上の問題がある場合や、新しいサプリメント・
            ハーブの摂取を検討される場合は、必ず医師や薬剤師にご相談ください。
          </p>
          <p>
            当サイトの情報を参考にして行った行為について、
            当サイト運営者は一切の責任を負いかねます。
          </p>
        </div>
      </section>

      <Separator className="my-8" />

      {/* アフィリエイト */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          広告・アフィリエイトについて
        </h2>
        <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
          <p>
            当サイトは、Amazon.co.jpアソシエイト、楽天アフィリエイト、
            その他のアフィリエイトプログラムに参加しています。
            当サイトの記事内にはアフィリエイトリンクが含まれている場合があり、
            リンクを経由して商品をご購入いただくと、当サイト運営者に
            紹介料が支払われることがあります。
          </p>
          <p>
            アフィリエイト収益は、NPO法人ホーリーバジル普及協会の活動費および
            当サイトの運営費に充てさせていただいております。
          </p>
          <p>
            当サイトでは、Google AdSense を利用した広告配信を行っています。
            Google AdSense では、ユーザーの興味に応じた商品やサービスの広告を
            表示するため、Cookie を使用することがあります。
          </p>
        </div>
      </section>

      <Separator className="my-8" />

      {/* プライバシーポリシー */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          プライバシーポリシー
        </h2>
        <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
          <h3 className="font-bold text-sage-700 text-base mt-6">
            個人情報の取り扱い
          </h3>
          <p>
            当サイトでは、お問い合わせの際にメールアドレス等の個人情報を
            お伺いする場合があります。取得した個人情報は、お問い合わせへの回答や
            必要な情報をご連絡するために利用し、それ以外の目的では使用いたしません。
          </p>

          <h3 className="font-bold text-sage-700 text-base mt-6">
            アクセス解析ツールについて
          </h3>
          <p>
            当サイトでは、Google アナリティクスを利用してアクセス情報を
            収集しています。このアクセス情報は匿名で収集されており、
            個人を特定するものではありません。
          </p>

          <h3 className="font-bold text-sage-700 text-base mt-6">
            Cookie（クッキー）について
          </h3>
          <p>
            当サイトでは、一部のコンテンツにおいて Cookie を利用しています。
            Cookie とは、ウェブサイトがユーザーのブラウザに送信する小さなデータファイルです。
            ブラウザの設定により、Cookie の受け取りを拒否することも可能です。
          </p>
        </div>
      </section>

      <Separator className="my-8" />

      {/* 著作権 */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-sage-700 mb-4">
          著作権について
        </h2>
        <div className="space-y-4 text-sage-600 leading-relaxed text-sm">
          <p>
            当サイトに掲載されている文章・画像等の著作物の無断転載・複製を禁じます。
            引用する場合は、引用元として当サイト名とURLを明記してください。
          </p>
        </div>
      </section>

      <div className="text-xs text-sage-400 text-center">
        <p>最終更新日: 2025年1月1日</p>
      </div>
    </div>
  );
}
