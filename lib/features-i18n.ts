import { Language } from "./i18n";

// Features index page translations
export const featuresIndexI18n: Record<
  Language,
  {
    title: string;
    subtitle: string;
    description: string;
    exploreAll: string;
    learnMore: string;
    getStarted: string;
  }
> = {
  en: {
    title: "Powerful Features",
    subtitle: "Everything you need for instant alerts",
    description:
      "Echobell provides a complete toolkit for receiving critical notifications. From webhook integrations to phone call alerts, we have you covered.",
    exploreAll: "Explore All Features",
    learnMore: "Learn More",
    getStarted: "Get Started",
  },
  zh: {
    title: "强大功能",
    subtitle: "即时警报所需的一切",
    description:
      "Echobell 提供完整的工具包来接收关键通知。从 Webhook 集成到电话警报，我们为您提供全方位支持。",
    exploreAll: "探索所有功能",
    learnMore: "了解更多",
    getStarted: "立即开始",
  },
  es: {
    title: "Funciones Potentes",
    subtitle: "Todo lo que necesitas para alertas instantáneas",
    description:
      "Echobell proporciona un kit de herramientas completo para recibir notificaciones críticas. Desde integraciones webhook hasta alertas por llamada telefónica.",
    exploreAll: "Explorar Todas las Funciones",
    learnMore: "Más Información",
    getStarted: "Comenzar",
  },
  fr: {
    title: "Fonctionnalités Puissantes",
    subtitle: "Tout ce dont vous avez besoin pour des alertes instantanées",
    description:
      "Echobell fournit une boîte à outils complète pour recevoir des notifications critiques. Des intégrations webhook aux alertes par appel téléphonique.",
    exploreAll: "Explorer Toutes les Fonctionnalités",
    learnMore: "En Savoir Plus",
    getStarted: "Commencer",
  },
  ja: {
    title: "強力な機能",
    subtitle: "即座のアラートに必要なすべて",
    description:
      "Echobell は重要な通知を受け取るための完全なツールキットを提供します。Webhook 統合から電話通話アラートまで、すべてをカバーします。",
    exploreAll: "すべての機能を見る",
    learnMore: "詳細を見る",
    getStarted: "始める",
  },
  de: {
    title: "Leistungsstarke Funktionen",
    subtitle: "Alles was Sie für sofortige Benachrichtigungen brauchen",
    description:
      "Echobell bietet ein komplettes Toolkit für kritische Benachrichtigungen. Von Webhook-Integrationen bis zu Telefonanruf-Benachrichtigungen.",
    exploreAll: "Alle Funktionen Entdecken",
    learnMore: "Mehr Erfahren",
    getStarted: "Loslegen",
  },
};

