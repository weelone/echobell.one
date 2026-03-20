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
  urgencyTitle: string;
  urgencyDescription: string;
  urgencyCards: Array<{
    title: string;
    description: string;
  }>;
  stepsTitle: string;
  stepsDescription: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  useCasesTitle: string;
  useCases: Array<{
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
      title: "Bypass iOS Focus Mode with Time-Sensitive Alerts",
      description:
        "Need alerts that bypass iOS Focus Mode? Use Echobell time-sensitive notifications and phone call escalation for server incidents, App Review updates, and critical events.",
      keywords: [
        "focus mode bypass notification",
        "time sensitive notification ios app",
        "bypass ios focus mode notification",
        "critical alerts iphone",
        "ios alert app",
      ],
    },
    breadcrumb: "Focus Mode Alerts",
    hero: {
      badge: "Time-Sensitive Alerts",
      title: "Get critical alerts through iOS Focus Mode",
      description:
        "Standard push notifications are easy to miss during sleep, deep work, or travel. Echobell lets you escalate important events to time-sensitive notifications or phone call alerts so they still reach your iPhone when they matter most.",
    },
    summary: {
      title: "Why this matters",
      body: "If a production outage, App Store review change, or security event arrives as a regular push, iOS may hide it behind Focus Mode. Echobell gives you a cleaner way to decide which events deserve to break through and which should stay quiet.",
    },
    urgencyTitle: "Choose the right urgency level",
    urgencyDescription:
      "The goal is not to bypass everything. The goal is to keep normal noise quiet while letting the few signals that matter cut through.",
    urgencyCards: [
      {
        title: "Standard notifications",
        description:
          "Best for routine status changes, low-risk updates, and informational workflows that can wait until the user is available.",
      },
      {
        title: "Time-sensitive alerts",
        description:
          "Best for incidents that should break through Focus Mode without feeling like a full wake-up call, such as failed deploys, App Review decisions, or urgent support escalations.",
      },
      {
        title: "Phone call alerts",
        description:
          "Best for outages, security incidents, water leaks, or other events where the phone needs to ring until someone notices.",
      },
    ],
    stepsTitle: "How to set up Focus Mode bypass alerts",
    stepsDescription:
      "You only need a channel, a trigger source, and the right notification type.",
    steps: [
      {
        title: "Create a channel for high-priority events",
        description:
          "Separate critical alerts from routine updates so you only escalate the workflows that deserve to break through Focus Mode.",
      },
      {
        title: "Connect your webhook or email trigger",
        description:
          "Use a webhook for tools like Grafana, Prometheus, GitHub Actions, or App Store Connect. Use email when the source only supports inbox-based notifications.",
      },
      {
        title: "Set the channel to time-sensitive or calling",
        description:
          "Pick time-sensitive notifications when you need a strong nudge and switch to phone calls when the event truly cannot wait.",
      },
    ],
    useCasesTitle: "Workflows where Focus Mode bypass matters",
    useCases: [
      {
        title: "On-call incident response",
        description:
          "Wake the right engineer when a production system goes down instead of letting a muted push wait until morning.",
      },
      {
        title: "App Store Connect review changes",
        description:
          "Get immediate iPhone alerts when a build is approved, rejected, or receives TestFlight feedback.",
      },
      {
        title: "Smart home and safety alerts",
        description:
          "Use stronger delivery for water leaks, smoke alarms, or security events that need attention even when the phone is in a Focus state.",
      },
    ],
    faqTitle: "Focus Mode Alert FAQ",
    faqDescription:
      "Common questions about time-sensitive and phone call alerts on iPhone.",
    faqs: [
      {
        question: "Can every Echobell alert bypass Focus Mode?",
        answer:
          "No. You decide which channels use standard delivery, time-sensitive alerts, or phone calls. That lets you keep the signal high and the noise low.",
      },
      {
        question: "When should I use time-sensitive alerts instead of a phone call?",
        answer:
          "Use time-sensitive alerts for issues that are important but do not justify waking someone immediately. Use phone calls for outages, security events, or other incidents where a missed alert is very expensive.",
      },
      {
        question: "Do I need a special integration to make this work?",
        answer:
          "No. Any trigger source that can send a webhook or email into Echobell can use the higher-priority delivery modes.",
      },
    ],
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        label: "Phone call alerts for critical incidents",
        href: "/features/call-notifications",
      },
      {
        label: "Webhook notifications for iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Email to push notifications",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "Set up alerts that still reach you during Focus Mode",
      description:
        "Download Echobell, create a priority channel, and test one critical workflow on your iPhone today.",
      primary: "Download Echobell",
      secondary: "Read the docs",
    },
  },
  es: {
    meta: {
      title: "Supera iOS Focus Mode con alertas time-sensitive",
      description:
        "¿Necesitas alertas que atraviesen iOS Focus Mode? Usa notificaciones time-sensitive y llamadas de Echobell para incidentes de servidor, App Review y otros eventos criticos.",
      keywords: [
        "notificacion saltar focus mode",
        "app ios notificacion time sensitive",
        "bypass ios focus mode",
        "alertas criticas iphone",
        "app alertas ios",
      ],
    },
    breadcrumb: "Alertas Focus Mode",
    hero: {
      badge: "Alertas Time-Sensitive",
      title: "Haz que las alertas criticas lleguen a traves de iOS Focus Mode",
      description:
        "Los pushes normales se pierden facilmente mientras duermes o trabajas a fondo. Echobell te permite subir eventos importantes a notificaciones time-sensitive o llamadas para que sigan llegando al iPhone cuando de verdad importan.",
    },
    summary: {
      title: "Por que importa",
      body: "Si una caida de produccion, un cambio de App Review o un evento de seguridad llega como un push normal, iOS puede ocultarlo detras de Focus Mode. Echobell te ayuda a decidir que debe atravesarlo y que debe quedarse en silencio.",
    },
    urgencyTitle: "Elige el nivel de urgencia correcto",
    urgencyDescription:
      "La idea no es saltarse todo. La idea es mantener el ruido normal en silencio y dejar pasar solo las senales importantes.",
    urgencyCards: [
      {
        title: "Notificaciones estandar",
        description:
          "Mejor para cambios rutinarios de estado, actualizaciones de bajo riesgo y workflows informativos que pueden esperar.",
      },
      {
        title: "Alertas time-sensitive",
        description:
          "Mejor para incidentes que deben atravesar Focus Mode sin llegar a ser una llamada completa, como despliegues fallidos, decisiones de App Review o escalaciones urgentes.",
      },
      {
        title: "Alertas por llamada",
        description:
          "Mejor para caidas, incidentes de seguridad, fugas de agua u otros eventos donde el telefono tiene que sonar hasta que alguien lo note.",
      },
    ],
    stepsTitle: "Como configurar alertas que superen Focus Mode",
    stepsDescription:
      "Solo necesitas un canal, una fuente de eventos y el tipo de notificacion adecuado.",
    steps: [
      {
        title: "Crea un canal para eventos de alta prioridad",
        description:
          "Separa alertas criticas de actualizaciones rutinarias para escalar solo los workflows que merecen atravesar Focus Mode.",
      },
      {
        title: "Conecta tu trigger por webhook o email",
        description:
          "Usa webhook con Grafana, Prometheus, GitHub Actions o App Store Connect. Usa email cuando la fuente solo soporte notificaciones por bandeja.",
      },
      {
        title: "Configura el canal como time-sensitive o calling",
        description:
          "Usa time-sensitive cuando necesitas un empujon fuerte y cambia a llamadas cuando el evento de verdad no puede esperar.",
      },
    ],
    useCasesTitle: "Workflows donde Focus Mode importa",
    useCases: [
      {
        title: "Respuesta on-call",
        description:
          "Despierta al ingeniero correcto cuando cae produccion en lugar de dejar un push silenciado hasta la manana.",
      },
      {
        title: "Cambios de App Store Connect",
        description:
          "Recibe alertas inmediatas cuando un build se aprueba, se rechaza o llega feedback de TestFlight.",
      },
      {
        title: "Alertas de hogar y seguridad",
        description:
          "Usa una entrega mas fuerte para fugas de agua, humo o eventos de seguridad incluso si el telefono esta en Focus.",
      },
    ],
    faqTitle: "FAQ de alertas Focus Mode",
    faqDescription:
      "Preguntas comunes sobre alertas time-sensitive y llamadas en iPhone.",
    faqs: [
      {
        question: "¿Todas las alertas de Echobell pueden saltar Focus Mode?",
        answer:
          "No. Tu decides que canales usan entrega estandar, time-sensitive o llamadas. Asi mantienes alta la senal y bajo el ruido.",
      },
      {
        question: "¿Cuando uso time-sensitive en vez de llamada?",
        answer:
          "Usa time-sensitive para problemas importantes que no justifican despertar a alguien de inmediato. Usa llamadas para caidas, seguridad o incidentes donde perder una alerta es muy caro.",
      },
      {
        question: "¿Necesito una integracion especial?",
        answer:
          "No. Cualquier fuente que pueda enviar un webhook o email a Echobell puede usar estos modos de mayor prioridad.",
      },
    ],
    relatedTitle: "Paginas relacionadas",
    relatedLinks: [
      {
        label: "Llamadas para incidentes criticos",
        href: "/features/call-notifications",
      },
      {
        label: "Webhook notifications para iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Email a notificaciones push",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "Configura alertas que sigan llegando durante Focus Mode",
      description:
        "Descarga Echobell, crea un canal prioritario y prueba hoy un workflow critico en tu iPhone.",
      primary: "Descargar Echobell",
      secondary: "Leer la documentacion",
    },
  },
  fr: {
    meta: {
      title: "Contournez iOS Focus Mode avec des alertes time-sensitive",
      description:
        "Besoin d alertes qui passent au travers d iOS Focus Mode ? Utilisez les notifications time-sensitive et les appels d Echobell pour les incidents serveur, App Review et autres evenements critiques.",
      keywords: [
        "contourner focus mode notification",
        "application ios notification time sensitive",
        "bypass ios focus mode",
        "alertes critiques iphone",
        "application alertes ios",
      ],
    },
    breadcrumb: "Alertes Focus Mode",
    hero: {
      badge: "Alertes Time-Sensitive",
      title: "Faites passer les alertes critiques au travers d iOS Focus Mode",
      description:
        "Les pushs standards se ratent facilement pendant le sommeil ou le travail profond. Echobell permet d escalader les evenements importants en notifications time-sensitive ou en appels pour qu ils atteignent encore votre iPhone quand cela compte vraiment.",
    },
    summary: {
      title: "Pourquoi c est important",
      body: "Si une panne de production, un changement d App Review ou un evenement de securite arrive en push normal, iOS peut le cacher derriere Focus Mode. Echobell vous aide a choisir ce qui doit passer et ce qui doit rester silencieux.",
    },
    urgencyTitle: "Choisissez le bon niveau d urgence",
    urgencyDescription:
      "Le but n est pas de tout contourner. Le but est de garder le bruit normal silencieux et de laisser passer les quelques signaux qui comptent.",
    urgencyCards: [
      {
        title: "Notifications standard",
        description:
          "Ideales pour les changements d etat courants, les mises a jour a faible risque et les workflows informatifs qui peuvent attendre.",
      },
      {
        title: "Alertes time-sensitive",
        description:
          "Ideales pour les incidents qui doivent traverser Focus Mode sans aller jusqu a un reveil complet, comme un deploiement casse ou une decision App Review.",
      },
      {
        title: "Alertes par appel",
        description:
          "Ideales pour les pannes, incidents de securite, fuites d eau ou tout evenement pour lequel le telephone doit sonner jusqu a ce que quelqu un reagisse.",
      },
    ],
    stepsTitle: "Comment configurer des alertes qui passent Focus Mode",
    stepsDescription:
      "Il vous faut seulement un canal, une source de declenchement et le bon type de notification.",
    steps: [
      {
        title: "Creez un canal pour les evenements prioritaires",
        description:
          "Separez les alertes critiques des mises a jour courantes afin de n escalader que les workflows qui doivent vraiment passer Focus Mode.",
      },
      {
        title: "Connectez votre webhook ou trigger email",
        description:
          "Utilisez un webhook pour Grafana, Prometheus, GitHub Actions ou App Store Connect. Utilisez l email quand la source ne sait faire que cela.",
      },
      {
        title: "Passez le canal en time-sensitive ou calling",
        description:
          "Choisissez time-sensitive pour une forte impulsion et passez aux appels quand l evenement ne peut vraiment pas attendre.",
      },
    ],
    useCasesTitle: "Workflows ou Focus Mode compte vraiment",
    useCases: [
      {
        title: "Reponse on-call",
        description:
          "Reveillez le bon ingenieur quand la production tombe, au lieu de laisser un push silencieux jusqu au matin.",
      },
      {
        title: "Changements App Store Connect",
        description:
          "Recevez une alerte immediate quand un build est approuve, rejete ou recoit un feedback TestFlight.",
      },
      {
        title: "Alertes maison et securite",
        description:
          "Utilisez une livraison plus forte pour les fuites d eau, la fumee ou la securite, meme quand le telephone est en Focus.",
      },
    ],
    faqTitle: "FAQ Focus Mode",
    faqDescription:
      "Questions frequentes sur les alertes time-sensitive et les appels sur iPhone.",
    faqs: [
      {
        question: "Toutes les alertes Echobell peuvent elles contourner Focus Mode ?",
        answer:
          "Non. Vous choisissez quels canaux utilisent le mode standard, time-sensitive ou les appels. Cela permet de garder un bon signal sans augmenter tout le bruit.",
      },
      {
        question: "Quand utiliser time-sensitive au lieu d un appel ?",
        answer:
          "Utilisez time-sensitive pour les problemes importants qui ne justifient pas de reveiller quelqu un tout de suite. Utilisez l appel pour les pannes, la securite ou les incidents couteux.",
      },
      {
        question: "Ai je besoin d une integration speciale ?",
        answer:
          "Non. Toute source capable d envoyer un webhook ou un email a Echobell peut utiliser ces niveaux de priorite plus eleves.",
      },
    ],
    relatedTitle: "Pages liees",
    relatedLinks: [
      {
        label: "Alertes par appel pour incidents critiques",
        href: "/features/call-notifications",
      },
      {
        label: "Notifications webhook pour iPhone",
        href: "/features/webhooks",
      },
      {
        label: "Email vers notifications push",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "Configurez des alertes qui vous atteignent encore pendant Focus Mode",
      description:
        "Telechargez Echobell, creez un canal prioritaire et testez un workflow critique sur votre iPhone des aujourd hui.",
      primary: "Telecharger Echobell",
      secondary: "Lire la documentation",
    },
  },
  ja: {
    meta: {
      title: "time-sensitive 通知で iOS Focus Mode を突破する",
      description:
        "iOS Focus Mode を突破できる通知が必要ですか？ Echobell の time-sensitive 通知と電話アラートを使えば、サーバー障害や App Review の変化を iPhone に届けられます。",
      keywords: [
        "Focus Mode 突破 通知",
        "iOS time sensitive 通知 アプリ",
        "iPhone 重要アラート",
        "集中モード 通知",
        "iOS アラートアプリ",
      ],
    },
    breadcrumb: "Focus Mode アラート",
    hero: {
      badge: "Time-Sensitive 通知",
      title: "重要アラートを iOS Focus Mode 越しに届ける",
      description:
        "通常の push 通知は、睡眠中や深い作業中には見逃されがちです。Echobell なら重要イベントを time-sensitive 通知や電話通知へ引き上げ、必要な時に iPhone へ届かせられます。",
    },
    summary: {
      title: "なぜ重要なのか",
      body: "本番障害、App Review の変化、セキュリティイベントが通常の push で届くと、iOS は Focus Mode の裏に隠してしまうことがあります。Echobell は、突破すべき通知と静かにすべき通知を分けやすくします。",
    },
    urgencyTitle: "正しい緊急度を選ぶ",
    urgencyDescription:
      "目的は全部を突破させることではありません。通常ノイズは静かにし、本当に重要な少数のシグナルだけを通すことです。",
    urgencyCards: [
      {
        title: "標準通知",
        description:
          "定常的な状態変化、低リスクの更新、後で見ても問題ない情報ワークフローに向いています。",
      },
      {
        title: "time-sensitive 通知",
        description:
          "Focus Mode を越えてほしいが、電話で起こすほどではない障害向けです。デプロイ失敗、App Review、緊急サポートなどに向きます。",
      },
      {
        title: "電話アラート",
        description:
          "障害、セキュリティ事故、水漏れなど、誰かが気付くまで電話が鳴るべきイベントに向いています。",
      },
    ],
    stepsTitle: "Focus Mode を突破するアラートの設定方法",
    stepsDescription:
      "必要なのは、チャンネル、トリガー元、そして適切な通知タイプだけです。",
    steps: [
      {
        title: "高優先度イベント用のチャンネルを作る",
        description:
          "通常更新と重要アラートを分け、本当に Focus Mode を突破すべきワークフローだけをエスカレーションします。",
      },
      {
        title: "Webhook またはメールのトリガーを接続する",
        description:
          "Grafana、Prometheus、GitHub Actions、App Store Connect なら Webhook、メールしか使えないソースならメールを使います。",
      },
      {
        title: "チャンネルを time-sensitive または calling にする",
        description:
          "強めに気付かせたい時は time-sensitive、待てないイベントなら電話アラートにします。",
      },
    ],
    useCasesTitle: "Focus Mode 突破が効くワークフロー",
    useCases: [
      {
        title: "オンコール対応",
        description:
          "本番が落ちた時に、朝までミュート push を待つのではなく、正しい担当者を起こせます。",
      },
      {
        title: "App Store Connect の審査変化",
        description:
          "ビルドの承認、却下、TestFlight フィードバックを iPhone に即時で届けられます。",
      },
      {
        title: "スマートホームと安全通知",
        description:
          "水漏れ、煙、セキュリティイベントなどを、Focus 中でも気付きやすい形で届けられます。",
      },
    ],
    faqTitle: "Focus Mode アラート FAQ",
    faqDescription:
      "iPhone の time-sensitive 通知と電話アラートに関するよくある質問です。",
    faqs: [
      {
        question: "Echobell の全通知が Focus Mode を突破できますか？",
        answer:
          "いいえ。どのチャンネルを標準、time-sensitive、電話にするかは自分で決められます。だからノイズを増やさず、重要度だけ上げられます。",
      },
      {
        question: "電話ではなく time-sensitive を使うべきなのはいつですか？",
        answer:
          "重要だが今すぐ誰かを起こすほどではない問題には time-sensitive を使います。障害やセキュリティなど見逃しコストが高いものは電話が向いています。",
      },
      {
        question: "特別な連携が必要ですか？",
        answer:
          "いいえ。Webhook かメールを Echobell に送れるソースなら、そのまま高優先度の配信モードを使えます。",
      },
    ],
    relatedTitle: "関連ページ",
    relatedLinks: [
      {
        label: "重大インシデント向け電話アラート",
        href: "/features/call-notifications",
      },
      {
        label: "iPhone 向け Webhook 通知",
        href: "/features/webhooks",
      },
      {
        label: "メールから push 通知へ",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "Focus Mode 中でも届くアラートを設定する",
      description:
        "Echobell をダウンロードして優先チャンネルを作り、重要なワークフローを今日 iPhone で試してください。",
      primary: "Echobell をダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "iOS Focus Mode mit time-sensitive Alerts umgehen",
      description:
        "Brauchen Sie Alerts, die iOS Focus Mode uberwinden? Nutzen Sie Echobell time-sensitive Benachrichtigungen und Telefon-Alerts fur Servervorfalle, App Review Updates und andere kritische Ereignisse.",
      keywords: [
        "Focus Mode umgehen Benachrichtigung",
        "time sensitive iOS App",
        "kritische Alerts iPhone",
        "iOS Fokusmodus Alert",
        "iOS Alert App",
      ],
    },
    breadcrumb: "Fokusmodus-Alarme",
    hero: {
      badge: "Time-Sensitive Alerts",
      title: "Kritische Alerts trotz iOS Focus Mode erhalten",
      description:
        "Standard-Pushs gehen im Schlaf oder bei tiefer Arbeit leicht unter. Echobell hebt wichtige Ereignisse auf time-sensitive Benachrichtigungen oder Telefon-Alerts an, damit sie Ihr iPhone trotzdem erreichen.",
    },
    summary: {
      title: "Warum das wichtig ist",
      body: "Wenn ein Produktionsausfall, eine App-Review-Anderung oder ein Sicherheitsereignis als normaler Push ankommt, kann iOS es hinter Focus Mode verstecken. Echobell hilft dabei, zwischen wirklich dringenden und leisen Ereignissen sauber zu unterscheiden.",
    },
    urgencyTitle: "Wahlen Sie die richtige Dringlichkeitsstufe",
    urgencyDescription:
      "Das Ziel ist nicht, alles zu umgehen. Das Ziel ist, normalen Larm still zu halten und nur die wenigen wichtigen Signale durchzulassen.",
    urgencyCards: [
      {
        title: "Standard-Benachrichtigungen",
        description:
          "Am besten fur routine Statusanderungen, risikoarme Updates und informative Workflows, die warten konnen.",
      },
      {
        title: "Time-sensitive Alerts",
        description:
          "Am besten fur Vorfalle, die Focus Mode durchbrechen sollen, ohne gleich ein Weckruf zu sein, etwa fehlgeschlagene Deployments oder App-Review-Entscheidungen.",
      },
      {
        title: "Telefon-Alerts",
        description:
          "Am besten fur Ausfalle, Sicherheitsvorfalle, Wasserlecks oder andere Ereignisse, bei denen das Telefon klingeln muss, bis jemand reagiert.",
      },
    ],
    stepsTitle: "So richten Sie Alerts ein, die Focus Mode uberwinden",
    stepsDescription:
      "Sie brauchen nur einen Kanal, eine Triggerquelle und den richtigen Benachrichtigungstyp.",
    steps: [
      {
        title: "Erstellen Sie einen Kanal fur hohe Prioritat",
        description:
          "Trennen Sie kritische Alerts von Routine-Updates, damit nur die richtigen Workflows Focus Mode durchbrechen.",
      },
      {
        title: "Verbinden Sie Webhook oder E-Mail-Trigger",
        description:
          "Nutzen Sie Webhooks mit Grafana, Prometheus, GitHub Actions oder App Store Connect. E-Mail eignet sich fur Quellen mit inboxbasierten Benachrichtigungen.",
      },
      {
        title: "Stellen Sie den Kanal auf time-sensitive oder calling",
        description:
          "Nehmen Sie time-sensitive fur einen starken Schubs und wechseln Sie zu Anrufen, wenn das Ereignis wirklich nicht warten darf.",
      },
    ],
    useCasesTitle: "Workflows, bei denen Focus Mode wichtig ist",
    useCases: [
      {
        title: "On-call Incident Response",
        description:
          "Wecken Sie den richtigen Engineer, wenn die Produktion ausfallt, statt einen stummen Push bis zum Morgen warten zu lassen.",
      },
      {
        title: "App Store Connect Anderungen",
        description:
          "Erhalten Sie sofortige iPhone-Alerts, wenn ein Build genehmigt, abgelehnt oder mit TestFlight-Feedback versehen wird.",
      },
      {
        title: "Smart-Home- und Sicherheitsalarme",
        description:
          "Nutzen Sie starkere Zustellung fur Wasserlecks, Rauch oder Sicherheit, auch wenn das Telefon im Fokusmodus ist.",
      },
    ],
    faqTitle: "FAQ zu Fokusmodus-Alerts",
    faqDescription:
      "Haufige Fragen zu time-sensitive Benachrichtigungen und Telefon-Alerts auf dem iPhone.",
    faqs: [
      {
        question: "Kann jeder Echobell-Alert den Focus Mode umgehen?",
        answer:
          "Nein. Sie entscheiden pro Kanal uber Standard-, time-sensitive- oder Telefon-Zustellung. So bleibt das Signal hoch und das Rauschen niedrig.",
      },
      {
        question: "Wann nutze ich time-sensitive statt eines Anrufs?",
        answer:
          "Time-sensitive eignet sich fur wichtige Probleme, die niemanden sofort wecken mussen. Telefon-Alerts eignen sich fur Ausfalle, Sicherheit oder Incidents mit hohen Kosten bei verpasster Reaktion.",
      },
      {
        question: "Brauche ich dafur eine spezielle Integration?",
        answer:
          "Nein. Jede Quelle, die Webhook oder E-Mail an Echobell senden kann, kann auch die hoheren Zustellstufen nutzen.",
      },
    ],
    relatedTitle: "Verwandte Seiten",
    relatedLinks: [
      {
        label: "Telefon-Alerts fur kritische Vorfalle",
        href: "/features/call-notifications",
      },
      {
        label: "Webhook-Benachrichtigungen fur iPhone",
        href: "/features/webhooks",
      },
      {
        label: "E-Mail zu Push-Benachrichtigungen",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "Richten Sie Alerts ein, die Sie auch im Focus Mode erreichen",
      description:
        "Laden Sie Echobell herunter, erstellen Sie einen Prioritatskanal und testen Sie heute einen kritischen Workflow auf Ihrem iPhone.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation lesen",
    },
  },
  zh: {
    meta: {
      title: "用时间敏感通知突破 iOS 专注模式",
      description:
        "需要能突破 iOS 专注模式的关键告警？使用 Echobell 的时间敏感通知与电话提醒处理服务器故障、App 审核变化和其他关键事件。",
      keywords: [
        "突破专注模式通知",
        "iOS 时间敏感通知应用",
        "专注模式 告警",
        "关键 iPhone 通知",
        "iOS 告警应用",
      ],
    },
    breadcrumb: "专注模式告警",
    hero: {
      badge: "时间敏感通知",
      title: "让关键告警穿透 iOS 专注模式",
      description:
        "在睡眠、深度工作或出行时，普通推送很容易被忽略。Echobell 可以把重要事件升级为时间敏感通知或电话提醒，让它们在真正重要时仍然送达到你的 iPhone。",
    },
    summary: {
      title: "为什么这很重要",
      body: "如果生产故障、App 审核变化或安全事件只是普通推送，iOS 很可能会把它们挡在专注模式后面。Echobell 让你清楚地区分哪些事件应该突破、哪些事件应该保持安静。",
    },
    urgencyTitle: "为不同事件选择正确的送达级别",
    urgencyDescription:
      "目标不是让所有通知都突破专注模式，而是把日常噪音留在后台，只让真正重要的少数信号穿透出来。",
    urgencyCards: [
      {
        title: "普通通知",
        description:
          "适合常规状态变化、低风险更新，以及用户空闲时再处理也没问题的信息型工作流。",
      },
      {
        title: "时间敏感通知",
        description:
          "适合需要突破专注模式但还不到“必须打电话”的事件，比如发版失败、App 审核结果、紧急支持升级等。",
      },
      {
        title: "电话提醒",
        description:
          "适合宕机、安全事故、漏水、烟雾等必须让手机响起来直到有人注意到的事件。",
      },
    ],
    stepsTitle: "如何配置可突破专注模式的告警",
    stepsDescription: "你只需要一个频道、一个触发源，以及正确的通知类型。",
    steps: [
      {
        title: "为高优先级事件创建独立频道",
        description:
          "把关键告警与常规更新分开，只对真正值得突破专注模式的工作流使用升级送达。",
      },
      {
        title: "接入 Webhook 或邮件触发源",
        description:
          "Grafana、Prometheus、GitHub Actions、App Store Connect 等适合用 Webhook；只支持邮件的系统则走邮件触发。",
      },
      {
        title: "把频道设置为时间敏感或电话提醒",
        description:
          "需要强提醒但不必叫醒人时用时间敏感通知；真正不能错过的事件则直接升级为电话提醒。",
      },
    ],
    useCasesTitle: "这些场景最需要突破专注模式",
    useCases: [
      {
        title: "值班事故响应",
        description:
          "在生产系统宕机时叫醒正确的工程师，而不是让一条被静音的推送等到早上才被看到。",
      },
      {
        title: "App Store Connect 审核变化",
        description:
          "当构建通过、被拒或收到 TestFlight 反馈时，第一时间在 iPhone 上收到提醒。",
      },
      {
        title: "智能家居与安全告警",
        description:
          "对于漏水、烟雾或安防事件，使用更强送达方式，即使处于专注模式也能及时看到。",
      },
    ],
    faqTitle: "专注模式告警常见问题",
    faqDescription: "关于 iPhone 时间敏感通知和电话提醒的常见问题。",
    faqs: [
      {
        question: "Echobell 的所有通知都能突破专注模式吗？",
        answer:
          "不是。你可以按频道决定使用普通通知、时间敏感通知或电话提醒，这样既能保留高信噪比，也不会把所有通知都升级。",
      },
      {
        question: "什么时候该用时间敏感通知，什么时候该用电话提醒？",
        answer:
          "对重要但不需要立刻叫醒人的问题，用时间敏感通知；对宕机、安全事件或任何错过代价很高的事故，用电话提醒。",
      },
      {
        question: "要实现这个效果，需要特殊集成吗？",
        answer:
          "不需要。任何能通过 Webhook 或邮件进入 Echobell 的事件源，都可以使用更高优先级的送达模式。",
      },
    ],
    relatedTitle: "相关页面",
    relatedLinks: [
      {
        label: "关键事件电话告警",
        href: "/features/call-notifications",
      },
      {
        label: "iPhone Webhook 通知",
        href: "/features/webhooks",
      },
      {
        label: "邮件转推送通知",
        href: "/features/email-triggers",
      },
    ],
    cta: {
      title: "配置真正能穿透专注模式的关键告警",
      description:
        "下载 Echobell，创建高优先级频道，并在今天就用 iPhone 测试一条关键工作流。",
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
  const canonical = new URL(localizeUrl("/focus-mode-alerts", lang), baseUrl).toString();
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
        "x-default": localizeUrl("/focus-mode-alerts", "en"),
        ...Object.fromEntries(
          supportedLanguages.map((locale) => [
            locale,
            localizeUrl("/focus-mode-alerts", locale),
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

export default async function FocusModeAlertsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(localizeUrl("/focus-mode-alerts", lang), baseUrl).toString();

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
        totalTime="PT5M"
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: t.breadcrumb,
              href: localizeUrl("/focus-mode-alerts", lang),
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
        accentColor="blue"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
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
              {t.urgencyTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.urgencyDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.urgencyCards.map((item) => (
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
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
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
              {t.useCasesTitle}
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.useCases.map((item) => (
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
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
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
                  className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-blue-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-700"
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
