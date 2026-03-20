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
      title: "Best ntfy Alternative for Private iPhone Alerts",
      description:
        "Looking for an ntfy alternative? Compare Echobell vs ntfy for private iPhone alerting, self-hosting tradeoffs, phone call escalation, and on-call delivery.",
      keywords: [
        "ntfy alternative",
        "ntfy vs echobell",
        "self-hosted push notification alternative",
        "private iphone alerts",
        "ios alerting app",
      ],
    },
    breadcrumb: "ntfy Alternative",
    hero: {
      badge: "Comparison",
      title: "An ntfy alternative without the self-hosting burden",
      description:
        "ntfy is popular because developers want control and privacy. Echobell targets the same motivation, but removes the need to run infrastructure while still keeping notification content on-device and offering stronger mobile escalation.",
    },
    summary: {
      title: "Quick answer",
      body: "Choose Echobell if you want private mobile alerting but do not want to maintain your own notification service. It is a better fit for people who care about operational simplicity and still need time-sensitive or phone call delivery on iPhone.",
    },
    cards: [
      {
        title: "Privacy without self-hosting",
        description:
          "Echobell keeps notification content and history on-device, so you get a privacy-first posture without running a public ntfy server or keeping a self-hosted stack alive.",
      },
      {
        title: "Built for urgent delivery",
        description:
          "ntfy is flexible for push delivery. Echobell goes further with time-sensitive notifications and phone call alerts when you need to cut through sleep or focus mode.",
      },
      {
        title: "Cleaner workflow for teams",
        description:
          "Use channels, templates, and subscriber links to keep alerting organized across projects, incidents, or support queues.",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "Both products appeal to people who care about developer control. The real choice is where you want to spend complexity.",
    tableRows: [
      {
        dimension: "Infrastructure ownership",
        echobell: "Managed delivery layer",
        competitor: "Often self-hosted or community-hosted",
      },
      {
        dimension: "Privacy model",
        echobell: "Notification content stays on-device",
        competitor: "Privacy depends on where and how you host it",
      },
      {
        dimension: "Mobile urgency",
        echobell: "Standard, time-sensitive, and phone call alerts",
        competitor: "Push-first delivery model",
      },
      {
        dimension: "Team workflows",
        echobell: "Channels, templates, conditions, shared subscriptions",
        competitor: "Topic-based delivery is simple but less structured",
      },
      {
        dimension: "Best fit",
        echobell: "Operational alerts that must reach iPhone users quickly",
        competitor: "General developer notifications and self-hosted setups",
      },
    ],
    chooseTitle: "When Echobell beats a self-hosted route",
    chooseItems: [
      {
        title: "You want one less service to babysit",
        description:
          "If your notification layer itself becomes another thing to monitor, the stack is probably too heavy. Echobell keeps the trigger side simple and the delivery side managed.",
      },
      {
        title: "You care more about being reached than tinkering",
        description:
          "For on-call, smart home, or App Review workflows, the important question is whether the alert gets through at the right urgency level on the right phone.",
      },
      {
        title: "You still want privacy guarantees",
        description:
          "Echobell's on-device storage model is a strong answer for people who picked ntfy mainly because they did not want notification content sitting on someone else's server.",
      },
    ],
    faqTitle: "ntfy Alternative FAQ",
    faqDescription: "Common questions from people comparing Echobell and ntfy.",
    faqs: [
      {
        question: "Is Echobell open source like ntfy?",
        answer:
          "No. The tradeoff is that Echobell removes the self-hosting and delivery-maintenance burden while focusing on mobile experience, privacy-first storage, and higher-urgency alert paths.",
      },
      {
        question: "Why would I pick Echobell instead of self-hosting ntfy?",
        answer:
          "Usually because you want fewer moving parts, better iPhone-specific delivery behavior, and an alerting workflow that is ready for real incidents instead of generic topic pushes.",
      },
      {
        question: "Does Echobell still work with my existing monitoring tools?",
        answer:
          "Yes. Grafana, Prometheus, GitHub Actions, Home Assistant, App Store Connect, and generic webhook or email workflows can all feed Echobell.",
      },
    ],
    relatedTitle: "Related guides",
    relatedLinks: [
      {
        label: "How Echobell handles webhook alerts",
        href: "/features/webhooks",
      },
      {
        label: "Focus mode and time-sensitive alerts",
        href: "/focus-mode-alerts",
      },
      {
        label: "Home Assistant notifications with Echobell",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "Try the private alerting alternative that needs less maintenance",
      description:
        "Download Echobell and test your existing webhook or email workflow on iPhone without standing up another service.",
      primary: "Download Echobell",
      secondary: "Read the docs",
    },
  },
  es: {
    meta: {
      title: "La mejor alternativa a ntfy para alertas privadas en iPhone",
      description:
        "¿Buscas una alternativa a ntfy? Compara Echobell vs ntfy para alertas privadas en iPhone, costes de self-hosting, escalado por llamada y entrega para guardias.",
      keywords: [
        "alternativa a ntfy",
        "ntfy vs echobell",
        "alternativa push self hosted",
        "alertas privadas iphone",
        "app de alertas ios",
      ],
    },
    breadcrumb: "Alternativa a ntfy",
    hero: {
      badge: "Comparativa",
      title: "Una alternativa a ntfy sin la carga del self-hosting",
      description:
        "ntfy atrae a muchos desarrolladores porque quieren control y privacidad. Echobell responde a la misma necesidad, pero elimina la necesidad de operar infraestructura y aporta una escalada movil mas fuerte.",
    },
    summary: {
      title: "Respuesta rapida",
      body: "Elige Echobell si quieres alertas moviles privadas sin mantener tu propio servicio de notificaciones. Encaja mejor cuando valoras simplicidad operativa y aun asi necesitas entrega time-sensitive o llamadas en iPhone.",
    },
    cards: [
      {
        title: "Privacidad sin self-hosting",
        description:
          "Echobell mantiene el contenido y el historial en el dispositivo, asi que obtienes una postura privacy-first sin operar un servidor ntfy publico.",
      },
      {
        title: "Pensado para entrega urgente",
        description:
          "ntfy es flexible para push. Echobell va mas alla con notificaciones time-sensitive y llamadas cuando necesitas cortar el sueño o el Focus Mode.",
      },
      {
        title: "Workflow mas limpio para equipos",
        description:
          "Usa canales, plantillas y enlaces de suscripcion para mantener las alertas ordenadas por proyecto, incidente o cola de soporte.",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "Ambos productos atraen a quienes valoran el control de desarrollador. La diferencia real es donde quieres gastar complejidad.",
    tableRows: [
      {
        dimension: "Responsabilidad de infraestructura",
        echobell: "Capa de entrega gestionada",
        competitor: "A menudo self-hosted o basada en instancias comunitarias",
      },
      {
        dimension: "Modelo de privacidad",
        echobell: "El contenido permanece en el dispositivo",
        competitor: "La privacidad depende de donde y como lo alojes",
      },
      {
        dimension: "Urgencia movil",
        echobell: "Alertas estandar, time-sensitive y por llamada",
        competitor: "Modelo de entrega centrado en push",
      },
      {
        dimension: "Workflows de equipo",
        echobell: "Canales, plantillas, condiciones y suscripciones compartidas",
        competitor: "Los topics son simples, pero menos estructurados",
      },
      {
        dimension: "Mejor para",
        echobell: "Alertas operativas que deben llegar rapido a usuarios de iPhone",
        competitor: "Notificaciones generales para desarrolladores y setups self-hosted",
      },
    ],
    chooseTitle: "Cuando Echobell supera a una ruta self-hosted",
    chooseItems: [
      {
        title: "Quieres un servicio menos que vigilar",
        description:
          "Si la capa de notificaciones se convierte en otro servicio que monitorizar, el stack probablemente ya es demasiado pesado.",
      },
      {
        title: "Te importa mas ser avisado que trastear",
        description:
          "Para on-call, smart home o App Review, la pregunta importante es si la alerta llega con la urgencia correcta al telefono correcto.",
      },
      {
        title: "Sigues queriendo garantias de privacidad",
        description:
          "El modelo on-device de Echobell es una respuesta fuerte para quien eligio ntfy sobre todo por no querer el contenido en un servidor ajeno.",
      },
    ],
    faqTitle: "FAQ de la alternativa a ntfy",
    faqDescription: "Preguntas comunes al comparar Echobell y ntfy.",
    faqs: [
      {
        question: "¿Echobell es open source como ntfy?",
        answer:
          "No. El intercambio es que Echobell elimina la carga de self-hosting y mantenimiento y se centra en experiencia movil, almacenamiento privacy-first y rutas de alerta mas urgentes.",
      },
      {
        question: "¿Por que elegir Echobell en vez de self-hostear ntfy?",
        answer:
          "Normalmente porque quieres menos piezas moviles, mejor comportamiento especifico para iPhone y un workflow de alertas listo para incidentes reales.",
      },
      {
        question: "¿Echobell sigue funcionando con mis herramientas actuales?",
        answer:
          "Si. Grafana, Prometheus, GitHub Actions, Home Assistant, App Store Connect y cualquier workflow por webhook o email pueden alimentar Echobell.",
      },
    ],
    relatedTitle: "Guias relacionadas",
    relatedLinks: [
      {
        label: "Como maneja Echobell los webhooks",
        href: "/features/webhooks",
      },
      {
        label: "Focus Mode y alertas time-sensitive",
        href: "/focus-mode-alerts",
      },
      {
        label: "Notificaciones de Home Assistant con Echobell",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "Prueba la alternativa privada con menos mantenimiento",
      description:
        "Descarga Echobell y prueba tu workflow actual de webhook o email en iPhone sin desplegar otro servicio.",
      primary: "Descargar Echobell",
      secondary: "Leer la documentacion",
    },
  },
  fr: {
    meta: {
      title: "La meilleure alternative a ntfy pour des alertes iPhone privees",
      description:
        "Vous cherchez une alternative a ntfy ? Comparez Echobell et ntfy pour les alertes privees sur iPhone, les compromis du self-hosting, l escalade par appel et la livraison on-call.",
      keywords: [
        "alternative a ntfy",
        "ntfy vs echobell",
        "alternative notification push autohebergee",
        "alertes privees iphone",
        "application alertes ios",
      ],
    },
    breadcrumb: "Alternative a ntfy",
    hero: {
      badge: "Comparaison",
      title: "Une alternative a ntfy sans la charge du self-hosting",
      description:
        "ntfy plait aux developpeurs parce qu il donne du controle et de la confidentialite. Echobell vise la meme motivation, mais supprime le besoin d exploiter l infrastructure tout en offrant une escalade mobile plus forte.",
    },
    summary: {
      title: "Reponse rapide",
      body: "Choisissez Echobell si vous voulez des alertes mobiles privees sans maintenir votre propre service de notifications. Il convient mieux si vous recherchez la simplicite operationnelle avec des alertes time-sensitive ou par appel sur iPhone.",
    },
    cards: [
      {
        title: "Confidentialite sans self-hosting",
        description:
          "Echobell garde le contenu et l historique sur l appareil. Vous obtenez donc une approche privacy-first sans faire tourner un serveur ntfy public.",
      },
      {
        title: "Concu pour la livraison urgente",
        description:
          "ntfy est flexible pour le push. Echobell va plus loin avec des notifications time-sensitive et des appels quand il faut couper le sommeil ou le Focus Mode.",
      },
      {
        title: "Workflow plus propre pour les equipes",
        description:
          "Utilisez canaux, modeles et liens d abonnement pour garder les alertes bien organisees par projet, incident ou file support.",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "Les deux produits plaisent aux personnes qui valorisent le controle developpeur. Le vrai choix est l endroit ou vous voulez payer la complexite.",
    tableRows: [
      {
        dimension: "Possession de l infrastructure",
        echobell: "Couche de livraison geree",
        competitor: "Souvent autohebergee ou communautaire",
      },
      {
        dimension: "Modele de confidentialite",
        echobell: "Le contenu reste sur l appareil",
        competitor: "La confidentialite depend de votre hebergement",
      },
      {
        dimension: "Urgence mobile",
        echobell: "Standard, time-sensitive et appels",
        competitor: "Modele de livraison centre sur le push",
      },
      {
        dimension: "Workflows d equipe",
        echobell: "Canaux, modeles, conditions et abonnements partages",
        competitor: "Les topics sont simples mais moins structures",
      },
      {
        dimension: "Ideal pour",
        echobell: "Alertes operationnelles qui doivent atteindre rapidement les utilisateurs iPhone",
        competitor: "Notifications generales de developpeur et setups autoheberges",
      },
    ],
    chooseTitle: "Quand Echobell vaut mieux qu une solution autohebergee",
    chooseItems: [
      {
        title: "Vous voulez un service de moins a surveiller",
        description:
          "Si votre couche de notification devient elle-meme un service a monitorer, la pile est probablement trop lourde.",
      },
      {
        title: "Vous voulez etre joint, pas bricoler",
        description:
          "Pour l astreinte, la maison connectee ou App Review, l important est de savoir si l alerte atteint le bon telephone avec le bon niveau d urgence.",
      },
      {
        title: "Vous voulez quand meme de vraies garanties de confidentialite",
        description:
          "Le modele on-device d Echobell est une bonne reponse pour ceux qui ont choisi ntfy surtout pour eviter de laisser le contenu sur un serveur tiers.",
      },
    ],
    faqTitle: "FAQ sur l alternative a ntfy",
    faqDescription: "Questions frequentes sur Echobell et ntfy.",
    faqs: [
      {
        question: "Echobell est il open source comme ntfy ?",
        answer:
          "Non. En contrepartie, Echobell retire la charge de self-hosting et de maintenance, et se concentre sur l experience mobile, le stockage privacy-first et des chemins d alerte plus urgents.",
      },
      {
        question: "Pourquoi choisir Echobell au lieu d autoheberger ntfy ?",
        answer:
          "Souvent parce que vous voulez moins de pieces mobiles, un meilleur comportement sur iPhone et un workflow d alerte pret pour de vrais incidents plutot que de simples topics push.",
      },
      {
        question: "Echobell fonctionne t il avec mes outils existants ?",
        answer:
          "Oui. Grafana, Prometheus, GitHub Actions, Home Assistant, App Store Connect et tout workflow webhook ou email peuvent alimenter Echobell.",
      },
    ],
    relatedTitle: "Guides associes",
    relatedLinks: [
      {
        label: "Comment Echobell gere les webhooks",
        href: "/features/webhooks",
      },
      {
        label: "Focus Mode et alertes time-sensitive",
        href: "/focus-mode-alerts",
      },
      {
        label: "Notifications Home Assistant avec Echobell",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "Essayez l alternative privee qui demande moins de maintenance",
      description:
        "Telechargez Echobell et testez votre workflow webhook ou email actuel sur iPhone sans deployer un autre service.",
      primary: "Telecharger Echobell",
      secondary: "Lire la documentation",
    },
  },
  ja: {
    meta: {
      title: "プライベートな iPhone アラート向け ntfy 代替",
      description:
        "ntfy の代替を探しているなら、Echobell と ntfy を比較してください。プライベートな iPhone アラート、自前運用の負担、電話エスカレーション、オンコール配信を整理できます。",
      keywords: [
        "ntfy 代替",
        "ntfy Echobell 比較",
        "セルフホスト push 通知 代替",
        "iPhone プライベートアラート",
        "iOS アラートアプリ",
      ],
    },
    breadcrumb: "ntfy の代替",
    hero: {
      badge: "比較",
      title: "セルフホストの負担がいらない ntfy 代替",
      description:
        "ntfy が人気なのは、開発者がコントロールとプライバシーを求めるからです。Echobell は同じ動機に応えつつ、通知基盤の運用を不要にし、より強いモバイルエスカレーションを提供します。",
    },
    summary: {
      title: "結論",
      body: "自前で通知サービスを運用せずに、プライベートなモバイルアラートを得たいなら Echobell が向いています。運用を軽くしつつ、iPhone に time-sensitive 通知や電話通知を届けたい人に適しています。",
    },
    cards: [
      {
        title: "セルフホストなしでプライバシー",
        description:
          "通知内容と履歴は端末に残るため、公開 ntfy サーバーや自前の通知基盤を維持せずに privacy-first な運用ができます。",
      },
      {
        title: "緊急配信のために設計",
        description:
          "ntfy は push 配信に柔軟です。Echobell はさらに time-sensitive 通知と電話通知で、睡眠や Focus Mode を越えて届けられます。",
      },
      {
        title: "チーム向けに整理しやすい",
        description:
          "チャンネル、テンプレート、購読リンクで、プロジェクト、障害、サポートキューごとにアラートを整理できます。",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "どちらも開発者のコントロールを重視する人に響きます。違いは、どこに複雑さを払うかです。",
    tableRows: [
      {
        dimension: "インフラ運用",
        echobell: "配信レイヤーはマネージド",
        competitor: "セルフホストまたはコミュニティ運用が多い",
      },
      {
        dimension: "プライバシーモデル",
        echobell: "通知内容は端末に残る",
        competitor: "プライバシーはホスティング方法に依存",
      },
      {
        dimension: "モバイル緊急度",
        echobell: "標準、time-sensitive、電話通知",
        competitor: "push 中心の配信モデル",
      },
      {
        dimension: "チーム運用",
        echobell: "チャンネル、テンプレート、条件、共有購読",
        competitor: "topic は簡単だが構造化は弱い",
      },
      {
        dimension: "向いている用途",
        echobell: "iPhone ユーザーに素早く届くべき運用アラート",
        competitor: "一般的な開発者通知とセルフホスト用途",
      },
    ],
    chooseTitle: "Echobell がセルフホストより優れる場面",
    chooseItems: [
      {
        title: "監視するサービスを一つ減らしたい",
        description:
          "通知レイヤー自体がさらに監視対象になるなら、スタックは重すぎる可能性があります。",
      },
      {
        title: "触って遊ぶより、確実に届いてほしい",
        description:
          "オンコール、スマートホーム、App Review では、正しい緊急度で正しい電話に届くかが重要です。",
      },
      {
        title: "それでもプライバシー保証は欲しい",
        description:
          "通知内容を他人のサーバーに残したくないという理由で ntfy を選んでいた人に、Echobell の on-device モデルは強い答えになります。",
      },
    ],
    faqTitle: "ntfy 代替 FAQ",
    faqDescription: "Echobell と ntfy を比較する時によくある質問です。",
    faqs: [
      {
        question: "Echobell は ntfy のようにオープンソースですか？",
        answer:
          "いいえ。その代わり、Echobell はセルフホストと配信メンテナンスの負担を減らし、モバイル体験、privacy-first ストレージ、より強い緊急通知に集中しています。",
      },
      {
        question: "なぜ ntfy を自前運用せずに Echobell を選ぶのですか？",
        answer:
          "多くの場合、可動部分を減らし、iPhone 向けの配信挙動を良くし、単なる topic push ではなく実運用向けのアラートフローを得たいからです。",
      },
      {
        question: "既存の監視ツールでも使えますか？",
        answer:
          "はい。Grafana、Prometheus、GitHub Actions、Home Assistant、App Store Connect、一般的な Webhook やメールワークフローをそのまま使えます。",
      },
    ],
    relatedTitle: "関連ガイド",
    relatedLinks: [
      {
        label: "Echobell の Webhook 通知",
        href: "/features/webhooks",
      },
      {
        label: "Focus Mode と time-sensitive 通知",
        href: "/focus-mode-alerts",
      },
      {
        label: "Home Assistant 通知ガイド",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "保守負担の少ないプライベートアラートを試す",
      description:
        "別サービスを立てずに、今の Webhook やメールワークフローを iPhone でテストしてください。",
      primary: "Echobell をダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Die beste ntfy-Alternative fur private iPhone-Alerts",
      description:
        "Suchen Sie eine ntfy-Alternative? Vergleichen Sie Echobell und ntfy fur private iPhone-Alerts, Self-Hosting-Abwagungen, Telefoneskalation und On-call-Zustellung.",
      keywords: [
        "ntfy Alternative",
        "ntfy vs Echobell",
        "self hosted Push Alternative",
        "private iPhone Alerts",
        "iOS Alerting App",
      ],
    },
    breadcrumb: "ntfy-Alternative",
    hero: {
      badge: "Vergleich",
      title: "Eine ntfy-Alternative ohne Self-Hosting-Ballast",
      description:
        "ntfy ist beliebt, weil Entwickler Kontrolle und Datenschutz wollen. Echobell verfolgt dieselbe Motivation, nimmt Ihnen aber den Infrastruktur-Betrieb ab und bietet starkere mobile Eskalation.",
    },
    summary: {
      title: "Kurzantwort",
      body: "Wahlen Sie Echobell, wenn Sie private mobile Alerts wollen, aber keinen eigenen Benachrichtigungsdienst betreiben mochten. Es passt besser zu Menschen, die operative Einfachheit und trotzdem time-sensitive oder Telefon-Zustellung auf dem iPhone brauchen.",
    },
    cards: [
      {
        title: "Datenschutz ohne Self-Hosting",
        description:
          "Echobell halt Inhalt und Verlauf auf dem Gerat. So bekommen Sie einen privacy-first Ansatz, ohne einen offentlichen ntfy-Server betreiben zu mussen.",
      },
      {
        title: "Fur dringende Zustellung gebaut",
        description:
          "ntfy ist flexibel fur Push. Echobell geht mit time-sensitive Benachrichtigungen und Telefon-Alerts weiter, wenn Schlaf oder Focus Mode durchbrochen werden mussen.",
      },
      {
        title: "Sauberer Workflow fur Teams",
        description:
          "Mit Kanalen, Vorlagen und Abo-Links halten Sie Alerts nach Projekt, Incident oder Support-Queue sauber organisiert.",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "Beide Produkte sprechen Menschen an, die Entwicklerkontrolle schatzen. Die eigentliche Entscheidung ist, wo Sie Komplexitat bezahlen wollen.",
    tableRows: [
      {
        dimension: "Infrastrukturbesitz",
        echobell: "Gemantagte Zustellungsschicht",
        competitor: "Oft self-hosted oder community-hosted",
      },
      {
        dimension: "Datenschutzmodell",
        echobell: "Inhalte bleiben auf dem Gerat",
        competitor: "Datenschutz hangt davon ab, wo und wie Sie hosten",
      },
      {
        dimension: "Mobile Dringlichkeit",
        echobell: "Standard-, time-sensitive- und Telefon-Alerts",
        competitor: "Push-zentriertes Zustellmodell",
      },
      {
        dimension: "Team-Workflows",
        echobell: "Kanale, Vorlagen, Bedingungen und geteilte Abos",
        competitor: "Topics sind einfach, aber weniger strukturiert",
      },
      {
        dimension: "Am besten fur",
        echobell: "Operative Alerts, die iPhone-Nutzer schnell erreichen mussen",
        competitor: "Allgemeine Entwicklerbenachrichtigungen und Self-Hosting-Setups",
      },
    ],
    chooseTitle: "Wann Echobell eine self-hosted Route schlagt",
    chooseItems: [
      {
        title: "Sie wollen einen Dienst weniger babysitten",
        description:
          "Wenn Ihre Benachrichtigungsschicht selbst zu einem weiteren zu uberwachenden Dienst wird, ist der Stack wahrscheinlich zu schwer.",
      },
      {
        title: "Erreichbarkeit ist wichtiger als Basteln",
        description:
          "Fur On-call, Smart Home oder App Review ist entscheidend, ob der Alert mit dem richtigen Dringlichkeitsgrad das richtige Telefon erreicht.",
      },
      {
        title: "Sie wollen trotzdem Datenschutzgarantien",
        description:
          "Das On-device-Modell von Echobell ist eine starke Antwort fur Menschen, die ntfy vor allem wegen Datenschutzgrunden gewahlt haben.",
      },
    ],
    faqTitle: "FAQ zur ntfy-Alternative",
    faqDescription:
      "Haufige Fragen beim Vergleich von Echobell und ntfy.",
    faqs: [
      {
        question: "Ist Echobell wie ntfy Open Source?",
        answer:
          "Nein. Der Gegenwert ist, dass Echobell Self-Hosting- und Wartungslast entfernt und sich auf mobiles Erlebnis, privacy-first Speicherung und dringlichere Alert-Pfade konzentriert.",
      },
      {
        question: "Warum Echobell statt self-hosted ntfy?",
        answer:
          "Meist weil Sie weniger bewegliche Teile, besseres iPhone-Verhalten und einen Alert-Workflow fur echte Incidents statt allgemeiner Topic-Pushs wollen.",
      },
      {
        question: "Funktioniert Echobell weiter mit meinen bestehenden Tools?",
        answer:
          "Ja. Grafana, Prometheus, GitHub Actions, Home Assistant, App Store Connect sowie allgemeine Webhook- oder E-Mail-Workflows konnen Echobell speisen.",
      },
    ],
    relatedTitle: "Verwandte Guides",
    relatedLinks: [
      {
        label: "Wie Echobell Webhook-Alerts handhabt",
        href: "/features/webhooks",
      },
      {
        label: "Fokusmodus und time-sensitive Alerts",
        href: "/focus-mode-alerts",
      },
      {
        label: "Home Assistant Benachrichtigungen mit Echobell",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "Probieren Sie die private Alerting-Alternative mit weniger Wartung",
      description:
        "Laden Sie Echobell herunter und testen Sie Ihren bestehenden Webhook- oder E-Mail-Workflow auf dem iPhone, ohne einen weiteren Dienst aufzusetzen.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation lesen",
    },
  },
  zh: {
    meta: {
      title: "无需自托管的 ntfy 替代方案",
      description:
        "对比 Echobell 与 ntfy：自托管代价、iPhone 关键告警、电话升级、隐私模型，以及更适合值班的移动送达体验。",
      keywords: [
        "ntfy 替代方案",
        "ntfy 对比",
        "自托管推送替代",
        "私密 iPhone 告警",
        "iOS 告警应用",
      ],
    },
    breadcrumb: "ntfy 替代方案",
    hero: {
      badge: "竞品对比",
      title: "一个不需要自托管负担的 ntfy 替代方案",
      description:
        "很多开发者选择 ntfy，是因为他们想要控制权与隐私。Echobell 针对的是同一类诉求，但不要求你维护一套通知基础设施，同时依然把通知内容留在设备端，并提供更强的移动升级送达能力。",
    },
    summary: {
      title: "一句话结论",
      body: "如果你想要私密的移动告警体验，但不想为通知系统本身再维护一套服务，Echobell 更合适。它更适合希望在 iPhone 上获得时间敏感通知或电话提醒的人。",
    },
    cards: [
      {
        title: "无需自托管也能兼顾隐私",
        description:
          "Echobell 将通知内容与历史保留在设备端，因此你不需要公开部署 ntfy 服务或维护一套自托管通知栈，也能获得隐私优先的告警体验。",
      },
      {
        title: "为关键送达而设计",
        description:
          "ntfy 很适合做灵活的推送。Echobell 进一步提供时间敏感通知与电话提醒，更适合睡眠、专注模式等必须强提醒的场景。",
      },
      {
        title: "更清晰的团队工作流",
        description:
          "使用频道、模板和订阅链接，把不同项目、故障或支持队列的告警组织得更清楚。",
      },
    ],
    tableTitle: "Echobell vs ntfy",
    tableDescription:
      "两者都吸引在意开发者控制权的人，真正的区别在于你希望把复杂度放在哪里。",
    tableRows: [
      {
        dimension: "基础设施归属",
        echobell: "通知交付层托管",
        competitor: "通常需要自托管或依赖公共实例",
      },
      {
        dimension: "隐私模型",
        echobell: "通知内容保留在设备端",
        competitor: "隐私取决于部署位置与方式",
      },
      {
        dimension: "移动紧急送达",
        echobell: "普通、时间敏感、电话提醒",
        competitor: "以推送为主",
      },
      {
        dimension: "团队工作流",
        echobell: "频道、模板、条件、共享订阅",
        competitor: "topic 模式简单，但结构化较弱",
      },
      {
        dimension: "更适合",
        echobell: "必须快速送达到 iPhone 的运营 / 值班告警",
        competitor: "通用开发者通知和自托管方案",
      },
    ],
    chooseTitle: "什么时候 Echobell 比自托管更合适",
    chooseItems: [
      {
        title: "你不想再多维护一个服务",
        description:
          "如果通知层本身也成了要监控和修复的对象，整个栈就偏重了。Echobell 让触发侧保持简单，把交付侧交给托管能力处理。",
      },
      {
        title: "你更在意被叫醒，而不是折腾",
        description:
          "对于值班、智能家居、App 审核这类场景，真正重要的是告警能否以正确优先级送达到正确的手机，而不是消息 topic 是否足够灵活。",
      },
      {
        title: "你依然希望有明确的隐私边界",
        description:
          "如果你选择 ntfy 的主要原因是不希望通知内容留在别人的服务器上，Echobell 的设备端存储模型会更贴近你的诉求。",
      },
    ],
    faqTitle: "ntfy 替代方案常见问题",
    faqDescription: "用户在对比 Echobell 与 ntfy 时常见的问题。",
    faqs: [
      {
        question: "Echobell 像 ntfy 一样开源吗？",
        answer:
          "不是。它的取舍在于帮你移除自托管和交付维护负担，把重点放在移动体验、隐私优先存储和更高紧急度的告警路径上。",
      },
      {
        question: "为什么不直接自托管 ntfy？",
        answer:
          "很多时候是因为你想要更少的运维负担、更好的 iPhone 送达表现，以及更适合真实事故响应的告警流程，而不只是通用 topic 推送。",
      },
      {
        question: "Echobell 还能接入现有监控工具吗？",
        answer:
          "可以。Grafana、Prometheus、GitHub Actions、Home Assistant、App Store Connect，以及通用 Webhook / 邮件工作流都可以接入 Echobell。",
      },
    ],
    relatedTitle: "相关指南",
    relatedLinks: [
      {
        label: "Webhook 告警能力",
        href: "/features/webhooks",
      },
      {
        label: "专注模式与时间敏感通知",
        href: "/focus-mode-alerts",
      },
      {
        label: "Home Assistant + Echobell",
        href: "/blog/home-assistant-notifications-with-echobell",
      },
    ],
    cta: {
      title: "试试维护成本更低的私密告警方案",
      description:
        "下载 Echobell，在不自建通知服务的情况下，直接在 iPhone 上测试现有 Webhook 或邮件工作流。",
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
  const canonical = new URL(localizeUrl("/ntfy-alternative", lang), baseUrl).toString();
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
        "x-default": localizeUrl("/ntfy-alternative", "en"),
        ...Object.fromEntries(
          supportedLanguages.map((locale) => [
            locale,
            localizeUrl("/ntfy-alternative", locale),
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

export default async function NtfyAlternativePage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const dimensionLabel = tableDimensionLabel[lang as SupportedLanguage];
  const canonical = new URL(localizeUrl("/ntfy-alternative", lang), baseUrl).toString();

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
              href: localizeUrl("/ntfy-alternative", lang),
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
        accentColor="green"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
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
              <div className="px-4 py-4">ntfy</div>
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
                className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-500"
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
                  className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-green-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-green-700"
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
