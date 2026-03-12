import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { FeatureHero } from "@/components/features";
import { FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";
import { APP_STORE_LINK } from "@/constants";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Language, localizeUrl } from "@/lib/i18n";

const supportedLanguages = ["en", "zh", "es", "fr", "ja", "de"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

type PageCopy = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  breadcrumb: string;
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  summary: {
    title: string;
    body: string;
  };
  stackTitle: string;
  stackDescription: string;
  stackCards: Array<{
    title: string;
    description: string;
  }>;
  stepsTitle: string;
  stepsDescription: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  reasonsTitle: string;
  reasons: Array<{
    title: string;
    description: string;
  }>;
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedTitle: string;
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const copy: Record<SupportedLanguage, PageCopy> = {
  en: {
    meta: {
      title: "Server Down Phone Call Alerts for iPhone",
      description:
        "Need a server down phone call alert? Use Echobell to turn Grafana, Prometheus, UptimeRobot, and webhook incidents into urgent iPhone call notifications.",
      keywords: [
        "server down phone call alert",
        "uptime monitor phone call alert",
        "webhook to phone call",
        "devops mobile alerting",
        "iphone incident alerts",
      ],
    },
    breadcrumb: "Server Down Phone Call Alerts",
    hero: {
      badge: "DevOps Use Case",
      title: "Call the right phone when a server goes down",
      description:
        "Emails and ordinary pushes are too easy to miss during sleep or deep work. Echobell turns server-down events into iPhone phone call alerts so someone notices the outage immediately.",
    },
    summary: {
      title: "The core idea",
      body: "Keep your existing monitoring stack. Change the delivery layer. Grafana, Prometheus, UptimeRobot, Upptime, or any webhook-capable service can feed Echobell and escalate only the incidents that deserve a real call.",
    },
    stackTitle: "Recommended stack",
    stackDescription:
      "Most teams do not need a new monitoring product. They need a faster path from incident detection to human attention.",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "Route high-severity alerts into an Echobell webhook and reserve call alerts for production-impacting incidents.",
      },
      {
        title: "Grafana Alerting",
        description:
          "Use a webhook contact point, include service and metric context in the payload, and send critical policies to a call-enabled channel.",
      },
      {
        title: "UptimeRobot or Upptime",
        description:
          "Upgrade simple website-down notifications from email or webhooks into urgent iPhone call alerts when a public endpoint is unavailable.",
      },
    ],
    stepsTitle: "How to set up a server down phone call alert",
    stepsDescription:
      "The setup is straightforward: one channel, one webhook, and one escalation rule.",
    steps: [
      {
        title: "Create a dedicated incident channel",
        description:
          "Use a separate channel for production outages so the notification type, template, and subscribers stay focused on the on-call workflow.",
      },
      {
        title: "Connect your monitoring tool",
        description:
          "Send Grafana, Prometheus, UptimeRobot, Upptime, or a generic webhook payload into the channel with service name, severity, and incident link.",
      },
      {
        title: "Use calling only for the right conditions",
        description:
          "Pair phone call delivery with severity-based conditions so only real outages ring the phone while warnings stay as standard or time-sensitive alerts.",
      },
    ],
    reasonsTitle: "Why phone call alerts work better than another push",
    reasons: [
      {
        title: "They break through sleep and Focus Mode",
        description:
          "That matters when a server fails at 3 a.m. or during a high-stakes launch window.",
      },
      {
        title: "They create a cleaner on-call signal",
        description:
          "When only the top severity incidents trigger calls, the team immediately knows that the event deserves attention now, not later.",
      },
      {
        title: "They preserve your existing tooling",
        description:
          "You do not need to rip out Grafana, Alertmanager, or uptime tools. You only improve the last mile of delivery.",
      },
    ],
    faqTitle: "Server Down Alert FAQ",
    faqDescription:
      "Common questions about routing uptime and monitoring incidents into phone call alerts.",
    faqs: [
      {
        question: "Can I keep lower-priority incidents as pushes?",
        answer:
          "Yes. Echobell works best when only the highest-severity outage conditions escalate to a call, while warnings and informational events stay at lower urgency levels.",
      },
      {
        question: "Which monitoring tools work with this setup?",
        answer:
          "Grafana, Prometheus Alertmanager, UptimeRobot, Upptime, Uptime Kuma, GitHub Actions, and any system that can send a webhook or email can feed the same workflow.",
      },
      {
        question: "Can a whole team receive the same outage alert?",
        answer:
          "Yes. Share the channel subscription with your team so multiple responders can receive the incident context without building separate integrations per person.",
      },
    ],
    relatedTitle: "Related documentation",
    relatedLinks: [
      {
        label: "Phone call alerts feature page",
        href: "/features/call-notifications",
      },
      {
        label: "Grafana integration guide",
        href: "/docs/developer/grafana",
      },
      {
        label: "Prometheus Alertmanager guide",
        href: "/docs/developer/prometheus",
      },
      {
        label: "UptimeRobot guide",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "Turn your next outage into a phone call instead of a buried push",
      description:
        "Download Echobell and test one production incident workflow with your current monitoring tool.",
      primary: "Download Echobell",
      secondary: "Read the docs",
    },
  },
  es: {
    meta: {
      title: "Alertas por llamada en iPhone cuando el servidor cae",
      description:
        "¿Necesitas una alerta por llamada cuando el servidor cae? Usa Echobell para convertir Grafana, Prometheus, UptimeRobot y otros incidentes webhook en llamadas urgentes al iPhone.",
      keywords: [
        "server down phone call alert",
        "uptime monitor llamada",
        "webhook a llamada",
        "devops mobile alerting",
        "alertas incidente iphone",
      ],
    },
    breadcrumb: "Alertas por llamada cuando el servidor cae",
    hero: {
      badge: "Caso DevOps",
      title: "Llama al telefono correcto cuando un servidor cae",
      description:
        "Los emails y pushes normales se pierden demasiado facil durante el sueño o el trabajo profundo. Echobell convierte los eventos de caida en llamadas al iPhone para que alguien note la incidencia enseguida.",
    },
    summary: {
      title: "La idea central",
      body: "Mantén tu stack actual de monitorizacion. Cambia la capa de entrega. Grafana, Prometheus, UptimeRobot, Upptime o cualquier servicio con webhook pueden alimentar Echobell y escalar solo los incidentes que merecen una llamada real.",
    },
    stackTitle: "Stack recomendado",
    stackDescription:
      "La mayoria de equipos no necesita otro producto de monitorizacion. Necesita un camino mas rapido desde la deteccion hasta la atencion humana.",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "Envia alertas de alta severidad a un webhook de Echobell y reserva las llamadas para incidentes que impactan produccion.",
      },
      {
        title: "Grafana Alerting",
        description:
          "Usa un contact point webhook, incluye servicio y metricas en el payload y manda las politicas criticas a un canal con llamadas.",
      },
      {
        title: "UptimeRobot o Upptime",
        description:
          "Convierte simples avisos de sitio caido por email o webhook en llamadas urgentes al iPhone cuando un endpoint publico deja de responder.",
      },
    ],
    stepsTitle: "Como configurar una alerta por llamada cuando un servidor cae",
    stepsDescription:
      "La configuracion es simple: un canal, un webhook y una regla de escalado.",
    steps: [
      {
        title: "Crea un canal dedicado a incidentes",
        description:
          "Usa un canal separado para caidas de produccion y mantén tipo de notificacion, plantilla y suscriptores centrados en el flujo on-call.",
      },
      {
        title: "Conecta tu herramienta de monitorizacion",
        description:
          "Envía Grafana, Prometheus, UptimeRobot, Upptime o un webhook generico al canal con nombre del servicio, severidad y enlace del incidente.",
      },
      {
        title: "Usa calling solo para las condiciones correctas",
        description:
          "Combina las llamadas con condiciones por severidad para que solo las caidas reales hagan sonar el telefono.",
      },
    ],
    reasonsTitle: "Por que una llamada funciona mejor que otro push",
    reasons: [
      {
        title: "Atraviesa el sueño y Focus Mode",
        description:
          "Eso importa cuando un servidor falla a las 3 de la manana o durante un lanzamiento delicado.",
      },
      {
        title: "Genera una senal on-call mas limpia",
        description:
          "Cuando solo los incidentes mas graves disparan llamadas, el equipo entiende de inmediato que hay que actuar ahora.",
      },
      {
        title: "Conserva tus herramientas actuales",
        description:
          "No hace falta sustituir Grafana, Alertmanager ni tus herramientas de uptime. Solo mejoras la ultima milla de entrega.",
      },
    ],
    faqTitle: "FAQ de alertas por caida de servidor",
    faqDescription:
      "Preguntas comunes sobre llevar incidentes de monitorizacion a llamadas telefonicas.",
    faqs: [
      {
        question: "¿Puedo dejar incidentes menores como pushes?",
        answer:
          "Si. Echobell funciona mejor cuando solo las condiciones de mayor severidad escalan a llamada, mientras warnings e informativos quedan en menor urgencia.",
      },
      {
        question: "¿Que herramientas funcionan con esta configuracion?",
        answer:
          "Grafana, Prometheus Alertmanager, UptimeRobot, Upptime, Uptime Kuma, GitHub Actions y cualquier sistema que pueda enviar webhook o email.",
      },
      {
        question: "¿Puede todo el equipo recibir la misma alerta?",
        answer:
          "Si. Comparte la suscripcion del canal para que varios respondedores reciban el mismo contexto sin integraciones separadas por persona.",
      },
    ],
    relatedTitle: "Documentacion relacionada",
    relatedLinks: [
      {
        label: "Pagina de llamadas de alerta",
        href: "/features/call-notifications",
      },
      {
        label: "Guia de Grafana",
        href: "/docs/developer/grafana",
      },
      {
        label: "Guia de Prometheus Alertmanager",
        href: "/docs/developer/prometheus",
      },
      {
        label: "Guia de UptimeRobot",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "Convierte la proxima caida en una llamada y no en un push enterrado",
      description:
        "Descarga Echobell y prueba un workflow de incidente de produccion con tu herramienta actual.",
      primary: "Descargar Echobell",
      secondary: "Leer la documentacion",
    },
  },
  fr: {
    meta: {
      title: "Alertes serveur en panne par appel sur iPhone",
      description:
        "Besoin d une alerte par appel quand un serveur tombe ? Utilisez Echobell pour transformer Grafana, Prometheus, UptimeRobot et d autres incidents webhook en appels urgents sur iPhone.",
      keywords: [
        "server down phone call alert",
        "alerte uptime appel",
        "webhook vers appel",
        "devops mobile alerting",
        "alertes incident iphone",
      ],
    },
    breadcrumb: "Alertes serveur en panne",
    hero: {
      badge: "Cas DevOps",
      title: "Faites sonner le bon telephone quand un serveur tombe",
      description:
        "Les emails et pushs ordinaires se ratent trop facilement pendant le sommeil ou le travail profond. Echobell transforme les pannes serveur en appels iPhone pour que quelqu un remarque l incident tout de suite.",
    },
    summary: {
      title: "L idee centrale",
      body: "Gardez votre stack de monitoring actuelle. Changez seulement la couche de livraison. Grafana, Prometheus, UptimeRobot, Upptime ou tout service webhook peut alimenter Echobell et n escalader que les incidents qui meritent un vrai appel.",
    },
    stackTitle: "Stack recommande",
    stackDescription:
      "La plupart des equipes n ont pas besoin d un nouveau produit de monitoring. Elles ont besoin d un chemin plus rapide entre detection d incident et attention humaine.",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "Routez les alertes severes vers un webhook Echobell et reservez les appels aux incidents qui impactent la production.",
      },
      {
        title: "Grafana Alerting",
        description:
          "Utilisez un contact point webhook, ajoutez service et metriques au payload et envoyez les politiques critiques vers un canal avec appels.",
      },
      {
        title: "UptimeRobot ou Upptime",
        description:
          "Transformez de simples notifications de site down par email ou webhook en appels urgents sur iPhone lorsqu un endpoint public devient indisponible.",
      },
    ],
    stepsTitle: "Comment configurer une alerte serveur down par appel",
    stepsDescription:
      "Le setup est simple : un canal, un webhook et une regle d escalade.",
    steps: [
      {
        title: "Creez un canal dedie aux incidents",
        description:
          "Utilisez un canal separe pour les pannes de production afin que type de notification, modele et abonnes restent centres sur l astreinte.",
      },
      {
        title: "Connectez votre outil de monitoring",
        description:
          "Envoyez Grafana, Prometheus, UptimeRobot, Upptime ou un webhook generique dans le canal avec service, severite et lien d incident.",
      },
      {
        title: "Utilisez calling seulement pour les bonnes conditions",
        description:
          "Associez l appel a des conditions de severite pour que seules les vraies pannes fassent sonner le telephone.",
      },
    ],
    reasonsTitle: "Pourquoi l appel marche mieux qu un push de plus",
    reasons: [
      {
        title: "Il traverse le sommeil et Focus Mode",
        description:
          "C est crucial quand un serveur tombe a 3 h du matin ou pendant une fenetre de lancement sensible.",
      },
      {
        title: "Il cree un signal on-call plus propre",
        description:
          "Quand seuls les incidents les plus graves declenchent un appel, l equipe comprend tout de suite qu il faut agir maintenant.",
      },
      {
        title: "Il preserve vos outils existants",
        description:
          "Pas besoin de remplacer Grafana, Alertmanager ou vos outils d uptime. Vous ameliorez seulement le dernier kilometre de livraison.",
      },
    ],
    faqTitle: "FAQ alertes serveur down",
    faqDescription:
      "Questions frequentes sur le routage des incidents uptime vers des appels.",
    faqs: [
      {
        question: "Puis je garder les incidents mineurs en push ?",
        answer:
          "Oui. Echobell fonctionne mieux quand seules les conditions de plus haute severite escaladent en appel, tandis que warnings et infos restent a un niveau moindre.",
      },
      {
        question: "Quels outils de monitoring fonctionnent avec ce setup ?",
        answer:
          "Grafana, Prometheus Alertmanager, UptimeRobot, Upptime, Uptime Kuma, GitHub Actions et tout systeme capable d envoyer un webhook ou un email.",
      },
      {
        question: "Toute l equipe peut elle recevoir la meme alerte ?",
        answer:
          "Oui. Partagez l abonnement du canal pour que plusieurs repondeurs recoivent le meme contexte sans integrer chaque personne separement.",
      },
    ],
    relatedTitle: "Documentation liee",
    relatedLinks: [
      {
        label: "Page des alertes par appel",
        href: "/features/call-notifications",
      },
      {
        label: "Guide Grafana",
        href: "/docs/developer/grafana",
      },
      {
        label: "Guide Prometheus Alertmanager",
        href: "/docs/developer/prometheus",
      },
      {
        label: "Guide UptimeRobot",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "Transformez votre prochaine panne en appel plutot qu en push enterre",
      description:
        "Telechargez Echobell et testez un workflow d incident de production avec votre outil actuel.",
      primary: "Telecharger Echobell",
      secondary: "Lire la documentation",
    },
  },
  ja: {
    meta: {
      title: "サーバーダウンを iPhone への電話アラートにする",
      description:
        "サーバーダウン時に電話で起こされたいですか？ Echobell を使えば、Grafana、Prometheus、UptimeRobot などの Webhook インシデントを iPhone への緊急電話通知に変えられます。",
      keywords: [
        "server down phone call alert",
        "uptime 監視 電話通知",
        "webhook 電話",
        "devops mobile alerting",
        "iPhone インシデント通知",
      ],
    },
    breadcrumb: "サーバーダウン電話アラート",
    hero: {
      badge: "DevOps ユースケース",
      title: "サーバーが落ちた時に正しい電話を鳴らす",
      description:
        "メールや通常の push は、睡眠中や深い作業中には見逃されやすいです。Echobell はサーバーダウンを iPhone への電話アラートに変え、誰かがすぐ気付けるようにします。",
    },
    summary: {
      title: "コアの考え方",
      body: "既存の監視スタックはそのままで、配信レイヤーだけを変えます。Grafana、Prometheus、UptimeRobot、Upptime、または Webhook 対応サービスなら Echobell に送れ、本当に電話が必要な事故だけをエスカレーションできます。",
    },
    stackTitle: "おすすめ構成",
    stackDescription:
      "多くのチームに新しい監視製品は不要です。必要なのは、事故検知から人間の注意までの距離を短くすることです。",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "高重大度アラートを Echobell の Webhook に流し、本番影響のある事故だけを電話にします。",
      },
      {
        title: "Grafana Alerting",
        description:
          "Webhook contact point を使い、サービス名やメトリクスを payload に含め、重要ポリシーを電話対応チャンネルへ送ります。",
      },
      {
        title: "UptimeRobot または Upptime",
        description:
          "単純なサイトダウン通知を、公開エンドポイント停止時の緊急 iPhone 電話アラートへ引き上げます。",
      },
    ],
    stepsTitle: "サーバーダウン電話アラートの設定方法",
    stepsDescription:
      "設定はシンプルです。チャンネル 1 つ、Webhook 1 つ、エスカレーションルール 1 つです。",
    steps: [
      {
        title: "事故専用チャンネルを作る",
        description:
          "本番障害を別チャンネルに分けることで、通知タイプ、テンプレート、購読者をオンコールに集中させられます。",
      },
      {
        title: "監視ツールを接続する",
        description:
          "Grafana、Prometheus、UptimeRobot、Upptime、または汎用 Webhook を、サービス名、重大度、事故リンク付きでチャンネルへ送ります。",
      },
      {
        title: "calling を正しい条件だけに使う",
        description:
          "重大度ベースの条件と組み合わせ、実際の障害だけが電話を鳴らし、warning は標準または time-sensitive に残します。",
      },
    ],
    reasonsTitle: "なぜ電話アラートは push より強いのか",
    reasons: [
      {
        title: "睡眠と Focus Mode を越える",
        description:
          "深夜 3 時の障害や、重要なローンチの時間帯には特に重要です。",
      },
      {
        title: "オンコールの信号がより明確になる",
        description:
          "最上位の重大事故だけが電話を鳴らすなら、チームは今すぐ対応すべきだとすぐ分かります。",
      },
      {
        title: "既存ツールを活かせる",
        description:
          "Grafana、Alertmanager、uptime ツールを捨てる必要はありません。最後の配信だけを改善します。",
      },
    ],
    faqTitle: "サーバーダウン電話アラート FAQ",
    faqDescription:
      "監視インシデントを電話アラートへ流す際のよくある質問です。",
    faqs: [
      {
        question: "低優先度の事故は push のままにできますか？",
        answer:
          "はい。Echobell は、最も重大な停止条件だけを電話にし、warning や情報通知は低い優先度に残す運用に向いています。",
      },
      {
        question: "どの監視ツールが使えますか？",
        answer:
          "Grafana、Prometheus Alertmanager、UptimeRobot、Upptime、Uptime Kuma、GitHub Actions、そして Webhook やメールを送れる任意のシステムが使えます。",
      },
      {
        question: "チーム全員が同じ障害通知を受け取れますか？",
        answer:
          "はい。チャンネル購読を共有すれば、複数の担当者が同じ事故コンテキストを受け取れます。",
      },
    ],
    relatedTitle: "関連ドキュメント",
    relatedLinks: [
      {
        label: "電話アラート機能ページ",
        href: "/features/call-notifications",
      },
      {
        label: "Grafana ガイド",
        href: "/docs/developer/grafana",
      },
      {
        label: "Prometheus Alertmanager ガイド",
        href: "/docs/developer/prometheus",
      },
      {
        label: "UptimeRobot ガイド",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "次の障害を埋もれた push ではなく電話に変える",
      description:
        "Echobell をダウンロードして、今の監視ツールで本番インシデントのワークフローを 1 つ試してください。",
      primary: "Echobell をダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Server-down Telefon-Alerts fur iPhone",
      description:
        "Brauchen Sie einen Telefon-Alert bei Serverausfall? Nutzen Sie Echobell, um Grafana-, Prometheus-, UptimeRobot- und andere Webhook-Incidents in dringende iPhone-Anrufe zu verwandeln.",
      keywords: [
        "server down phone call alert",
        "uptime monitor Telefonalarm",
        "webhook zu anruf",
        "devops mobile alerting",
        "iPhone Incident Alerts",
      ],
    },
    breadcrumb: "Server-down Telefon-Alerts",
    hero: {
      badge: "DevOps-Anwendungsfall",
      title: "Lassen Sie das richtige Telefon klingeln, wenn ein Server ausfallt",
      description:
        "E-Mails und normale Pushs gehen im Schlaf oder bei tiefer Arbeit zu leicht unter. Echobell macht aus Server-down-Ereignissen iPhone-Telefon-Alerts, damit jemand den Ausfall sofort bemerkt.",
    },
    summary: {
      title: "Die Kernidee",
      body: "Behalten Sie Ihren aktuellen Monitoring-Stack. Andern Sie nur die Zustellungsschicht. Grafana, Prometheus, UptimeRobot, Upptime oder jeder webhookfahige Dienst kann Echobell speisen und nur die Incidents eskalieren, die einen echten Anruf verdienen.",
    },
    stackTitle: "Empfohlener Stack",
    stackDescription:
      "Die meisten Teams brauchen kein neues Monitoring-Produkt. Sie brauchen einen schnelleren Weg von der Incident-Erkennung zur menschlichen Aufmerksamkeit.",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "Leiten Sie Alerts mit hoher Schwere in einen Echobell-Webhook und reservieren Sie Anrufe fur produktionsrelevante Incidents.",
      },
      {
        title: "Grafana Alerting",
        description:
          "Nutzen Sie einen Webhook-Contact-Point, geben Sie Service- und Metrik-Kontext mit und senden Sie kritische Policies an einen kanal mit Anrufoption.",
      },
      {
        title: "UptimeRobot oder Upptime",
        description:
          "Werten Sie einfache Website-down-Meldungen aus E-Mail oder Webhook zu dringenden iPhone-Telefon-Alerts auf, wenn ein offentliches Endpoint ausfallt.",
      },
    ],
    stepsTitle: "So richten Sie einen Server-down Telefon-Alert ein",
    stepsDescription:
      "Das Setup ist geradlinig: ein Kanal, ein Webhook und eine Eskalationsregel.",
    steps: [
      {
        title: "Erstellen Sie einen dedizierten Incident-Kanal",
        description:
          "Nutzen Sie einen separaten Kanal fur Produktionsausfalle, damit Benachrichtigungstyp, Vorlage und Abonnenten auf den On-call-Workflow fokussiert bleiben.",
      },
      {
        title: "Verbinden Sie Ihr Monitoring-Tool",
        description:
          "Senden Sie Grafana, Prometheus, UptimeRobot, Upptime oder ein generisches Webhook-Payload mit Service, Schwere und Incident-Link in den Kanal.",
      },
      {
        title: "Nutzen Sie calling nur fur die richtigen Bedingungen",
        description:
          "Kombinieren Sie Telefonzustellung mit Schwere-Bedingungen, damit nur echte Ausfalle das Telefon klingeln lassen.",
      },
    ],
    reasonsTitle: "Warum Telefon-Alerts besser funktionieren als noch ein Push",
    reasons: [
      {
        title: "Sie durchbrechen Schlaf und Focus Mode",
        description:
          "Das zahlt besonders, wenn ein Server um 3 Uhr morgens oder wahrend eines heiklen Launchfensters ausfallt.",
      },
      {
        title: "Sie schaffen ein saubereres On-call-Signal",
        description:
          "Wenn nur die schwersten Incidents Anrufe auslosen, versteht das Team sofort, dass jetzt gehandelt werden muss.",
      },
      {
        title: "Sie erhalten Ihre bestehenden Tools",
        description:
          "Sie mussen Grafana, Alertmanager oder Uptime-Tools nicht ersetzen. Sie verbessern nur die letzte Meile der Zustellung.",
      },
    ],
    faqTitle: "FAQ zu Server-down-Alerts",
    faqDescription:
      "Haufige Fragen zum Routing von Monitoring-Incidents in Telefon-Alerts.",
    faqs: [
      {
        question: "Kann ich niedrig priorisierte Incidents als Push behalten?",
        answer:
          "Ja. Echobell funktioniert am besten, wenn nur die hochsten Ausfallbedingungen auf Anruf eskalieren, wahrend Warnings und Infos niedriger priorisiert bleiben.",
      },
      {
        question: "Welche Monitoring-Tools funktionieren damit?",
        answer:
          "Grafana, Prometheus Alertmanager, UptimeRobot, Upptime, Uptime Kuma, GitHub Actions und jedes System, das Webhook oder E-Mail senden kann.",
      },
      {
        question: "Kann das ganze Team denselben Ausfall-Alert erhalten?",
        answer:
          "Ja. Teilen Sie die Kanal-Subscription mit Ihrem Team, damit mehrere Reagierende denselben Incident-Kontext erhalten.",
      },
    ],
    relatedTitle: "Verwandte Dokumentation",
    relatedLinks: [
      {
        label: "Feature-Seite fur Telefon-Alerts",
        href: "/features/call-notifications",
      },
      {
        label: "Grafana-Guide",
        href: "/docs/developer/grafana",
      },
      {
        label: "Prometheus Alertmanager-Guide",
        href: "/docs/developer/prometheus",
      },
      {
        label: "UptimeRobot-Guide",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "Machen Sie aus dem nachsten Ausfall einen Anruf statt eines begrabenen Pushs",
      description:
        "Laden Sie Echobell herunter und testen Sie einen Produktions-Incident-Workflow mit Ihrem aktuellen Monitoring-Tool.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation lesen",
    },
  },
  zh: {
    meta: {
      title: "服务器宕机电话告警：把事故直接打到 iPhone 上",
      description:
        "需要服务器宕机电话告警？用 Echobell 把 Grafana、Prometheus、UptimeRobot 和其他 Webhook 事故转成紧急 iPhone 电话提醒。",
      keywords: [
        "服务器宕机 电话告警",
        "Uptime 监控 电话提醒",
        "Webhook 转电话",
        "运维移动告警",
        "iPhone 事故提醒",
      ],
    },
    breadcrumb: "服务器宕机电话告警",
    hero: {
      badge: "运维场景",
      title: "服务器宕机时，把电话直接打到正确的人手机上",
      description:
        "邮件和普通推送在睡眠或深度工作时太容易被忽略。Echobell 能把服务器宕机事件直接升级为 iPhone 电话提醒，让有人第一时间注意到故障。",
    },
    summary: {
      title: "核心思路",
      body: "保留现有监控栈，只升级通知层。Grafana、Prometheus、UptimeRobot、Upptime 或任何支持 Webhook 的服务都可以接入 Echobell，只把真正值得打电话的事故升级出来。",
    },
    stackTitle: "推荐搭配",
    stackDescription:
      "大多数团队并不缺监控产品，而是缺从“检测到事故”到“有人被真正提醒到”的最后一公里。",
    stackCards: [
      {
        title: "Prometheus + Alertmanager",
        description:
          "把高严重级别告警送进 Echobell Webhook，只对真正影响生产的事故使用电话提醒。",
      },
      {
        title: "Grafana Alerting",
        description:
          "使用 Webhook Contact Point，在 payload 中附带服务和指标上下文，再把关键策略路由到启用电话提醒的频道。",
      },
      {
        title: "UptimeRobot 或 Upptime",
        description:
          "把简单的网站宕机邮件 / Webhook 升级为真正紧急的 iPhone 电话提醒，适合公开接口不可用这类场景。",
      },
    ],
    stepsTitle: "如何配置服务器宕机电话告警",
    stepsDescription: "流程很简单：一个频道、一个 Webhook、再加一条升级规则。",
    steps: [
      {
        title: "创建专门的事故频道",
        description:
          "把生产故障放在独立频道里，这样通知类型、模板和订阅者都会围绕值班流程保持清晰。",
      },
      {
        title: "接入监控工具",
        description:
          "把 Grafana、Prometheus、UptimeRobot、Upptime 或通用 Webhook payload 接入频道，并附带服务名、严重级别和事故链接。",
      },
      {
        title: "只对正确条件启用电话提醒",
        description:
          "把电话送达与严重级别条件组合起来，让真正的宕机才会打电话，warning 仍保留为普通或时间敏感通知。",
      },
    ],
    reasonsTitle: "为什么电话提醒比再来一条推送更有效",
    reasons: [
      {
        title: "它能突破睡眠和专注模式",
        description:
          "尤其适合凌晨故障、重要发版窗口或任何绝不能等到“稍后再看”的事故。",
      },
      {
        title: "它让值班信号更干净",
        description:
          "只有最高严重级别的事件才会打电话，团队一听到铃声就知道这件事必须现在处理。",
      },
      {
        title: "它不要求你替换现有工具",
        description:
          "你不需要重做 Grafana、Alertmanager 或 uptime 监控，只需要把通知最后一公里做好。",
      },
    ],
    faqTitle: "服务器宕机电话告警常见问题",
    faqDescription: "关于把 uptime / 监控事故升级为电话提醒的常见问题。",
    faqs: [
      {
        question: "低优先级事件还能保留为普通推送吗？",
        answer:
          "可以。Echobell 最适合只把最高严重级别的故障升级为电话，而 warning 或信息类事件继续保留为较低优先级。",
      },
      {
        question: "哪些监控工具适合这种配置？",
        answer:
          "Grafana、Prometheus Alertmanager、UptimeRobot、Upptime、Uptime Kuma、GitHub Actions，以及任何能发 Webhook 或邮件的系统都可以接入。",
      },
      {
        question: "整个团队能同时收到同一条事故提醒吗？",
        answer:
          "可以。你可以把频道订阅共享给团队，让多个响应人看到同样的事故上下文，而不必为每个人单独做集成。",
      },
    ],
    relatedTitle: "相关文档",
    relatedLinks: [
      {
        label: "电话告警功能页",
        href: "/features/call-notifications",
      },
      {
        label: "Grafana 集成文档",
        href: "/docs/developer/grafana",
      },
      {
        label: "Prometheus Alertmanager 文档",
        href: "/docs/developer/prometheus",
      },
      {
        label: "UptimeRobot 文档",
        href: "/docs/developer/uptimerobot",
      },
    ],
    cta: {
      title: "把下一次宕机从埋在通知栏里，升级成真正会响的电话提醒",
      description:
        "下载 Echobell，并用你当前的监控工具测试一条生产事故工作流。",
      primary: "下载 Echobell",
      secondary: "查看文档",
    },
  },
};

