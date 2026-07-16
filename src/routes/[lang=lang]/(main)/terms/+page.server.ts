import { getLegalContent } from "$lib/server/content";
import { renderMdx } from "$lib/server/mdx";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { createPageMeta } from "$lib/metadata";
import { languages, localizeUrl, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

const titles: Record<Language, string> = {
  en: "Terms of Service",
  zh: "服务条款",
  es: "Términos de Servicio",
  fr: "Conditions d'Utilisation",
  ja: "利用規約",
  de: "Nutzungsbedingungen",
};

const descriptions: Record<Language, string> = {
  en: "Read Echobell's Terms of Service. Understand your rights and responsibilities when using our webhook and email notification service.",
  zh: "阅读 Echobell 的服务条款。了解使用我们的 webhook 和邮件通知服务时的权利和责任。",
  es: "Lee los Términos de Servicio de Echobell. Comprende tus derechos y responsabilidades al usar nuestro servicio de notificaciones webhook y email.",
  fr: "Lisez les Conditions d'Utilisation d'Echobell. Comprenez vos droits et responsabilités lors de l'utilisation de notre service de notifications webhook et email.",
  ja: "Echobell の利用規約をお読みください。当社の webhook およびメール通知サービスを使用する際の権利と責任を理解してください。",
  de: "Lesen Sie Echobells Nutzungsbedingungen. Verstehen Sie Ihre Rechte und Pflichten bei der Nutzung unseres Webhook- und E-Mail-Benachrichtigungsdienstes.",
};

export const load: PageServerLoad = async ({ params }) => {
  const lang = params.lang as Language;
  const source = getLegalContent("terms", lang) ?? "";
  const { html } = await renderMdx(source, { lang, cacheKey: `legal-terms-${lang}` });

  const meta = createPageMeta({
    title: applyTitleTemplate(titles[lang] ?? titles.en, lang),
    description: descriptions[lang] ?? descriptions.en,
    canonical: localizeUrl("/terms", lang),
  });

  return { lang, meta, html };
};
