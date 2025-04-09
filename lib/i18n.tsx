import type { I18nConfig } from "fumadocs-core/i18n";

import appStoreImageEn from "@/public/images/app-store.en.svg";
import appStoreImageZh from "@/public/images/app-store.zh.svg";
import { Cover } from "@/components/ui/cover";

export const languages = ["en", "zh", "es", "fr"] as const;
export type Language = (typeof languages)[number];

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: [...languages],
  hideLocale: "default-locale",
};

export const uiDictionary = {
  en: {
    metadata: {
      titleTemplate: "%s | Echobell",
      defaultTitle: "Echobell",
      description:
        "Instant alerts for various scenarios, with webhooks and emails, into notifications and calls.",
      keywords: [
        "Echobell",
        "instant alerts",
        "notifications",
        "webhooks",
        "emails",
        "call notifications",
        "alert app",
        "notification channels",
        "bark app",
        "alerting",
        "trading alerts",
        "crypto alerts",
        "team alerts",
      ],
    },
    nav: {
      navigation: [
        { name: "Pricing", href: "/#pricing" },
        { name: "Docs", href: "/docs" },
        { name: "Blog", href: "/blog" },
      ],
    },
    hero: {
      title: (
        <>
          <Cover>Instant alerts</Cover> for various scenarios.
        </>
      ),
      description:
        "Echobell helps you stay notified with instant alerts from webhooks and emails. Create channels, share with your team, and never miss critical events from your applications and services.",
      downloadApp: "Download App",
      getStarted: "Get Started",
      appStoreImage: appStoreImageEn,
    },
    features: {
      title: "Powerful Features",
      subtitle: "Stay on top of important notifications",
      description:
        "Welcome to Echobell, the instant alert app that helps you stay on top of important notifications.",
      timeSensitive: "Time Sensitive",
      items: [
        {
          name: "Get notified with call",
          description:
            "When you need to be notified instantly, you can set up a call alert.",
        },
        {
          name: "Webhook",
          description:
            "Webhook is a way to send data from one application to another. It is a simple HTTP callback that allows you to send data to a URL when an event occurs.",
        },
        {
          name: "Email",
          description:
            "You can trigger a notification with email. Just send a email to a specific address and you will be notified.",
        },
        {
          name: "Subscriptions",
          description:
            "You can subscribe to a channel and get notified. You can also share the channel with your team.",
        },
      ],
      multipleNotifications: {
        title: "Multiple Notification Types",
        description:
          "Choose from normal notifications, time-sensitive alerts that break through focus modes, or call-like alerts for critical situations.",
      },
      flexibleChannels: {
        title: "Flexible Channels",
        description:
          "Create customizable notification channels with unique names and colors. Share subscription links with your team.",
      },
      privacy: {
        title: "Privacy First",
        description:
          "Your notification content and history stay private on your device. Only account and channel data are stored on our servers.",
      },
      multipleTriggers: {
        title: "Multiple Triggers",
        description:
          "Trigger notifications via webhooks or email. Use dynamic templates with variables for personalized alerts.",
      },
      notificationList: [
        {
          type: "call",
          title: "BTC Tendency",
          body: "BTC rose by 10% in the last 24 hours",
        },
        {
          type: "standard",
          title: "Echobell New Order",
          body: "Echobell has a new order",
        },
        {
          type: "time-sensitive",
          title: "Server Status",
          body: "Staging server is down",
        },
        {
          type: "standard",
          title: "New Email",
          body: "You have a new email from nooc@example.com",
        },
        {
          type: "call",
          title: "Server Status",
          body: "Production server is down",
        },
        {
          type: "time-sensitive",
          title: "CI Build Failed",
          body: "CI build failed for commit 123456",
        },
      ],
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "Choose the plan that works for you",
      callout:
        "Echobell offers a free plan with limited features. You can upgrade to a paid plan for more features and support.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Monthly",
        price: "1.99",
        description:
          "Subscribe to our monthly plan and get access to all features.",
        features: [
          "Unlimited channels",
          "Unlimited subscriptions",
          "Call notifications",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Annual",
        price: "1.66",
        description:
          "Subscribe to our annual plan for the best value and dedicated support.",
        features: [
          "Unlimited channels",
          "Unlimited subscriptions",
          "Call notifications",
          "Better price",
          "Support us with love",
        ],
      },
      currency: "USD",
      period: "/month",
      startTrial: "Start free trial",
    },
    cta: {
      title: "Ready to get started?",
      description:
        "Download the app and create your first notification channel in minutes.",
      action: "Download Now",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      subtitle: "Instant alerts for various scenarios.",
      downloadFromAppStore: "Download from App Store",
      scanQRCode: "Scan the QR code to download the app.",
      linkGroups: [
        {
          label: "Products",
          links: [
            {
              label: "Spark Memos",
              href: "https://sparkmemos.com",
            },
            {
              label: "CassetteOne",
              href: "https://cassette.one",
            },
            {
              label: "Weelone",
              href: "https://weelone.com",
            },
          ],
        },
        {
          label: "Communities",
          links: [
            {
              label: "Discord",
              href: "https://discord.gg/s4JqfrgccJ",
            },
            {
              label: "Telegram",
              href: "https://t.me/EchobellGroup",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/EchobellApp",
            },
          ],
        },
        {
          label: "Docs",
          links: [
            {
              label: "Quick Start",
              href: "/docs",
            },
            {
              label: "Introduction",
              href: "/docs/what-is-echobell",
            },
            {
              label: "Blog",
              href: "/blog",
            },
          ],
        },
        {
          label: "Support",
          links: [
            {
              label: "Contact Us",
              href: "mailto:echobell@weelone.com",
            },
            {
              label: "Privacy Policy",
              href: "/privacy",
            },
            {
              label: "Terms of Service",
              href: "/terms",
            },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "Subscribe",
      channelNotFound: "Channel not found",
      subscriptionTips:
        "Open the link in the Echobell app to subscribe to the channel, or copy the link and paste it in subscription view in the Echobell app.",
      downloadTips:
        "If you don&apos;t have the Echobell app yet, you can download it from the App Store.",
      learnMore: "Learn more",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Echobell Blog",
      description: "Explore our latest insights and stories.",
      writtenBy: "Written by",
      at: "At",
    },
  },
  zh: {
    metadata: {
      titleTemplate: "%s | 回声铃",
      defaultTitle: "回声铃",
      description:
        "适用于多种场景的即时通知，通过 Webhook 和电子邮件，转化为通知和来电。",
      keywords: [
        "回声铃",
        "即时通知",
        "通知",
        "Webhook",
        "电子邮件",
        "来电通知",
        "提醒应用",
        "通知频道",
        "Bark 应用",
        "提醒",
        "交易提醒",
        "加密货币提醒",
        "团队提醒",
      ],
    },
    nav: {
      navigation: [
        { name: "定价", href: "/zh/#pricing" },
        { name: "文档", href: "/zh/docs" },
        { name: "博客", href: "/zh/blog" },
      ],
    },
    hero: {
      title: (
        <>
          适用于多种场景的<Cover>即时通知</Cover>。
        </>
      ),
      description:
        "回声铃帮助你通过 Webhook 和电子邮件的即时通知保持消息畅通。你可以创建频道，与团队共享，永不错过来自应用程序和服务的关键事件。",
      downloadApp: "下载应用",
      getStarted: "立即开始",
      appStoreImage: appStoreImageZh,
    },
    features: {
      title: "强大的功能",
      subtitle: "掌握重要通知的最新动态",
      description:
        "欢迎使用回声铃，这是一款即时提醒应用，帮助你随时掌握重要通知。",
      timeSensitive: "即时通知",
      items: [
        {
          name: "来电提醒",
          description: "当您需要即时通知时，可以设置来电提醒。",
        },
        {
          name: "Webhook",
          description:
            "Webhook是一种在应用程序之间发送数据的方式。它是一个简单的HTTP回调，允许您在事件发生时将数据发送到URL。",
        },
        {
          name: "邮件",
          description:
            "您可以通过邮件触发通知。只需发送邮件到指定地址，就能收到通知。",
        },
        {
          name: "订阅",
          description: "您可以订阅频道并接收通知。您还可以与团队分享频道。",
        },
      ],
      multipleNotifications: {
        title: "多种通知类型",
        description:
          "从普通通知、突破专注模式的时效性提醒，到关键情况下的通话式提醒，应有尽有。",
      },
      flexibleChannels: {
        title: "灵活的频道管理",
        description: "创建可自定义名称和颜色的通知频道。与团队分享订阅链接。",
      },
      privacy: {
        title: "隐私优先",
        description:
          "您的通知内容和历史记录私密地存储在设备上。我们的服务器仅存储账户和频道数据。",
      },
      multipleTriggers: {
        title: "多种触发方式",
        description:
          "通过webhook或邮件触发通知。使用带变量的动态模板实现个性化提醒。",
      },
      notificationList: [
        {
          type: "call",
          title: "BTC 走势",
          body: "BTC在过去24小时内上涨了10%",
        },
        {
          type: "standard",
          title: "回声铃新订单",
          body: "回声铃有一个新订单",
        },
        {
          type: "time-sensitive",
          title: "服务器状态",
          body: "测试服务器已宕机",
        },
        {
          type: "standard",
          title: "新邮件",
          body: "你有一封来自 nooc@example.com 的新邮件",
        },
        {
          type: "call",
          title: "服务器状态",
          body: "生产服务器已宕机",
        },
        {
          type: "time-sensitive",
          title: "CI 构建失败",
          body: "CI 构建失败，提交 ID 为 123456",
        },
      ],
    },
    pricing: {
      title: "简单定价",
      subtitle: "选择适合您的方案",
      callout:
        "回声铃提供功能有限的免费计划，您可以升级到付费计划以获得更多功能和支持。",
      monthly: {
        id: "monthly",
        featured: false,
        name: "按月订阅",
        price: "15",
        description: "按月订阅回声铃高级版以获取所有特性。",
        features: ["无限频道数量", "无限订阅数量", "来电通知"],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "按年订阅",
        price: "12.3",
        description: "按年订阅回声铃高级版以获取最佳价值和专属支持。",
        features: [
          "无限频道数量",
          "无限订阅数量",
          "来电通知",
          "更优惠的价格",
          "支持我们",
        ],
      },
      currency: "CNY",
      period: "/月",
      startTrial: "开始免费试用",
    },
    cta: {
      title: "准备开始使用？",
      description: "下载应用并在几分钟内创建您的第一个通知频道。",
      action: "立即下载",
      appStoreImage: appStoreImageZh,
    },
    footer: {
      subtitle: "适用于多种场景的即时通知。",
      downloadFromAppStore: "从 App Store 下载",
      scanQRCode: "扫描二维码下载应用",
      linkGroups: [
        {
          label: "产品",
          links: [
            {
              label: "星火记",
              href: "https://sparkmemos.com",
            },
            {
              label: "CassetteOne",
              href: "https://cassette.one",
            },
            {
              label: "Weelone",
              href: "https://weelone.com",
            },
          ],
        },
        {
          label: "社区",
          links: [
            {
              label: "Discord",
              href: "https://discord.gg/s4JqfrgccJ",
            },
            {
              label: "Telegram",
              href: "https://t.me/EchobellGroup",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/EchobellApp",
            },
          ],
        },
        {
          label: "文档",
          links: [
            {
              label: "快速开始",
              href: "/zh/docs",
            },
            {
              label: "介绍",
              href: "/zh/docs/what-is-echobell",
            },
            {
              label: "博客",
              href: "/zh/blog",
            },
          ],
        },
        {
          label: "支持",
          links: [
            {
              label: "联系我们",
              href: "mailto:echobell@weelone.com",
            },
            {
              label: "隐私政策",
              href: "/privacy",
            },
            {
              label: "服务条款",
              href: "/terms",
            },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "订阅",
      channelNotFound: "频道未找到",
      subscriptionTips:
        "在回声铃应用中打开链接以订阅频道，或复制链接并粘贴到回声铃应用中的订阅视图中。",
      downloadTips: "如果您还没有回声铃应用，可以从 App Store 下载。",
      learnMore: "了解更多",
      appStoreImage: appStoreImageZh,
    },
    blog: {
      title: "回声铃博客",
      description: "探索我们的最新见解和故事。",
      writtenBy: "作者",
      at: "发布于",
    },
  },
  es: {
    metadata: {
      titleTemplate: "%s | Echobell",
      defaultTitle: "Echobell",
      description:
        "Alertas instantáneas para diversos escenarios, con webhooks y correos electrónicos, convertidos en notificaciones y llamadas.",
      keywords: [
        "Echobell",
        "alertas instantáneas",
        "notificaciones",
        "webhooks",
        "correos electrónicos",
        "notificaciones de llamada",
        "aplicación de alertas",
        "canales de notificación",
        "bark app",
        "alertas",
        "alertas de trading",
        "alertas de criptomonedas",
        "alertas de equipo",
      ],
    },
    nav: {
      navigation: [
        { name: "Precios", href: "/es/#pricing" },
        { name: "Documentación", href: "/es/docs" },
        { name: "Blog", href: "/es/blog" },
      ],
    },
    hero: {
      title: (
        <>
          <Cover>Alertas instantáneas</Cover> para diversos escenarios.
        </>
      ),
      description:
        "Echobell te ayuda a mantenerte notificado con alertas instantáneas desde webhooks y correos electrónicos. Crea canales, comparte con tu equipo y nunca te pierdas eventos críticos de tus aplicaciones y servicios.",
      downloadApp: "Descargar App",
      getStarted: "Comenzar",
      appStoreImage: appStoreImageEn,
    },
    features: {
      title: "Características Potentes",
      subtitle: "Mantente al tanto de las notificaciones importantes",
      description:
        "Bienvenido a Echobell, la aplicación de alertas instantáneas que te ayuda a estar al tanto de las notificaciones importantes.",
      timeSensitive: "Sensible al Tiempo",
      items: [
        {
          name: "Recibe notificaciones por llamada",
          description:
            "Cuando necesites ser notificado al instante, puedes configurar una alerta por llamada.",
        },
        {
          name: "Webhook",
          description:
            "Webhook es una forma de enviar datos de una aplicación a otra. Es una simple devolución de llamada HTTP que permite enviar datos a una URL cuando ocurre un evento.",
        },
        {
          name: "Correo electrónico",
          description:
            "Puedes activar una notificación por correo electrónico. Solo envía un correo a una dirección específica y serás notificado.",
        },
        {
          name: "Suscripciones",
          description:
            "Puedes suscribirte a un canal y recibir notificaciones. También puedes compartir el canal con tu equipo.",
        },
      ],
      multipleNotifications: {
        title: "Múltiples Tipos de Notificación",
        description:
          "Elige entre notificaciones normales, alertas sensibles al tiempo que atraviesan los modos de concentración, o alertas tipo llamada para situaciones críticas.",
      },
      flexibleChannels: {
        title: "Canales Flexibles",
        description:
          "Crea canales de notificación personalizables con nombres y colores únicos. Comparte enlaces de suscripción con tu equipo.",
      },
      privacy: {
        title: "Privacidad Primero",
        description:
          "El contenido de tus notificaciones y el historial permanecen privados en tu dispositivo. Solo los datos de cuenta y canal se almacenan en nuestros servidores.",
      },
      multipleTriggers: {
        title: "Múltiples Disparadores",
        description:
          "Activa notificaciones vía webhooks o correo electrónico. Usa plantillas dinámicas con variables para alertas personalizadas.",
      },
      notificationList: [
        {
          type: "call",
          title: "Tendencia BTC",
          body: "BTC subió un 10% en las últimas 24 horas",
        },
        {
          type: "standard",
          title: "Nuevo Pedido Echobell",
          body: "Echobell tiene un nuevo pedido",
        },
        {
          type: "time-sensitive",
          title: "Estado del Servidor",
          body: "El servidor de pruebas está caído",
        },
        {
          type: "standard",
          title: "Nuevo Correo",
          body: "Tienes un nuevo correo de nooc@example.com",
        },
        {
          type: "call",
          title: "Estado del Servidor",
          body: "El servidor de producción está caído",
        },
        {
          type: "time-sensitive",
          title: "Fallo en CI",
          body: "La compilación CI falló para el commit 123456",
        },
      ],
    },
    pricing: {
      title: "Precios Simples",
      subtitle: "Elige el plan que funcione para ti",
      callout:
        "Echobell ofrece un plan gratuito con características limitadas. Puedes actualizar a un plan de pago para más características y soporte.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Mensual",
        price: "1.99",
        description:
          "Suscríbete a nuestro plan mensual y obtén acceso a todas las características.",
        features: [
          "Canales ilimitados",
          "Suscripciones ilimitadas",
          "Notificaciones por llamada",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Anual",
        price: "1.66",
        description:
          "Suscríbete a nuestro plan anual para obtener el mejor valor y soporte dedicado.",
        features: [
          "Canales ilimitados",
          "Suscripciones ilimitadas",
          "Notificaciones por llamada",
          "Mejor precio",
          "Apóyanos con amor",
        ],
      },
      currency: "USD",
      period: "/mes",
      startTrial: "Comenzar prueba gratuita",
    },
    cta: {
      title: "¿Listo para comenzar?",
      description:
        "Descarga la aplicación y crea tu primer canal de notificación en minutos.",
      action: "Descargar Ahora",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      subtitle: "Alertas instantáneas para diversos escenarios.",
      downloadFromAppStore: "Descargar desde App Store",
      scanQRCode: "Escanea el código QR para descargar la aplicación.",
      linkGroups: [
        {
          label: "Productos",
          links: [
            {
              label: "Spark Memos",
              href: "https://sparkmemos.com",
            },
            {
              label: "CassetteOne",
              href: "https://cassette.one",
            },
            {
              label: "Weelone",
              href: "https://weelone.com",
            },
          ],
        },
        {
          label: "Comunidades",
          links: [
            {
              label: "Discord",
              href: "https://discord.gg/s4JqfrgccJ",
            },
            {
              label: "Telegram",
              href: "https://t.me/EchobellGroup",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/EchobellApp",
            },
          ],
        },
        {
          label: "Documentación",
          links: [
            {
              label: "Inicio Rápido",
              href: "/es/docs",
            },
            {
              label: "Introducción",
              href: "/es/docs/what-is-echobell",
            },
            {
              label: "Blog",
              href: "/es/blog",
            },
          ],
        },
        {
          label: "Soporte",
          links: [
            {
              label: "Contáctanos",
              href: "mailto:echobell@weelone.com",
            },
            {
              label: "Política de Privacidad",
              href: "/privacy",
            },
            {
              label: "Términos de Servicio",
              href: "/terms",
            },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "Suscribirse",
      channelNotFound: "Canal no encontrado",
      subscriptionTips:
        "Abre el enlace en la aplicación Echobell para suscribirte al canal, o copia el enlace y pégalo en la vista de suscripción en la aplicación Echobell.",
      downloadTips:
        "Si aún no tienes la aplicación Echobell, puedes descargarla desde la App Store.",
      learnMore: "Saber más",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Blog de Echobell",
      description: "Explora nuestras últimas ideas e historias.",
      writtenBy: "Escrito por",
      at: "En",
    },
  },
  fr: {
    metadata: {
      titleTemplate: "%s | Echobell",
      defaultTitle: "Echobell",
      description:
        "Alertes instantanées pour divers scénarios, avec webhooks et emails, transformées en notifications et appels.",
      keywords: [
        "Echobell",
        "alertes instantanées",
        "notifications",
        "webhooks",
        "emails",
        "notifications d'appel",
        "application d'alertes",
        "canaux de notification",
        "bark app",
        "alertes",
        "alertes trading",
        "alertes crypto",
        "alertes d'équipe",
      ],
    },
    nav: {
      navigation: [
        { name: "Tarifs", href: "/fr/#pricing" },
        { name: "Documentation", href: "/fr/docs" },
        { name: "Blog", href: "/fr/blog" },
      ],
    },
    hero: {
      title: (
        <>
          <Cover>Alertes instantanées</Cover> pour divers scénarios.
        </>
      ),
      description:
        "Echobell vous aide à rester informé avec des alertes instantanées depuis des webhooks et des emails. Créez des canaux, partagez avec votre équipe et ne manquez jamais d'événements critiques de vos applications et services.",
      downloadApp: "Télécharger l'App",
      getStarted: "Commencer",
      appStoreImage: appStoreImageEn,
    },
    features: {
      title: "Fonctionnalités Puissantes",
      subtitle: "Restez au courant des notifications importantes",
      description:
        "Bienvenue sur Echobell, l'application d'alertes instantanées qui vous aide à rester au courant des notifications importantes.",
      timeSensitive: "Sensible au Temps",
      items: [
        {
          name: "Recevez des notifications par appel",
          description:
            "Lorsque vous devez être notifié instantanément, vous pouvez configurer une alerte par appel.",
        },
        {
          name: "Webhook",
          description:
            "Webhook est un moyen d'envoyer des données d'une application à une autre. C'est un simple callback HTTP qui permet d'envoyer des données à une URL lorsqu'un événement se produit.",
        },
        {
          name: "Email",
          description:
            "Vous pouvez déclencher une notification par email. Envoyez simplement un email à une adresse spécifique et vous serez notifié.",
        },
        {
          name: "Abonnements",
          description:
            "Vous pouvez vous abonner à un canal et recevoir des notifications. Vous pouvez également partager le canal avec votre équipe.",
        },
      ],
      multipleNotifications: {
        title: "Types de Notifications Multiples",
        description:
          "Choisissez entre des notifications normales, des alertes sensibles au temps qui percent les modes de concentration, ou des alertes de type appel pour les situations critiques.",
      },
      flexibleChannels: {
        title: "Canaux Flexibles",
        description:
          "Créez des canaux de notification personnalisables avec des noms et des couleurs uniques. Partagez des liens d'abonnement avec votre équipe.",
      },
      privacy: {
        title: "Confidentialité d'Abord",
        description:
          "Le contenu de vos notifications et l'historique restent privés sur votre appareil. Seules les données de compte et de canal sont stockées sur nos serveurs.",
      },
      multipleTriggers: {
        title: "Déclencheurs Multiples",
        description:
          "Déclenchez des notifications via webhooks ou email. Utilisez des modèles dynamiques avec variables pour des alertes personnalisées.",
      },
      notificationList: [
        {
          type: "call",
          title: "Tendance BTC",
          body: "BTC a augmenté de 10% ces dernières 24 heures",
        },
        {
          type: "standard",
          title: "Nouvelle Commande Echobell",
          body: "Echobell a une nouvelle commande",
        },
        {
          type: "time-sensitive",
          title: "État du Serveur",
          body: "Le serveur de staging est hors service",
        },
        {
          type: "standard",
          title: "Nouvel Email",
          body: "Vous avez un nouvel email de nooc@example.com",
        },
        {
          type: "call",
          title: "État du Serveur",
          body: "Le serveur de production est hors service",
        },
        {
          type: "time-sensitive",
          title: "Échec CI",
          body: "La compilation CI a échoué pour le commit 123456",
        },
      ],
    },
    pricing: {
      title: "Tarification Simple",
      subtitle: "Choisissez le plan qui vous convient",
      callout:
        "Echobell propose un plan gratuit avec des fonctionnalités limitées. Vous pouvez passer à un plan payant pour plus de fonctionnalités et de support.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Mensuel",
        price: "1.99",
        description:
          "Abonnez-vous à notre plan mensuel et accédez à toutes les fonctionnalités.",
        features: [
          "Canaux illimités",
          "Abonnements illimités",
          "Notifications d'appel",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Annuel",
        price: "1.66",
        description:
          "Abonnez-vous à notre plan annuel pour la meilleure valeur et un support dédié.",
        features: [
          "Canaux illimités",
          "Abonnements illimités",
          "Notifications d'appel",
          "Meilleur prix",
          "Soutenez-nous avec amour",
        ],
      },
      currency: "USD",
      period: "/mois",
      startTrial: "Commencer l'essai gratuit",
    },
    cta: {
      title: "Prêt à commencer ?",
      description:
        "Téléchargez l'application et créez votre premier canal de notification en quelques minutes.",
      action: "Télécharger Maintenant",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      subtitle: "Alertes instantanées pour divers scénarios.",
      downloadFromAppStore: "Télécharger sur l'App Store",
      scanQRCode: "Scannez le QR code pour télécharger l'application.",
      linkGroups: [
        {
          label: "Produits",
          links: [
            {
              label: "Spark Memos",
              href: "https://sparkmemos.com",
            },
            {
              label: "CassetteOne",
              href: "https://cassette.one",
            },
            {
              label: "Weelone",
              href: "https://weelone.com",
            },
          ],
        },
        {
          label: "Communautés",
          links: [
            {
              label: "Discord",
              href: "https://discord.gg/s4JqfrgccJ",
            },
            {
              label: "Telegram",
              href: "https://t.me/EchobellGroup",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/EchobellApp",
            },
          ],
        },
        {
          label: "Documentation",
          links: [
            {
              label: "Démarrage Rapide",
              href: "/fr/docs",
            },
            {
              label: "Introduction",
              href: "/fr/docs/what-is-echobell",
            },
            {
              label: "Blog",
              href: "/fr/blog",
            },
          ],
        },
        {
          label: "Support",
          links: [
            {
              label: "Contactez-nous",
              href: "mailto:echobell@weelone.com",
            },
            {
              label: "Politique de Confidentialité",
              href: "/privacy",
            },
            {
              label: "Conditions d'Utilisation",
              href: "/terms",
            },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "S'abonner",
      channelNotFound: "Canal non trouvé",
      subscriptionTips:
        "Ouvrez le lien dans l'application Echobell pour vous abonner au canal, ou copiez le lien et collez-le dans la vue abonnement de l'application Echobell.",
      downloadTips:
        "Si vous n'avez pas encore l'application Echobell, vous pouvez la télécharger sur l'App Store.",
      learnMore: "En savoir plus",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Blog Echobell",
      description: "Explorez nos dernières perspectives et histoires.",
      writtenBy: "Écrit par",
      at: "Le",
    },
  },
};