function getCopy(lang: Language): PageCopy {
  if (!supportedLanguages.includes(lang as SupportedLanguage)) {
    notFound();
  }

  return copy[lang as SupportedLanguage];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(
    localizeUrl("/server-down-phone-call-alerts", lang),
    baseUrl
  ).toString();
  const ogImageParams = new URLSearchParams({
    title: t.meta.title,
    description: t.meta.description,
    type: "default",
    lang,
  });
  const ogImageUrl = new URL(`/api/og?${ogImageParams.toString()}`, baseUrl).toString();

  return createMetadata({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/server-down-phone-call-alerts", "en"),
        ...Object.fromEntries(
          supportedLanguages.map((locale) => [
            locale,
            localizeUrl("/server-down-phone-call-alerts", locale),
          ])
        ),
      },
    },
    openGraph: {
      url: canonical,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: t.meta.title }],
    },
  });
}

export default async function ServerDownPhoneCallAlertsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(
    localizeUrl("/server-down-phone-call-alerts", lang),
    baseUrl
  ).toString();

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />
      <HowToJsonLd
        name={t.stepsTitle}
        description={t.stepsDescription}
        steps={t.steps.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
        totalTime="PT8M"
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: t.breadcrumb,
              href: localizeUrl("/server-down-phone-call-alerts", lang),
              isCurrentPage: true,
            },
          ]}
        />
      </div>

      <FeatureHero
        lang={lang}
        badge={t.hero.badge}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor="red"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
              {t.summary.title}
            </p>
            <p className="mt-3 max-w-4xl text-lg text-neutral-700 dark:text-neutral-300">
              {t.summary.body}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.stackTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.stackDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.stackCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.stepsTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.stepsDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.steps.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.reasonsTitle}
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        lang={lang}
        title={t.faqTitle}
        description={t.faqDescription}
        items={t.faqs}
      />

      <section className="border-t border-neutral-200 py-20 dark:border-neutral-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
              >
                {t.cta.primary}
              </Link>
              <Link
                href={localizeUrl("/docs", lang)}
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <h3 className="text-lg font-semibold">{t.relatedTitle}</h3>
            <div className="mt-4 space-y-3">
              {t.relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={localizeUrl(item.href, lang)}
                  className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-red-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-red-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