// Webhooks feature page translations
export const webhooksI18n: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    codeExamples: {
      title: string;
      subtitle: string;
      getRequest: string;
      postRequest: string;
    };
    variables: {
      title: string;
      subtitle: string;
      description: string;
      items: Array<{ variable: string; description: string }>;
    };
    useCases: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  en: {
    meta: {
      title: "Webhook Integration",
      description:
        "Trigger instant notifications from any application using webhooks. Send HTTP requests to unique URLs and receive alerts via push notifications or phone calls.",
      keywords: [
        "webhook notifications",
        "HTTP triggers",
        "API alerts",
        "instant notifications",
        "webhook integration",
      ],
    },
    hero: {
      badge: "Integration",
      title: "Webhook-Powered Alerts",
      description:
        "Connect any application or service to Echobell using webhooks. Send a simple HTTP request and receive instant notifications on your iPhone.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Three simple steps to get started",
      steps: [
        {
          title: "Get Your Webhook URL",
          description:
            "Create a channel in Echobell and copy your unique webhook URL from the channel settings.",
        },
        {
          title: "Send HTTP Requests",
          description:
            "Send GET or POST requests from your application, CI/CD pipeline, or monitoring system.",
        },
        {
          title: "Receive Instant Alerts",
          description:
            "Get notified immediately via push notification or phone call based on your channel settings.",
        },
      ],
    },
    codeExamples: {
      title: "Easy Integration",
      subtitle: "Works with any programming language or tool",
      getRequest: "GET Request",
      postRequest: "POST Request",
    },
    variables: {
      title: "Dynamic Templates",
      subtitle: "Personalize your notifications",
      description:
        "Use template variables to include dynamic data from your webhook payload in notification titles and bodies.",
      items: [
        { variable: "{{key}}", description: "Access JSON body or query params" },
        { variable: "{{nested.value}}", description: "Access nested properties" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "Access request headers",
        },
        { variable: "{{array[0]}}", description: "Access array elements" },
      ],
    },
    useCases: {
      title: "Popular Use Cases",
      items: [
        {
          title: "CI/CD Pipelines",
          description: "Get notified when builds succeed or fail",
        },
        {
          title: "Server Monitoring",
          description: "Receive alerts for server downtime or high CPU usage",
        },
        {
          title: "E-commerce",
          description: "Instant notifications for new orders or payments",
        },
        {
          title: "IoT Devices",
          description: "Alerts from smart home sensors and devices",
        },
      ],
    },
    cta: {
      title: "Ready to Integrate?",
      description:
        "Download Echobell and start receiving webhook notifications in minutes.",
      primary: "Download App",
      secondary: "View Documentation",
    },
  },
  zh: {
    meta: {
      title: "Webhook 集成",
      description:
        "使用 Webhook 从任何应用程序触发即时通知。发送 HTTP 请求到唯一 URL，通过推送通知或电话接收警报。",
      keywords: [
        "webhook 通知",
        "HTTP 触发器",
        "API 警报",
        "即时通知",
        "webhook 集成",
      ],
    },
    hero: {
      badge: "集成",
      title: "Webhook 驱动的警报",
      description:
        "使用 Webhook 将任何应用程序或服务连接到 Echobell。发送简单的 HTTP 请求，即可在 iPhone 上收到即时通知。",
    },
    howItWorks: {
      title: "工作原理",
      subtitle: "三个简单步骤即可开始",
      steps: [
        {
          title: "获取 Webhook URL",
          description:
            "在 Echobell 中创建频道，从频道设置中复制您的唯一 Webhook URL。",
        },
        {
          title: "发送 HTTP 请求",
          description:
            "从您的应用程序、CI/CD 管道或监控系统发送 GET 或 POST 请求。",
        },
        {
          title: "接收即时警报",
          description:
            "根据您的频道设置，通过推送通知或电话立即收到通知。",
        },
      ],
    },
    codeExamples: {
      title: "轻松集成",
      subtitle: "适用于任何编程语言或工具",
      getRequest: "GET 请求",
      postRequest: "POST 请求",
    },
    variables: {
      title: "动态模板",
      subtitle: "个性化您的通知",
      description:
        "使用模板变量将 Webhook 负载中的动态数据包含在通知标题和正文中。",
      items: [
        { variable: "{{key}}", description: "访问 JSON 正文或查询参数" },
        { variable: "{{nested.value}}", description: "访问嵌套属性" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "访问请求头",
        },
        { variable: "{{array[0]}}", description: "访问数组元素" },
      ],
    },
    useCases: {
      title: "常见使用场景",
      items: [
        {
          title: "CI/CD 管道",
          description: "构建成功或失败时获得通知",
        },
        {
          title: "服务器监控",
          description: "接收服务器宕机或高 CPU 使用率警报",
        },
        {
          title: "电子商务",
          description: "新订单或付款的即时通知",
        },
        {
          title: "物联网设备",
          description: "来自智能家居传感器和设备的警报",
        },
      ],
    },
    cta: {
      title: "准备好集成了吗？",
      description: "下载 Echobell，几分钟内开始接收 Webhook 通知。",
      primary: "下载应用",
      secondary: "查看文档",
    },
  },
  es: {
    meta: {
      title: "Integración Webhook",
      description:
        "Activa notificaciones instantáneas desde cualquier aplicación usando webhooks. Envía solicitudes HTTP a URLs únicas y recibe alertas.",
      keywords: [
        "notificaciones webhook",
        "disparadores HTTP",
        "alertas API",
        "notificaciones instantáneas",
        "integración webhook",
      ],
    },
    hero: {
      badge: "Integración",
      title: "Alertas con Webhook",
      description:
        "Conecta cualquier aplicación o servicio a Echobell usando webhooks. Envía una simple solicitud HTTP y recibe notificaciones instantáneas.",
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Tres simples pasos para comenzar",
      steps: [
        {
          title: "Obtén tu URL Webhook",
          description:
            "Crea un canal en Echobell y copia tu URL webhook única desde la configuración del canal.",
        },
        {
          title: "Envía Solicitudes HTTP",
          description:
            "Envía solicitudes GET o POST desde tu aplicación, pipeline CI/CD o sistema de monitoreo.",
        },
        {
          title: "Recibe Alertas Instantáneas",
          description:
            "Recibe notificaciones inmediatas por push o llamada según la configuración de tu canal.",
        },
      ],
    },
    codeExamples: {
      title: "Integración Fácil",
      subtitle: "Funciona con cualquier lenguaje de programación",
      getRequest: "Solicitud GET",
      postRequest: "Solicitud POST",
    },
    variables: {
      title: "Plantillas Dinámicas",
      subtitle: "Personaliza tus notificaciones",
      description:
        "Usa variables de plantilla para incluir datos dinámicos de tu webhook en los títulos y cuerpos de las notificaciones.",
      items: [
        { variable: "{{key}}", description: "Accede a JSON o parámetros" },
        { variable: "{{nested.value}}", description: "Accede a propiedades anidadas" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "Accede a encabezados",
        },
        { variable: "{{array[0]}}", description: "Accede a elementos de array" },
      ],
    },
    useCases: {
      title: "Casos de Uso Populares",
      items: [
        {
          title: "Pipelines CI/CD",
          description: "Recibe notificaciones de builds exitosos o fallidos",
        },
        {
          title: "Monitoreo de Servidores",
          description: "Alertas de tiempo de inactividad o alto uso de CPU",
        },
        {
          title: "E-commerce",
          description: "Notificaciones instantáneas de nuevos pedidos",
        },
        {
          title: "Dispositivos IoT",
          description: "Alertas de sensores y dispositivos inteligentes",
        },
      ],
    },
    cta: {
      title: "¿Listo para Integrar?",
      description:
        "Descarga Echobell y comienza a recibir notificaciones webhook en minutos.",
      primary: "Descargar App",
      secondary: "Ver Documentación",
    },
  },
  fr: {
    meta: {
      title: "Intégration Webhook",
      description:
        "Déclenchez des notifications instantanées depuis n'importe quelle application en utilisant des webhooks. Envoyez des requêtes HTTP et recevez des alertes.",
      keywords: [
        "notifications webhook",
        "déclencheurs HTTP",
        "alertes API",
        "notifications instantanées",
        "intégration webhook",
      ],
    },
    hero: {
      badge: "Intégration",
      title: "Alertes par Webhook",
      description:
        "Connectez n'importe quelle application ou service à Echobell via webhooks. Envoyez une simple requête HTTP et recevez des notifications instantanées.",
    },
    howItWorks: {
      title: "Comment ça Marche",
      subtitle: "Trois étapes simples pour commencer",
      steps: [
        {
          title: "Obtenez votre URL Webhook",
          description:
            "Créez un canal dans Echobell et copiez votre URL webhook unique depuis les paramètres du canal.",
        },
        {
          title: "Envoyez des Requêtes HTTP",
          description:
            "Envoyez des requêtes GET ou POST depuis votre application, pipeline CI/CD ou système de monitoring.",
        },
        {
          title: "Recevez des Alertes Instantanées",
          description:
            "Soyez notifié immédiatement par push ou appel selon les paramètres de votre canal.",
        },
      ],
    },
    codeExamples: {
      title: "Intégration Facile",
      subtitle: "Fonctionne avec n'importe quel langage de programmation",
      getRequest: "Requête GET",
      postRequest: "Requête POST",
    },
    variables: {
      title: "Modèles Dynamiques",
      subtitle: "Personnalisez vos notifications",
      description:
        "Utilisez des variables de modèle pour inclure des données dynamiques de votre webhook dans les titres et corps des notifications.",
      items: [
        { variable: "{{key}}", description: "Accès au JSON ou aux paramètres" },
        { variable: "{{nested.value}}", description: "Accès aux propriétés imbriquées" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "Accès aux en-têtes",
        },
        { variable: "{{array[0]}}", description: "Accès aux éléments de tableau" },
      ],
    },
    useCases: {
      title: "Cas d'Utilisation Populaires",
      items: [
        {
          title: "Pipelines CI/CD",
          description: "Notifications de builds réussis ou échoués",
        },
        {
          title: "Surveillance Serveurs",
          description: "Alertes de temps d'arrêt ou utilisation CPU élevée",
        },
        {
          title: "E-commerce",
          description: "Notifications instantanées de nouvelles commandes",
        },
        {
          title: "Appareils IoT",
          description: "Alertes de capteurs et appareils connectés",
        },
      ],
    },
    cta: {
      title: "Prêt à Intégrer ?",
      description:
        "Téléchargez Echobell et commencez à recevoir des notifications webhook en quelques minutes.",
      primary: "Télécharger l'App",
      secondary: "Voir la Documentation",
    },
  },
  ja: {
    meta: {
      title: "Webhook 統合",
      description:
        "Webhook を使用して任意のアプリケーションから即座に通知をトリガー。HTTP リクエストを送信し、プッシュ通知または電話でアラートを受信。",
      keywords: [
        "webhook 通知",
        "HTTP トリガー",
        "API アラート",
        "即座通知",
        "webhook 統合",
      ],
    },
    hero: {
      badge: "統合",
      title: "Webhook 駆動アラート",
      description:
        "Webhook を使用して任意のアプリケーションやサービスを Echobell に接続。簡単な HTTP リクエストを送信して、iPhone で即座に通知を受け取ります。",
    },
    howItWorks: {
      title: "仕組み",
      subtitle: "3つの簡単なステップで開始",
      steps: [
        {
          title: "Webhook URL を取得",
          description:
            "Echobell でチャンネルを作成し、チャンネル設定から一意の Webhook URL をコピーします。",
        },
        {
          title: "HTTP リクエストを送信",
          description:
            "アプリケーション、CI/CD パイプライン、または監視システムから GET または POST リクエストを送信します。",
        },
        {
          title: "即座にアラートを受信",
          description:
            "チャンネル設定に基づいて、プッシュ通知または電話で即座に通知を受け取ります。",
        },
      ],
    },
    codeExamples: {
      title: "簡単統合",
      subtitle: "あらゆるプログラミング言語やツールで動作",
      getRequest: "GET リクエスト",
      postRequest: "POST リクエスト",
    },
    variables: {
      title: "動的テンプレート",
      subtitle: "通知をパーソナライズ",
      description:
        "テンプレート変数を使用して、Webhook ペイロードの動的データを通知タイトルと本文に含めます。",
      items: [
        { variable: "{{key}}", description: "JSON 本文またはクエリパラメータにアクセス" },
        { variable: "{{nested.value}}", description: "ネストされたプロパティにアクセス" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "リクエストヘッダーにアクセス",
        },
        { variable: "{{array[0]}}", description: "配列要素にアクセス" },
      ],
    },
    useCases: {
      title: "人気のユースケース",
      items: [
        {
          title: "CI/CD パイプライン",
          description: "ビルドの成功や失敗時に通知",
        },
        {
          title: "サーバー監視",
          description: "サーバーダウンや高 CPU 使用率のアラート",
        },
        {
          title: "E コマース",
          description: "新規注文や支払いの即座通知",
        },
        {
          title: "IoT デバイス",
          description: "スマートホームセンサーやデバイスからのアラート",
        },
      ],
    },
    cta: {
      title: "統合の準備はできましたか？",
      description:
        "Echobell をダウンロードして、数分で Webhook 通知を受け取り始めましょう。",
      primary: "アプリをダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Webhook-Integration",
      description:
        "Lösen Sie sofortige Benachrichtigungen von jeder Anwendung mit Webhooks aus. Senden Sie HTTP-Anfragen an eindeutige URLs und erhalten Sie Alerts.",
      keywords: [
        "Webhook-Benachrichtigungen",
        "HTTP-Trigger",
        "API-Alerts",
        "Sofortige Benachrichtigungen",
        "Webhook-Integration",
      ],
    },
    hero: {
      badge: "Integration",
      title: "Webhook-gesteuerte Alerts",
      description:
        "Verbinden Sie jede Anwendung oder jeden Dienst mit Echobell über Webhooks. Senden Sie eine einfache HTTP-Anfrage und erhalten Sie sofortige Benachrichtigungen.",
    },
    howItWorks: {
      title: "So Funktioniert's",
      subtitle: "Drei einfache Schritte zum Start",
      steps: [
        {
          title: "Webhook-URL erhalten",
          description:
            "Erstellen Sie einen Kanal in Echobell und kopieren Sie Ihre eindeutige Webhook-URL aus den Kanaleinstellungen.",
        },
        {
          title: "HTTP-Anfragen senden",
          description:
            "Senden Sie GET- oder POST-Anfragen von Ihrer Anwendung, CI/CD-Pipeline oder Ihrem Überwachungssystem.",
        },
        {
          title: "Sofortige Alerts erhalten",
          description:
            "Werden Sie sofort per Push-Benachrichtigung oder Anruf benachrichtigt, basierend auf Ihren Kanaleinstellungen.",
        },
      ],
    },
    codeExamples: {
      title: "Einfache Integration",
      subtitle: "Funktioniert mit jeder Programmiersprache",
      getRequest: "GET-Anfrage",
      postRequest: "POST-Anfrage",
    },
    variables: {
      title: "Dynamische Vorlagen",
      subtitle: "Personalisieren Sie Ihre Benachrichtigungen",
      description:
        "Verwenden Sie Vorlagenvariablen, um dynamische Daten aus Ihrem Webhook-Payload in Benachrichtigungstitel und -text einzufügen.",
      items: [
        { variable: "{{key}}", description: "Zugriff auf JSON-Body oder Query-Parameter" },
        { variable: "{{nested.value}}", description: "Zugriff auf verschachtelte Eigenschaften" },
        {
          variable: '{{header["Content-Type"]}}',
          description: "Zugriff auf Request-Header",
        },
        { variable: "{{array[0]}}", description: "Zugriff auf Array-Elemente" },
      ],
    },
    useCases: {
      title: "Beliebte Anwendungsfälle",
      items: [
        {
          title: "CI/CD-Pipelines",
          description: "Benachrichtigungen bei erfolgreichen oder fehlgeschlagenen Builds",
        },
        {
          title: "Server-Überwachung",
          description: "Alerts bei Serverausfall oder hoher CPU-Auslastung",
        },
        {
          title: "E-Commerce",
          description: "Sofortige Benachrichtigungen bei neuen Bestellungen",
        },
        {
          title: "IoT-Geräte",
          description: "Alerts von Smart-Home-Sensoren und Geräten",
        },
      ],
    },
    cta: {
      title: "Bereit zur Integration?",
      description:
        "Laden Sie Echobell herunter und erhalten Sie in wenigen Minuten Webhook-Benachrichtigungen.",
      primary: "App Herunterladen",
      secondary: "Dokumentation Ansehen",
    },
  },
};

