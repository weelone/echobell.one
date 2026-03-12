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
  eventsTitle: string;
  eventsDescription: string;
  events: Array<{
    title: string;
    description: string;
  }>;
  stepsTitle: string;
  stepsDescription: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  teamTitle: string;
  teamCards: Array<{
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
      title: "App Store Connect Review Notifications on iPhone",
      description:
        "Get App Store Connect review notifications on iPhone with Echobell. Route approvals, rejections, TestFlight feedback, and build updates into instant mobile alerts.",
      keywords: [
        "app store connect review notifications",
        "testflight notifications iphone",
        "ios app review alerts",
        "app store connect webhook",
        "iphone alerts for developers",
      ],
    },
    breadcrumb: "App Store Connect Notifications",
    hero: {
      badge: "Indie Developer Use Case",
      title: "Stop refreshing App Store Connect for review changes",
      description:
        "Echobell turns App Store Connect webhooks into instant iPhone alerts so founders, product managers, and mobile engineers see approvals, rejections, releases, and TestFlight feedback as soon as they happen.",
    },
    summary: {
      title: "The real benefit",
      body: "App Review decisions are usually time-sensitive because they affect launches, fixes, and release comms. Echobell gives your team one clean mobile alert stream instead of making people constantly check App Store Connect or wait for inbox noise.",
    },
    eventsTitle: "What you can track",
    eventsDescription:
      "App Store Connect emits a lot of meaningful release events. The key is routing them into a mobile channel that the right people actually watch.",
    events: [
      {
        title: "Review state changes",
        description:
          "See when a build moves to In Review, gets rejected, or becomes Ready for Sale without manually polling the dashboard.",
      },
      {
        title: "TestFlight feedback",
        description:
          "Push critical beta feedback directly to your phone so the product or engineering team can react faster.",
      },
      {
        title: "Build processing and release events",
        description:
          "Use a dedicated channel for release operations and choose time-sensitive delivery for milestones that unblock a launch.",
      },
    ],
    stepsTitle: "How to set it up",
    stepsDescription:
      "Use Echobell as the mobile notification layer on top of App Store Connect webhooks.",
    steps: [
      {
        title: "Create an App Store Connect channel",
        description:
          "Keep app review and TestFlight updates separate from infrastructure or support notifications so the team can act on them quickly.",
      },
      {
        title: "Paste the channel webhook into App Store Connect",
        description:
          "Set up the webhook under Users and Access → Integrations, choose the app, then select the review and TestFlight events you care about.",
      },
      {
        title: "Choose the right alert level",
        description:
          "Use standard alerts for low-stakes updates and time-sensitive delivery for approvals, rejections, or release-blocking events.",
      },
    ],
    teamTitle: "Who should subscribe",
    teamCards: [
      {
        title: "Founders and indie hackers",
        description:
          "Know when a build is approved or rejected without living inside the App Store Connect dashboard.",
      },
      {
        title: "Mobile engineers",
        description:
          "React faster to build processing issues, TestFlight feedback, and review outcomes that change release plans.",
      },
      {
        title: "PM, QA, and launch stakeholders",
        description:
          "Share one channel so everyone sees the same release-status context at the same time.",
      },
    ],
    faqTitle: "App Store Connect Notification FAQ",
    faqDescription:
      "Common questions about sending App Store Connect webhooks to iPhone alerts.",
    faqs: [
      {
        question: "Do I need to change my release workflow to use Echobell?",
        answer:
          "No. App Store Connect remains the source of truth. Echobell only improves the delivery layer so the right people see review and release events immediately on their phones.",
      },
      {
        question: "Can I send these alerts to multiple teammates?",
        answer:
          "Yes. Share the channel subscription with your launch stakeholders so engineering, product, or QA can stay aligned without forwarding messages manually.",
      },
      {
        question: "Should every App Store Connect event be time-sensitive?",
        answer:
          "Usually no. Reserve the higher urgency level for review decisions, release blockers, or feedback that needs fast action. Routine state changes can stay as standard alerts.",
      },
    ],
    relatedTitle: "Related guides",
    relatedLinks: [
      {
        label: "App Store Connect integration doc",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "Focus mode and time-sensitive alerts",
        href: "/focus-mode-alerts",
      },
      {
        label: "Webhook notifications for iPhone",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "Get App Review and TestFlight changes on iPhone the moment they happen",
      description:
        "Download Echobell, wire in your App Store Connect webhook, and stop checking the dashboard manually.",
      primary: "Download Echobell",
      secondary: "Read the docs",
    },
  },
  es: {
    meta: {
      title: "Notificaciones de revision de App Store Connect en iPhone",
      description:
        "Recibe notificaciones de revision de App Store Connect en iPhone con Echobell. Convierte aprobaciones, rechazos, feedback de TestFlight y builds en alertas moviles instantaneas.",
      keywords: [
        "app store connect review notifications",
        "testflight notifications iphone",
        "ios app review alerts",
        "app store connect webhook",
        "iphone alerts for developers",
      ],
    },
    breadcrumb: "Notificaciones de App Store Connect",
    hero: {
      badge: "Caso para indie developers",
      title: "Deja de refrescar App Store Connect para ver cambios de review",
      description:
        "Echobell convierte los webhooks de App Store Connect en alertas instantaneas para iPhone para que founders, PMs e ingenieros moviles vean aprobaciones, rechazos, lanzamientos y feedback de TestFlight en cuanto suceden.",
    },
    summary: {
      title: "El beneficio real",
      body: "Las decisiones de App Review suelen ser sensibles al tiempo porque afectan lanzamientos, fixes y comunicacion. Echobell le da a tu equipo un flujo movil limpio en vez de obligarlo a mirar el panel o el inbox.",
    },
    eventsTitle: "Que puedes seguir",
    eventsDescription:
      "App Store Connect emite muchos eventos de release importantes. La clave es dirigirlos a un canal movil que la gente correcta realmente mire.",
    events: [
      {
        title: "Cambios de estado de review",
        description:
          "Ve cuando un build pasa a In Review, se rechaza o queda Ready for Sale sin tener que refrescar el dashboard.",
      },
      {
        title: "Feedback de TestFlight",
        description:
          "Envía feedback beta critico directamente al telefono para que producto o ingenieria reaccionen antes.",
      },
      {
        title: "Procesamiento de builds y releases",
        description:
          "Usa un canal dedicado a operaciones de release y elige entrega time-sensitive para hitos que desbloquean un lanzamiento.",
      },
    ],
    stepsTitle: "Como configurarlo",
    stepsDescription:
      "Usa Echobell como la capa movil de notificaciones encima de los webhooks de App Store Connect.",
    steps: [
      {
        title: "Crea un canal de App Store Connect",
        description:
          "Separa review y TestFlight de las alertas de infraestructura o soporte para que el equipo pueda actuar mas rapido.",
      },
      {
        title: "Pega el webhook del canal en App Store Connect",
        description:
          "Configura el webhook en Users and Access → Integrations, elige la app y selecciona los eventos de review y TestFlight que te importan.",
      },
      {
        title: "Elige el nivel de alerta correcto",
        description:
          "Usa alertas estandar para cambios menores y time-sensitive para aprobaciones, rechazos o eventos que bloquean el release.",
      },
    ],
    teamTitle: "Quien deberia suscribirse",
    teamCards: [
      {
        title: "Founders e indie hackers",
        description:
          "Saben cuando un build se aprueba o se rechaza sin vivir dentro de App Store Connect.",
      },
      {
        title: "Ingenieros moviles",
        description:
          "Reaccionan mas rapido a problemas de builds, feedback de TestFlight y outcomes de review que cambian el plan de release.",
      },
      {
        title: "PM, QA y responsables del lanzamiento",
        description:
          "Comparten un mismo canal para ver el mismo contexto de release al mismo tiempo.",
      },
    ],
    faqTitle: "FAQ de notificaciones de App Store Connect",
    faqDescription:
      "Preguntas comunes sobre enviar webhooks de App Store Connect a alertas de iPhone.",
    faqs: [
      {
        question: "¿Tengo que cambiar mi workflow de release para usar Echobell?",
        answer:
          "No. App Store Connect sigue siendo la fuente de verdad. Echobell solo mejora la capa de entrega para que las personas correctas vean los eventos en el telefono de inmediato.",
      },
      {
        question: "¿Puedo enviar estas alertas a varios companeros?",
        answer:
          "Si. Comparte la suscripcion del canal con quienes participan del lanzamiento para que ingenieria, producto o QA se mantengan alineados sin reenviar mensajes.",
      },
      {
        question: "¿Todos los eventos deberian ser time-sensitive?",
        answer:
          "Normalmente no. Reserva la urgencia alta para decisiones de review, bloqueos de release o feedback que requiere accion rapida.",
      },
    ],
    relatedTitle: "Guias relacionadas",
    relatedLinks: [
      {
        label: "Doc de integracion con App Store Connect",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "Focus Mode y alertas time-sensitive",
        href: "/focus-mode-alerts",
      },
      {
        label: "Webhook notifications para iPhone",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "Recibe cambios de App Review y TestFlight en iPhone en cuanto ocurren",
      description:
        "Descarga Echobell, conecta tu webhook de App Store Connect y deja de revisar el dashboard manualmente.",
      primary: "Descargar Echobell",
      secondary: "Leer la documentacion",
    },
  },
  fr: {
    meta: {
      title: "Notifications de review App Store Connect sur iPhone",
      description:
        "Recevez les notifications de review App Store Connect sur iPhone avec Echobell. Transformez approbations, rejets, feedback TestFlight et builds en alertes mobiles immediates.",
      keywords: [
        "app store connect review notifications",
        "testflight notifications iphone",
        "ios app review alerts",
        "app store connect webhook",
        "iphone alerts for developers",
      ],
    },
    breadcrumb: "Notifications App Store Connect",
    hero: {
      badge: "Cas indie developer",
      title: "Arretez de rafraichir App Store Connect pour suivre la review",
      description:
        "Echobell transforme les webhooks App Store Connect en alertes iPhone immediates pour que founders, PMs et ingenieurs mobiles voient approbations, rejets, releases et feedback TestFlight des qu ils arrivent.",
    },
    summary: {
      title: "Le vrai benefice",
      body: "Les decisions d App Review sont souvent sensibles au temps, car elles affectent les lancements, correctifs et messages de release. Echobell donne a l equipe un flux mobile propre au lieu d un tableau de bord a rafraichir sans fin.",
    },
    eventsTitle: "Ce que vous pouvez suivre",
    eventsDescription:
      "App Store Connect emet beaucoup d evenements de release utiles. La cle est de les router vers un canal mobile que les bonnes personnes regardent vraiment.",
    events: [
      {
        title: "Changements d etat de review",
        description:
          "Voyez quand un build passe en In Review, est rejete ou devient Ready for Sale sans sonder le dashboard a la main.",
      },
      {
        title: "Feedback TestFlight",
        description:
          "Poussez le feedback beta critique directement sur le telephone pour accelerer la reaction produit ou ingenierie.",
      },
      {
        title: "Traitement des builds et releases",
        description:
          "Utilisez un canal dedie aux operations de release et choisissez time-sensitive pour les jalons qui debloquent un lancement.",
      },
    ],
    stepsTitle: "Comment le configurer",
    stepsDescription:
      "Utilisez Echobell comme couche de notification mobile au-dessus des webhooks App Store Connect.",
    steps: [
      {
        title: "Creez un canal App Store Connect",
        description:
          "Separez review et TestFlight des alertes d infrastructure ou de support pour que l equipe puisse agir rapidement.",
      },
      {
        title: "Collez le webhook du canal dans App Store Connect",
        description:
          "Configurez le webhook dans Users and Access → Integrations, choisissez l app puis les evenements de review et TestFlight a suivre.",
      },
      {
        title: "Choisissez le bon niveau d alerte",
        description:
          "Utilisez les alertes standard pour les mises a jour peu critiques et time-sensitive pour approbations, rejets ou blocages de release.",
      },
    ],
    teamTitle: "Qui devrait s abonner",
    teamCards: [
      {
        title: "Founders et indie hackers",
        description:
          "Sachez quand un build est approuve ou rejete sans vivre dans le dashboard App Store Connect.",
      },
      {
        title: "Ingenieurs mobiles",
        description:
          "Reagissez plus vite aux problemes de build, au feedback TestFlight et aux decisions de review qui changent le plan de release.",
      },
      {
        title: "PM, QA et parties prenantes du lancement",
        description:
          "Partagez un seul canal pour que tout le monde voie le meme contexte de release au meme moment.",
      },
    ],
    faqTitle: "FAQ des notifications App Store Connect",
    faqDescription:
      "Questions frequentes sur l envoi des webhooks App Store Connect vers des alertes iPhone.",
    faqs: [
      {
        question: "Dois je changer mon workflow de release pour utiliser Echobell ?",
        answer:
          "Non. App Store Connect reste la source de verite. Echobell ameliore seulement la livraison pour que les bonnes personnes voient les evenements de review et de release immediatement sur leur telephone.",
      },
      {
        question: "Puis je envoyer ces alertes a plusieurs coequipiers ?",
        answer:
          "Oui. Partagez l abonnement du canal avec les personnes impliquees dans le lancement pour garder ingenierie, produit et QA alignes sans transfert manuel.",
      },
      {
        question: "Tous les evenements doivent ils etre time-sensitive ?",
        answer:
          "En general non. Gardez le niveau d urgence eleve pour les decisions de review, les blocages de release ou les feedbacks qui exigent une action rapide.",
      },
    ],
    relatedTitle: "Guides associes",
    relatedLinks: [
      {
        label: "Documentation App Store Connect",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "Focus Mode et alertes time-sensitive",
        href: "/focus-mode-alerts",
      },
      {
        label: "Webhook notifications pour iPhone",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "Recevez les changements App Review et TestFlight sur iPhone au moment ou ils arrivent",
      description:
        "Telechargez Echobell, branchez votre webhook App Store Connect et arretez de verifier le dashboard a la main.",
      primary: "Telecharger Echobell",
      secondary: "Lire la documentation",
    },
  },
  ja: {
    meta: {
      title: "App Store Connect の審査通知を iPhone で受け取る",
      description:
        "Echobell を使って App Store Connect の審査通知を iPhone で受け取りましょう。承認、却下、TestFlight フィードバック、ビルド更新を即時アラートに変えられます。",
      keywords: [
        "app store connect review notifications",
        "testflight notifications iphone",
        "ios app review alerts",
        "app store connect webhook",
        "iphone alerts for developers",
      ],
    },
    breadcrumb: "App Store Connect 通知",
    hero: {
      badge: "インディー開発者ユースケース",
      title: "審査状況を見るために App Store Connect を何度も更新するのをやめる",
      description:
        "Echobell は App Store Connect の Webhook を即時の iPhone アラートに変え、創業者、PM、モバイルエンジニアが承認、却下、リリース、TestFlight フィードバックをすぐに把握できます。",
    },
    summary: {
      title: "本当の価値",
      body: "App Review の判断は、リリース、修正、告知に直結するため時間に敏感です。Echobell は、チームに一つの分かりやすいモバイル通知ストリームを提供します。",
    },
    eventsTitle: "追跡できるイベント",
    eventsDescription:
      "App Store Connect は重要なリリースイベントを数多く出します。大事なのは、それを本当に見る人のモバイルチャンネルへ流すことです。",
    events: [
      {
        title: "審査状態の変化",
        description:
          "ビルドが In Review に入った時、却下された時、Ready for Sale になった時を手動更新なしで把握できます。",
      },
      {
        title: "TestFlight フィードバック",
        description:
          "重要なベータフィードバックを直接スマホへ送り、プロダクトや開発がより早く反応できます。",
      },
      {
        title: "ビルド処理とリリースイベント",
        description:
          "リリース運用専用のチャンネルを使い、ローンチを前進させる節目だけを time-sensitive にできます。",
      },
    ],
    stepsTitle: "設定方法",
    stepsDescription:
      "App Store Connect の Webhook の上に、Echobell をモバイル通知レイヤーとして置くだけです。",
    steps: [
      {
        title: "App Store Connect 用チャンネルを作る",
        description:
          "レビューや TestFlight の更新を、インフラやサポート通知と分けておくと、チームが素早く行動できます。",
      },
      {
        title: "チャンネルの Webhook を App Store Connect に貼る",
        description:
          "Users and Access → Integrations で Webhook を作成し、対象アプリと、追いたい review / TestFlight イベントを選びます。",
      },
      {
        title: "適切なアラートレベルを選ぶ",
        description:
          "重要度の低い更新は標準通知、承認、却下、リリース阻害イベントは time-sensitive を使います。",
      },
    ],
    teamTitle: "誰が購読すべきか",
    teamCards: [
      {
        title: "創業者とインディーハッカー",
        description:
          "App Store Connect のダッシュボードに張り付かなくても、ビルド承認や却下を把握できます。",
      },
      {
        title: "モバイルエンジニア",
        description:
          "ビルド処理の問題、TestFlight フィードバック、リリース計画を変える審査結果に素早く反応できます。",
      },
      {
        title: "PM、QA、ローンチ関係者",
        description:
          "1 つのチャンネルを共有し、全員が同じリリース文脈を同じタイミングで確認できます。",
      },
    ],
    faqTitle: "App Store Connect 通知 FAQ",
    faqDescription:
      "App Store Connect の Webhook を iPhone アラートへ送る時のよくある質問です。",
    faqs: [
      {
        question: "Echobell を使うためにリリースフローを変える必要はありますか？",
        answer:
          "いいえ。App Store Connect は引き続きソースオブトゥルースです。Echobell は、審査やリリースイベントを正しい人のスマホへすぐ届けるための配信レイヤーを強化するだけです。",
      },
      {
        question: "この通知を複数メンバーに送れますか？",
        answer:
          "はい。リリース関係者にチャンネル購読を共有すれば、エンジニア、プロダクト、QA が手動転送なしで揃えられます。",
      },
      {
        question: "すべてのイベントを time-sensitive にすべきですか？",
        answer:
          "通常は不要です。審査結果、リリース阻害、すぐ対応すべきフィードバックだけを高優先度にしてください。",
      },
    ],
    relatedTitle: "関連ガイド",
    relatedLinks: [
      {
        label: "App Store Connect 連携ドキュメント",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "Focus Mode と time-sensitive 通知",
        href: "/focus-mode-alerts",
      },
      {
        label: "iPhone 向け Webhook 通知",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "App Review と TestFlight の変化を起きた瞬間に iPhone で受け取る",
      description:
        "Echobell をダウンロードして App Store Connect Webhook をつなぎ、ダッシュボードの手動確認をやめましょう。",
      primary: "Echobell をダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "App Store Connect Review-Benachrichtigungen auf dem iPhone",
      description:
        "Erhalten Sie App Store Connect Review-Benachrichtigungen auf dem iPhone mit Echobell. Leiten Sie Freigaben, Ablehnungen, TestFlight-Feedback und Build-Updates in sofortige mobile Alerts um.",
      keywords: [
        "app store connect review notifications",
        "testflight notifications iphone",
        "ios app review alerts",
        "app store connect webhook",
        "iphone alerts for developers",
      ],
    },
    breadcrumb: "App Store Connect Benachrichtigungen",
    hero: {
      badge: "Indie-Developer-Anwendungsfall",
      title: "Horen Sie auf, App Store Connect fur Review-Anderungen standig zu aktualisieren",
      description:
        "Echobell macht aus App Store Connect Webhooks sofortige iPhone-Alerts, damit Founder, PMs und Mobile Engineers Freigaben, Ablehnungen, Releases und TestFlight-Feedback sehen, sobald sie passieren.",
    },
    summary: {
      title: "Der eigentliche Nutzen",
      body: "App Review Entscheidungen sind oft zeitkritisch, weil sie Launches, Fixes und Release-Kommunikation beeinflussen. Echobell gibt Ihrem Team einen sauberen mobilen Alert-Stream statt standiger Dashboard-Checks.",
    },
    eventsTitle: "Was Sie verfolgen konnen",
    eventsDescription:
      "App Store Connect sendet viele sinnvolle Release-Ereignisse. Entscheidend ist, sie in einen mobilen Kanal zu routen, den die richtigen Leute auch wirklich beobachten.",
    events: [
      {
        title: "Review-Statusanderungen",
        description:
          "Sehen Sie, wann ein Build in In Review geht, abgelehnt wird oder Ready for Sale erreicht, ohne das Dashboard manuell zu pollen.",
      },
      {
        title: "TestFlight-Feedback",
        description:
          "Schicken Sie kritisches Beta-Feedback direkt aufs Telefon, damit Produkt oder Engineering schneller reagieren konnen.",
      },
      {
        title: "Build-Verarbeitung und Release-Ereignisse",
        description:
          "Nutzen Sie einen dedizierten Kanal fur Release-Operationen und time-sensitive Zustellung fur Meilensteine, die einen Launch freischalten.",
      },
    ],
    stepsTitle: "So richten Sie es ein",
    stepsDescription:
      "Nutzen Sie Echobell als mobile Benachrichtigungsschicht uber den App Store Connect Webhooks.",
    steps: [
      {
        title: "Erstellen Sie einen App Store Connect Kanal",
        description:
          "Halten Sie App Review- und TestFlight-Updates getrennt von Infrastruktur- oder Support-Alerts, damit das Team schnell handeln kann.",
      },
      {
        title: "Fugen Sie den Kanal-Webhook in App Store Connect ein",
        description:
          "Richten Sie den Webhook unter Users and Access → Integrations ein, wahlen Sie die App und danach die relevanten Review- und TestFlight-Ereignisse.",
      },
      {
        title: "Wahlen Sie das richtige Alert-Level",
        description:
          "Nutzen Sie Standard-Alerts fur weniger kritische Updates und time-sensitive fur Freigaben, Ablehnungen oder release-blockierende Ereignisse.",
      },
    ],
    teamTitle: "Wer sollte abonnieren",
    teamCards: [
      {
        title: "Founder und Indie-Hacker",
        description:
          "Erkennen Sie Freigaben oder Ablehnungen, ohne im App Store Connect Dashboard zu leben.",
      },
      {
        title: "Mobile Engineers",
        description:
          "Reagieren Sie schneller auf Build-Probleme, TestFlight-Feedback und Review-Ergebnisse, die Release-Plane andern.",
      },
      {
        title: "PM, QA und Launch-Stakeholder",
        description:
          "Teilen Sie einen Kanal, damit alle denselben Release-Kontext gleichzeitig sehen.",
      },
    ],
    faqTitle: "FAQ zu App Store Connect Benachrichtigungen",
    faqDescription:
      "Haufige Fragen zum Senden von App Store Connect Webhooks an iPhone-Alerts.",
    faqs: [
      {
        question: "Muss ich meinen Release-Workflow andern, um Echobell zu nutzen?",
        answer:
          "Nein. App Store Connect bleibt die Quelle der Wahrheit. Echobell verbessert nur die Zustellung, damit die richtigen Personen Review- und Release-Ereignisse sofort auf ihren Telefonen sehen.",
      },
      {
        question: "Kann ich diese Alerts an mehrere Teammitglieder senden?",
        answer:
          "Ja. Teilen Sie die Kanal-Subscription mit Ihren Launch-Beteiligten, damit Engineering, Produkt oder QA ohne manuelles Weiterleiten abgestimmt bleiben.",
      },
      {
        question: "Sollte jedes App Store Connect Ereignis time-sensitive sein?",
        answer:
          "Meistens nicht. Reservieren Sie die hohere Dringlichkeit fur Review-Entscheidungen, Release-Blocker oder Feedback, das schnelle Aktion braucht.",
      },
    ],
    relatedTitle: "Verwandte Guides",
    relatedLinks: [
      {
        label: "App Store Connect Integrationsdoku",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "Fokusmodus und time-sensitive Alerts",
        href: "/focus-mode-alerts",
      },
      {
        label: "Webhook notifications fur iPhone",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "Erhalten Sie App Review- und TestFlight-Anderungen auf dem iPhone, sobald sie passieren",
      description:
        "Laden Sie Echobell herunter, binden Sie Ihren App Store Connect Webhook ein und horen Sie auf, das Dashboard manuell zu prufen.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation lesen",
    },
  },
  zh: {
    meta: {
      title: "把 App Store Connect 审核通知直接发到 iPhone",
      description:
        "用 Echobell 在 iPhone 上接收 App Store Connect 审核通知。把审核通过、被拒、TestFlight 反馈和构建更新转成即时移动提醒。",
      keywords: [
        "App Store Connect 审核通知",
        "TestFlight 通知 iPhone",
        "iOS 审核提醒",
        "App Store Connect Webhook",
        "开发者 iPhone 提醒",
      ],
    },
    breadcrumb: "App Store Connect 通知",
    hero: {
      badge: "独立开发者场景",
      title: "别再反复刷新 App Store Connect 看审核状态",
      description:
        "Echobell 可以把 App Store Connect Webhook 变成即时 iPhone 告警，让创始人、产品经理和移动工程师第一时间看到通过、被拒、发布与 TestFlight 反馈。",
    },
    summary: {
      title: "真正的收益",
      body: "审核结果通常非常时间敏感，会直接影响发布、修复和对外沟通。Echobell 让团队拥有一条清晰的移动告警流，而不是频繁刷新后台或在邮箱里捞消息。",
    },
    eventsTitle: "你可以跟踪哪些事件",
    eventsDescription:
      "App Store Connect 会发出很多有价值的发布事件，关键在于把这些事件送进一个真正会被团队关注的移动频道。",
    events: [
      {
        title: "审核状态变化",
        description:
          "当构建进入审核、被拒或 Ready for Sale 时，无需手动刷后台即可第一时间知道。",
      },
      {
        title: "TestFlight 反馈",
        description:
          "把重要的 beta 反馈直接推到手机上，让产品或工程团队更快响应。",
      },
      {
        title: "构建处理与发布事件",
        description:
          "为发布操作建立独立频道，对真正会阻塞上线的里程碑使用时间敏感通知。",
      },
    ],
    stepsTitle: "如何配置",
    stepsDescription:
      "把 Echobell 作为 App Store Connect Webhook 之上的移动通知层即可。",
    steps: [
      {
        title: "创建专门的 App Store Connect 频道",
        description:
          "把审核和 TestFlight 更新与基础设施或支持通知分开，方便团队更快决策和响应。",
      },
      {
        title: "把频道 Webhook 填进 App Store Connect",
        description:
          "在 Users and Access → Integrations 中创建 webhook，选择对应 app，再勾选你关注的审核与 TestFlight 事件。",
      },
      {
        title: "为不同事件选择合适的通知级别",
        description:
          "普通更新使用标准通知；审核通过、被拒或阻塞发布的事件则使用时间敏感通知。",
      },
    ],
    teamTitle: "哪些人应该订阅这个频道",
    teamCards: [
      {
        title: "创始人和独立开发者",
        description:
          "不用常驻 App Store Connect 后台，也能知道构建何时通过或被拒。",
      },
      {
        title: "移动工程师",
        description:
          "更快处理构建问题、TestFlight 反馈和会改变发布计划的审核结果。",
      },
      {
        title: "产品、QA 与发布协作者",
        description:
          "共享同一个频道，让所有相关角色在同一时间看到同一份发布状态上下文。",
      },
    ],
    faqTitle: "App Store Connect 通知常见问题",
    faqDescription: "关于把 App Store Connect Webhook 发到 iPhone 提醒的常见问题。",
    faqs: [
      {
        question: "用了 Echobell 以后，需要改发布流程吗？",
        answer:
          "不需要。App Store Connect 仍然是事实来源，Echobell 只是把交付层做好，让正确的人在手机上第一时间看到审核和发布事件。",
      },
      {
        question: "这些通知可以共享给多个同事吗？",
        answer:
          "可以。你可以把频道订阅共享给工程、产品、QA 或其他发布相关角色，不需要再手动转发消息。",
      },
      {
        question: "所有 App Store Connect 事件都应该用时间敏感通知吗？",
        answer:
          "通常不需要。把更高紧急级别留给审核结果、发布阻塞或需要快速处理的反馈，常规状态变化保持普通通知即可。",
      },
    ],
    relatedTitle: "相关指南",
    relatedLinks: [
      {
        label: "App Store Connect 集成文档",
        href: "/docs/developer/app-store-connect",
      },
      {
        label: "专注模式与时间敏感通知",
        href: "/focus-mode-alerts",
      },
      {
        label: "iPhone Webhook 通知",
        href: "/features/webhooks",
      },
    ],
    cta: {
      title: "让 App 审核和 TestFlight 变化第一时间送达 iPhone",
      description:
        "下载 Echobell，接入 App Store Connect Webhook，停止手动刷新后台。",
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
    localizeUrl("/app-store-connect-review-notifications", lang),
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
        "x-default": localizeUrl("/app-store-connect-review-notifications", "en"),
        ...Object.fromEntries(
          supportedLanguages.map((locale) => [
            locale,
            localizeUrl("/app-store-connect-review-notifications", locale),
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

export default async function AppStoreConnectReviewNotificationsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(
    localizeUrl("/app-store-connect-review-notifications", lang),
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
        totalTime="PT6M"
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: t.breadcrumb,
              href: localizeUrl("/app-store-connect-review-notifications", lang),
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
              {t.eventsTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.eventsDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.events.map((item) => (
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
              {t.teamTitle}
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {t.teamCards.map((item) => (
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
