import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { FeatureHero } from "@/components/features";
import { FeatureJsonLd } from "@/components/JsonLd";
import { APP_STORE_LINK } from "@/constants";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Language, localizeUrl } from "@/lib/i18n";

const supportedLanguages = ["en", "zh", "es", "fr", "ja", "de"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

const tableDimensionLabel: Record<SupportedLanguage, string> = {
  en: "Dimension",
  zh: "维度",
  es: "Dimensión",
  fr: "Critère",
  ja: "項目",
  de: "Kriterium",
};

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
  cards: Array<{
    title: string;
    description: string;
  }>;
  tableTitle: string;
  tableDescription: string;
  tableRows: Array<{
    dimension: string;
    echobell: string;
    competitor: string;
  }>;
  chooseTitle: string;
  chooseItems: Array<{
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
      title: "Best Pushover Alternative for iPhone Alerts",
      description:
        "Looking for a Pushover alternative? Compare Echobell vs Pushover for iPhone alerting, phone call escalation, team channels, and privacy-first delivery.",
      keywords: [
        "pushover alternative",
        "pushover vs echobell",
        "iphone alert app",
        "phone call alerts ios",
        "critical notifications app",
      ],
    },
    breadcrumb: "Pushover Alternative",
    hero: {
      badge: "Comparison",
      title: "A Pushover alternative built for critical iPhone alerts",
      description:
        "Pushover is fine for lightweight push messages. Echobell is a better fit when you need time-sensitive delivery, phone call escalation, shared channels, and cleaner webhook or email workflows.",
    },
    summary: {
      title: "Quick answer",
      body: "Choose Echobell if missed alerts are expensive. It gives you richer delivery options, clearer incident context, and a better path from webhook or email to action on iPhone.",
    },
    cards: [
      {
        title: "Critical delivery paths",
        description:
          "Escalate from standard notifications to time-sensitive delivery or phone call alerts when a server, deploy, or market event cannot wait.",
      },
      {
        title: "Better team routing",
        description:
          "Organize alerts by channel and share subscriptions with teammates instead of wiring each destination manually.",
      },
      {
        title: "Privacy-first by default",
        description:
          "Notification content and history stay on-device, while the service keeps only the account and channel metadata needed to deliver alerts.",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "Both tools can deliver mobile notifications. The difference is how they behave once an alert becomes operationally important.",
    tableRows: [
      {
        dimension: "Trigger options",
        echobell: "Webhook and email triggers per channel",
        competitor: "Broad app support, but less opinionated alert workflow",
      },
      {
        dimension: "Urgency levels",
        echobell: "Standard, time-sensitive, and phone call alerts",
        competitor: "Primarily push priority controls",
      },
      {
        dimension: "Team sharing",
        echobell: "Shareable channel subscriptions for teams",
        competitor: "Works well for individuals, less structured for shared on-call flows",
      },
      {
        dimension: "Alert context",
        echobell: "Templates, variables, conditions, and external links",
        competitor: "Payload delivery is simpler, but the in-app alert workflow is lighter",
      },
      {
        dimension: "Best fit",
        echobell: "On-call, App Store Connect, smart home, trading, CI/CD",
        competitor: "General-purpose personal push notifications",
      },
    ],
    chooseTitle: "When Echobell is the better choice",
    chooseItems: [
      {
        title: "You need a real escalation path",
        description:
          "If a push notification is not enough, Echobell can switch to time-sensitive delivery or a call-style alert without replacing your existing trigger source.",
      },
      {
        title: "You want one channel per workflow",
        description:
          "Keep production incidents, TestFlight changes, VIP support emails, and trading alerts separated, each with its own template and subscribers.",
      },
      {
        title: "You care about private delivery",
        description:
          "Echobell's model keeps the sensitive notification content on user devices instead of building a searchable server-side message archive.",
      },
    ],
    faqTitle: "Pushover Alternative FAQ",
    faqDescription:
      "Common questions from teams comparing Echobell with Pushover.",
    faqs: [
      {
        question: "Is Echobell only for developers?",
        answer:
          "No. Developers, operators, traders, and support teams use it most often, but the core model is simple: send a webhook or email, then decide how urgently it should reach the phone.",
      },
      {
        question: "Does Echobell replace my monitoring tool?",
        answer:
          "No. It usually replaces or upgrades the notification layer. You can keep Grafana, Prometheus, GitHub Actions, or App Store Connect and send their events into Echobell.",
      },
      {
        question: "Why switch if Pushover already sends pushes?",
        answer:
          "Because the highest-cost alerts usually need more than a basic push. Echobell is stronger when you need team routing, phone call urgency, and alert content that is easier to act on quickly.",
      },
    ],
    relatedTitle: "Related setup guides",
    relatedLinks: [
      {
        label: "Webhook notifications for iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Phone call alerts for critical incidents",
        href: "/features/call-notifications",
      },
      {
        label: "Server down phone call alerts",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "Try the Pushover alternative built for higher-stakes alerts",
      description:
        "Download Echobell, create a channel, and test your first webhook or email alert in minutes.",
      primary: "Download Echobell",
      secondary: "Read the docs",
    },
  },
  es: {
    meta: {
      title: "La mejor alternativa a Pushover para alertas en iPhone",
      description:
        "¿Buscas una alternativa a Pushover? Compara Echobell vs Pushover para alertas en iPhone, escalado por llamada, canales de equipo y entrega centrada en la privacidad.",
      keywords: [
        "alternativa a pushover",
        "pushover vs echobell",
        "app de alertas iphone",
        "llamadas de alerta ios",
        "app de notificaciones criticas",
      ],
    },
    breadcrumb: "Alternativa a Pushover",
    hero: {
      badge: "Comparativa",
      title: "Una alternativa a Pushover pensada para alertas criticas en iPhone",
      description:
        "Pushover funciona bien para mensajes push ligeros. Echobell encaja mejor cuando necesitas entrega time-sensitive, escalado por llamada, canales compartidos y flujos mas claros por webhook o email.",
    },
    summary: {
      title: "Respuesta rapida",
      body: "Elige Echobell si perder una alerta tiene un coste alto. Ofrece mejores niveles de entrega, mas contexto operativo y un camino mas corto desde el webhook o email hasta la accion en iPhone.",
    },
    cards: [
      {
        title: "Rutas de entrega criticas",
        description:
          "Escala de notificaciones estandar a alertas time-sensitive o llamadas cuando una caida, despliegue o evento de mercado no puede esperar.",
      },
      {
        title: "Mejor coordinacion para equipos",
        description:
          "Organiza alertas por canal y comparte suscripciones con tu equipo en lugar de cablear destinos uno por uno.",
      },
      {
        title: "Privacidad por defecto",
        description:
          "El contenido y el historial de notificaciones permanecen en el dispositivo, mientras el servicio solo guarda la metadata necesaria para entregar alertas.",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "Ambas herramientas pueden enviar notificaciones moviles. La diferencia aparece cuando la alerta se vuelve realmente operativa.",
    tableRows: [
      {
        dimension: "Opciones de disparo",
        echobell: "Webhook y email por canal",
        competitor: "Amplio soporte de apps, pero con un flujo de alertas menos definido",
      },
      {
        dimension: "Niveles de urgencia",
        echobell: "Alertas estandar, time-sensitive y por llamada",
        competitor: "Principalmente control de prioridad push",
      },
      {
        dimension: "Uso en equipo",
        echobell: "Suscripciones compartibles por canal",
        competitor: "Funciona bien a nivel individual, menos estructurado para guardias",
      },
      {
        dimension: "Contexto de alerta",
        echobell: "Plantillas, variables, condiciones y enlaces externos",
        competitor: "Entrega simple del payload, con menos flujo operativo dentro de la app",
      },
      {
        dimension: "Mejor para",
        echobell: "On-call, App Store Connect, hogar inteligente, trading, CI/CD",
        competitor: "Notificaciones push personales de proposito general",
      },
    ],
    chooseTitle: "Cuando Echobell es mejor opcion",
    chooseItems: [
      {
        title: "Necesitas una escalacion real",
        description:
          "Si una notificacion push no basta, Echobell puede subir a time-sensitive o llamada sin reemplazar la fuente de eventos.",
      },
      {
        title: "Quieres un canal por workflow",
        description:
          "Separa incidentes de produccion, cambios de TestFlight, emails VIP y alertas de trading, cada uno con su plantilla y suscriptores.",
      },
      {
        title: "Te importa la entrega privada",
        description:
          "El modelo de Echobell mantiene el contenido sensible en el dispositivo en vez de crear un archivo de mensajes buscable en el servidor.",
      },
    ],
    faqTitle: "FAQ de la alternativa a Pushover",
    faqDescription:
      "Preguntas habituales de equipos que comparan Echobell con Pushover.",
    faqs: [
      {
        question: "¿Echobell es solo para desarrolladores?",
        answer:
          "No. Lo usan mucho desarrolladores, operadores, traders y equipos de soporte, pero el modelo es simple: envias un webhook o email y decides con que urgencia debe llegar al telefono.",
      },
      {
        question: "¿Echobell reemplaza mi herramienta de monitorizacion?",
        answer:
          "No. Normalmente mejora la capa de notificaciones. Puedes mantener Grafana, Prometheus, GitHub Actions o App Store Connect y enviar esos eventos a Echobell.",
      },
      {
        question: "¿Por que cambiar si Pushover ya envia pushes?",
        answer:
          "Porque las alertas mas caras suelen necesitar mas que un push basico. Echobell es mas fuerte cuando necesitas coordinacion de equipo, urgencia por llamada y alertas mas accionables.",
      },
    ],
    relatedTitle: "Guias relacionadas",
    relatedLinks: [
      {
        label: "Notificaciones webhook para iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Alertas por llamada para incidentes criticos",
        href: "/features/call-notifications",
      },
      {
        label: "Llamadas cuando el servidor cae",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "Prueba la alternativa a Pushover para alertas de mayor impacto",
      description:
        "Descarga Echobell, crea un canal y prueba tu primera alerta por webhook o email en minutos.",
      primary: "Descargar Echobell",
      secondary: "Leer la documentacion",
    },
  },
  fr: {
    meta: {
      title: "La meilleure alternative a Pushover pour les alertes iPhone",
      description:
        "Vous cherchez une alternative a Pushover ? Comparez Echobell et Pushover pour les alertes iPhone, l escalade par appel, les canaux partages et une livraison axee sur la confidentialite.",
      keywords: [
        "alternative a pushover",
        "pushover vs echobell",
        "application alertes iphone",
        "alertes appel ios",
        "application notifications critiques",
      ],
    },
    breadcrumb: "Alternative a Pushover",
    hero: {
      badge: "Comparaison",
      title: "Une alternative a Pushover pensee pour les alertes critiques sur iPhone",
      description:
        "Pushover convient aux messages push legers. Echobell est plus adapte quand vous avez besoin d alertes time-sensitive, d appels, de canaux partages et de workflows webhook ou email plus clairs.",
    },
    summary: {
      title: "Reponse rapide",
      body: "Choisissez Echobell si manquer une alerte coute cher. Il offre de meilleurs niveaux de livraison, un contexte d incident plus clair et un chemin plus court entre webhook ou email et action sur iPhone.",
    },
    cards: [
      {
        title: "Des chemins de livraison critiques",
        description:
          "Passez de notifications standard a des alertes time-sensitive ou a des appels quand une panne, un deploiement ou un mouvement de marche ne peut pas attendre.",
      },
      {
        title: "Un meilleur routage d equipe",
        description:
          "Organisez les alertes par canal et partagez les abonnements avec vos coequipiers au lieu de configurer chaque destination a la main.",
      },
      {
        title: "Confidentialite par defaut",
        description:
          "Le contenu et l historique des notifications restent sur l appareil, tandis que le service ne conserve que la metadata necessaire a la livraison.",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "Les deux outils savent envoyer des notifications mobiles. La difference apparait quand l alerte devient vraiment operationnelle.",
    tableRows: [
      {
        dimension: "Declencheurs",
        echobell: "Webhook et email par canal",
        competitor: "Large support applicatif, avec un workflow d alerte moins structure",
      },
      {
        dimension: "Niveaux d urgence",
        echobell: "Standard, time-sensitive et appels",
        competitor: "Principalement des priorites push",
      },
      {
        dimension: "Partage en equipe",
        echobell: "Abonnements de canal partageables",
        competitor: "Tres bien pour un usage individuel, moins structure pour l astreinte partagee",
      },
      {
        dimension: "Contexte d alerte",
        echobell: "Modeles, variables, conditions et liens externes",
        competitor: "Livraison du payload plus simple, avec moins de contexte operationnel dans l app",
      },
      {
        dimension: "Ideal pour",
        echobell: "Astreinte, App Store Connect, maison connectee, trading, CI/CD",
        competitor: "Notifications push personnelles generalistes",
      },
    ],
    chooseTitle: "Quand Echobell est le meilleur choix",
    chooseItems: [
      {
        title: "Vous avez besoin d une vraie escalade",
        description:
          "Si un push ne suffit pas, Echobell peut monter en time-sensitive ou en appel sans remplacer votre source d evenements.",
      },
      {
        title: "Vous voulez un canal par workflow",
        description:
          "Separez incidents de production, changements TestFlight, emails VIP et alertes trading, chacun avec son modele et ses abonnes.",
      },
      {
        title: "Vous tenez a une livraison privee",
        description:
          "Le modele Echobell garde le contenu sensible sur l appareil au lieu de construire une archive serveur consultable.",
      },
    ],
    faqTitle: "FAQ sur l alternative a Pushover",
    faqDescription:
      "Questions frequentes des equipes qui comparent Echobell et Pushover.",
    faqs: [
      {
        question: "Echobell est il reserve aux developpeurs ?",
        answer:
          "Non. Developpeurs, ops, traders et support l utilisent souvent, mais le modele reste simple : vous envoyez un webhook ou un email puis vous choisissez le niveau d urgence sur le telephone.",
      },
      {
        question: "Echobell remplace t il mon outil de supervision ?",
        answer:
          "Non. Il ameliore surtout la couche de notification. Vous pouvez garder Grafana, Prometheus, GitHub Actions ou App Store Connect et envoyer leurs evenements vers Echobell.",
      },
      {
        question: "Pourquoi changer si Pushover envoie deja des pushs ?",
        answer:
          "Parce que les alertes les plus couteuses demandent souvent plus qu un push basique. Echobell est plus fort pour le routage d equipe, l urgence par appel et le contexte actionnable.",
      },
    ],
    relatedTitle: "Guides associes",
    relatedLinks: [
      {
        label: "Notifications webhook pour iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Alertes par appel pour incidents critiques",
        href: "/features/call-notifications",
      },
      {
        label: "Alertes serveur en panne par appel",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "Essayez l alternative a Pushover pour les alertes a plus fort enjeu",
      description:
        "Telechargez Echobell, creez un canal et testez votre premiere alerte webhook ou email en quelques minutes.",
      primary: "Telecharger Echobell",
      secondary: "Lire la documentation",
    },
  },
  ja: {
    meta: {
      title: "iPhone 向け重要アラートに強い Pushover 代替",
      description:
        "Pushover の代替を探しているなら、Echobell と Pushover を比較してください。iPhone 通知、電話エスカレーション、チームチャンネル、プライバシー重視の配信をカバーします。",
      keywords: [
        "Pushover 代替",
        "Pushover Echobell 比較",
        "iPhone アラートアプリ",
        "iOS 電話アラート",
        "重要通知アプリ",
      ],
    },
    breadcrumb: "Pushover の代替",
    hero: {
      badge: "比較",
      title: "重要な iPhone アラート向けに作られた Pushover 代替",
      description:
        "Pushover は軽量な push 通知には向いています。Echobell は、time-sensitive 通知、電話エスカレーション、共有チャンネル、Webhook やメールの明確な運用フローが必要な場面により適しています。",
    },
    summary: {
      title: "結論",
      body: "見逃しコストが高いなら Echobell が向いています。配信レベル、インシデント文脈、Webhook やメールから iPhone の行動までの導線がより強力です。",
    },
    cards: [
      {
        title: "重要度に応じた配信経路",
        description:
          "障害、デプロイ失敗、市場イベントなど待てない通知は、通常通知から time-sensitive や電話通知へ段階的に引き上げられます。",
      },
      {
        title: "チーム向けの整理された運用",
        description:
          "アラートをチャンネル単位で整理し、宛先ごとに個別配線する代わりに購読リンクをチームで共有できます。",
      },
      {
        title: "初期状態でプライバシー重視",
        description:
          "通知内容と履歴は端末に残り、サービス側には配信に必要なアカウントとチャンネルのメタデータだけが保存されます。",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "どちらもモバイル通知を送れます。差が出るのは、アラートが本当に重要になった時です。",
    tableRows: [
      {
        dimension: "トリガー手段",
        echobell: "チャンネルごとに Webhook とメール",
        competitor: "対応アプリは広いが、アラート運用は軽量寄り",
      },
      {
        dimension: "緊急度",
        echobell: "標準、time-sensitive、電話通知",
        competitor: "主に push 優先度の制御",
      },
      {
        dimension: "チーム共有",
        echobell: "共有しやすいチャンネル購読",
        competitor: "個人利用には向くが、共有オンコールにはやや弱い",
      },
      {
        dimension: "アラート文脈",
        echobell: "テンプレート、変数、条件、外部リンク",
        competitor: "ペイロード配送は簡単だが、アプリ内の運用導線は軽い",
      },
      {
        dimension: "向いている用途",
        echobell: "オンコール、App Store Connect、スマートホーム、トレード、CI/CD",
        competitor: "一般的な個人向け push 通知",
      },
    ],
    chooseTitle: "Echobell を選ぶべき場面",
    chooseItems: [
      {
        title: "本物のエスカレーションが必要",
        description:
          "push だけでは足りない時、Echobell はイベント元を変えずに time-sensitive や電話通知へ引き上げられます。",
      },
      {
        title: "ワークフローごとにチャンネルを分けたい",
        description:
          "本番障害、TestFlight の変化、VIP メール、トレード通知を分けて、それぞれにテンプレートと購読者を持てます。",
      },
      {
        title: "プライベートな配信が重要",
        description:
          "Echobell はサーバー側に検索可能なメッセージ履歴を作らず、機密性の高い通知内容を端末側に残します。",
      },
    ],
    faqTitle: "Pushover 代替 FAQ",
    faqDescription:
      "Echobell と Pushover を比較するチームからよくある質問です。",
    faqs: [
      {
        question: "Echobell は開発者専用ですか？",
        answer:
          "いいえ。開発者、運用担当、トレーダー、サポートチームに多く使われますが、仕組みは単純です。Webhook かメールを送り、その通知をどれだけ緊急に届けるかを決めるだけです。",
      },
      {
        question: "Echobell は監視ツールを置き換えますか？",
        answer:
          "通常は置き換えません。通知レイヤーを強化するものです。Grafana、Prometheus、GitHub Actions、App Store Connect はそのまま使えます。",
      },
      {
        question: "Pushover でも push は送れるのに、なぜ切り替えるのですか？",
        answer:
          "見逃しコストの高い通知は、基本的な push だけでは足りないことが多いからです。Echobell はチーム共有、電話レベルの緊急通知、すぐ行動に移せる文脈でより強みがあります。",
      },
    ],
    relatedTitle: "関連ガイド",
    relatedLinks: [
      {
        label: "iPhone 向け Webhook 通知",
        href: "/features/webhooks",
      },
      {
        label: "重大インシデント向け電話通知",
        href: "/features/call-notifications",
      },
      {
        label: "サーバーダウン時の電話アラート",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "より重要なアラート向けの Pushover 代替を試す",
      description:
        "Echobell をダウンロードしてチャンネルを作成し、最初の Webhook またはメールアラートを数分で試してください。",
      primary: "Echobell をダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Die beste Pushover-Alternative fur iPhone-Alerts",
      description:
        "Suchen Sie eine Pushover-Alternative? Vergleichen Sie Echobell und Pushover fur iPhone-Alerting, Telefoneskalation, Teamkanale und datenschutzorientierte Zustellung.",
      keywords: [
        "Pushover Alternative",
        "Pushover vs Echobell",
        "iPhone Alert App",
        "iOS Telefonalarm",
        "kritische Benachrichtigungs App",
      ],
    },
    breadcrumb: "Pushover-Alternative",
    hero: {
      badge: "Vergleich",
      title: "Eine Pushover-Alternative fur kritische iPhone-Alerts",
      description:
        "Pushover ist gut fur leichte Push-Nachrichten. Echobell passt besser, wenn Sie time-sensitive Zustellung, Telefoneskalation, geteilte Kanale und klarere Webhook- oder E-Mail-Workflows brauchen.",
    },
    summary: {
      title: "Kurzantwort",
      body: "Wahlen Sie Echobell, wenn verpasste Alerts teuer sind. Sie erhalten starkere Zustellwege, klareren Incident-Kontext und einen kurzeren Weg von Webhook oder E-Mail bis zur Aktion auf dem iPhone.",
    },
    cards: [
      {
        title: "Kritische Zustellpfade",
        description:
          "Eskalieren Sie von Standardbenachrichtigungen zu time-sensitive Alerts oder Telefonanrufen, wenn ein Ausfall, Deployment oder Marktereignis nicht warten kann.",
      },
      {
        title: "Besseres Routing fur Teams",
        description:
          "Organisieren Sie Alerts per Kanal und teilen Sie Abos mit Ihrem Team, statt jedes Ziel einzeln zu verdrahten.",
      },
      {
        title: "Datenschutz zuerst",
        description:
          "Benachrichtigungsinhalt und Verlauf bleiben auf dem Gerat, wahrend der Dienst nur die zur Zustellung notwendige Metadata speichert.",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "Beide Tools konnen mobile Benachrichtigungen senden. Der Unterschied zeigt sich, sobald ein Alert wirklich operativ wichtig wird.",
    tableRows: [
      {
        dimension: "Trigger-Optionen",
        echobell: "Webhook- und E-Mail-Trigger pro Kanal",
        competitor: "Breite App-Unterstutzung, aber weniger klarer Alert-Workflow",
      },
      {
        dimension: "Dringlichkeitsstufen",
        echobell: "Standard-, time-sensitive- und Telefon-Alerts",
        competitor: "Vor allem Push-Prioritatssteuerung",
      },
      {
        dimension: "Teamfreigabe",
        echobell: "Teilbare Kanal-Abonnements",
        competitor: "Gut fur Einzelpersonen, weniger strukturiert fur gemeinsame Bereitschaft",
      },
      {
        dimension: "Alert-Kontext",
        echobell: "Vorlagen, Variablen, Bedingungen und externe Links",
        competitor: "Einfachere Payload-Zustellung, aber leichterer In-App-Workflow",
      },
      {
        dimension: "Am besten fur",
        echobell: "On-call, App Store Connect, Smart Home, Trading, CI/CD",
        competitor: "Allgemeine personliche Push-Benachrichtigungen",
      },
    ],
    chooseTitle: "Wann Echobell die bessere Wahl ist",
    chooseItems: [
      {
        title: "Sie brauchen echte Eskalation",
        description:
          "Wenn ein Push nicht genug ist, kann Echobell auf time-sensitive oder Telefon-Alerts wechseln, ohne Ihre Ereignisquelle zu ersetzen.",
      },
      {
        title: "Sie wollen einen Kanal pro Workflow",
        description:
          "Trennen Sie Produktionsvorfalle, TestFlight-Anderungen, VIP-Mails und Trading-Alerts mit eigener Vorlage und eigenen Abonnenten.",
      },
      {
        title: "Private Zustellung ist wichtig",
        description:
          "Echobell lasst sensible Benachrichtigungsinhalte auf dem Gerat, statt ein serverseitig durchsuchbares Nachrichtenarchiv aufzubauen.",
      },
    ],
    faqTitle: "FAQ zur Pushover-Alternative",
    faqDescription:
      "Haufige Fragen von Teams, die Echobell mit Pushover vergleichen.",
    faqs: [
      {
        question: "Ist Echobell nur fur Entwickler gedacht?",
        answer:
          "Nein. Entwickler, Ops, Trader und Support-Teams nutzen es oft, aber das Grundmodell ist einfach: Sie senden einen Webhook oder eine E-Mail und entscheiden dann, wie dringend das Signal auf dem Telefon ankommen soll.",
      },
      {
        question: "Ersetzt Echobell mein Monitoring-Tool?",
        answer:
          "Nein. Meistens verbessert es die Benachrichtigungsschicht. Grafana, Prometheus, GitHub Actions oder App Store Connect konnen bleiben und ihre Ereignisse an Echobell schicken.",
      },
      {
        question: "Warum wechseln, wenn Pushover schon Pushs sendet?",
        answer:
          "Weil Alerts mit hohen Kosten meist mehr als einen einfachen Push brauchen. Echobell ist starker bei Team-Routing, Telefon-Dringlichkeit und sofort nutzbarem Kontext.",
      },
    ],
    relatedTitle: "Verwandte Anleitungen",
    relatedLinks: [
      {
        label: "Webhook-Benachrichtigungen fur iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Telefon-Alerts fur kritische Vorfalle",
        href: "/features/call-notifications",
      },
      {
        label: "Server-down Telefon-Alerts",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "Probieren Sie die Pushover-Alternative fur Alerts mit hoherem Einsatz",
      description:
        "Laden Sie Echobell herunter, erstellen Sie einen Kanal und testen Sie Ihren ersten Webhook- oder E-Mail-Alert in wenigen Minuten.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation lesen",
    },
  },
  zh: {
    meta: {
      title: "更适合关键告警的 Pushover 替代方案",
      description:
        "对比 Echobell 与 Pushover：iPhone 告警、电话升级、团队频道、隐私模型与 Webhook / 邮件触发能力。",
      keywords: [
        "Pushover 替代方案",
        "Pushover 对比",
        "iPhone 告警应用",
        "电话告警",
        "关键通知应用",
      ],
    },
    breadcrumb: "Pushover 替代方案",
    hero: {
      badge: "竞品对比",
      title: "面向关键 iPhone 告警的 Pushover 替代方案",
      description:
        "Pushover 适合轻量推送提醒。Echobell 更适合需要专注模式突破、电话升级、团队频道共享，以及更清晰 Webhook / 邮件工作流的场景。",
    },
    summary: {
      title: "一句话结论",
      body: "如果漏掉告警的代价很高，Echobell 更合适。它提供更强的送达等级、更好的告警上下文，以及从 Webhook / 邮件到 iPhone 动作的更短路径。",
    },
    cards: [
      {
        title: "更强的关键送达能力",
        description:
          "可从普通通知升级到时间敏感通知或电话提醒，适合宕机、发版失败、行情异动等必须第一时间看到的事件。",
      },
      {
        title: "更适合团队协作",
        description:
          "按频道组织告警并共享订阅链接，而不是为每个接收人单独维护通知路径。",
      },
      {
        title: "默认隐私优先",
        description:
          "通知内容与历史保留在设备端，服务端只保存交付所需的账号与频道元数据。",
      },
    ],
    tableTitle: "Echobell vs Pushover",
    tableDescription:
      "两者都能发送移动通知，差异在于告警一旦真正重要时，整条通知链路是否足够可靠和可协作。",
    tableRows: [
      {
        dimension: "触发方式",
        echobell: "每个频道独立支持 Webhook 或邮件触发",
        competitor: "支持面广，但告警流程更偏轻量",
      },
      {
        dimension: "紧急等级",
        echobell: "普通、时间敏感、电话提醒",
        competitor: "主要是推送优先级控制",
      },
      {
        dimension: "团队共享",
        echobell: "频道订阅可直接共享给团队",
        competitor: "更适合个人使用，团队值班流程支持较弱",
      },
      {
        dimension: "告警上下文",
        echobell: "模板、变量、条件、外部链接",
        competitor: "交付简单直接，但上下文承载较轻",
      },
      {
        dimension: "更适合",
        echobell: "值班、App Store Connect、智能家居、交易、CI/CD",
        competitor: "通用型个人推送提醒",
      },
    ],
    chooseTitle: "什么时候更应该选 Echobell",
    chooseItems: [
      {
        title: "你需要真正的升级路径",
        description:
          "当普通推送不够时，Echobell 可以把同一个事件源升级为时间敏感通知或电话提醒，而不必替换现有监控系统。",
      },
      {
        title: "你希望按工作流分频道",
        description:
          "把生产故障、TestFlight 变化、VIP 邮件、交易信号拆分到不同频道，分别设置模板和订阅者。",
      },
      {
        title: "你在意私密交付",
        description:
          "Echobell 不依赖服务端消息历史来提供体验，敏感通知内容留在设备端更稳妥。",
      },
    ],
    faqTitle: "Pushover 替代方案常见问题",
    faqDescription: "团队在对比 Echobell 与 Pushover 时最常见的问题。",
    faqs: [
      {
        question: "Echobell 只适合开发者吗？",
        answer:
          "不是。开发者、运维、交易者和支持团队最常用，但核心模型很简单：发送 Webhook 或邮件，再决定它应该以多高优先级送达手机。",
      },
      {
        question: "Echobell 会替代我的监控系统吗？",
        answer:
          "通常不会。它更像是升级通知层。你可以继续使用 Grafana、Prometheus、GitHub Actions 或 App Store Connect，只把事件送进 Echobell。",
      },
      {
        question: "如果 Pushover 已经能发推送，为什么还要换？",
        answer:
          "因为真正昂贵的告警通常不只需要一个推送。Echobell 在团队共享、电话级提醒和可操作的告警上下文上更强。",
      },
    ],
    relatedTitle: "相关配置指南",
    relatedLinks: [
      {
        label: "iPhone Webhook 通知",
        href: "/features/webhooks",
      },
      {
        label: "关键事件电话告警",
        href: "/features/call-notifications",
      },
      {
        label: "服务器宕机电话告警",
        href: "/server-down-phone-call-alerts",
      },
    ],
    cta: {
      title: "试试更适合关键告警的替代方案",
      description:
        "下载 Echobell，创建频道，并在几分钟内测试第一条 Webhook 或邮件告警。",
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
  const canonical = new URL(localizeUrl("/pushover-alternative", lang), baseUrl).toString();
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
        "x-default": localizeUrl("/pushover-alternative", "en"),
        ...Object.fromEntries(
          supportedLanguages.map((locale) => [
            locale,
            localizeUrl("/pushover-alternative", locale),
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

export default async function PushoverAlternativePage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const dimensionLabel = tableDimensionLabel[lang as SupportedLanguage];
  const canonical = new URL(localizeUrl("/pushover-alternative", lang), baseUrl).toString();

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: t.breadcrumb,
              href: localizeUrl("/pushover-alternative", lang),
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
        accentColor="orange"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
              {t.summary.title}
            </p>
            <p className="mt-3 max-w-4xl text-lg text-neutral-700 dark:text-neutral-300">
              {t.summary.body}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.cards.map((item) => (
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

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.tableTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.tableDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid grid-cols-3 border-b border-neutral-200 text-sm font-semibold dark:border-neutral-800">
              <div className="px-4 py-4">{dimensionLabel}</div>
              <div className="px-4 py-4">Echobell</div>
              <div className="px-4 py-4">Pushover</div>
            </div>
            {t.tableRows.map((row) => (
              <div
                key={row.dimension}
                className="grid grid-cols-1 gap-3 border-b border-neutral-200 px-4 py-4 last:border-b-0 md:grid-cols-3 dark:border-neutral-800"
              >
                <div className="font-medium">{row.dimension}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {row.echobell}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {row.competitor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.chooseTitle}
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {t.chooseItems.map((item) => (
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
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
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
                  className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-orange-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-orange-700"
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
