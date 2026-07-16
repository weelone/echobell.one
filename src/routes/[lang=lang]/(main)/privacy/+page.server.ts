import { getLegalContent } from "$lib/server/content";
import { renderMdx } from "$lib/server/mdx";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { createPageMeta } from "$lib/metadata";
import { languages, localizeUrl, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

const titles: Record<Language, string> = {
  en: "Privacy Policy",
  zh: "隐私政策",
  es: "Política de Privacidad",
  fr: "Politique de Confidentialité",
  ja: "プライバシーポリシー",
  de: "Datenschutzrichtlinie",
};

const descriptions: Record<Language, string> = {
  en: "Read Echobell's Privacy Policy. Learn how we handle data for our webhook and email notification service.",
  zh: "阅读 Echobell 的隐私政策。了解我们如何处理用于 webhook 和邮件通知服务的数据。",
  es: "Lee la Política de Privacidad de Echobell. Conoce cómo gestionamos los datos para nuestro servicio de notificaciones por webhook y correo.",
  fr: "Lisez la Politique de Confidentialité d'Echobell. Découvrez comment nous traitons les données pour notre service de notifications par webhook et e-mail.",
  ja: "Echobell のプライバシーポリシーをご覧ください。Webhook とメール通知サービスにおけるデータの取り扱いについて説明します。",
  de: "Lesen Sie die Datenschutzrichtlinie von Echobell. Erfahren Sie, wie wir Daten für unseren Webhook- und E-Mail-Benachrichtigungsdienst verarbeiten.",
};

export const load: PageServerLoad = async ({ params }) => {
  const lang = params.lang as Language;
  const source = getLegalContent("privacy", lang) ?? "";
  const { html } = await renderMdx(source, { lang, cacheKey: `legal-privacy-${lang}` });

  const meta = createPageMeta({
    title: applyTitleTemplate(titles[lang] ?? titles.en, lang),
    description: descriptions[lang] ?? descriptions.en,
    canonical: localizeUrl("/privacy", lang),
  });

  return { lang, meta, html };
};
