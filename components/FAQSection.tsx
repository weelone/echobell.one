"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Language } from "@/lib/i18n";
import { FAQJsonLd } from "./JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  lang: Language;
  title?: string;
  description?: string;
  items?: FAQItem[];
}

export function FAQSection({
  lang,
  title,
  description,
  items,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqs = items || echobellFAQs[lang] || echobellFAQs.en;

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const defaultTitles = {
    en: "Frequently Asked Questions",
    zh: "常见问题",
    es: "Preguntas Frecuentes",
    fr: "Questions Fréquemment Posées",
    ja: "よくある質問",
    de: "Häufig Gestellte Fragen",
  };

  const defaultDescriptions = {
    en: "Find answers to common questions about Echobell",
    zh: "查找关于 Echobell 常见问题的答案",
    es: "Encuentra respuestas a preguntas comunes sobre Echobell",
    fr: "Trouvez des réponses aux questions courantes sur Echobell",
    ja: "Echobell に関するよくある質問の答えを見つけてください",
    de: "Finden Sie Antworten auf häufige Fragen zu Echobell",
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <FAQJsonLd faqs={faqs} />

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
          {title || defaultTitles[lang] || defaultTitles.en}
        </h2>
        {(description || defaultDescriptions[lang]) && (
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {description || defaultDescriptions[lang] || defaultDescriptions.en}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-xl overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors"
              aria-expanded={openItems.has(index)}
            >
              <span className="font-medium text-neutral-900 dark:text-neutral-100 pr-4">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
                  openItems.has(index) ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                openItems.has(index) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 pt-0">
                  <div
                    className="text-neutral-600 dark:text-neutral-400 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Common FAQs for Echobell in different languages
export const echobellFAQs: Record<Language, FAQItem[]> = {
  en: [
    {
      question: "What is Echobell?",
      answer:
        "Echobell is an iOS application that provides instant custom notifications from webhooks and emails. You can receive normal notifications, time-sensitive notifications, and even phone calls based on your triggers.",
    },
    {
      question: "How do I set up webhook notifications?",
      answer:
        "Simply create a channel in Echobell and you'll receive a unique webhook URL. Send POST requests to this URL from your applications or services to trigger notifications.",
    },
    {
      question: "Can I receive phone calls for critical alerts?",
      answer:
        "Yes! Echobell can make actual phone calls for time-sensitive or critical notifications. Configure this in your channel settings for the most important alerts.",
    },
    {
      question: "How do email triggers work?",
      answer:
        "Each channel has a unique email address. Simply send or forward emails to this address to trigger notifications. The email subject becomes the notification title.",
    },
    {
      question: "Can I share channels with my team?",
      answer:
        "Absolutely! You can subscribe to channels created by others, making it easy to share alerts across your team or organization.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, Echobell is built with privacy-first principles. Your notification data is encrypted, and you have full control over what data is shared and with whom.",
    },
    {
      question: "What platforms does Echobell support?",
      answer:
        "Currently, Echobell is available for iOS devices. You can download it from the App Store.",
    },
    {
      question: "Is there a free version?",
      answer:
        "Yes, Echobell offers a free tier with basic notification features. Premium features are available through subscription plans.",
    },
  ],
  zh: [
    {
      question: "什么是 Echobell？",
      answer:
        "Echobell 是一个 iOS 应用程序，通过 webhooks 和电子邮件提供即时自定义通知。您可以根据触发器接收普通通知、时间敏感通知，甚至电话呼叫。",
    },
    {
      question: "如何设置 webhook 通知？",
      answer:
        "只需在 Echobell 中创建一个频道，您将收到一个唯一的 webhook URL。从您的应用程序或服务向此 URL 发送 POST 请求以触发通知。",
    },
    {
      question: "我可以接收关键警报的电话呼叫吗？",
      answer:
        "是的！Echobell 可以为时间敏感或关键通知进行实际的电话呼叫。在您的频道设置中配置此功能以获取最重要的警报。",
    },
    {
      question: "电子邮件触发器如何工作？",
      answer:
        "每个频道都有一个唯一的电子邮件地址。只需向此地址发送或转发电子邮件即可触发通知。电子邮件主题成为通知标题。",
    },
    {
      question: "我可以与我的团队分享频道吗？",
      answer:
        "当然可以！您可以订阅他人创建的频道，轻松在您的团队或组织中共享警报。",
    },
    {
      question: "我的数据安全吗？",
      answer:
        "是的，Echobell 以隐私优先的原则构建。您的通知数据已加密，您可以完全控制共享哪些数据以及与谁共享。",
    },
    {
      question: "Echobell 支持哪些平台？",
      answer: "目前，Echobell 适用于 iOS 设备。您可以从 App Store 下载。",
    },
    {
      question: "有免费版本吗？",
      answer:
        "是的，Echobell 提供具有基本通知功能的免费层级。高级功能通过订阅计划提供。",
    },
  ],
  es: [
    {
      question: "¿Qué es Echobell?",
      answer:
        "Echobell es una aplicación iOS que proporciona notificaciones personalizadas instantáneas desde webhooks y emails. Puedes recibir notificaciones normales, notificaciones urgentes e incluso llamadas telefónicas basadas en tus triggers.",
    },
    {
      question: "¿Cómo configuro las notificaciones webhook?",
      answer:
        "Simplemente crea un canal en Echobell y recibirás una URL webhook única. Envía peticiones POST a esta URL desde tus aplicaciones o servicios para activar notificaciones.",
    },
    {
      question: "¿Puedo recibir llamadas telefónicas para alertas críticas?",
      answer:
        "¡Sí! Echobell puede hacer llamadas telefónicas reales para notificaciones urgentes o críticas. Configura esto en la configuración de tu canal para las alertas más importantes.",
    },
    {
      question: "¿Cómo funcionan los triggers de email?",
      answer:
        "Cada canal tiene una dirección de email única. Simplemente envía o reenvía emails a esta dirección para activar notificaciones. El asunto del email se convierte en el título de la notificación.",
    },
    {
      question: "¿Puedo compartir canales con mi equipo?",
      answer:
        "¡Por supuesto! Puedes suscribirte a canales creados por otros, facilitando compartir alertas en tu equipo u organización.",
    },
    {
      question: "¿Están seguros mis datos?",
      answer:
        "Sí, Echobell está construido con principios de privacidad primero. Tus datos de notificación están encriptados, y tienes control total sobre qué datos se comparten y con quién.",
    },
    {
      question: "¿Qué plataformas soporta Echobell?",
      answer:
        "Actualmente, Echobell está disponible para dispositivos iOS. Puedes descargarlo desde el App Store.",
    },
    {
      question: "¿Hay una versión gratuita?",
      answer:
        "Sí, Echobell ofrece un nivel gratuito con características básicas de notificación. Las características premium están disponibles a través de planes de suscripción.",
    },
  ],
  fr: [
    {
      question: "Qu'est-ce qu'Echobell ?",
      answer:
        "Echobell est une application iOS qui fournit des notifications personnalisées instantanées depuis les webhooks et emails. Vous pouvez recevoir des notifications normales, des notifications urgentes et même des appels téléphoniques basés sur vos triggers.",
    },
    {
      question: "Comment configurer les notifications webhook ?",
      answer:
        "Créez simplement un canal dans Echobell et vous recevrez une URL webhook unique. Envoyez des requêtes POST à cette URL depuis vos applications ou services pour déclencher des notifications.",
    },
    {
      question:
        "Puis-je recevoir des appels téléphoniques pour les alertes critiques ?",
      answer:
        "Oui ! Echobell peut faire de vrais appels téléphoniques pour les notifications urgentes ou critiques. Configurez cela dans les paramètres de votre canal pour les alertes les plus importantes.",
    },
    {
      question: "Comment fonctionnent les déclencheurs email ?",
      answer:
        "Chaque canal a une adresse email unique. Envoyez ou transférez simplement des emails à cette adresse pour déclencher des notifications. L'objet de l'email devient le titre de la notification.",
    },
    {
      question: "Puis-je partager des canaux avec mon équipe ?",
      answer:
        "Absolument ! Vous pouvez vous abonner aux canaux créés par d'autres, facilitant le partage d'alertes dans votre équipe ou organisation.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, Echobell est construit avec des principes de confidentialité d'abord. Vos données de notification sont chiffrées, et vous avez un contrôle total sur les données partagées et avec qui.",
    },
    {
      question: "Quelles plateformes Echobell supporte-t-il ?",
      answer:
        "Actuellement, Echobell est disponible pour les appareils iOS. Vous pouvez le télécharger depuis l'App Store.",
    },
    {
      question: "Y a-t-il une version gratuite ?",
      answer:
        "Oui, Echobell offre un niveau gratuit avec des fonctionnalités de notification de base. Les fonctionnalités premium sont disponibles via des plans d'abonnement.",
    },
  ],
  ja: [
    {
      question: "Echobell とは何ですか？",
      answer:
        "Echobell は、webhook とメールからの即座なカスタム通知を提供する iOS アプリケーションです。トリガーに基づいて、通常の通知、時間制限のある通知、さらには電話をかけることもできます。",
    },
    {
      question: "webhook 通知はどのように設定しますか？",
      answer:
        "Echobell でチャンネルを作成するだけで、一意の webhook URL を受け取ります。アプリケーションやサービスからこの URL に POST リクエストを送信して通知をトリガーします。",
    },
    {
      question: "重要なアラートで電話を受けることはできますか？",
      answer:
        "はい！Echobell は、時間制限のある通知や重要な通知に対して実際の電話をかけることができます。最も重要なアラートについては、チャンネル設定でこれを構成してください。",
    },
    {
      question: "メールトリガーはどのように動作しますか？",
      answer:
        "各チャンネルには一意のメールアドレスがあります。このアドレスにメールを送信または転送するだけで通知がトリガーされます。メールの件名が通知のタイトルになります。",
    },
    {
      question: "チームとチャンネルを共有できますか？",
      answer:
        "もちろんです！他の人が作成したチャンネルを購読でき、チームや組織全体でアラートを簡単に共有できます。",
    },
    {
      question: "データは安全ですか？",
      answer:
        "はい、Echobell はプライバシーファーストの原則で構築されています。通知データは暗号化されており、どのデータを誰と共有するかを完全に制御できます。",
    },
    {
      question: "Echobell はどのプラットフォームをサポートしていますか？",
      answer:
        "現在、Echobell は iOS デバイスで利用できます。App Store からダウンロードできます。",
    },
    {
      question: "無料版はありますか？",
      answer:
        "はい、Echobell は基本的な通知機能を持つ無料ティアを提供しています。プレミアム機能は購読プランを通じて利用できます。",
    },
  ],
  de: [
    {
      question: "Was ist Echobell?",
      answer:
        "Echobell ist eine iOS-Anwendung, die sofortige benutzerdefinierte Benachrichtigungen von Webhooks und E-Mails bereitstellt. Sie können normale Benachrichtigungen, zeitkritische Benachrichtigungen und sogar Telefonanrufe basierend auf Ihren Triggern erhalten.",
    },
    {
      question: "Wie richte ich Webhook-Benachrichtigungen ein?",
      answer:
        "Erstellen Sie einfach einen Kanal in Echobell und Sie erhalten eine eindeutige Webhook-URL. Senden Sie POST-Anfragen an diese URL von Ihren Anwendungen oder Diensten, um Benachrichtigungen auszulösen.",
    },
    {
      question: "Kann ich Telefonanrufe für kritische Warnungen erhalten?",
      answer:
        "Ja! Echobell kann echte Telefonanrufe für zeitkritische oder kritische Benachrichtigungen tätigen. Konfigurieren Sie dies in Ihren Kanaleinstellungen für die wichtigsten Warnungen.",
    },
    {
      question: "Wie funktionieren E-Mail-Trigger?",
      answer:
        "Jeder Kanal hat eine eindeutige E-Mail-Adresse. Senden oder leiten Sie einfach E-Mails an diese Adresse weiter, um Benachrichtigungen auszulösen. Der E-Mail-Betreff wird zum Benachrichtigungstitel.",
    },
    {
      question: "Kann ich Kanäle mit meinem Team teilen?",
      answer:
        "Absolut! Sie können Kanäle abonnieren, die von anderen erstellt wurden, was es einfach macht, Warnungen in Ihrem Team oder Ihrer Organisation zu teilen.",
    },
    {
      question: "Sind meine Daten sicher?",
      answer:
        "Ja, Echobell ist mit datenschutzorientierten Prinzipien gebaut. Ihre Benachrichtigungsdaten sind verschlüsselt, und Sie haben vollständige Kontrolle darüber, welche Daten geteilt werden und mit wem.",
    },
    {
      question: "Welche Plattformen unterstützt Echobell?",
      answer:
        "Derzeit ist Echobell für iOS-Geräte verfügbar. Sie können es aus dem App Store herunterladen.",
    },
    {
      question: "Gibt es eine kostenlose Version?",
      answer:
        "Ja, Echobell bietet eine kostenlose Stufe mit grundlegenden Benachrichtigungsfunktionen. Premium-Funktionen sind über Abonnementpläne verfügbar.",
    },
  ],
};