// Email Triggers feature page translations
export const emailTriggersI18n: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    variables: {
      title: string;
      subtitle: string;
      items: Array<{ variable: string; description: string }>;
    };
    useCases: {
      title: string;
      items: Array<{ title: string; description: string; icon: string }>;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  en: {
    meta: {
      title: "Email Triggers",
      description:
        "Convert emails into instant notifications. Forward or send emails to your channel address and receive push notifications or phone calls.",
      keywords: [
        "email notifications",
        "email triggers",
        "email to push notification",
        "email alerts",
        "email forwarding alerts",
      ],
    },
    hero: {
      badge: "Email",
      title: "Email-Powered Notifications",
      description:
        "Turn any email into an instant alert. Each channel has a unique email address - just forward or send emails to trigger notifications.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple email-based alerting",
      steps: [
        {
          title: "Get Your Email Address",
          description:
            "Each channel has a unique email address. Find it in your channel settings.",
        },
        {
          title: "Forward or Send Emails",
          description:
            "Forward important emails or set up auto-forwarding rules to your channel email.",
        },
        {
          title: "Receive Notifications",
          description:
            "Get instant push notifications or phone calls with the email content.",
        },
      ],
    },
    variables: {
      title: "Email Variables",
      subtitle: "Access email data in your templates",
      items: [
        { variable: "{{from}}", description: "Sender's email address" },
        { variable: "{{subject}}", description: "Email subject line" },
        { variable: "{{text}}", description: "Plain text email body" },
        { variable: "{{html}}", description: "HTML email body" },
      ],
    },
    useCases: {
      title: "Perfect For",
      items: [
        {
          title: "System Alerts",
          description: "Forward automated system emails to get instant notifications",
          icon: "server",
        },
        {
          title: "Support Tickets",
          description: "Never miss a customer support email",
          icon: "headphones",
        },
        {
          title: "Order Confirmations",
          description: "Get notified for e-commerce orders instantly",
          icon: "shopping-cart",
        },
        {
          title: "Newsletter Alerts",
          description: "Be notified when important newsletters arrive",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "Start Using Email Triggers",
      description:
        "Download Echobell and set up email-based notifications in minutes.",
      primary: "Download App",
      secondary: "View Documentation",
    },
  },
  zh: {
    meta: {
      title: "邮件触发器",
      description:
        "将邮件转化为即时通知。转发或发送邮件到您的频道地址，接收推送通知或电话。",
      keywords: [
        "邮件通知",
        "邮件触发器",
        "邮件转推送通知",
        "邮件警报",
        "邮件转发警报",
      ],
    },
    hero: {
      badge: "邮件",
      title: "邮件驱动的通知",
      description:
        "将任何邮件转化为即时警报。每个频道都有唯一的邮件地址 - 只需转发或发送邮件即可触发通知。",
    },
    howItWorks: {
      title: "工作原理",
      subtitle: "简单的邮件警报系统",
      steps: [
        {
          title: "获取邮件地址",
          description: "每个频道都有唯一的邮件地址。在频道设置中找到它。",
        },
        {
          title: "转发或发送邮件",
          description:
            "转发重要邮件或设置自动转发规则到您的频道邮件地址。",
        },
        {
          title: "接收通知",
          description: "立即获得包含邮件内容的推送通知或电话。",
        },
      ],
    },
    variables: {
      title: "邮件变量",
      subtitle: "在模板中访问邮件数据",
      items: [
        { variable: "{{from}}", description: "发件人邮件地址" },
        { variable: "{{subject}}", description: "邮件主题" },
        { variable: "{{text}}", description: "纯文本邮件正文" },
        { variable: "{{html}}", description: "HTML 邮件正文" },
      ],
    },
    useCases: {
      title: "完美适用于",
      items: [
        {
          title: "系统警报",
          description: "转发自动系统邮件以获得即时通知",
          icon: "server",
        },
        {
          title: "支持工单",
          description: "绝不错过客户支持邮件",
          icon: "headphones",
        },
        {
          title: "订单确认",
          description: "立即获得电商订单通知",
          icon: "shopping-cart",
        },
        {
          title: "新闻通讯提醒",
          description: "重要新闻通讯到达时获得通知",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "开始使用邮件触发器",
      description: "下载 Echobell，几分钟内设置邮件通知。",
      primary: "下载应用",
      secondary: "查看文档",
    },
  },
  es: {
    meta: {
      title: "Disparadores de Email",
      description:
        "Convierte emails en notificaciones instantáneas. Reenvía o envía emails a la dirección de tu canal y recibe notificaciones push o llamadas.",
      keywords: [
        "notificaciones email",
        "disparadores email",
        "email a notificación push",
        "alertas email",
        "alertas reenvío email",
      ],
    },
    hero: {
      badge: "Email",
      title: "Notificaciones por Email",
      description:
        "Convierte cualquier email en una alerta instantánea. Cada canal tiene una dirección de email única - solo reenvía o envía emails para activar notificaciones.",
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Alertas simples basadas en email",
      steps: [
        {
          title: "Obtén tu Dirección de Email",
          description:
            "Cada canal tiene una dirección de email única. Encuéntrala en la configuración del canal.",
        },
        {
          title: "Reenvía o Envía Emails",
          description:
            "Reenvía emails importantes o configura reglas de auto-reenvío a tu email del canal.",
        },
        {
          title: "Recibe Notificaciones",
          description:
            "Recibe notificaciones push instantáneas o llamadas con el contenido del email.",
        },
      ],
    },
    variables: {
      title: "Variables de Email",
      subtitle: "Accede a datos del email en tus plantillas",
      items: [
        { variable: "{{from}}", description: "Dirección del remitente" },
        { variable: "{{subject}}", description: "Asunto del email" },
        { variable: "{{text}}", description: "Cuerpo del email en texto plano" },
        { variable: "{{html}}", description: "Cuerpo del email en HTML" },
      ],
    },
    useCases: {
      title: "Perfecto Para",
      items: [
        {
          title: "Alertas del Sistema",
          description: "Reenvía emails automáticos del sistema para notificaciones instantáneas",
          icon: "server",
        },
        {
          title: "Tickets de Soporte",
          description: "Nunca te pierdas un email de soporte al cliente",
          icon: "headphones",
        },
        {
          title: "Confirmaciones de Pedido",
          description: "Recibe notificaciones de pedidos e-commerce al instante",
          icon: "shopping-cart",
        },
        {
          title: "Alertas de Newsletter",
          description: "Sé notificado cuando lleguen newsletters importantes",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "Comienza a Usar Disparadores de Email",
      description:
        "Descarga Echobell y configura notificaciones basadas en email en minutos.",
      primary: "Descargar App",
      secondary: "Ver Documentación",
    },
  },
  fr: {
    meta: {
      title: "Déclencheurs Email",
      description:
        "Convertissez les emails en notifications instantanées. Transférez ou envoyez des emails à l'adresse de votre canal et recevez des notifications push ou appels.",
      keywords: [
        "notifications email",
        "déclencheurs email",
        "email vers notification push",
        "alertes email",
        "alertes transfert email",
      ],
    },
    hero: {
      badge: "Email",
      title: "Notifications par Email",
      description:
        "Transformez n'importe quel email en alerte instantanée. Chaque canal a une adresse email unique - transférez ou envoyez des emails pour déclencher des notifications.",
    },
    howItWorks: {
      title: "Comment ça Marche",
      subtitle: "Alertes simples basées sur email",
      steps: [
        {
          title: "Obtenez votre Adresse Email",
          description:
            "Chaque canal a une adresse email unique. Trouvez-la dans les paramètres du canal.",
        },
        {
          title: "Transférez ou Envoyez des Emails",
          description:
            "Transférez les emails importants ou configurez des règles de transfert automatique vers votre email de canal.",
        },
        {
          title: "Recevez des Notifications",
          description:
            "Recevez des notifications push instantanées ou des appels avec le contenu de l'email.",
        },
      ],
    },
    variables: {
      title: "Variables Email",
      subtitle: "Accédez aux données email dans vos modèles",
      items: [
        { variable: "{{from}}", description: "Adresse de l'expéditeur" },
        { variable: "{{subject}}", description: "Objet de l'email" },
        { variable: "{{text}}", description: "Corps de l'email en texte brut" },
        { variable: "{{html}}", description: "Corps de l'email en HTML" },
      ],
    },
    useCases: {
      title: "Parfait Pour",
      items: [
        {
          title: "Alertes Système",
          description: "Transférez les emails système automatiques pour des notifications instantanées",
          icon: "server",
        },
        {
          title: "Tickets Support",
          description: "Ne manquez jamais un email de support client",
          icon: "headphones",
        },
        {
          title: "Confirmations de Commande",
          description: "Soyez notifié instantanément des commandes e-commerce",
          icon: "shopping-cart",
        },
        {
          title: "Alertes Newsletter",
          description: "Soyez notifié quand des newsletters importantes arrivent",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "Commencez à Utiliser les Déclencheurs Email",
      description:
        "Téléchargez Echobell et configurez les notifications par email en quelques minutes.",
      primary: "Télécharger l'App",
      secondary: "Voir la Documentation",
    },
  },
  ja: {
    meta: {
      title: "メールトリガー",
      description:
        "メールを即座の通知に変換。チャンネルアドレスにメールを転送または送信して、プッシュ通知や電話を受信。",
      keywords: [
        "メール通知",
        "メールトリガー",
        "メールからプッシュ通知",
        "メールアラート",
        "メール転送アラート",
      ],
    },
    hero: {
      badge: "メール",
      title: "メール駆動の通知",
      description:
        "どんなメールも即座のアラートに。各チャンネルには一意のメールアドレスがあります - メールを転送または送信するだけで通知がトリガーされます。",
    },
    howItWorks: {
      title: "仕組み",
      subtitle: "シンプルなメールベースのアラート",
      steps: [
        {
          title: "メールアドレスを取得",
          description:
            "各チャンネルには一意のメールアドレスがあります。チャンネル設定で確認してください。",
        },
        {
          title: "メールを転送または送信",
          description:
            "重要なメールを転送するか、チャンネルメールへの自動転送ルールを設定します。",
        },
        {
          title: "通知を受信",
          description:
            "メール内容を含む即座のプッシュ通知または電話を受け取ります。",
        },
      ],
    },
    variables: {
      title: "メール変数",
      subtitle: "テンプレートでメールデータにアクセス",
      items: [
        { variable: "{{from}}", description: "送信者のメールアドレス" },
        { variable: "{{subject}}", description: "メールの件名" },
        { variable: "{{text}}", description: "プレーンテキストのメール本文" },
        { variable: "{{html}}", description: "HTML メール本文" },
      ],
    },
    useCases: {
      title: "最適な用途",
      items: [
        {
          title: "システムアラート",
          description: "自動システムメールを転送して即座の通知を取得",
          icon: "server",
        },
        {
          title: "サポートチケット",
          description: "カスタマーサポートメールを見逃さない",
          icon: "headphones",
        },
        {
          title: "注文確認",
          description: "E コマース注文の即座通知",
          icon: "shopping-cart",
        },
        {
          title: "ニュースレターアラート",
          description: "重要なニュースレターの到着時に通知",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "メールトリガーを使い始める",
      description:
        "Echobell をダウンロードして、数分でメールベースの通知を設定。",
      primary: "アプリをダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "E-Mail-Trigger",
      description:
        "Wandeln Sie E-Mails in sofortige Benachrichtigungen um. Leiten Sie E-Mails an Ihre Kanaladresse weiter und erhalten Sie Push-Benachrichtigungen oder Anrufe.",
      keywords: [
        "E-Mail-Benachrichtigungen",
        "E-Mail-Trigger",
        "E-Mail zu Push-Benachrichtigung",
        "E-Mail-Alerts",
        "E-Mail-Weiterleitungs-Alerts",
      ],
    },
    hero: {
      badge: "E-Mail",
      title: "E-Mail-gesteuerte Benachrichtigungen",
      description:
        "Verwandeln Sie jede E-Mail in einen sofortigen Alert. Jeder Kanal hat eine eindeutige E-Mail-Adresse - leiten Sie E-Mails einfach weiter oder senden Sie sie, um Benachrichtigungen auszulösen.",
    },
    howItWorks: {
      title: "So Funktioniert's",
      subtitle: "Einfache E-Mail-basierte Benachrichtigungen",
      steps: [
        {
          title: "E-Mail-Adresse erhalten",
          description:
            "Jeder Kanal hat eine eindeutige E-Mail-Adresse. Finden Sie sie in Ihren Kanaleinstellungen.",
        },
        {
          title: "E-Mails weiterleiten oder senden",
          description:
            "Leiten Sie wichtige E-Mails weiter oder richten Sie Auto-Weiterleitungsregeln zu Ihrer Kanal-E-Mail ein.",
        },
        {
          title: "Benachrichtigungen erhalten",
          description:
            "Erhalten Sie sofortige Push-Benachrichtigungen oder Anrufe mit dem E-Mail-Inhalt.",
        },
      ],
    },
    variables: {
      title: "E-Mail-Variablen",
      subtitle: "Zugriff auf E-Mail-Daten in Ihren Vorlagen",
      items: [
        { variable: "{{from}}", description: "E-Mail-Adresse des Absenders" },
        { variable: "{{subject}}", description: "E-Mail-Betreff" },
        { variable: "{{text}}", description: "E-Mail-Text in Klartext" },
        { variable: "{{html}}", description: "E-Mail-Text in HTML" },
      ],
    },
    useCases: {
      title: "Perfekt Für",
      items: [
        {
          title: "System-Alerts",
          description: "Leiten Sie automatische System-E-Mails für sofortige Benachrichtigungen weiter",
          icon: "server",
        },
        {
          title: "Support-Tickets",
          description: "Verpassen Sie nie eine Kundensupport-E-Mail",
          icon: "headphones",
        },
        {
          title: "Bestellbestätigungen",
          description: "Werden Sie sofort über E-Commerce-Bestellungen benachrichtigt",
          icon: "shopping-cart",
        },
        {
          title: "Newsletter-Alerts",
          description: "Werden Sie benachrichtigt, wenn wichtige Newsletter ankommen",
          icon: "mail",
        },
      ],
    },
    cta: {
      title: "Starten Sie mit E-Mail-Triggern",
      description:
        "Laden Sie Echobell herunter und richten Sie E-Mail-basierte Benachrichtigungen in Minuten ein.",
      primary: "App Herunterladen",
      secondary: "Dokumentation Ansehen",
    },
  },
};

// Call Notifications feature page translations
export const callNotificationsI18n: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    whenToUse: {
      title: string;
      subtitle: string;
      items: Array<{ title: string; description: string; severity: string }>;
    };
    features: {
      title: string;
      subtitle: string;
      items: Array<{ title: string; description: string; icon: string }>;
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  en: {
    meta: {
      title: "Phone Call Alerts",
      description:
        "Never miss critical alerts with phone call notifications. When push notifications aren't enough, Echobell calls you directly with text-to-speech alerts.",
      keywords: [
        "phone call alerts",
        "critical notifications",
        "emergency alerts",
        "call notifications",
        "urgent alerts",
      ],
    },
    hero: {
      badge: "Critical Alerts",
      title: "Phone Calls for Critical Moments",
      description:
        "When silent notifications won't cut it, Echobell calls you directly. Perfect for production outages, security incidents, and other emergencies.",
    },
    whenToUse: {
      title: "When to Use Call Alerts",
      subtitle: "Reserved for the most critical situations",
      items: [
        {
          title: "Production Outages",
          description: "Servers down, services unavailable",
          severity: "critical",
        },
        {
          title: "Security Incidents",
          description: "Breach attempts, unauthorized access",
          severity: "critical",
        },
        {
          title: "Payment Failures",
          description: "Transaction errors, payment gateway issues",
          severity: "high",
        },
        {
          title: "On-Call Rotation",
          description: "Ensure on-call engineers are immediately reached",
          severity: "high",
        },
      ],
    },
    features: {
      title: "Call Features",
      subtitle: "Designed for reliability",
      items: [
        {
          title: "Text-to-Speech",
          description: "Your notification content is spoken clearly",
          icon: "volume-2",
        },
        {
          title: "Repeat Option",
          description: "Configure content to repeat for clarity",
          icon: "repeat",
        },
        {
          title: "Auto Retry",
          description: "Automatic retry if the call doesn't connect",
          icon: "refresh-cw",
        },
        {
          title: "Bypass Focus Mode",
          description: "Calls break through Do Not Disturb",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple setup, immediate results",
      steps: [
        {
          title: "Configure Channel",
          description: "Set your channel to use phone call notifications for critical alerts.",
        },
        {
          title: "Trigger Alert",
          description: "Send a webhook or email that matches your critical alert conditions.",
        },
        {
          title: "Receive Call",
          description: "Your phone rings with a text-to-speech message of the alert content.",
        },
      ],
    },
    cta: {
      title: "Never Miss Critical Alerts",
      description:
        "Set up phone call notifications and sleep soundly knowing you'll be woken for true emergencies.",
      primary: "Download App",
      secondary: "View Documentation",
    },
  },
  zh: {
    meta: {
      title: "电话通知",
      description:
        "通过电话通知绝不错过关键警报。当推送通知不够时，Echobell 会直接给您打电话，使用语音播报警报内容。",
      keywords: [
        "电话警报",
        "关键通知",
        "紧急警报",
        "通话通知",
        "紧急警报",
      ],
    },
    hero: {
      badge: "关键警报",
      title: "关键时刻的电话通知",
      description:
        "当静默通知不够用时，Echobell 会直接给您打电话。非常适合生产故障、安全事件和其他紧急情况。",
    },
    whenToUse: {
      title: "何时使用电话警报",
      subtitle: "仅用于最关键的情况",
      items: [
        {
          title: "生产故障",
          description: "服务器宕机，服务不可用",
          severity: "critical",
        },
        {
          title: "安全事件",
          description: "入侵尝试，未授权访问",
          severity: "critical",
        },
        {
          title: "支付失败",
          description: "交易错误，支付网关问题",
          severity: "high",
        },
        {
          title: "值班轮换",
          description: "确保立即联系到值班工程师",
          severity: "high",
        },
      ],
    },
    features: {
      title: "通话功能",
      subtitle: "为可靠性而设计",
      items: [
        {
          title: "语音合成",
          description: "您的通知内容将被清晰朗读",
          icon: "volume-2",
        },
        {
          title: "重复选项",
          description: "配置内容重复以确保清晰",
          icon: "repeat",
        },
        {
          title: "自动重试",
          description: "如果通话未接通则自动重试",
          icon: "refresh-cw",
        },
        {
          title: "绕过专注模式",
          description: "电话可以突破勿扰模式",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "工作原理",
      subtitle: "简单设置，立即生效",
      steps: [
        {
          title: "配置频道",
          description: "将您的频道设置为对关键警报使用电话通知。",
        },
        {
          title: "触发警报",
          description: "发送符合您关键警报条件的 Webhook 或邮件。",
        },
        {
          title: "接收电话",
          description: "您的手机会响起，播放警报内容的语音消息。",
        },
      ],
    },
    cta: {
      title: "绝不错过关键警报",
      description: "设置电话通知，安心入睡，因为真正的紧急情况会唤醒您。",
      primary: "下载应用",
      secondary: "查看文档",
    },
  },
  es: {
    meta: {
      title: "Alertas por Llamada",
      description:
        "Nunca te pierdas alertas críticas con notificaciones por llamada. Cuando las notificaciones push no son suficientes, Echobell te llama directamente.",
      keywords: [
        "alertas por llamada",
        "notificaciones críticas",
        "alertas de emergencia",
        "notificaciones de llamada",
        "alertas urgentes",
      ],
    },
    hero: {
      badge: "Alertas Críticas",
      title: "Llamadas para Momentos Críticos",
      description:
        "Cuando las notificaciones silenciosas no son suficientes, Echobell te llama directamente. Perfecto para caídas de producción, incidentes de seguridad y otras emergencias.",
    },
    whenToUse: {
      title: "Cuándo Usar Alertas por Llamada",
      subtitle: "Reservadas para las situaciones más críticas",
      items: [
        {
          title: "Caídas de Producción",
          description: "Servidores caídos, servicios no disponibles",
          severity: "critical",
        },
        {
          title: "Incidentes de Seguridad",
          description: "Intentos de intrusión, acceso no autorizado",
          severity: "critical",
        },
        {
          title: "Fallos de Pago",
          description: "Errores de transacción, problemas de gateway de pago",
          severity: "high",
        },
        {
          title: "Rotación de Guardia",
          description: "Asegura que los ingenieros de guardia sean contactados inmediatamente",
          severity: "high",
        },
      ],
    },
    features: {
      title: "Funciones de Llamada",
      subtitle: "Diseñadas para confiabilidad",
      items: [
        {
          title: "Texto a Voz",
          description: "El contenido de tu notificación se lee claramente",
          icon: "volume-2",
        },
        {
          title: "Opción de Repetir",
          description: "Configura el contenido para repetir para mayor claridad",
          icon: "repeat",
        },
        {
          title: "Reintento Automático",
          description: "Reintento automático si la llamada no conecta",
          icon: "refresh-cw",
        },
        {
          title: "Bypass Modo Enfoque",
          description: "Las llamadas atraviesan No Molestar",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Configuración simple, resultados inmediatos",
      steps: [
        {
          title: "Configurar Canal",
          description: "Configura tu canal para usar notificaciones por llamada para alertas críticas.",
        },
        {
          title: "Activar Alerta",
          description: "Envía un webhook o email que coincida con tus condiciones de alerta crítica.",
        },
        {
          title: "Recibir Llamada",
          description: "Tu teléfono suena con un mensaje de texto a voz del contenido de la alerta.",
        },
      ],
    },
    cta: {
      title: "Nunca Te Pierdas Alertas Críticas",
      description:
        "Configura notificaciones por llamada y duerme tranquilo sabiendo que serás despertado para verdaderas emergencias.",
      primary: "Descargar App",
      secondary: "Ver Documentación",
    },
  },
  fr: {
    meta: {
      title: "Alertes par Appel",
      description:
        "Ne manquez jamais les alertes critiques avec les notifications par appel téléphonique. Quand les notifications push ne suffisent pas, Echobell vous appelle directement.",
      keywords: [
        "alertes par appel",
        "notifications critiques",
        "alertes d'urgence",
        "notifications d'appel",
        "alertes urgentes",
      ],
    },
    hero: {
      badge: "Alertes Critiques",
      title: "Appels pour les Moments Critiques",
      description:
        "Quand les notifications silencieuses ne suffisent pas, Echobell vous appelle directement. Parfait pour les pannes de production, incidents de sécurité et autres urgences.",
    },
    whenToUse: {
      title: "Quand Utiliser les Alertes par Appel",
      subtitle: "Réservées aux situations les plus critiques",
      items: [
        {
          title: "Pannes de Production",
          description: "Serveurs en panne, services indisponibles",
          severity: "critical",
        },
        {
          title: "Incidents de Sécurité",
          description: "Tentatives d'intrusion, accès non autorisé",
          severity: "critical",
        },
        {
          title: "Échecs de Paiement",
          description: "Erreurs de transaction, problèmes de passerelle de paiement",
          severity: "high",
        },
        {
          title: "Rotation d'Astreinte",
          description: "Assurez que les ingénieurs d'astreinte sont immédiatement contactés",
          severity: "high",
        },
      ],
    },
    features: {
      title: "Fonctionnalités d'Appel",
      subtitle: "Conçues pour la fiabilité",
      items: [
        {
          title: "Synthèse Vocale",
          description: "Le contenu de votre notification est lu clairement",
          icon: "volume-2",
        },
        {
          title: "Option de Répétition",
          description: "Configurez le contenu à répéter pour plus de clarté",
          icon: "repeat",
        },
        {
          title: "Réessai Auto",
          description: "Réessai automatique si l'appel n'aboutit pas",
          icon: "refresh-cw",
        },
        {
          title: "Contourner Mode Focus",
          description: "Les appels passent à travers Ne Pas Déranger",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "Comment ça Marche",
      subtitle: "Configuration simple, résultats immédiats",
      steps: [
        {
          title: "Configurer le Canal",
          description: "Configurez votre canal pour utiliser les notifications par appel pour les alertes critiques.",
        },
        {
          title: "Déclencher l'Alerte",
          description: "Envoyez un webhook ou email correspondant à vos conditions d'alerte critique.",
        },
        {
          title: "Recevoir l'Appel",
          description: "Votre téléphone sonne avec un message vocal du contenu de l'alerte.",
        },
      ],
    },
    cta: {
      title: "Ne Manquez Jamais les Alertes Critiques",
      description:
        "Configurez les notifications par appel et dormez tranquille en sachant que vous serez réveillé pour les vraies urgences.",
      primary: "Télécharger l'App",
      secondary: "Voir la Documentation",
    },
  },
  ja: {
    meta: {
      title: "電話通知アラート",
      description:
        "電話通知で重要なアラートを見逃さない。プッシュ通知では不十分なとき、Echobell が直接電話します。",
      keywords: [
        "電話アラート",
        "重要な通知",
        "緊急アラート",
        "電話通知",
        "緊急アラート",
      ],
    },
    hero: {
      badge: "重要なアラート",
      title: "重要な瞬間への電話通知",
      description:
        "サイレント通知では不十分なとき、Echobell が直接電話します。本番障害、セキュリティインシデント、その他の緊急事態に最適。",
    },
    whenToUse: {
      title: "電話アラートの使用タイミング",
      subtitle: "最も重要な状況に限定",
      items: [
        {
          title: "本番障害",
          description: "サーバーダウン、サービス利用不可",
          severity: "critical",
        },
        {
          title: "セキュリティインシデント",
          description: "侵入試行、不正アクセス",
          severity: "critical",
        },
        {
          title: "支払い失敗",
          description: "取引エラー、決済ゲートウェイの問題",
          severity: "high",
        },
        {
          title: "オンコールローテーション",
          description: "オンコールエンジニアに即座に連絡",
          severity: "high",
        },
      ],
    },
    features: {
      title: "通話機能",
      subtitle: "信頼性のために設計",
      items: [
        {
          title: "音声合成",
          description: "通知内容が明確に読み上げられます",
          icon: "volume-2",
        },
        {
          title: "リピートオプション",
          description: "明確にするため内容を繰り返すよう設定",
          icon: "repeat",
        },
        {
          title: "自動リトライ",
          description: "通話が接続しない場合自動でリトライ",
          icon: "refresh-cw",
        },
        {
          title: "集中モードを迂回",
          description: "電話は「おやすみモード」を通過",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "仕組み",
      subtitle: "簡単設定、即座の結果",
      steps: [
        {
          title: "チャンネルを設定",
          description: "重要なアラートに電話通知を使用するようチャンネルを設定します。",
        },
        {
          title: "アラートをトリガー",
          description: "重要なアラート条件に一致する Webhook またはメールを送信します。",
        },
        {
          title: "電話を受ける",
          description: "アラート内容の音声メッセージで電話が鳴ります。",
        },
      ],
    },
    cta: {
      title: "重要なアラートを見逃さない",
      description:
        "電話通知を設定して、本当の緊急事態で起こされることを知って安心して眠りましょう。",
      primary: "アプリをダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Telefonanruf-Alerts",
      description:
        "Verpassen Sie nie kritische Alerts mit Telefonanruf-Benachrichtigungen. Wenn Push-Benachrichtigungen nicht ausreichen, ruft Echobell Sie direkt an.",
      keywords: [
        "Telefonanruf-Alerts",
        "kritische Benachrichtigungen",
        "Notfall-Alerts",
        "Anruf-Benachrichtigungen",
        "dringende Alerts",
      ],
    },
    hero: {
      badge: "Kritische Alerts",
      title: "Anrufe für kritische Momente",
      description:
        "Wenn stille Benachrichtigungen nicht ausreichen, ruft Echobell Sie direkt an. Perfekt für Produktionsausfälle, Sicherheitsvorfälle und andere Notfälle.",
    },
    whenToUse: {
      title: "Wann Anruf-Alerts verwenden",
      subtitle: "Reserviert für die kritischsten Situationen",
      items: [
        {
          title: "Produktionsausfälle",
          description: "Server ausgefallen, Dienste nicht verfügbar",
          severity: "critical",
        },
        {
          title: "Sicherheitsvorfälle",
          description: "Eindringversuche, unbefugter Zugriff",
          severity: "critical",
        },
        {
          title: "Zahlungsfehler",
          description: "Transaktionsfehler, Payment-Gateway-Probleme",
          severity: "high",
        },
        {
          title: "Bereitschaftsrotation",
          description: "Stellen Sie sicher, dass Bereitschaftsingenieure sofort erreicht werden",
          severity: "high",
        },
      ],
    },
    features: {
      title: "Anruf-Funktionen",
      subtitle: "Für Zuverlässigkeit entwickelt",
      items: [
        {
          title: "Text-zu-Sprache",
          description: "Ihr Benachrichtigungsinhalt wird klar vorgelesen",
          icon: "volume-2",
        },
        {
          title: "Wiederholungsoption",
          description: "Konfigurieren Sie Inhalt zur Wiederholung für Klarheit",
          icon: "repeat",
        },
        {
          title: "Auto-Wiederholung",
          description: "Automatische Wiederholung wenn der Anruf nicht verbindet",
          icon: "refresh-cw",
        },
        {
          title: "Fokus-Modus umgehen",
          description: "Anrufe durchbrechen Bitte nicht stören",
          icon: "bell-ring",
        },
      ],
    },
    howItWorks: {
      title: "So Funktioniert's",
      subtitle: "Einfache Einrichtung, sofortige Ergebnisse",
      steps: [
        {
          title: "Kanal konfigurieren",
          description: "Stellen Sie Ihren Kanal auf Telefonanruf-Benachrichtigungen für kritische Alerts.",
        },
        {
          title: "Alert auslösen",
          description: "Senden Sie einen Webhook oder eine E-Mail, die Ihren kritischen Alert-Bedingungen entspricht.",
        },
        {
          title: "Anruf erhalten",
          description: "Ihr Telefon klingelt mit einer Sprachnachricht des Alert-Inhalts.",
        },
      ],
    },
    cta: {
      title: "Nie Wieder Kritische Alerts Verpassen",
      description:
        "Richten Sie Telefonanruf-Benachrichtigungen ein und schlafen Sie ruhig, da Sie bei echten Notfällen geweckt werden.",
      primary: "App Herunterladen",
      secondary: "Dokumentation Ansehen",
    },
  },
};

// Channels feature page translations
export const channelsI18n: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    organization: {
      title: string;
      subtitle: string;
      features: Array<{ title: string; description: string; icon: string }>;
    };
    sharing: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    advanced: {
      title: string;
      subtitle: string;
      items: Array<{ title: string; description: string; icon: string }>;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  en: {
    meta: {
      title: "Channel Management",
      description:
        "Organize your notifications with smart channels. Create customizable channels with unique colors, share with team members, and manage alert conditions.",
      keywords: [
        "notification channels",
        "team sharing",
        "alert organization",
        "channel management",
        "notification groups",
      ],
    },
    hero: {
      badge: "Organization",
      title: "Smart Channel Management",
      description:
        "Organize notifications into logical channels. Share with your team, customize appearance, and control exactly when you get notified.",
    },
    organization: {
      title: "Stay Organized",
      subtitle: "Keep your alerts structured",
      features: [
        {
          title: "Custom Names & Colors",
          description: "Give each channel a unique identity for quick recognition",
          icon: "palette",
        },
        {
          title: "Private Notes",
          description: "Add notes to remember what each channel is for",
          icon: "sticky-note",
        },
        {
          title: "Condition Filters",
          description: "Only trigger notifications when specific conditions are met",
          icon: "filter",
        },
        {
          title: "Link Templates",
          description: "Add clickable links in notifications with dynamic data",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "Team Collaboration",
      subtitle: "Share channels effortlessly",
      steps: [
        {
          title: "Create Your Channel",
          description: "Set up a channel with your preferred name, color, and notification settings.",
        },
        {
          title: "Generate Share Link",
          description: "Get a unique subscription link that others can use to join your channel.",
        },
        {
          title: "Team Subscribes",
          description: "Team members open the link in Echobell and subscribe instantly.",
        },
      ],
    },
    advanced: {
      title: "Advanced Features",
      subtitle: "Power user capabilities",
      items: [
        {
          title: "Conditional Triggers",
          description: "Use expressions to filter when notifications are sent",
          icon: "code",
        },
        {
          title: "Dynamic Links",
          description: "Include webhook data in clickable notification links",
          icon: "external-link",
        },
        {
          title: "Multiple Trigger Types",
          description: "Each channel supports both webhook and email triggers",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "Start Organizing Your Alerts",
      description:
        "Download Echobell and create your first notification channel today.",
      primary: "Download App",
      secondary: "View Documentation",
    },
  },
  zh: {
    meta: {
      title: "频道管理",
      description:
        "使用智能频道组织您的通知。创建具有独特颜色的可自定义频道，与团队成员共享，并管理警报条件。",
      keywords: [
        "通知频道",
        "团队共享",
        "警报组织",
        "频道管理",
        "通知分组",
      ],
    },
    hero: {
      badge: "组织",
      title: "智能频道管理",
      description:
        "将通知组织到逻辑频道中。与团队共享，自定义外观，并精确控制何时收到通知。",
    },
    organization: {
      title: "保持有序",
      subtitle: "让您的警报结构化",
      features: [
        {
          title: "自定义名称和颜色",
          description: "为每个频道赋予独特的标识以便快速识别",
          icon: "palette",
        },
        {
          title: "私有备注",
          description: "添加备注以记住每个频道的用途",
          icon: "sticky-note",
        },
        {
          title: "条件过滤器",
          description: "仅在满足特定条件时触发通知",
          icon: "filter",
        },
        {
          title: "链接模板",
          description: "在通知中添加带有动态数据的可点击链接",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "团队协作",
      subtitle: "轻松共享频道",
      steps: [
        {
          title: "创建您的频道",
          description: "使用您喜欢的名称、颜色和通知设置创建频道。",
        },
        {
          title: "生成共享链接",
          description: "获取一个其他人可以用来加入您频道的唯一订阅链接。",
        },
        {
          title: "团队订阅",
          description: "团队成员在 Echobell 中打开链接并立即订阅。",
        },
      ],
    },
    advanced: {
      title: "高级功能",
      subtitle: "高级用户功能",
      items: [
        {
          title: "条件触发",
          description: "使用表达式过滤何时发送通知",
          icon: "code",
        },
        {
          title: "动态链接",
          description: "在可点击的通知链接中包含 Webhook 数据",
          icon: "external-link",
        },
        {
          title: "多种触发类型",
          description: "每个频道同时支持 Webhook 和邮件触发",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "开始组织您的警报",
      description: "下载 Echobell 并立即创建您的第一个通知频道。",
      primary: "下载应用",
      secondary: "查看文档",
    },
  },
  es: {
    meta: {
      title: "Gestión de Canales",
      description:
        "Organiza tus notificaciones con canales inteligentes. Crea canales personalizables con colores únicos, comparte con miembros del equipo y gestiona condiciones de alerta.",
      keywords: [
        "canales de notificación",
        "compartir en equipo",
        "organización de alertas",
        "gestión de canales",
        "grupos de notificación",
      ],
    },
    hero: {
      badge: "Organización",
      title: "Gestión Inteligente de Canales",
      description:
        "Organiza las notificaciones en canales lógicos. Comparte con tu equipo, personaliza la apariencia y controla exactamente cuándo recibes notificaciones.",
    },
    organization: {
      title: "Mantente Organizado",
      subtitle: "Mantén tus alertas estructuradas",
      features: [
        {
          title: "Nombres y Colores Personalizados",
          description: "Dale a cada canal una identidad única para reconocimiento rápido",
          icon: "palette",
        },
        {
          title: "Notas Privadas",
          description: "Agrega notas para recordar para qué es cada canal",
          icon: "sticky-note",
        },
        {
          title: "Filtros de Condición",
          description: "Solo activa notificaciones cuando se cumplen condiciones específicas",
          icon: "filter",
        },
        {
          title: "Plantillas de Enlaces",
          description: "Agrega enlaces clicables en notificaciones con datos dinámicos",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "Colaboración en Equipo",
      subtitle: "Comparte canales fácilmente",
      steps: [
        {
          title: "Crea Tu Canal",
          description: "Configura un canal con tu nombre, color y configuración de notificación preferidos.",
        },
        {
          title: "Genera Enlace de Compartir",
          description: "Obtén un enlace de suscripción único que otros pueden usar para unirse a tu canal.",
        },
        {
          title: "El Equipo Se Suscribe",
          description: "Los miembros del equipo abren el enlace en Echobell y se suscriben al instante.",
        },
      ],
    },
    advanced: {
      title: "Funciones Avanzadas",
      subtitle: "Capacidades para usuarios avanzados",
      items: [
        {
          title: "Disparadores Condicionales",
          description: "Usa expresiones para filtrar cuándo se envían las notificaciones",
          icon: "code",
        },
        {
          title: "Enlaces Dinámicos",
          description: "Incluye datos del webhook en enlaces de notificación clicables",
          icon: "external-link",
        },
        {
          title: "Múltiples Tipos de Disparador",
          description: "Cada canal soporta tanto webhook como disparadores de email",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "Comienza a Organizar Tus Alertas",
      description:
        "Descarga Echobell y crea tu primer canal de notificación hoy.",
      primary: "Descargar App",
      secondary: "Ver Documentación",
    },
  },
  fr: {
    meta: {
      title: "Gestion des Canaux",
      description:
        "Organisez vos notifications avec des canaux intelligents. Créez des canaux personnalisables avec des couleurs uniques, partagez avec les membres de l'équipe et gérez les conditions d'alerte.",
      keywords: [
        "canaux de notification",
        "partage d'équipe",
        "organisation des alertes",
        "gestion des canaux",
        "groupes de notification",
      ],
    },
    hero: {
      badge: "Organisation",
      title: "Gestion Intelligente des Canaux",
      description:
        "Organisez les notifications en canaux logiques. Partagez avec votre équipe, personnalisez l'apparence et contrôlez exactement quand vous êtes notifié.",
    },
    organization: {
      title: "Restez Organisé",
      subtitle: "Gardez vos alertes structurées",
      features: [
        {
          title: "Noms et Couleurs Personnalisés",
          description: "Donnez à chaque canal une identité unique pour une reconnaissance rapide",
          icon: "palette",
        },
        {
          title: "Notes Privées",
          description: "Ajoutez des notes pour vous rappeler à quoi sert chaque canal",
          icon: "sticky-note",
        },
        {
          title: "Filtres de Condition",
          description: "Ne déclenchez des notifications que lorsque des conditions spécifiques sont remplies",
          icon: "filter",
        },
        {
          title: "Modèles de Liens",
          description: "Ajoutez des liens cliquables dans les notifications avec des données dynamiques",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "Collaboration d'Équipe",
      subtitle: "Partagez les canaux facilement",
      steps: [
        {
          title: "Créez Votre Canal",
          description: "Configurez un canal avec votre nom, couleur et paramètres de notification préférés.",
        },
        {
          title: "Générez un Lien de Partage",
          description: "Obtenez un lien d'abonnement unique que d'autres peuvent utiliser pour rejoindre votre canal.",
        },
        {
          title: "L'Équipe S'abonne",
          description: "Les membres de l'équipe ouvrent le lien dans Echobell et s'abonnent instantanément.",
        },
      ],
    },
    advanced: {
      title: "Fonctionnalités Avancées",
      subtitle: "Capacités pour utilisateurs avancés",
      items: [
        {
          title: "Déclencheurs Conditionnels",
          description: "Utilisez des expressions pour filtrer quand les notifications sont envoyées",
          icon: "code",
        },
        {
          title: "Liens Dynamiques",
          description: "Incluez des données webhook dans les liens de notification cliquables",
          icon: "external-link",
        },
        {
          title: "Types de Déclencheurs Multiples",
          description: "Chaque canal supporte à la fois les déclencheurs webhook et email",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "Commencez à Organiser Vos Alertes",
      description:
        "Téléchargez Echobell et créez votre premier canal de notification aujourd'hui.",
      primary: "Télécharger l'App",
      secondary: "Voir la Documentation",
    },
  },
  ja: {
    meta: {
      title: "チャンネル管理",
      description:
        "スマートチャンネルで通知を整理。ユニークな色でカスタマイズ可能なチャンネルを作成し、チームメンバーと共有し、アラート条件を管理。",
      keywords: [
        "通知チャンネル",
        "チーム共有",
        "アラート整理",
        "チャンネル管理",
        "通知グループ",
      ],
    },
    hero: {
      badge: "整理",
      title: "スマートチャンネル管理",
      description:
        "通知を論理的なチャンネルに整理。チームと共有し、外観をカスタマイズし、いつ通知を受け取るかを正確に制御。",
    },
    organization: {
      title: "整理整頓",
      subtitle: "アラートを構造化",
      features: [
        {
          title: "カスタム名と色",
          description: "各チャンネルに素早く認識できるユニークなアイデンティティを付与",
          icon: "palette",
        },
        {
          title: "プライベートメモ",
          description: "各チャンネルの用途を覚えておくためのメモを追加",
          icon: "sticky-note",
        },
        {
          title: "条件フィルター",
          description: "特定の条件が満たされた場合のみ通知をトリガー",
          icon: "filter",
        },
        {
          title: "リンクテンプレート",
          description: "動的データを含むクリック可能なリンクを通知に追加",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "チームコラボレーション",
      subtitle: "チャンネルを簡単に共有",
      steps: [
        {
          title: "チャンネルを作成",
          description: "お好みの名前、色、通知設定でチャンネルをセットアップ。",
        },
        {
          title: "共有リンクを生成",
          description: "他の人がチャンネルに参加するために使用できる一意の購読リンクを取得。",
        },
        {
          title: "チームが購読",
          description: "チームメンバーが Echobell でリンクを開き、即座に購読。",
        },
      ],
    },
    advanced: {
      title: "高度な機能",
      subtitle: "パワーユーザー向け機能",
      items: [
        {
          title: "条件付きトリガー",
          description: "式を使用して通知の送信タイミングをフィルター",
          icon: "code",
        },
        {
          title: "動的リンク",
          description: "クリック可能な通知リンクに Webhook データを含める",
          icon: "external-link",
        },
        {
          title: "複数のトリガータイプ",
          description: "各チャンネルは Webhook とメールトリガーの両方をサポート",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "アラートの整理を始める",
      description: "Echobell をダウンロードして、今日最初の通知チャンネルを作成しましょう。",
      primary: "アプリをダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Kanal-Verwaltung",
      description:
        "Organisieren Sie Ihre Benachrichtigungen mit intelligenten Kanälen. Erstellen Sie anpassbare Kanäle mit einzigartigen Farben, teilen Sie mit Teammitgliedern und verwalten Sie Alert-Bedingungen.",
      keywords: [
        "Benachrichtigungskanäle",
        "Team-Sharing",
        "Alert-Organisation",
        "Kanal-Verwaltung",
        "Benachrichtigungsgruppen",
      ],
    },
    hero: {
      badge: "Organisation",
      title: "Intelligente Kanal-Verwaltung",
      description:
        "Organisieren Sie Benachrichtigungen in logische Kanäle. Teilen Sie mit Ihrem Team, passen Sie das Erscheinungsbild an und kontrollieren Sie genau, wann Sie benachrichtigt werden.",
    },
    organization: {
      title: "Bleiben Sie Organisiert",
      subtitle: "Halten Sie Ihre Alerts strukturiert",
      features: [
        {
          title: "Benutzerdefinierte Namen & Farben",
          description: "Geben Sie jedem Kanal eine einzigartige Identität für schnelle Erkennung",
          icon: "palette",
        },
        {
          title: "Private Notizen",
          description: "Fügen Sie Notizen hinzu, um sich zu merken, wofür jeder Kanal ist",
          icon: "sticky-note",
        },
        {
          title: "Bedingungsfilter",
          description: "Lösen Sie Benachrichtigungen nur aus, wenn bestimmte Bedingungen erfüllt sind",
          icon: "filter",
        },
        {
          title: "Link-Vorlagen",
          description: "Fügen Sie klickbare Links in Benachrichtigungen mit dynamischen Daten hinzu",
          icon: "link",
        },
      ],
    },
    sharing: {
      title: "Team-Zusammenarbeit",
      subtitle: "Teilen Sie Kanäle mühelos",
      steps: [
        {
          title: "Erstellen Sie Ihren Kanal",
          description: "Richten Sie einen Kanal mit Ihrem bevorzugten Namen, Farbe und Benachrichtigungseinstellungen ein.",
        },
        {
          title: "Share-Link Generieren",
          description: "Erhalten Sie einen eindeutigen Abonnement-Link, den andere verwenden können, um Ihrem Kanal beizutreten.",
        },
        {
          title: "Team Abonniert",
          description: "Teammitglieder öffnen den Link in Echobell und abonnieren sofort.",
        },
      ],
    },
    advanced: {
      title: "Erweiterte Funktionen",
      subtitle: "Power-User-Funktionen",
      items: [
        {
          title: "Bedingte Trigger",
          description: "Verwenden Sie Ausdrücke, um zu filtern, wann Benachrichtigungen gesendet werden",
          icon: "code",
        },
        {
          title: "Dynamische Links",
          description: "Fügen Sie Webhook-Daten in klickbare Benachrichtigungslinks ein",
          icon: "external-link",
        },
        {
          title: "Mehrere Trigger-Typen",
          description: "Jeder Kanal unterstützt sowohl Webhook- als auch E-Mail-Trigger",
          icon: "zap",
        },
      ],
    },
    cta: {
      title: "Beginnen Sie mit der Organisation Ihrer Alerts",
      description:
        "Laden Sie Echobell herunter und erstellen Sie heute Ihren ersten Benachrichtigungskanal.",
      primary: "App Herunterladen",
      secondary: "Dokumentation Ansehen",
    },
  },
};

// Templates feature page translations
export const templatesI18n: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    variables: {
      title: string;
      subtitle: string;
      description: string;
      examples: Array<{ template: string; result: string; description: string }>;
    };
    expressions: {
      title: string;
      subtitle: string;
      items: Array<{ expression: string; description: string }>;
    };
    conditions: {
      title: string;
      subtitle: string;
      description: string;
      example: { condition: string; explanation: string };
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  en: {
    meta: {
      title: "Dynamic Templates",
      description:
        "Create personalized notifications with dynamic templates. Use variables, expressions, and conditional logic to make your alerts informative and actionable.",
      keywords: [
        "notification templates",
        "dynamic variables",
        "conditional notifications",
        "template expressions",
        "custom notifications",
      ],
    },
    hero: {
      badge: "Customization",
      title: "Dynamic Notification Templates",
      description:
        "Transform static alerts into personalized, actionable notifications. Use powerful template syntax to include dynamic data from your webhooks and emails.",
    },
    variables: {
      title: "Template Variables",
      subtitle: "Insert dynamic data anywhere",
      description:
        "Access data from your webhook payload or email content using simple variable syntax.",
      examples: [
        {
          template: "Server {{server}} CPU: {{cpu}}%",
          result: "Server web-01 CPU: 85%",
          description: "Include metrics from monitoring webhooks",
        },
        {
          template: "Payment of ${{amount}} from {{customer}}",
          result: "Payment of $150.00 from John Doe",
          description: "Show payment details in e-commerce alerts",
        },
        {
          template: "Build {{build.status}} for {{repo}}",
          result: "Build failed for my-app",
          description: "CI/CD build status notifications",
        },
      ],
    },
    expressions: {
      title: "Smart Expressions",
      subtitle: "Logic in your templates",
      items: [
        { expression: "{{status == 'error'}}", description: "Boolean comparisons" },
        { expression: "{{count > 100}}", description: "Numeric comparisons" },
        { expression: "{{enabled && verified}}", description: "Logical operators" },
        { expression: "{{user.profile.name}}", description: "Nested object access" },
        { expression: "{{items[0].name}}", description: "Array element access" },
      ],
    },
    conditions: {
      title: "Conditional Notifications",
      subtitle: "Send only when it matters",
      description:
        "Set conditions on your channel to filter notifications. Only matching events will trigger alerts.",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "Only send notifications for errors with severity 3 or higher",
      },
    },
    cta: {
      title: "Create Smarter Notifications",
      description:
        "Download Echobell and start using dynamic templates for more informative alerts.",
      primary: "Download App",
      secondary: "View Documentation",
    },
  },
  zh: {
    meta: {
      title: "动态模板",
      description:
        "使用动态模板创建个性化通知。使用变量、表达式和条件逻辑使您的警报更具信息性和可操作性。",
      keywords: [
        "通知模板",
        "动态变量",
        "条件通知",
        "模板表达式",
        "自定义通知",
      ],
    },
    hero: {
      badge: "自定义",
      title: "动态通知模板",
      description:
        "将静态警报转换为个性化、可操作的通知。使用强大的模板语法包含来自 Webhook 和邮件的动态数据。",
    },
    variables: {
      title: "模板变量",
      subtitle: "在任何位置插入动态数据",
      description:
        "使用简单的变量语法访问 Webhook 负载或邮件内容中的数据。",
      examples: [
        {
          template: "服务器 {{server}} CPU: {{cpu}}%",
          result: "服务器 web-01 CPU: 85%",
          description: "包含监控 Webhook 的指标",
        },
        {
          template: "收到来自 {{customer}} 的 ¥{{amount}} 付款",
          result: "收到来自 张三 的 ¥150.00 付款",
          description: "在电商警报中显示付款详情",
        },
        {
          template: "{{repo}} 的构建 {{build.status}}",
          result: "my-app 的构建失败",
          description: "CI/CD 构建状态通知",
        },
      ],
    },
    expressions: {
      title: "智能表达式",
      subtitle: "模板中的逻辑",
      items: [
        { expression: "{{status == 'error'}}", description: "布尔比较" },
        { expression: "{{count > 100}}", description: "数字比较" },
        { expression: "{{enabled && verified}}", description: "逻辑运算符" },
        { expression: "{{user.profile.name}}", description: "嵌套对象访问" },
        { expression: "{{items[0].name}}", description: "数组元素访问" },
      ],
    },
    conditions: {
      title: "条件通知",
      subtitle: "仅在重要时发送",
      description: "在频道上设置条件以过滤通知。只有匹配的事件才会触发警报。",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "仅为严重程度 3 或更高的错误发送通知",
      },
    },
    cta: {
      title: "创建更智能的通知",
      description: "下载 Echobell 并开始使用动态模板获得更具信息性的警报。",
      primary: "下载应用",
      secondary: "查看文档",
    },
  },
  es: {
    meta: {
      title: "Plantillas Dinámicas",
      description:
        "Crea notificaciones personalizadas con plantillas dinámicas. Usa variables, expresiones y lógica condicional para hacer tus alertas informativas y accionables.",
      keywords: [
        "plantillas de notificación",
        "variables dinámicas",
        "notificaciones condicionales",
        "expresiones de plantilla",
        "notificaciones personalizadas",
      ],
    },
    hero: {
      badge: "Personalización",
      title: "Plantillas de Notificación Dinámicas",
      description:
        "Transforma alertas estáticas en notificaciones personalizadas y accionables. Usa sintaxis de plantilla potente para incluir datos dinámicos de tus webhooks y emails.",
    },
    variables: {
      title: "Variables de Plantilla",
      subtitle: "Inserta datos dinámicos en cualquier lugar",
      description:
        "Accede a datos de tu webhook o contenido de email usando sintaxis de variables simple.",
      examples: [
        {
          template: "Servidor {{server}} CPU: {{cpu}}%",
          result: "Servidor web-01 CPU: 85%",
          description: "Incluye métricas de webhooks de monitoreo",
        },
        {
          template: "Pago de ${{amount}} de {{customer}}",
          result: "Pago de $150.00 de Juan Pérez",
          description: "Muestra detalles de pago en alertas de e-commerce",
        },
        {
          template: "Build {{build.status}} para {{repo}}",
          result: "Build falló para my-app",
          description: "Notificaciones de estado de build CI/CD",
        },
      ],
    },
    expressions: {
      title: "Expresiones Inteligentes",
      subtitle: "Lógica en tus plantillas",
      items: [
        { expression: "{{status == 'error'}}", description: "Comparaciones booleanas" },
        { expression: "{{count > 100}}", description: "Comparaciones numéricas" },
        { expression: "{{enabled && verified}}", description: "Operadores lógicos" },
        { expression: "{{user.profile.name}}", description: "Acceso a objetos anidados" },
        { expression: "{{items[0].name}}", description: "Acceso a elementos de array" },
      ],
    },
    conditions: {
      title: "Notificaciones Condicionales",
      subtitle: "Envía solo cuando importa",
      description:
        "Establece condiciones en tu canal para filtrar notificaciones. Solo los eventos coincidentes activarán alertas.",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "Solo envía notificaciones para errores con severidad 3 o mayor",
      },
    },
    cta: {
      title: "Crea Notificaciones Más Inteligentes",
      description:
        "Descarga Echobell y comienza a usar plantillas dinámicas para alertas más informativas.",
      primary: "Descargar App",
      secondary: "Ver Documentación",
    },
  },
  fr: {
    meta: {
      title: "Modèles Dynamiques",
      description:
        "Créez des notifications personnalisées avec des modèles dynamiques. Utilisez des variables, expressions et logique conditionnelle pour rendre vos alertes informatives.",
      keywords: [
        "modèles de notification",
        "variables dynamiques",
        "notifications conditionnelles",
        "expressions de modèle",
        "notifications personnalisées",
      ],
    },
    hero: {
      badge: "Personnalisation",
      title: "Modèles de Notification Dynamiques",
      description:
        "Transformez des alertes statiques en notifications personnalisées et actionnables. Utilisez une syntaxe de modèle puissante pour inclure des données dynamiques.",
    },
    variables: {
      title: "Variables de Modèle",
      subtitle: "Insérez des données dynamiques partout",
      description:
        "Accédez aux données de votre webhook ou contenu email avec une syntaxe de variable simple.",
      examples: [
        {
          template: "Serveur {{server}} CPU: {{cpu}}%",
          result: "Serveur web-01 CPU: 85%",
          description: "Incluez des métriques des webhooks de monitoring",
        },
        {
          template: "Paiement de {{amount}}€ de {{customer}}",
          result: "Paiement de 150.00€ de Jean Dupont",
          description: "Affichez les détails de paiement dans les alertes e-commerce",
        },
        {
          template: "Build {{build.status}} pour {{repo}}",
          result: "Build échoué pour my-app",
          description: "Notifications de statut de build CI/CD",
        },
      ],
    },
    expressions: {
      title: "Expressions Intelligentes",
      subtitle: "Logique dans vos modèles",
      items: [
        { expression: "{{status == 'error'}}", description: "Comparaisons booléennes" },
        { expression: "{{count > 100}}", description: "Comparaisons numériques" },
        { expression: "{{enabled && verified}}", description: "Opérateurs logiques" },
        { expression: "{{user.profile.name}}", description: "Accès objets imbriqués" },
        { expression: "{{items[0].name}}", description: "Accès éléments de tableau" },
      ],
    },
    conditions: {
      title: "Notifications Conditionnelles",
      subtitle: "Envoyez seulement quand ça compte",
      description:
        "Définissez des conditions sur votre canal pour filtrer les notifications. Seuls les événements correspondants déclencheront des alertes.",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "N'envoyez des notifications que pour les erreurs de sévérité 3 ou plus",
      },
    },
    cta: {
      title: "Créez des Notifications Plus Intelligentes",
      description:
        "Téléchargez Echobell et commencez à utiliser des modèles dynamiques pour des alertes plus informatives.",
      primary: "Télécharger l'App",
      secondary: "Voir la Documentation",
    },
  },
  ja: {
    meta: {
      title: "動的テンプレート",
      description:
        "動的テンプレートでパーソナライズされた通知を作成。変数、式、条件ロジックを使用してアラートを情報的でアクション可能に。",
      keywords: [
        "通知テンプレート",
        "動的変数",
        "条件付き通知",
        "テンプレート式",
        "カスタム通知",
      ],
    },
    hero: {
      badge: "カスタマイズ",
      title: "動的通知テンプレート",
      description:
        "静的なアラートをパーソナライズされたアクション可能な通知に変換。強力なテンプレート構文を使用して Webhook やメールから動的データを含めます。",
    },
    variables: {
      title: "テンプレート変数",
      subtitle: "どこにでも動的データを挿入",
      description:
        "シンプルな変数構文で Webhook ペイロードやメールコンテンツのデータにアクセス。",
      examples: [
        {
          template: "サーバー {{server}} CPU: {{cpu}}%",
          result: "サーバー web-01 CPU: 85%",
          description: "監視 Webhook からのメトリクスを含める",
        },
        {
          template: "{{customer}} から ¥{{amount}} の支払い",
          result: "田中太郎 から ¥15,000 の支払い",
          description: "E コマースアラートで支払い詳細を表示",
        },
        {
          template: "{{repo}} のビルド {{build.status}}",
          result: "my-app のビルド失敗",
          description: "CI/CD ビルドステータス通知",
        },
      ],
    },
    expressions: {
      title: "スマート式",
      subtitle: "テンプレート内のロジック",
      items: [
        { expression: "{{status == 'error'}}", description: "ブール比較" },
        { expression: "{{count > 100}}", description: "数値比較" },
        { expression: "{{enabled && verified}}", description: "論理演算子" },
        { expression: "{{user.profile.name}}", description: "ネストオブジェクトアクセス" },
        { expression: "{{items[0].name}}", description: "配列要素アクセス" },
      ],
    },
    conditions: {
      title: "条件付き通知",
      subtitle: "重要な時だけ送信",
      description:
        "チャンネルに条件を設定して通知をフィルター。一致するイベントのみがアラートをトリガーします。",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "重大度 3 以上のエラーのみ通知を送信",
      },
    },
    cta: {
      title: "よりスマートな通知を作成",
      description:
        "Echobell をダウンロードして、より情報的なアラートのために動的テンプレートを使い始めましょう。",
      primary: "アプリをダウンロード",
      secondary: "ドキュメントを見る",
    },
  },
  de: {
    meta: {
      title: "Dynamische Vorlagen",
      description:
        "Erstellen Sie personalisierte Benachrichtigungen mit dynamischen Vorlagen. Verwenden Sie Variablen, Ausdrücke und bedingte Logik für informative Alerts.",
      keywords: [
        "Benachrichtigungsvorlagen",
        "dynamische Variablen",
        "bedingte Benachrichtigungen",
        "Vorlagenausdrücke",
        "benutzerdefinierte Benachrichtigungen",
      ],
    },
    hero: {
      badge: "Anpassung",
      title: "Dynamische Benachrichtigungsvorlagen",
      description:
        "Verwandeln Sie statische Alerts in personalisierte, umsetzbare Benachrichtigungen. Verwenden Sie leistungsstarke Vorlagensyntax, um dynamische Daten einzufügen.",
    },
    variables: {
      title: "Vorlagenvariablen",
      subtitle: "Fügen Sie dynamische Daten überall ein",
      description:
        "Greifen Sie auf Daten aus Ihrem Webhook-Payload oder E-Mail-Inhalt mit einfacher Variablensyntax zu.",
      examples: [
        {
          template: "Server {{server}} CPU: {{cpu}}%",
          result: "Server web-01 CPU: 85%",
          description: "Metriken von Monitoring-Webhooks einbeziehen",
        },
        {
          template: "Zahlung von {{amount}}€ von {{customer}}",
          result: "Zahlung von 150.00€ von Max Mustermann",
          description: "Zahlungsdetails in E-Commerce-Alerts anzeigen",
        },
        {
          template: "Build {{build.status}} für {{repo}}",
          result: "Build fehlgeschlagen für my-app",
          description: "CI/CD-Build-Status-Benachrichtigungen",
        },
      ],
    },
    expressions: {
      title: "Intelligente Ausdrücke",
      subtitle: "Logik in Ihren Vorlagen",
      items: [
        { expression: "{{status == 'error'}}", description: "Boolesche Vergleiche" },
        { expression: "{{count > 100}}", description: "Numerische Vergleiche" },
        { expression: "{{enabled && verified}}", description: "Logische Operatoren" },
        { expression: "{{user.profile.name}}", description: "Verschachtelter Objektzugriff" },
        { expression: "{{items[0].name}}", description: "Array-Element-Zugriff" },
      ],
    },
    conditions: {
      title: "Bedingte Benachrichtigungen",
      subtitle: "Nur senden, wenn es wichtig ist",
      description:
        "Setzen Sie Bedingungen auf Ihrem Kanal, um Benachrichtigungen zu filtern. Nur übereinstimmende Ereignisse lösen Alerts aus.",
      example: {
        condition: "status == 'error' && severity >= 3",
        explanation: "Nur Benachrichtigungen für Fehler mit Schweregrad 3 oder höher senden",
      },
    },
    cta: {
      title: "Erstellen Sie Intelligentere Benachrichtigungen",
      description:
        "Laden Sie Echobell herunter und beginnen Sie mit dynamischen Vorlagen für informativere Alerts.",
      primary: "App Herunterladen",
      secondary: "Dokumentation Ansehen",
    },
  },
};

// Related features helper
export const relatedFeatures = {
  webhooks: ["templates", "channels"] as const,
  emailTriggers: ["templates", "channels"] as const,
  callNotifications: ["webhooks", "emailTriggers"] as const,
  channels: ["webhooks", "emailTriggers"] as const,
  templates: ["webhooks", "emailTriggers"] as const,
};

export type FeatureKey = keyof typeof relatedFeatures;
