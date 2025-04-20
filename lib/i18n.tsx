import type { I18nConfig } from "fumadocs-core/i18n";

import appStoreImageEn from "@/public/images/app-store.en.svg";
import appStoreImageZh from "@/public/images/app-store.zh.svg";
import { Cover } from "@/components/ui/cover";

export const languages = ["en", "zh", "es", "fr", "ja", "de"] as const;
export type Language = (typeof languages)[number];

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: [...languages],
  hideLocale: "default-locale",
};

export function localizeUrl(url: string, lang: Language): string {
  return lang === i18n.defaultLanguage ? url : `/${lang}${url}`;
}

export const uiDictionary = {
  en: {
    metadata: {
      titleTemplate: "%s | Echobell",
      // SEO: More descriptive title focusing on core value
      defaultTitle:
        "Echobell: Instant Webhook & Email Alerts via Calls & Notifications | Privacy-Focused",
      // SEO: Clearer value proposition, incorporating keywords naturally
      description:
        "Never miss critical alerts. Echobell instantly converts webhooks & emails into iOS notifications or phone calls. Privacy-first design, easy team sharing. Get reliable alerts now!",
      // SEO: Added more potential search terms
      keywords: [
        "Echobell",
        "webhook alert",
        "email alert",
        "call notification",
        "iOS alert",
        "instant notification",
        "critical alert system",
        "team notification",
        "get notified",
        "email to phone call",
        "webhook to call",
        "uptime monitoring alert",
        "server down alert",
        "API monitoring alert",
        "privacy focused notification",
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
      // Smoothness: More impactful title
      title: (
        <>
          <Cover>Instant Alerts</Cover> for Critical Events.
        </>
      ),
      // Smoothness: Slightly stronger wording
      description:
        "Echobell ensures you receive instant alerts from webhooks and emails. Create notification channels, share with your team, and never miss crucial updates from your applications and services.",
      downloadApp: "Download App",
      getStarted: "Get Started",
      appStoreImage: appStoreImageEn,
    },
    features: {
      // Smoothness: Slightly more engaging title
      title: "Key Features to Keep You Informed",
      // Smoothness: Clearer subtitle
      subtitle: "Reliable and flexible alerting options",
      // Smoothness: More focused description
      description:
        "Echobell provides flexible and reliable ways to receive the alerts that matter most to you and your team.",
      timeSensitive: "Time-Sensitive", // Kept as is, assuming specific UI context
      items: [
        {
          // Smoothness & Clarity: More descriptive
          name: "Get Notified by Phone Call",
          description:
            "Need immediate awareness? Configure critical alerts to trigger an actual phone call, ensuring you never miss urgent events.",
        },
        {
          // Clarity: Explains the 'how' more directly
          name: "Webhook Integration",
          description:
            "Seamlessly integrate Echobell by sending data from your applications or services to a unique webhook URL to trigger alerts.",
        },
        {
          // Clarity: More active description
          name: "Email Triggers",
          description:
            "Trigger notifications simply by sending or forwarding an email to your dedicated Echobell channel address.",
        },
        {
          // Smoothness & Clarity: Focus on action/benefit
          name: "Channel Subscriptions & Sharing",
          description:
            "Organize alerts into channels. Easily share subscription links with team members to keep everyone informed.",
        },
      ],
      multipleNotifications: {
        title: "Multiple Notification Types",
        description:
          "Choose from standard notifications, time-sensitive alerts designed to bypass focus modes, or urgent call-like alerts for critical situations.",
      },
      flexibleChannels: {
        title: "Flexible Channel Management",
        description:
          "Create customizable notification channels with unique names and colors. Easily share subscription links with your team.",
      },
      privacy: {
        title: "Privacy First Design",
        description:
          "Your notification content and history remain private on your device. Only essential account and channel metadata are stored on our servers.",
      },
      multipleTriggers: {
        title: "Versatile Trigger Options",
        description:
          "Trigger notifications via unique webhooks or dedicated email addresses. Utilize dynamic templates with variables for personalized alert content.",
      },
      // Notification list seems fine - examples are clear
      notificationList: [
        {
          type: "call",
          title: "BTC Trend Alert",
          body: "BTC rose by 10% in the last 24 hours",
        },
        {
          type: "standard",
          title: "Echobell: New Order Received",
          body: "A new order has been placed on Echobell.",
        },
        {
          type: "time-sensitive",
          title: "Server Status Warning",
          body: "Staging server is unresponsive.",
        },
        {
          type: "standard",
          title: "New Support Email",
          body: "You have a new email from support@example.com",
        },
        {
          type: "call",
          title: "CRITICAL: Server Down",
          body: "Production server is down!",
        },
        {
          type: "time-sensitive",
          title: "CI Build Failed",
          body: "CI build failed for commit 123456 on main branch.",
        },
      ],
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your needs",
      // Smoothness: Slightly refined wording
      callout:
        "Echobell offers a generous free plan with core features. Upgrade for unlimited usage and advanced capabilities.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Monthly",
        price: "1.99",
        description: "Unlock all features with our flexible monthly plan.",
        features: [
          "Unlimited channels",
          "Unlimited subscriptions",
          "Phone call notifications",
          "Standard support",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Annual",
        price: "1.66", // Assuming this is price per month when billed annually
        description:
          "Get the best value and support our development with the annual plan.",
        features: [
          "Unlimited channels",
          "Unlimited subscriptions",
          "Phone call notifications",
          "Best value (Save ~17%)", // Clearer benefit
          "Priority support", // More professional than 'love'
        ],
      },
      currency: "USD",
      period: "/month", // Clarify if annual price is shown per month
      startTrial: "Start Free Trial", // Consider changing if there's no trial, e.g., "Get Started Free"
    },
    cta: {
      // Smoothness: More engaging title
      title: "Ready to Never Miss an Alert?",
      description:
        "Download the Echobell app and set up your first notification channel in minutes.",
      action: "Download Now",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      // Smoothness: Consistent with Hero
      subtitle: "Instant Alerts for Critical Events.",
      downloadFromAppStore: "Download on the App Store", // Standard iOS terminology
      scanQRCode: "Scan QR code to download",
      linkGroups: [
        {
          label: "Products",
          links: [
            { label: "Spark Memos", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "Community", // Singular often reads better
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "Resources", // Broader term
          links: [
            { label: "Quick Start Guide", href: "/docs" }, // More descriptive
            { label: "Documentation", href: "/docs/what-is-echobell" }, // Keep specific link if needed
            { label: "Blog", href: "/blog" },
          ],
        },
        {
          label: "Legal & Support", // Combined for brevity
          links: [
            { label: "Contact Us", href: "mailto:echobell@weelone.com" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "Subscribe",
      channelNotFound: "Channel Not Found",
      // Clarity: Slightly improved instructions
      subscriptionTips:
        "Open this link in the Echobell app to subscribe, or copy the link and paste it into the 'Add Subscription' section within the app.",
      downloadTips:
        "Don't have Echobell yet? Download it free from the App Store.",
      learnMore: "Learn More",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Echobell Blog",
      description: "Explore the latest news, tips, and insights from Echobell.", // More specific
      writtenBy: "By", // More standard
      at: "on", // More standard date preposition
    },
  },
  zh: {
    // Apply similar logic - improvements based on English changes
    metadata: {
      titleTemplate: "%s | 回声铃",
      // SEO: More descriptive title
      defaultTitle: "回声铃: Webhook与邮件即时警报 - 电话与通知 | 注重隐私",
      // SEO: Clearer value prop
      description:
        "绝不错过关键警报。回声铃能将 Webhook 和邮件即时转化为 iOS 通知或电话呼叫。注重隐私设计，易于团队共享。立即获取可靠警报！",
      // SEO: Added terms
      keywords: [
        "回声铃",
        "Webhook提醒",
        "邮件提醒",
        "来电通知",
        "iOS提醒",
        "即时通知",
        "关键警报系统",
        "团队通知",
        "获取通知",
        "邮件转电话",
        "Webhook转电话",
        "服务监控提醒",
        "服务器宕机提醒",
        "API监控提醒",
        "隐私通知",
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
      // Smoothness: More impactful
      title: (
        <>
          关键事件<Cover>即时警报</Cover>。
        </>
      ),
      // Smoothness: Stronger wording
      description:
        "回声铃确保您能收到来自 Webhook 和邮件的即时警报。创建通知频道，与团队共享，绝不错过来自应用和服务的关键更新。",
      downloadApp: "下载 App",
      getStarted: "开始使用",
      appStoreImage: appStoreImageZh,
    },
    features: {
      // Smoothness: More engaging
      title: "核心功能，助您保持信息畅通",
      // Smoothness: Clearer subtitle
      subtitle: "可靠且灵活的警报选项",
      // Smoothness: More focused
      description:
        "回声铃提供灵活可靠的方式，确保您和您的团队收到最重要的警报。",
      timeSensitive: "时效性通知", // Assuming this translates well
      items: [
        {
          // Clarity & Smoothness
          name: "通过电话接收通知",
          description:
            "需要立即知晓？配置关键警报以触发真实的电话呼叫，确保您不会错过紧急事件。",
        },
        {
          // Clarity
          name: "Webhook 集成",
          description:
            "通过将您的应用程序或服务的数据发送到专属的 Webhook URL，无缝集成回声铃以触发警报。",
        },
        {
          // Clarity
          name: "邮件触发",
          description:
            "只需发送或转发邮件到您专属的回声铃频道地址，即可轻松触发通知。",
        },
        {
          // Clarity & Smoothness
          name: "频道订阅与共享",
          description:
            "将警报整理到不同频道中。轻松与团队成员共享订阅链接，让每个人都保持同步。",
        },
      ],
      multipleNotifications: {
        title: "多种通知类型",
        description:
          "可选择标准通知、旨在绕过“专注模式”的时效性提醒，或用于危急情况的紧急电话式警报。",
      },
      flexibleChannels: {
        title: "灵活的频道管理",
        description:
          "创建具有独特名称和颜色的可自定义通知频道。轻松与团队共享订阅链接。",
      },
      privacy: {
        title: "隐私优先设计",
        description:
          "您的通知内容和历史记录会私密地保留在您的设备上。我们仅在服务器上存储必要的账户和频道元数据。",
      },
      multipleTriggers: {
        title: "多样的触发方式",
        description:
          "通过专属 Webhook 或专用电子邮件地址触发通知。利用带变量的动态模板，实现个性化警报内容。",
      },
      notificationList: [
        // Titles slightly refined for clarity
        {
          type: "call",
          title: "BTC 趋势警报",
          body: "过去24小时BTC上涨10%",
        },
        {
          type: "standard",
          title: "回声铃：收到新订单",
          body: "回声铃平台已收到一个新订单。",
        },
        {
          type: "time-sensitive",
          title: "服务器状态警告",
          body: "测试服务器无响应。",
        },
        {
          type: "standard",
          title: "新支持邮件",
          body: "您收到一封来自 support@example.com 的新邮件",
        },
        {
          type: "call",
          title: "紧急：服务器宕机",
          body: "生产服务器已宕机！",
        },
        {
          type: "time-sensitive",
          title: "CI 构建失败",
          body: "主分支 commit 123456 的 CI 构建失败。",
        },
      ],
    },
    pricing: {
      title: "简单透明的定价",
      subtitle: "选择满足您需求的计划",
      callout:
        "回声铃提供包含核心功能的免费计划。升级以获得无限用量和高级功能。",
      monthly: {
        id: "monthly",
        featured: false,
        name: "按月订阅",
        price: "15", // Keep original price
        description: "通过我们灵活的月度计划解锁所有功能。",
        features: ["无限频道", "无限订阅", "电话通知", "标准支持"],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "按年订阅",
        price: "12.3", // Keep original price (assumed per month for annual plan)
        description: "选择年度计划获取最佳价值并支持我们的发展。",
        features: [
          "无限频道",
          "无限订阅",
          "电话通知",
          "更优价格 (节省约 18%)", // Assuming similar saving
          "优先支持",
        ],
      },
      currency: "CNY",
      period: "/月",
      startTrial: "开始免费试用", // Or "免费开始使用"
    },
    cta: {
      // Smoothness
      title: "准备好不再错过任何警报了吗？",
      description: "下载回声铃 App，几分钟内即可设置您的第一个通知频道。",
      action: "立即下载",
      appStoreImage: appStoreImageZh,
    },
    footer: {
      // Smoothness
      subtitle: "关键事件即时警报。",
      downloadFromAppStore: "前往 App Store 下载",
      scanQRCode: "扫描二维码下载",
      linkGroups: [
        {
          label: "产品",
          links: [
            { label: "星火记", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "社区",
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "资源",
          links: [
            { label: "快速入门指南", href: "/zh/docs" },
            { label: "文档", href: "/zh/docs/what-is-echobell" },
            { label: "博客", href: "/zh/blog" },
          ],
        },
        {
          label: "法律与支持",
          links: [
            { label: "联系我们", href: "mailto:echobell@weelone.com" },
            { label: "隐私政策", href: "/privacy" },
            { label: "服务条款", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "订阅",
      channelNotFound: "频道未找到",
      // Clarity
      subscriptionTips:
        "在回声铃 App 中打开此链接以订阅，或复制链接并将其粘贴到 App 内的“添加订阅”部分。",
      downloadTips: "还没有回声铃？从 App Store 免费下载。",
      learnMore: "了解更多",
      appStoreImage: appStoreImageZh,
    },
    blog: {
      title: "回声铃博客",
      description: "探索来自回声铃的最新新闻、技巧和见解。",
      writtenBy: "作者：", // Common practice
      at: "发布于", // Keep as is
    },
  },
  es: {
    // Apply similar logic - improvements based on English changes
    metadata: {
      titleTemplate: "%s | Echobell",
      // SEO
      defaultTitle:
        "Echobell: Alertas Instantáneas por Webhook y Email vía Llamadas y Notificaciones | Privacidad Primero",
      // SEO
      description:
        "No te pierdas alertas críticas. Echobell convierte instantáneamente webhooks y correos electrónicos en notificaciones iOS o llamadas telefónicas. Diseño centrado en la privacidad, fácil de compartir en equipo. ¡Obtén alertas fiables ahora!",
      // SEO
      keywords: [
        "Echobell",
        "alerta webhook",
        "alerta email",
        "notificación llamada",
        "alerta iOS",
        "notificación instantánea",
        "sistema alerta crítica",
        "notificación equipo",
        "recibir notificaciones",
        "email a llamada",
        "webhook a llamada",
        "alerta monitorización uptime",
        "alerta servidor caído",
        "alerta monitorización API",
        "notificación privada",
      ],
    },
    nav: {
      navigation: [
        { name: "Precios", href: "/es/#pricing" },
        { name: "Docs", href: "/es/docs" }, // Consider translating 'Docs' -> 'Documentación'
        { name: "Blog", href: "/es/blog" },
      ],
    },
    hero: {
      // Smoothness
      title: (
        <>
          <Cover>Alertas Instantáneas</Cover> para Eventos Críticos.
        </>
      ),
      // Smoothness
      description:
        "Echobell asegura que recibas alertas instantáneas desde webhooks y correos electrónicos. Crea canales de notificación, comparte con tu equipo y nunca te pierdas actualizaciones cruciales de tus aplicaciones y servicios.",
      downloadApp: "Descargar App",
      getStarted: "Comenzar",
      appStoreImage: appStoreImageEn, // Keep EN version if ES image not available
    },
    features: {
      // Smoothness
      title: "Funcionalidades Clave para Mantenerte Informado",
      subtitle: "Opciones de alerta fiables y flexibles",
      description:
        "Echobell ofrece formas flexibles y fiables para recibir las alertas que más te importan a ti y a tu equipo.",
      timeSensitive: "Sensible al Tiempo",
      items: [
        {
          // Clarity & Smoothness
          name: "Recibe Notificaciones por Llamada",
          description:
            "¿Necesitas aviso inmediato? Configura alertas críticas para activar una llamada telefónica real, asegurando que nunca te pierdas eventos urgentes.",
        },
        {
          // Clarity
          name: "Integración Webhook",
          description:
            "Integra Echobell sin problemas enviando datos desde tus aplicaciones o servicios a una URL de webhook única para activar alertas.",
        },
        {
          // Clarity
          name: "Activadores por Email",
          description:
            "Activa notificaciones simplemente enviando o reenviando un email a la dirección de tu canal Echobell dedicado.",
        },
        {
          // Clarity & Smoothness
          name: "Suscripciones y Compartir Canales",
          description:
            "Organiza las alertas en canales. Comparte fácilmente enlaces de suscripción con miembros del equipo para mantener a todos informados.",
        },
      ],
      multipleNotifications: {
        title: "Múltiples Tipos de Notificación",
        description:
          "Elige entre notifications estándar, alertas sensibles al tiempo diseñadas para saltarse los modos de concentración, o alertas urgentes tipo llamada para situaciones críticas.",
      },
      flexibleChannels: {
        title: "Gestión Flexible de Canales",
        description:
          "Crea canales de notificación personalizables con nombres y colores únicos. Comparte fácilmente enlaces de suscripción con tu equipo.",
      },
      privacy: {
        title: "Diseño Centrado en la Privacidad",
        description:
          "El contenido y el historial de tus notificaciones permanecen privados en tu dispositivo. Solo se almacenan metadatos esenciales de cuenta y canal en nuestros servidores.",
      },
      multipleTriggers: {
        title: "Opciones Versátiles de Activación",
        description:
          "Activa notificaciones mediante webhooks únicos o direcciones de email dedicadas. Utiliza plantillas dinámicas con variables para contenido de alerta personalizado.",
      },
      notificationList: [
        // Titles refined
        {
          type: "call",
          title: "Alerta Tendencia BTC",
          body: "BTC subió un 10% en las últimas 24 horas",
        },
        {
          type: "standard",
          title: "Echobell: Nuevo Pedido Recibido",
          body: "Se ha realizado un nuevo pedido en Echobell.",
        },
        {
          type: "time-sensitive",
          title: "Advertencia Estado Servidor",
          body: "Servidor de staging no responde.",
        },
        {
          type: "standard",
          title: "Nuevo Email de Soporte",
          body: "Tienes un nuevo email de soporte@example.com",
        },
        {
          type: "call",
          title: "CRÍTICO: Servidor Caído",
          body: "¡El servidor de producción está caído!",
        },
        {
          type: "time-sensitive",
          title: "Fallo Compilación CI",
          body: "La compilación CI falló para el commit 123456 en la rama main.",
        },
      ],
    },
    pricing: {
      title: "Precios Simples y Transparentes",
      subtitle: "Elige el plan que se ajuste a tus necesidades",
      callout:
        "Echobell ofrece un plan gratuito con funcionalidades básicas. Actualiza para uso ilimitado y capacidades avanzadas.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Mensual",
        price: "1.99",
        description:
          "Desbloquea todas las funcionalidades con nuestro plan mensual flexible.",
        features: [
          "Canales ilimitados",
          "Suscripciones ilimitadas",
          "Notificaciones por llamada",
          "Soporte estándar",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Anual",
        price: "1.66",
        description:
          "Obtén el mejor valor y apoya nuestro desarrollo con el plan anual.",
        features: [
          "Canales ilimitados",
          "Suscripciones ilimitadas",
          "Notificaciones por llamada",
          "Mejor valor (Ahorra ~17%)",
          "Soporte prioritario",
        ],
      },
      currency: "USD",
      period: "/mes",
      startTrial: "Iniciar Prueba Gratuita", // Or "Comenzar Gratis"
    },
    cta: {
      // Smoothness
      title: "¿Listo para No Perderte Ninguna Alerta?",
      description:
        "Descarga la app Echobell y configura tu primer canal de notificación en minutos.",
      action: "Descargar Ahora",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      // Smoothness
      subtitle: "Alertas Instantáneas para Eventos Críticos.",
      downloadFromAppStore: "Descargar en el App Store",
      scanQRCode: "Escanear código QR para descargar",
      linkGroups: [
        {
          label: "Productos",
          links: [
            { label: "Spark Memos", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "Comunidad",
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "Recursos",
          links: [
            { label: "Guía de Inicio Rápido", href: "/es/docs" },
            { label: "Documentación", href: "/es/docs/what-is-echobell" },
            { label: "Blog", href: "/es/blog" },
          ],
        },
        {
          label: "Legal y Soporte",
          links: [
            { label: "Contáctanos", href: "mailto:echobell@weelone.com" },
            { label: "Política de Privacidad", href: "/privacy" },
            { label: "Términos de Servicio", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "Suscribirse",
      channelNotFound: "Canal No Encontrado",
      // Clarity
      subscriptionTips:
        "Abre este enlace en la app Echobell para suscribirte, o copia el enlace y pégalo en la sección 'Añadir Suscripción' dentro de la app.",
      downloadTips:
        "¿Aún no tienes Echobell? Descárgala gratis desde la App Store.",
      learnMore: "Saber Más",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Blog de Echobell",
      description:
        "Explora las últimas noticias, consejos e ideas de Echobell.",
      writtenBy: "Por", // Standard
      at: "el", // Standard date preposition
    },
  },
  fr: {
    // Apply similar logic - improvements based on English changes
    metadata: {
      titleTemplate: "%s | Echobell",
      // SEO
      defaultTitle:
        "Echobell : Alertes Instantanées Webhook & Email via Appels & Notifications | Priorité Confidentialité",
      // SEO
      description:
        "Ne manquez jamais les alertes critiques. Echobell convertit instantanément les webhooks & emails en notifications iOS ou appels téléphoniques. Conception axée sur la confidentialité, partage facile en équipe. Recevez des alertes fiables maintenant !",
      // SEO
      keywords: [
        "Echobell",
        "alerte webhook",
        "alerte email",
        "notification appel",
        "alerte iOS",
        "notification instantanée",
        "système alerte critique",
        "notification équipe",
        "recevoir notifications",
        "email vers appel",
        "webhook vers appel",
        "alerte surveillance disponibilité",
        "alerte serveur hors service",
        "alerte surveillance API",
        "notification privée",
      ],
    },
    nav: {
      navigation: [
        { name: "Tarifs", href: "/fr/#pricing" },
        { name: "Docs", href: "/fr/docs" }, // Consider 'Documentation'
        { name: "Blog", href: "/fr/blog" },
      ],
    },
    hero: {
      // Smoothness
      title: (
        <>
          <Cover>Alertes Instantanées</Cover> pour Événements Critiques.
        </>
      ),
      // Smoothness
      description:
        "Echobell garantit que vous recevez des alertes instantanées depuis les webhooks et emails. Créez des canaux de notification, partagez avec votre équipe et ne manquez jamais les mises à jour cruciales de vos applications et services.",
      downloadApp: "Télécharger l'App",
      getStarted: "Commencer",
      appStoreImage: appStoreImageEn, // Keep EN if FR not available
    },
    features: {
      // Smoothness
      title: "Fonctionnalités Clés pour Vous Tenir Informé",
      subtitle: "Options d'alerte fiables et flexibles",
      description:
        "Echobell fournit des moyens flexibles et fiables pour recevoir les alertes qui comptent le plus pour vous et votre équipe.",
      timeSensitive: "Sensible au Temps", // Keep original if accurate
      items: [
        {
          // Clarity & Smoothness
          name: "Recevoir des Notifications par Appel",
          description:
            "Besoin d'une prise de conscience immédiate ? Configurez les alertes critiques pour déclencher un véritable appel téléphonique, assurant que vous ne manquez jamais les événements urgents.",
        },
        {
          // Clarity
          name: "Intégration Webhook",
          description:
            "Intégrez Echobell de manière transparente en envoyant des données depuis vos applications ou services vers une URL webhook unique pour déclencher des alertes.",
        },
        {
          // Clarity
          name: "Déclencheurs par Email",
          description:
            "Déclenchez des notifications simplement en envoyant ou transférant un email à l'adresse de votre canal Echobell dédié.",
        },
        {
          // Clarity & Smoothness
          name: "Abonnements et Partage de Canaux",
          description:
            "Organisez les alertes en canaux. Partagez facilement les liens d'abonnement avec les membres de l'équipe pour tenir tout le monde informé.",
        },
      ],
      multipleNotifications: {
        title: "Plusieurs Types de Notifications",
        description:
          "Choisissez parmi les notifications standard, les alertes sensibles au temps conçues pour contourner les modes de concentration, ou les alertes urgentes de type appel pour les situations critiques.",
      },
      flexibleChannels: {
        title: "Gestion Flexible des Canaux",
        description:
          "Créez des canaux de notification personnalisables avec des noms et couleurs uniques. Partagez facilement les liens d'abonnement avec votre équipe.",
      },
      privacy: {
        title: "Conception Axée sur la Confidentialité",
        description:
          "Le contenu et l'historique de vos notifications restent privés sur votre appareil. Seules les métadonnées essentielles de compte et de canal sont stockées sur nos serveurs.",
      },
      multipleTriggers: {
        title: "Options de Déclenchement Polyvalentes",
        description:
          "Déclenchez des notifications via des webhooks uniques ou des adresses email dédiées. Utilisez des modèles dynamiques avec des variables pour un contenu d'alerte personnalisé.",
      },
      notificationList: [
        // Titles refined
        {
          type: "call",
          title: "Alerte Tendance BTC",
          body: "Le BTC a augmenté de 10% ces dernières 24h",
        },
        {
          type: "standard",
          title: "Echobell : Nouvelle Commande Reçue",
          body: "Une nouvelle commande a été passée sur Echobell.",
        },
        {
          type: "time-sensitive",
          title: "Avertissement État Serveur",
          body: "Le serveur de staging ne répond pas.",
        },
        {
          type: "standard",
          title: "Nouvel Email de Support",
          body: "Vous avez un nouvel email de support@example.com",
        },
        {
          type: "call",
          title: "CRITIQUE : Serveur Hors Service",
          body: "Le serveur de production est hors service !",
        },
        {
          type: "time-sensitive",
          title: "Échec Compilation CI",
          body: "La compilation CI a échoué pour le commit 123456 sur la branche main.",
        },
      ],
    },
    pricing: {
      title: "Tarification Simple et Transparente",
      subtitle: "Choisissez le plan adapté à vos besoins",
      callout:
        "Echobell propose un plan gratuit avec les fonctionnalités de base. Mettez à niveau pour un usage illimité et des capacités avancées.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Mensuel",
        price: "1.99",
        description:
          "Débloquez toutes les fonctionnalités avec notre plan mensuel flexible.",
        features: [
          "Canaux illimités",
          "Abonnements illimités",
          "Notifications par appel",
          "Support standard",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Annuel",
        price: "1.66",
        description:
          "Obtenez le meilleur rapport qualité-prix et soutenez notre développement avec le plan annuel.",
        features: [
          "Canaux illimités",
          "Abonnements illimités",
          "Notifications par appel",
          "Meilleur prix (Économisez ~17%)",
          "Support prioritaire",
        ],
      },
      currency: "USD",
      period: "/mois",
      startTrial: "Commencer l'Essai Gratuit", // Or "Commencer Gratuitement"
    },
    cta: {
      // Smoothness
      title: "Prêt à Ne Plus Manquer Aucune Alerte ?",
      description:
        "Téléchargez l'app Echobell et configurez votre premier canal de notification en quelques minutes.",
      action: "Télécharger Maintenant",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      // Smoothness
      subtitle: "Alertes Instantanées pour Événements Critiques.",
      downloadFromAppStore: "Télécharger dans l'App Store",
      scanQRCode: "Scanner le code QR pour télécharger",
      linkGroups: [
        {
          label: "Produits",
          links: [
            { label: "Spark Memos", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "Communauté",
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "Ressources",
          links: [
            { label: "Guide de Démarrage Rapide", href: "/fr/docs" },
            { label: "Documentation", href: "/fr/docs/what-is-echobell" },
            { label: "Blog", href: "/fr/blog" },
          ],
        },
        {
          label: "Légal & Support",
          links: [
            { label: "Contactez-nous", href: "mailto:echobell@weelone.com" },
            { label: "Politique de Confidentialité", href: "/privacy" },
            { label: "Conditions d'Utilisation", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "S'abonner",
      channelNotFound: "Canal Introuvable",
      // Clarity
      subscriptionTips:
        "Ouvrez ce lien dans l'app Echobell pour vous abonner, ou copiez le lien et collez-le dans la section 'Ajouter un Abonnement' de l'app.",
      downloadTips:
        "Vous n'avez pas encore Echobell ? Téléchargez-la gratuitement sur l'App Store.",
      learnMore: "En Savoir Plus",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Blog Echobell",
      description:
        "Découvrez les dernières actualités, astuces et informations d'Echobell.",
      writtenBy: "Par", // Standard
      at: "le", // Standard date preposition
    },
  },
  ja: {
    // Japanese Translations (Placeholders - Please review and update)
    metadata: {
      titleTemplate: "%s | Echobell",
      defaultTitle:
        "Echobell: Webhookとメールのアラートを即時通知・通話で | プライバシー重視",
      description:
        "重要なアラートを見逃さない。EchobellはWebhookとメールをiOS通知や電話に即時変換。プライバシー第一設計、チーム共有も簡単。信頼性の高いアラートを今すぐ！",
      keywords: [
        "Echobell",
        "Webhookアラート",
        "メールアラート",
        "電話通知",
        "iOSアラート",
        "即時通知",
        "重要アラートシステム",
        "チーム通知",
        "通知を受け取る",
        "メールから電話",
        "Webhookから電話",
        "稼働監視アラート",
        "サーバーダウンアラート",
        "API監視アラート",
        "プライバシー重視通知",
      ],
    },
    nav: {
      navigation: [
        { name: "価格", href: "/ja/#pricing" },
        { name: "ドキュメント", href: "/ja/docs" },
        { name: "ブログ", href: "/ja/blog" },
      ],
    },
    hero: {
      title: (
        <>
          重要なイベントに<Cover>即時アラート</Cover>。
        </>
      ),
      description:
        "EchobellはWebhookやメールからの即時アラート受信を保証します。通知チャンネルを作成し、チームと共有し、アプリケーションやサービスからの重要な更新を見逃しません。",
      downloadApp: "アプリをダウンロード",
      getStarted: "始める",
      appStoreImage: appStoreImageEn, // Use EN image if JA not available
    },
    features: {
      title: "最新情報を得るための主要機能",
      subtitle: "信頼性が高く柔軟なアラートオプション",
      description:
        "Echobellは、あなたとチームにとって最も重要なアラートを受信するための、柔軟で信頼性の高い方法を提供します。",
      timeSensitive: "時間制限付き通知",
      items: [
        {
          name: "電話で通知を受け取る",
          description:
            "即時の認識が必要ですか？重要なアラートを実際の電話でトリガーするように設定し、緊急イベントを見逃さないようにします。",
        },
        {
          name: "Webhook連携",
          description:
            "アプリケーションやサービスから専用のWebhook URLにデータを送信することで、Echobellをシームレスに統合し、アラートをトリガーします。",
        },
        {
          name: "メールトリガー",
          description:
            "専用のEchobellチャンネルアドレスにメールを送信または転送するだけで、簡単に通知をトリガーできます。",
        },
        {
          name: "チャンネル購読と共有",
          description:
            "アラートをチャンネルに整理します。購読リンクをチームメンバーと簡単に共有し、全員に情報を提供します。",
        },
      ],
      multipleNotifications: {
        title: "複数の通知タイプ",
        description:
          "標準通知、集中モードをバイパスするように設計された時間制限付きアラート、または重要な状況のための緊急通話のようなアラートから選択します。",
      },
      flexibleChannels: {
        title: "柔軟なチャンネル管理",
        description:
          "独自の名称と色を持つカスタマイズ可能な通知チャンネルを作成します。チームと購読リンクを簡単に共有できます。",
      },
      privacy: {
        title: "プライバシー第一の設計",
        description:
          "通知内容と履歴はデバイス上でプライベートに保たれます。サーバーには必要最低限のアカウントとチャンネルのメタデータのみが保存されます。",
      },
      multipleTriggers: {
        title: "多彩なトリガーオプション",
        description:
          "独自のWebhookまたは専用のメールアドレスを介して通知をトリガーします。パーソナライズされたアラートコンテンツのために、変数付きの動的テンプレートを利用します。",
      },
      notificationList: [
        {
          type: "call",
          title: "BTCトレンドアラート",
          body: "過去24時間でBTCが10%上昇",
        },
        {
          type: "standard",
          title: "Echobell：新規注文受信",
          body: "Echobellで新規注文がありました。",
        },
        {
          type: "time-sensitive",
          title: "サーバー状態警告",
          body: "ステージングサーバーが応答しません。",
        },
        {
          type: "standard",
          title: "新規サポートメール",
          body: "support@example.comから新しいメールがあります",
        },
        {
          type: "call",
          title: "重要：サーバーダウン",
          body: "本番サーバーがダウンしました！",
        },
        {
          type: "time-sensitive",
          title: "CIビルド失敗",
          body: "mainブランチのコミット123456のCIビルドが失敗しました。",
        },
      ],
    },
    pricing: {
      title: "シンプルで透明な価格設定",
      subtitle: "ニーズに合ったプランを選択",
      callout:
        "Echobellはコア機能を備えた無料プランを提供しています。無制限の使用と高度な機能のためにアップグレードしてください。",
      monthly: {
        id: "monthly",
        featured: false,
        name: "月額",
        price: "300",
        description: "柔軟な月額プランですべての機能を利用できます。",
        features: [
          "無制限チャンネル",
          "無制限購読",
          "電話通知",
          "標準サポート",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "年額",
        price: "250",
        description:
          "年額プランで最高の価値を得て、開発をサポートしてください。",
        features: [
          "無制限チャンネル",
          "無制限購読",
          "電話通知",
          "最高の価値（約17%割引）",
          "優先サポート",
        ],
      },
      currency: "JPY", // Update if needed
      period: "/月",
      startTrial: "無料トライアルを開始",
    },
    cta: {
      title: "アラートを見逃さない準備はできましたか？",
      description:
        "Echobellアプリをダウンロードし、数分で最初の通知チャンネルを設定します。",
      action: "今すぐダウンロード",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      subtitle: "重要なイベントに即時アラート。",
      downloadFromAppStore: "App Storeでダウンロード",
      scanQRCode: "QRコードをスキャンしてダウンロード",
      linkGroups: [
        {
          label: "製品",
          links: [
            { label: "Spark Memos", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "コミュニティ",
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "リソース",
          links: [
            { label: "クイックスタートガイド", href: "/ja/docs" },
            { label: "ドキュメント", href: "/ja/docs/what-is-echobell" },
            { label: "ブログ", href: "/ja/blog" },
          ],
        },
        {
          label: "法務 & サポート",
          links: [
            { label: "お問い合わせ", href: "mailto:echobell@weelone.com" },
            { label: "プライバシーポリシー", href: "/privacy" },
            { label: "利用規約", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "購読する",
      channelNotFound: "チャンネルが見つかりません",
      subscriptionTips:
        "このリンクをEchobellアプリで開いて購読するか、リンクをコピーしてアプリ内の「購読を追加」セクションに貼り付けます。",
      downloadTips:
        "まだEchobellをお持ちではありませんか？App Storeから無料でダウンロードしてください。",
      learnMore: "詳細を見る",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Echobellブログ",
      description: "Echobellからの最新ニュース、ヒント、洞察を探る。",
      writtenBy: "著者:",
      at: "公開日:",
    },
  },
  de: {
    // German Translations (Placeholders - Please review and update)
    metadata: {
      titleTemplate: "%s | Echobell",
      defaultTitle:
        "Echobell: Sofortige Webhook- & E-Mail-Benachrichtigungen per Anruf & Mitteilung | Datenschutzorientiert",
      description:
        "Verpassen Sie keine kritischen Benachrichtigungen. Echobell wandelt Webhooks & E-Mails sofort in iOS-Benachrichtigungen oder Anrufe um. Datenschutzfreundliches Design, einfache Teamfreigabe. Erhalten Sie jetzt zuverlässige Benachrichtigungen!",
      keywords: [
        "Echobell",
        "Webhook-Benachrichtigung",
        "E-Mail-Benachrichtigung",
        "Anrufbenachrichtigung",
        "iOS-Benachrichtigung",
        "Sofortbenachrichtigung",
        "Kritisches Benachrichtigungssystem",
        "Team-Benachrichtigung",
        "Benachrichtigung erhalten",
        "E-Mail zu Anruf",
        "Webhook zu Anruf",
        "Uptime-Monitoring-Alarm",
        "Server-Down-Alarm",
        "API-Monitoring-Alarm",
        "Datenschutzorientierte Benachrichtigung",
      ],
    },
    nav: {
      navigation: [
        { name: "Preise", href: "/de/#pricing" },
        { name: "Doku", href: "/de/docs" }, // Consider 'Dokumentation'
        { name: "Blog", href: "/de/blog" },
      ],
    },
    hero: {
      title: (
        <>
          <Cover>Sofortige Benachrichtigungen</Cover> für kritische Ereignisse.
        </>
      ),
      description:
        "Echobell stellt sicher, dass Sie sofortige Benachrichtigungen von Webhooks und E-Mails erhalten. Erstellen Sie Benachrichtigungskanäle, teilen Sie sie mit Ihrem Team und verpassen Sie nie wieder wichtige Updates von Ihren Anwendungen und Diensten.",
      downloadApp: "App herunterladen",
      getStarted: "Loslegen",
      appStoreImage: appStoreImageEn, // Use EN image if DE not available
    },
    features: {
      title: "Hauptfunktionen, um Sie auf dem Laufenden zu halten",
      subtitle: "Zuverlässige und flexible Benachrichtigungsoptionen",
      description:
        "Echobell bietet flexible und zuverlässige Möglichkeiten, die Benachrichtigungen zu erhalten, die für Sie und Ihr Team am wichtigsten sind.",
      timeSensitive: "Zeitkritisch",
      items: [
        {
          name: "Benachrichtigung per Anruf erhalten",
          description:
            "Benötigen Sie sofortige Aufmerksamkeit? Konfigurieren Sie kritische Benachrichtigungen so, dass ein tatsächlicher Anruf ausgelöst wird, um sicherzustellen, dass Sie dringende Ereignisse nie verpassen.",
        },
        {
          name: "Webhook-Integration",
          description:
            "Integrieren Sie Echobell nahtlos, indem Sie Daten von Ihren Anwendungen oder Diensten an eine eindeutige Webhook-URL senden, um Benachrichtigungen auszulösen.",
        },
        {
          name: "E-Mail-Auslöser",
          description:
            "Lösen Sie Benachrichtigungen einfach aus, indem Sie eine E-Mail an Ihre dedizierte Echobell-Kanaladresse senden oder weiterleiten.",
        },
        {
          name: "Kanalabonnements & Freigabe",
          description:
            "Organisieren Sie Benachrichtigungen in Kanälen. Teilen Sie Abonnementlinks einfach mit Teammitgliedern, um alle auf dem Laufenden zu halten.",
        },
      ],
      multipleNotifications: {
        title: "Mehrere Benachrichtigungstypen",
        description:
          "Wählen Sie zwischen Standardbenachrichtigungen, zeitkritischen Benachrichtigungen, die Fokusmodi umgehen sollen, oder dringenden anrufartigen Benachrichtigungen für kritische Situationen.",
      },
      flexibleChannels: {
        title: "Flexibles Kanalmanagement",
        description:
          "Erstellen Sie anpassbare Benachrichtigungskanäle mit eindeutigen Namen und Farben. Teilen Sie Abonnementlinks einfach mit Ihrem Team.",
      },
      privacy: {
        title: "Datenschutzorientiertes Design",
        description:
          "Ihre Benachrichtigungsinhalte und Ihr Verlauf bleiben privat auf Ihrem Gerät. Nur wesentliche Konto- und Kanalmetadaten werden auf unseren Servern gespeichert.",
      },
      multipleTriggers: {
        title: "Vielseitige Auslöseoptionen",
        description:
          "Lösen Sie Benachrichtigungen über eindeutige Webhooks oder dedizierte E-Mail-Adressen aus. Nutzen Sie dynamische Vorlagen mit Variablen für personalisierte Benachrichtigungsinhalte.",
      },
      notificationList: [
        {
          type: "call",
          title: "BTC-Trend-Alarm",
          body: "BTC stieg in den letzten 24 Stunden um 10%",
        },
        {
          type: "standard",
          title: "Echobell: Neue Bestellung erhalten",
          body: "Eine neue Bestellung wurde auf Echobell aufgegeben.",
        },
        {
          type: "time-sensitive",
          title: "Serverstatus-Warnung",
          body: "Staging-Server reagiert nicht.",
        },
        {
          type: "standard",
          title: "Neue Support-E-Mail",
          body: "Sie haben eine neue E-Mail von support@example.com",
        },
        {
          type: "call",
          title: "KRITISCH: Server ausgefallen",
          body: "Produktionsserver ist ausgefallen!",
        },
        {
          type: "time-sensitive",
          title: "CI-Build fehlgeschlagen",
          body: "CI-Build für Commit 123456 im Main-Branch fehlgeschlagen.",
        },
      ],
    },
    pricing: {
      title: "Einfache, transparente Preise",
      subtitle: "Wählen Sie den Plan, der Ihren Bedürfnissen entspricht",
      callout:
        "Echobell bietet einen kostenlosen Plan mit Kernfunktionen. Upgraden Sie für unbegrenzte Nutzung und erweiterte Funktionen.",
      monthly: {
        id: "monthly",
        featured: false,
        name: "Monatlich",
        price: "1.99",
        description:
          "Schalten Sie alle Funktionen mit unserem flexiblen Monatsplan frei.",
        features: [
          "Unbegrenzte Kanäle",
          "Unbegrenzte Abonnements",
          "Anrufbenachrichtigungen",
          "Standard-Support",
        ],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "Jährlich",
        price: "1.92",
        description:
          "Holen Sie sich den besten Wert und unterstützen Sie unsere Entwicklung mit dem Jahresplan.",
        features: [
          "Unbegrenzte Kanäle",
          "Unbegrenzte Abonnements",
          "Anrufbenachrichtigungen",
          "Bester Wert (Sparen Sie ~17%)",
          "Priorisierter Support",
        ],
      },
      currency: "EUR",
      period: "/Monat",
      startTrial: "Kostenlose Testversion starten",
    },
    cta: {
      title: "Bereit, keine Benachrichtigung mehr zu verpassen?",
      description:
        "Laden Sie die Echobell-App herunter und richten Sie Ihren ersten Benachrichtigungskanal in wenigen Minuten ein.",
      action: "Jetzt herunterladen",
      appStoreImage: appStoreImageEn,
    },
    footer: {
      subtitle: "Sofortige Benachrichtigungen für kritische Ereignisse.",
      downloadFromAppStore: "Im App Store laden",
      scanQRCode: "QR-Code zum Herunterladen scannen",
      linkGroups: [
        {
          label: "Produkte",
          links: [
            { label: "Spark Memos", href: "https://sparkmemos.com" },
            { label: "CassetteOne", href: "https://cassette.one" },
            { label: "Weelone", href: "https://weelone.com" },
          ],
        },
        {
          label: "Community",
          links: [
            { label: "Discord", href: "https://discord.gg/s4JqfrgccJ" },
            { label: "Telegram", href: "https://t.me/EchobellGroup" },
            { label: "X (Twitter)", href: "https://x.com/EchobellApp" },
          ],
        },
        {
          label: "Ressourcen",
          links: [
            { label: "Schnellstartanleitung", href: "/de/docs" },
            { label: "Dokumentation", href: "/de/docs/what-is-echobell" },
            { label: "Blog", href: "/de/blog" },
          ],
        },
        {
          label: "Rechtliches & Support",
          links: [
            {
              label: "Kontaktieren Sie uns",
              href: "mailto:echobell@weelone.com",
            },
            { label: "Datenschutzrichtlinie", href: "/privacy" },
            { label: "Nutzungsbedingungen", href: "/terms" },
          ],
        },
      ],
    },
    subscription: {
      subscribe: "Abonnieren",
      channelNotFound: "Kanal nicht gefunden",
      subscriptionTips:
        "Öffnen Sie diesen Link in der Echobell-App, um zu abonnieren, oder kopieren Sie den Link und fügen Sie ihn im Abschnitt 'Abonnement hinzufügen' in der App ein.",
      downloadTips:
        "Haben Sie Echobell noch nicht? Laden Sie es kostenlos im App Store herunter.",
      learnMore: "Mehr erfahren",
      appStoreImage: appStoreImageEn,
    },
    blog: {
      title: "Echobell Blog",
      description:
        "Entdecken Sie die neuesten Nachrichten, Tipps und Einblicke von Echobell.",
      writtenBy: "Von",
      at: "am",
    },
  },
};
