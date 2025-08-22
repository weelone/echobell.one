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
  // Avoid trailing slash on locale roots to prevent canonical → redirect (308)
  if (lang !== i18n.defaultLanguage) {
    if (url === "/") return `/${lang}`; // e.g. /zh instead of /zh/
    return `/${lang}${url}`;
  }
  return url;
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
      canBeIntegratedInto: "Can be integrated into:",
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
    featurePages: {
      webhooks: {
        title: "Webhook Integration",
        subtitle: "Trigger notifications from any application or service",
        description:
          "Connect Echobell to your existing systems using webhooks. Send HTTP requests to unique URLs and trigger instant notifications with customizable templates.",
        hero: {
          title: "Powerful Webhook Integration",
          description:
            "Transform your application events into instant alerts. Echobell's webhook system supports both GET and POST requests with flexible data handling.",
        },
        sections: {
          howItWorks: {
            title: "How Webhook Triggers Work",
            description:
              "Each channel gets a unique webhook URL. When your application sends data to this URL, Echobell processes the payload and sends notifications to all subscribers.",
            steps: [
              {
                title: "Get Your Webhook URL",
                description:
                  "Copy the unique webhook URL from your channel settings.",
              },
              {
                title: "Send HTTP Requests",
                description:
                  "Send GET or POST requests from your application to trigger notifications.",
              },
              {
                title: "Customize with Variables",
                description:
                  "Use variables in your templates to create dynamic notification content.",
              },
            ],
          },
          examples: {
            title: "Integration Examples",
            description:
              "See how to integrate Echobell webhooks with popular services and applications.",
          },
          variables: {
            title: "Webhook Variables",
            description:
              'Access request data through template variables like {{amount}}, {{status}}, or {{header["content-type"]}}.',
          },
        },
        cta: {
          title: "Ready to Integrate?",
          description:
            "Start connecting your applications to Echobell webhooks in minutes.",
          action: "Download Echobell",
        },
      },
      emailTriggers: {
        title: "Email-Based Notifications",
        subtitle: "Turn any email into an instant alert",
        description:
          "Forward emails or send directly to your Echobell channel address to trigger notifications. Perfect for email-based monitoring and alerts.",
        hero: {
          title: "Email-Powered Alerts",
          description:
            "Convert important emails into instant notifications. Every channel gets a dedicated email address for seamless integration.",
        },
        sections: {
          howItWorks: {
            title: "How Email Triggers Work",
            description:
              "Each channel receives a unique email address. When you send an email to this address, Echobell automatically creates a notification with the email content.",
            steps: [
              {
                title: "Get Your Email Address",
                description:
                  "Find your channel's unique email address in the channel settings.",
              },
              {
                title: "Send or Forward Emails",
                description:
                  "Send emails directly or forward existing ones to trigger notifications.",
              },
              {
                title: "Automatic Processing",
                description:
                  "Echobell extracts the subject, sender, and content automatically.",
              },
            ],
          },
          useCases: {
            title: "Perfect For",
            items: [
              "System alert emails",
              "Customer support inquiries",
              "Newsletter notifications",
              "Server monitoring alerts",
              "E-commerce order confirmations",
            ],
          },
          variables: {
            title: "Email Variables",
            description:
              "Access email data through variables like {{from}}, {{subject}}, {{text}}, and {{html}}.",
          },
        },
        cta: {
          title: "Start Using Email Triggers",
          description:
            "Set up your first email-triggered notification channel today.",
          action: "Get Started",
        },
      },
      callNotifications: {
        title: "Phone Call Alerts",
        subtitle: "Critical alerts that demand immediate attention",
        description:
          "When push notifications aren't enough, Echobell can call you directly. Perfect for production outages, security alerts, and other critical events.",
        hero: {
          title: "Never Miss Critical Alerts",
          description:
            "Some alerts are too important for silent notifications. Echobell's call feature ensures you're immediately aware of critical events.",
        },
        sections: {
          whenToUse: {
            title: "When to Use Call Notifications",
            items: [
              "Production server outages",
              "Security breach alerts",
              "Payment processing failures",
              "Critical system errors",
              "Emergency team notifications",
            ],
          },
          howItWorks: {
            title: "How Call Notifications Work",
            description:
              "When configured for call notifications, critical alerts trigger an actual phone call to your device with spoken notification content.",
            features: [
              "Text-to-speech notification content",
              "Customizable repeat settings",
              "Automatic retry for failed calls",
              "Focus mode bypass capability",
            ],
          },
          settings: {
            title: "Call Settings",
            description:
              "Configure call behavior including content repetition and retry attempts for maximum reliability.",
          },
        },
        cta: {
          title: "Set Up Critical Call Alerts",
          description: "Ensure you never miss another critical system alert.",
          action: "Download Now",
        },
      },
      channels: {
        title: "Smart Channel Management",
        subtitle: "Organize and share notifications with your team",
        description:
          "Create organized notification channels with custom names, colors, and sharing capabilities. Perfect for team collaboration and alert organization.",
        hero: {
          title: "Collaborative Alert Management",
          description:
            "Organize your notifications into channels and share them with your team. Everyone stays informed without complex setup.",
        },
        sections: {
          organization: {
            title: "Channel Organization",
            description:
              "Keep your alerts organized with named channels, custom colors, and clear categorization.",
            features: [
              "Custom channel names and colors",
              "Advanced condition filtering",
              "Customizable link templates",
              "Private channel notes",
            ],
          },
          sharing: {
            title: "Easy Team Sharing",
            description:
              "Share channels with team members through simple subscription links. No complex permissions or setup required.",
            steps: [
              {
                title: "Create Your Channel",
                description:
                  "Set up a channel with custom name, color, and notification templates.",
              },
              {
                title: "Share Subscription Link",
                description:
                  "Copy the subscription link and share it with team members.",
              },
              {
                title: "Team Gets Notified",
                description:
                  "All subscribers receive notifications when the channel is triggered.",
              },
            ],
          },
          advanced: {
            title: "Advanced Features",
            description:
              "Use conditions to filter notifications and customize link behavior for enhanced control.",
          },
        },
        cta: {
          title: "Start Organizing Your Alerts",
          description:
            "Create your first notification channel and invite your team.",
          action: "Get Started",
        },
      },
      templates: {
        title: "Dynamic Templates",
        subtitle: "Personalized notifications with variables and expressions",
        description:
          "Create dynamic notification content using variables, expressions, and conditional logic. Make your alerts informative and actionable.",
        hero: {
          title: "Smart Notification Templates",
          description:
            "Transform static alerts into dynamic, informative notifications using Echobell's powerful template system.",
        },
        sections: {
          variables: {
            title: "Template Variables",
            description:
              "Use variables to insert dynamic content into your notifications.",
            examples: [
              {
                template: "Server {{server_name}} CPU usage: {{cpu_usage}}%",
                result: "Server web-01 CPU usage: 85%",
              },
              {
                template: "You received ${{amount}} from {{customer}}",
                result: "You received $150.00 from John Doe",
              },
            ],
          },
          expressions: {
            title: "Smart Expressions",
            description:
              "Use expressions for conditional content and advanced logic.",
            features: [
              "Conditional expressions: {{status == 'active'}}",
              "Comparison operators: {{age > 18}}",
              "Logical operators: {{isRegistered || hasParentControl}}",
              "Object and array access: {{user.name}} or {{items[0]}}",
            ],
          },
          conditions: {
            title: "Conditional Notifications",
            description:
              "Set conditions to only send notifications when specific criteria are met.",
            example: "Only notify when: status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "Create Smart Notifications",
          description:
            "Start using dynamic templates to make your alerts more informative.",
          action: "Try Templates",
        },
      },
      privacy: {
        title: "Privacy-First Design",
        subtitle: "Your data stays on your device",
        description:
          "Echobell is built with privacy at its core. Your notification history and content remain private on your device while only essential metadata is stored on our servers.",
        hero: {
          title: "Your Privacy, Our Priority",
          description:
            "Experience instant notifications without compromising your privacy. Echobell's architecture ensures your sensitive data never leaves your device.",
        },
        sections: {
          dataStorage: {
            title: "How We Handle Your Data",
            description: "Understanding what data is stored where and why.",
            onDevice: {
              title: "Stored on Your Device",
              items: [
                "Complete notification history",
                "Notification content and details",
                "Channel subscription records",
                "App settings and preferences",
              ],
            },
            onServers: {
              title: "Stored on Our Servers",
              items: [
                "Channel metadata (names, colors, triggers)",
                "User account information",
                "Channel subscription relationships",
                "Basic usage analytics (anonymous)",
              ],
            },
          },
          security: {
            title: "Security Measures",
            description: "How we protect your data and communications.",
            features: [
              "End-to-end encryption for notifications",
              "Secure webhook endpoints",
              "No tracking or profiling",
              "GDPR and CCPA compliant",
            ],
          },
          control: {
            title: "You're in Control",
            description:
              "Complete control over your data and privacy settings.",
            features: [
              "Delete your account anytime",
              "Export your notification history",
              "Control what data is shared",
              "Transparent privacy practices",
            ],
          },
        },
        cta: {
          title: "Experience Private Notifications",
          description:
            "Join thousands who trust Echobell with their critical alerts.",
          action: "Download Echobell",
        },
      },
    },
    breadcrumb: {
      home: "Home",
      docs: "Documentation",
      blog: "Blog",
      features: "Features",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      webhooks: "Webhooks",
      emailTriggers: "Email Triggers",
      privacyFirst: "Privacy First",
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
      canBeIntegratedInto: "可集成到：",
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
            { label: "隐私政策", href: "/zh/privacy" },
            { label: "服务条款", href: "/zh/terms" },
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
    featurePages: {
      webhooks: {
        title: "Webhook 集成",
        subtitle: "从任何应用程序或服务触发通知",
        description:
          "使用 Webhook 将回声铃连接到您的现有系统。发送 HTTP 请求到唯一 URL，并使用可定制模板触发即时通知。",
        hero: {
          title: "强大的 Webhook 集成",
          description:
            "将您的应用程序事件转化为即时警报。回声铃的 Webhook 系统支持 GET 和 POST 请求，具有灵活的数据处理能力。",
        },
        sections: {
          howItWorks: {
            title: "Webhook 触发器的工作原理",
            description:
              "每个频道都有一个唯一的 Webhook URL。当您的应用程序向此 URL 发送数据时，回声铃会处理负载并向所有订阅者发送通知。",
            steps: [
              {
                title: "获取您的 Webhook URL",
                description: "从频道设置中复制唯一的 Webhook URL。",
              },
              {
                title: "发送 HTTP 请求",
                description: "从您的应用程序发送 GET 或 POST 请求以触发通知。",
              },
              {
                title: "使用变量自定义",
                description: "在模板中使用变量创建动态通知内容。",
              },
            ],
          },
          examples: {
            title: "集成示例",
            description: "了解如何将回声铃 Webhook 与热门服务和应用程序集成。",
          },
          variables: {
            title: "Webhook 变量",
            description:
              '通过模板变量访问请求数据，如 {{amount}}、{{status}} 或 {{header["content-type"]}}。',
          },
        },
        cta: {
          title: "准备集成了吗？",
          description: "几分钟内开始将您的应用程序连接到回声铃 Webhook。",
          action: "下载回声铃",
        },
      },
      emailTriggers: {
        title: "基于邮件的通知",
        subtitle: "将任何邮件转化为即时警报",
        description:
          "转发邮件或直接发送到您的回声铃频道地址以触发通知。非常适合基于邮件的监控和警报。",
        hero: {
          title: "邮件驱动的警报",
          description:
            "将重要邮件转换为即时通知。每个频道都有专用的邮件地址，实现无缝集成。",
        },
        sections: {
          howItWorks: {
            title: "邮件触发器的工作原理",
            description:
              "每个频道都有一个唯一的邮件地址。当您向此地址发送邮件时，回声铃会自动使用邮件内容创建通知。",
            steps: [
              {
                title: "获取您的邮件地址",
                description: "在频道设置中找到您频道的唯一邮件地址。",
              },
              {
                title: "发送或转发邮件",
                description: "直接发送邮件或转发现有邮件以触发通知。",
              },
              {
                title: "自动处理",
                description: "回声铃自动提取主题、发件人和内容。",
              },
            ],
          },
          useCases: {
            title: "完美适用于",
            items: [
              "系统警报邮件",
              "客户支持查询",
              "新闻邮件通知",
              "服务器监控警报",
              "电商订单确认",
            ],
          },
          variables: {
            title: "邮件变量",
            description:
              "通过变量访问邮件数据，如 {{from}}、{{subject}}、{{text}} 和 {{html}}。",
          },
        },
        cta: {
          title: "开始使用邮件触发器",
          description: "今天就设置您的第一个邮件触发通知频道。",
          action: "立即开始",
        },
      },
      callNotifications: {
        title: "电话呼叫警报",
        subtitle: "需要立即关注的关键警报",
        description:
          "当推送通知还不够时，回声铃可以直接给您打电话。非常适合生产故障、安全警报和其他关键事件。",
        hero: {
          title: "绝不错过关键警报",
          description:
            "有些警报太重要了，不能只是静默通知。回声铃的通话功能确保您立即意识到关键事件。",
        },
        sections: {
          whenToUse: {
            title: "何时使用通话通知",
            items: [
              "生产服务器故障",
              "安全漏洞警报",
              "支付处理失败",
              "关键系统错误",
              "紧急团队通知",
            ],
          },
          howItWorks: {
            title: "通话通知的工作原理",
            description:
              "配置为通话通知时，关键警报会触发向您设备的实际电话呼叫，并朗读通知内容。",
            features: [
              "文本转语音通知内容",
              "可定制的重复设置",
              "失败通话自动重试",
              "专注模式绕过功能",
            ],
          },
          settings: {
            title: "通话设置",
            description:
              "配置通话行为，包括内容重复和重试次数，以获得最大可靠性。",
          },
        },
        cta: {
          title: "设置关键通话警报",
          description: "确保您不再错过任何关键系统警报。",
          action: "立即下载",
        },
      },
      channels: {
        title: "智能频道管理",
        subtitle: "与您的团队组织和共享通知",
        description:
          "创建具有自定义名称、颜色和共享功能的有组织通知频道。非常适合团队协作和警报组织。",
        hero: {
          title: "协作警报管理",
          description:
            "将您的通知组织到频道中并与您的团队共享。每个人都能保持信息同步，无需复杂设置。",
        },
        sections: {
          organization: {
            title: "频道组织",
            description: "使用命名频道、自定义颜色和清晰分类保持警报有序。",
            features: [
              "自定义频道名称和颜色",
              "高级条件过滤",
              "可定制链接模板",
              "私有频道备注",
            ],
          },
          sharing: {
            title: "轻松团队共享",
            description:
              "通过简单的订阅链接与团队成员共享频道。无需复杂的权限或设置。",
            steps: [
              {
                title: "创建您的频道",
                description: "设置具有自定义名称、颜色和通知模板的频道。",
              },
              {
                title: "分享订阅链接",
                description: "复制订阅链接并与团队成员分享。",
              },
              {
                title: "团队获得通知",
                description: "频道触发时，所有订阅者都会收到通知。",
              },
            ],
          },
          advanced: {
            title: "高级功能",
            description: "使用条件过滤通知并自定义链接行为以获得增强控制。",
          },
        },
        cta: {
          title: "开始组织您的警报",
          description: "创建您的第一个通知频道并邀请您的团队。",
          action: "立即开始",
        },
      },
      templates: {
        title: "动态模板",
        subtitle: "使用变量和表达式的个性化通知",
        description:
          "使用变量、表达式和条件逻辑创建动态通知内容。让您的警报更加信息丰富且可操作。",
        hero: {
          title: "智能通知模板",
          description:
            "使用回声铃强大的模板系统将静态警报转换为动态、信息丰富的通知。",
        },
        sections: {
          variables: {
            title: "模板变量",
            description: "使用变量在通知中插入动态内容。",
            examples: [
              {
                template: "服务器 {{server_name}} CPU 使用率：{{cpu_usage}}%",
                result: "服务器 web-01 CPU 使用率：85%",
              },
              {
                template: "您从 {{customer}} 收到了 ¥{{amount}}",
                result: "您从 张三 收到了 ¥150.00",
              },
            ],
          },
          expressions: {
            title: "智能表达式",
            description: "使用表达式进行条件内容和高级逻辑。",
            features: [
              "条件表达式：{{status == 'active'}}",
              "比较运算符：{{age > 18}}",
              "逻辑运算符：{{isRegistered || hasParentControl}}",
              "对象和数组访问：{{user.name}} 或 {{items[0]}}",
            ],
          },
          conditions: {
            title: "条件通知",
            description: "设置条件仅在满足特定标准时发送通知。",
            example: "仅在以下情况通知：status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "创建智能通知",
          description: "开始使用动态模板让您的警报更加信息丰富。",
          action: "尝试模板",
        },
      },
      privacy: {
        title: "隐私优先设计",
        subtitle: "您的数据保留在您的设备上",
        description:
          "回声铃以隐私为核心构建。您的通知历史和内容保持在您设备上的私密性，而只有必要的元数据存储在我们的服务器上。",
        hero: {
          title: "您的隐私，我们的优先考虑",
          description:
            "体验即时通知而不妥协您的隐私。回声铃的架构确保您的敏感数据永不离开您的设备。",
        },
        sections: {
          dataStorage: {
            title: "我们如何处理您的数据",
            description: "了解哪些数据存储在哪里以及原因。",
            onDevice: {
              title: "存储在您的设备上",
              items: [
                "完整的通知历史记录",
                "通知内容和详细信息",
                "频道订阅记录",
                "应用设置和偏好",
              ],
            },
            onServers: {
              title: "存储在我们的服务器上",
              items: [
                "频道元数据（名称、颜色、触发器）",
                "用户账户信息",
                "频道订阅关系",
                "基本使用分析（匿名）",
              ],
            },
          },
          security: {
            title: "安全措施",
            description: "我们如何保护您的数据和通信。",
            features: [
              "通知端到端加密",
              "安全的 Webhook 端点",
              "无跟踪或分析",
              "符合 GDPR 和 CCPA",
            ],
          },
          control: {
            title: "您拥有控制权",
            description: "完全控制您的数据和隐私设置。",
            features: [
              "随时删除您的账户",
              "导出您的通知历史",
              "控制分享的数据",
              "透明的隐私实践",
            ],
          },
        },
        cta: {
          title: "体验私密通知",
          description: "加入数千名信任回声铃处理关键警报的用户。",
          action: "下载回声铃",
        },
      },
    },
    breadcrumb: {
      home: "首页",
      docs: "文档",
      blog: "博客",
      features: "功能",
      privacy: "隐私政策",
      terms: "服务条款",
      webhooks: "Webhooks",
      emailTriggers: "邮件触发器",
      privacyFirst: "隐私优先",
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
      canBeIntegratedInto: "Se puede integrar en:",
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
            { label: "Política de Privacidad", href: "/es/privacy" },
            { label: "Términos de Servicio", href: "/es/terms" },
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
    featurePages: {
      webhooks: {
        title: "Integración Webhook",
        subtitle: "Activa notificaciones desde cualquier aplicación o servicio",
        description:
          "Conecta Echobell a tus sistemas existentes usando webhooks. Envía peticiones HTTP a URLs únicas y activa notificaciones instantáneas con plantillas personalizables.",
        hero: {
          title: "Integración Webhook Potente",
          description:
            "Transforma los eventos de tu aplicación en alertas instantáneas. El sistema webhook de Echobell soporta peticiones GET y POST con manejo de datos flexible.",
        },
        sections: {
          howItWorks: {
            title: "Cómo Funcionan los Activadores Webhook",
            description:
              "Cada canal obtiene una URL webhook única. Cuando tu aplicación envía datos a esta URL, Echobell procesa la carga útil y envía notificaciones a todos los suscriptores.",
            steps: [
              {
                title: "Obtén tu URL Webhook",
                description:
                  "Copia la URL webhook única desde la configuración de tu canal.",
              },
              {
                title: "Envía Peticiones HTTP",
                description:
                  "Envía peticiones GET o POST desde tu aplicación para activar notificaciones.",
              },
              {
                title: "Personaliza con Variables",
                description:
                  "Usa variables en tus plantillas para crear contenido de notificación dinámico.",
              },
            ],
          },
          examples: {
            title: "Ejemplos de Integración",
            description:
              "Ve cómo integrar webhooks de Echobell con servicios y aplicaciones populares.",
          },
          variables: {
            title: "Variables Webhook",
            description:
              'Accede a los datos de la petición a través de variables de plantilla como {{amount}}, {{status}}, o {{header["content-type"]}}.',
          },
        },
        cta: {
          title: "¿Listo para Integrar?",
          description:
            "Comienza a conectar tus aplicaciones a los webhooks de Echobell en minutos.",
          action: "Descargar Echobell",
        },
      },
      emailTriggers: {
        title: "Notificaciones Basadas en Email",
        subtitle: "Convierte cualquier email en una alerta instantánea",
        description:
          "Reenvía emails o envía directamente a la dirección de tu canal Echobell para activar notificaciones. Perfecto para monitoreo y alertas basadas en email.",
        hero: {
          title: "Alertas Impulsadas por Email",
          description:
            "Convierte emails importantes en notificaciones instantáneas. Cada canal obtiene una dirección de email dedicada para integración sin problemas.",
        },
        sections: {
          howItWorks: {
            title: "Cómo Funcionan los Activadores de Email",
            description:
              "Cada canal recibe una dirección de email única. Cuando envías un email a esta dirección, Echobell automáticamente crea una notificación con el contenido del email.",
            steps: [
              {
                title: "Obtén tu Dirección de Email",
                description:
                  "Encuentra la dirección de email única de tu canal en la configuración del canal.",
              },
              {
                title: "Envía o Reenvía Emails",
                description:
                  "Envía emails directamente o reenvía los existentes para activar notificaciones.",
              },
              {
                title: "Procesamiento Automático",
                description:
                  "Echobell extrae automáticamente el asunto, remitente y contenido.",
              },
            ],
          },
          useCases: {
            title: "Perfecto Para",
            items: [
              "Emails de alerta del sistema",
              "Consultas de soporte al cliente",
              "Notificaciones de newsletter",
              "Alertas de monitoreo de servidor",
              "Confirmaciones de pedidos e-commerce",
            ],
          },
          variables: {
            title: "Variables de Email",
            description:
              "Accede a los datos del email a través de variables como {{from}}, {{subject}}, {{text}}, y {{html}}.",
          },
        },
        cta: {
          title: "Comienza a Usar Activadores de Email",
          description:
            "Configura tu primer canal de notificación activado por email hoy.",
          action: "Empezar",
        },
      },
      callNotifications: {
        title: "Alertas por Llamada Telefónica",
        subtitle: "Alertas críticas que exigen atención inmediata",
        description:
          "Cuando las notificaciones push no son suficientes, Echobell puede llamarte directamente. Perfecto para caídas de producción, alertas de seguridad y otros eventos críticos.",
        hero: {
          title: "Nunca Te Pierdas Alertas Críticas",
          description:
            "Algunas alertas son demasiado importantes para notificaciones silenciosas. La función de llamada de Echobell asegura que seas inmediatamente consciente de eventos críticos.",
        },
        sections: {
          whenToUse: {
            title: "Cuándo Usar Notificaciones por Llamada",
            items: [
              "Caídas de servidor de producción",
              "Alertas de violación de seguridad",
              "Fallos de procesamiento de pagos",
              "Errores críticos del sistema",
              "Notificaciones de emergencia del equipo",
            ],
          },
          howItWorks: {
            title: "Cómo Funcionan las Notificaciones por Llamada",
            description:
              "Cuando se configuran para notificaciones por llamada, las alertas críticas activan una llamada telefónica real a tu dispositivo con contenido de notificación hablado.",
            features: [
              "Contenido de notificación texto-a-voz",
              "Configuraciones de repetición personalizables",
              "Reintento automático para llamadas fallidas",
              "Capacidad de omitir el modo de concentración",
            ],
          },
          settings: {
            title: "Configuraciones de Llamada",
            description:
              "Configura el comportamiento de la llamada incluyendo repetición de contenido y intentos de reintento para máxima confiabilidad.",
          },
        },
        cta: {
          title: "Configura Alertas Críticas por Llamada",
          description:
            "Asegúrate de nunca perderte otra alerta crítica del sistema.",
          action: "Descargar Ahora",
        },
      },
      channels: {
        title: "Gestión Inteligente de Canales",
        subtitle: "Organiza y comparte notificaciones con tu equipo",
        description:
          "Crea canales de notificación organizados con nombres personalizados, colores y capacidades de compartir. Perfecto para colaboración en equipo y organización de alertas.",
        hero: {
          title: "Gestión Colaborativa de Alertas",
          description:
            "Organiza tus notificaciones en canales y compártelos con tu equipo. Todos se mantienen informados sin configuración compleja.",
        },
        sections: {
          organization: {
            title: "Organización de Canales",
            description:
              "Mantén tus alertas organizadas con canales nombrados, colores personalizados y categorización clara.",
            features: [
              "Nombres y colores de canal personalizados",
              "Filtrado de condiciones avanzadas",
              "Plantillas de enlace personalizables",
              "Notas privadas de canal",
            ],
          },
          sharing: {
            title: "Compartir Fácil en Equipo",
            description:
              "Comparte canales con miembros del equipo a través de enlaces de suscripción simples. No se requieren permisos complejos o configuración.",
            steps: [
              {
                title: "Crea tu Canal",
                description:
                  "Configura un canal con nombre personalizado, color y plantillas de notificación.",
              },
              {
                title: "Comparte Enlace de Suscripción",
                description:
                  "Copia el enlace de suscripción y compártelo con miembros del equipo.",
              },
              {
                title: "El Equipo Recibe Notificaciones",
                description:
                  "Todos los suscriptores reciben notificaciones cuando el canal se activa.",
              },
            ],
          },
          advanced: {
            title: "Funciones Avanzadas",
            description:
              "Usa condiciones para filtrar notificaciones y personalizar el comportamiento de enlaces para control mejorado.",
          },
        },
        cta: {
          title: "Comienza a Organizar tus Alertas",
          description:
            "Crea tu primer canal de notificación e invita a tu equipo.",
          action: "Empezar",
        },
      },
      templates: {
        title: "Plantillas Dinámicas",
        subtitle: "Notificaciones personalizadas con variables y expresiones",
        description:
          "Crea contenido de notificación dinámico usando variables, expresiones y lógica condicional. Haz que tus alertas sean informativas y accionables.",
        hero: {
          title: "Plantillas de Notificación Inteligentes",
          description:
            "Transforma alertas estáticas en notificaciones dinámicas e informativas usando el poderoso sistema de plantillas de Echobell.",
        },
        sections: {
          variables: {
            title: "Variables de Plantilla",
            description:
              "Usa variables para insertar contenido dinámico en tus notificaciones.",
            examples: [
              {
                template: "Servidor {{server_name}} uso de CPU: {{cpu_usage}}%",
                result: "Servidor web-01 uso de CPU: 85%",
              },
              {
                template: "Recibiste ${{amount}} de {{customer}}",
                result: "Recibiste $150.00 de Juan Pérez",
              },
            ],
          },
          expressions: {
            title: "Expresiones Inteligentes",
            description:
              "Usa expresiones para contenido condicional y lógica avanzada.",
            features: [
              "Expresiones condicionales: {{status == 'active'}}",
              "Operadores de comparación: {{age > 18}}",
              "Operadores lógicos: {{isRegistered || hasParentControl}}",
              "Acceso a objetos y arrays: {{user.name}} o {{items[0]}}",
            ],
          },
          conditions: {
            title: "Notificaciones Condicionales",
            description:
              "Establece condiciones para enviar notificaciones solo cuando se cumplan criterios específicos.",
            example: "Solo notificar cuando: status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "Crea Notificaciones Inteligentes",
          description:
            "Comienza a usar plantillas dinámicas para hacer tus alertas más informativas.",
          action: "Probar Plantillas",
        },
      },
      privacy: {
        title: "Diseño Centrado en la Privacidad",
        subtitle: "Tus datos permanecen en tu dispositivo",
        description:
          "Echobell está construido con la privacidad en su núcleo. Tu historial de notificaciones y contenido permanecen privados en tu dispositivo mientras solo metadatos esenciales se almacenan en nuestros servidores.",
        hero: {
          title: "Tu Privacidad, Nuestra Prioridad",
          description:
            "Experimenta notificaciones instantáneas sin comprometer tu privacidad. La arquitectura de Echobell asegura que tus datos sensibles nunca salgan de tu dispositivo.",
        },
        sections: {
          dataStorage: {
            title: "Cómo Manejamos tus Datos",
            description: "Entendiendo qué datos se almacenan dónde y por qué.",
            onDevice: {
              title: "Almacenado en tu Dispositivo",
              items: [
                "Historial completo de notificaciones",
                "Contenido y detalles de notificaciones",
                "Registros de suscripción a canales",
                "Configuraciones y preferencias de la app",
              ],
            },
            onServers: {
              title: "Almacenado en Nuestros Servidores",
              items: [
                "Metadatos de canal (nombres, colores, activadores)",
                "Información de cuenta de usuario",
                "Relaciones de suscripción a canales",
                "Analíticas de uso básicas (anónimas)",
              ],
            },
          },
          security: {
            title: "Medidas de Seguridad",
            description: "Cómo protegemos tus datos y comunicaciones.",
            features: [
              "Cifrado de extremo a extremo para notificaciones",
              "Endpoints de webhook seguros",
              "Sin seguimiento o perfilado",
              "Cumple con GDPR y CCPA",
            ],
          },
          control: {
            title: "Tienes el Control",
            description:
              "Control completo sobre tus datos y configuraciones de privacidad.",
            features: [
              "Elimina tu cuenta en cualquier momento",
              "Exporta tu historial de notificaciones",
              "Controla qué datos se comparten",
              "Prácticas de privacidad transparentes",
            ],
          },
        },
        cta: {
          title: "Experimenta Notificaciones Privadas",
          description:
            "Únete a miles que confían en Echobell con sus alertas críticas.",
          action: "Descargar Echobell",
        },
      },
    },
    breadcrumb: {
      home: "Inicio",
      docs: "Documentación",
      blog: "Blog",
      features: "Características",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      webhooks: "Webhooks",
      emailTriggers: "Disparadores de Email",
      privacyFirst: "Privacidad Primero",
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
      canBeIntegratedInto: "Peut s'intégrer dans :",
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
            { label: "Politique de Confidentialité", href: "/fr/privacy" },
            { label: "Conditions d'Utilisation", href: "/fr/terms" },
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
    featurePages: {
      webhooks: {
        title: "Intégration Webhook",
        subtitle:
          "Déclenchez des notifications depuis n'importe quelle application ou service",
        description:
          "Connectez Echobell à vos systèmes existants en utilisant des webhooks. Envoyez des requêtes HTTP vers des URLs uniques et déclenchez des notifications instantanées avec des modèles personnalisables.",
        hero: {
          title: "Intégration Webhook Puissante",
          description:
            "Transformez les événements de votre application en alertes instantanées. Le système webhook d'Echobell prend en charge les requêtes GET et POST avec une gestion flexible des données.",
        },
        sections: {
          howItWorks: {
            title: "Comment Fonctionnent les Déclencheurs Webhook",
            description:
              "Chaque canal obtient une URL webhook unique. Lorsque votre application envoie des données à cette URL, Echobell traite la charge utile et envoie des notifications à tous les abonnés.",
            steps: [
              {
                title: "Obtenez votre URL Webhook",
                description:
                  "Copiez l'URL webhook unique depuis les paramètres de votre canal.",
              },
              {
                title: "Envoyez des Requêtes HTTP",
                description:
                  "Envoyez des requêtes GET ou POST depuis votre application pour déclencher des notifications.",
              },
              {
                title: "Personnalisez avec des Variables",
                description:
                  "Utilisez des variables dans vos modèles pour créer du contenu de notification dynamique.",
              },
            ],
          },
          examples: {
            title: "Exemples d'Intégration",
            description:
              "Voyez comment intégrer les webhooks Echobell avec des services et applications populaires.",
          },
          variables: {
            title: "Variables Webhook",
            description:
              'Accédez aux données de la requête via des variables de modèle comme {{amount}}, {{status}}, ou {{header["content-type"]}}.',
          },
        },
        cta: {
          title: "Prêt à Intégrer ?",
          description:
            "Commencez à connecter vos applications aux webhooks Echobell en quelques minutes.",
          action: "Télécharger Echobell",
        },
      },
      emailTriggers: {
        title: "Notifications Basées sur Email",
        subtitle: "Transformez n'importe quel email en alerte instantanée",
        description:
          "Transférez des emails ou envoyez directement à l'adresse de votre canal Echobell pour déclencher des notifications. Parfait pour la surveillance et les alertes basées sur email.",
        hero: {
          title: "Alertes Alimentées par Email",
          description:
            "Convertissez les emails importants en notifications instantanées. Chaque canal reçoit une adresse email dédiée pour une intégration transparente.",
        },
        sections: {
          howItWorks: {
            title: "Comment Fonctionnent les Déclencheurs Email",
            description:
              "Chaque canal reçoit une adresse email unique. Lorsque vous envoyez un email à cette adresse, Echobell crée automatiquement une notification avec le contenu de l'email.",
            steps: [
              {
                title: "Obtenez votre Adresse Email",
                description:
                  "Trouvez l'adresse email unique de votre canal dans les paramètres du canal.",
              },
              {
                title: "Envoyez ou Transférez des Emails",
                description:
                  "Envoyez des emails directement ou transférez les existants pour déclencher des notifications.",
              },
              {
                title: "Traitement Automatique",
                description:
                  "Echobell extrait automatiquement l'objet, l'expéditeur et le contenu.",
              },
            ],
          },
          useCases: {
            title: "Parfait Pour",
            items: [
              "Emails d'alerte système",
              "Requêtes de support client",
              "Notifications de newsletter",
              "Alertes de surveillance serveur",
              "Confirmations de commande e-commerce",
            ],
          },
          variables: {
            title: "Variables Email",
            description:
              "Accédez aux données email via des variables comme {{from}}, {{subject}}, {{text}}, et {{html}}.",
          },
        },
        cta: {
          title: "Commencer avec les Déclencheurs Email",
          description:
            "Configurez votre premier canal de notification déclenché par email aujourd'hui.",
          action: "Commencer",
        },
      },
      callNotifications: {
        title: "Alertes par Appel Téléphonique",
        subtitle: "Alertes critiques qui exigent une attention immédiate",
        description:
          "Quand les notifications push ne suffisent pas, Echobell peut vous appeler directement. Parfait pour les pannes de production, alertes de sécurité et autres événements critiques.",
        hero: {
          title: "Ne Manquez Jamais les Alertes Critiques",
          description:
            "Certaines alertes sont trop importantes pour des notifications silencieuses. La fonction d'appel d'Echobell assure que vous soyez immédiatement conscient des événements critiques.",
        },
        sections: {
          whenToUse: {
            title: "Quand Utiliser les Notifications par Appel",
            items: [
              "Pannes de serveur de production",
              "Alertes de violation de sécurité",
              "Échecs de traitement de paiement",
              "Erreurs système critiques",
              "Notifications d'urgence équipe",
            ],
          },
          howItWorks: {
            title: "Comment Fonctionnent les Notifications par Appel",
            description:
              "Lorsqu'elles sont configurées pour les notifications par appel, les alertes critiques déclenchent un véritable appel téléphonique vers votre appareil avec le contenu de la notification parlé.",
            features: [
              "Contenu de notification texte-vers-parole",
              "Paramètres de répétition personnalisables",
              "Nouvelle tentative automatique pour appels échoués",
              "Capacité à contourner le mode concentration",
            ],
          },
          settings: {
            title: "Paramètres d'Appel",
            description:
              "Configurez le comportement d'appel incluant la répétition du contenu et les tentatives de nouvelle tentative pour une fiabilité maximale.",
          },
        },
        cta: {
          title: "Configurer les Alertes d'Appel Critiques",
          description:
            "Assurez-vous de ne jamais manquer une autre alerte système critique.",
          action: "Télécharger Maintenant",
        },
      },
      channels: {
        title: "Gestion Intelligente des Canaux",
        subtitle: "Organisez et partagez les notifications avec votre équipe",
        description:
          "Créez des canaux de notification organisés avec des noms personnalisés, des couleurs et des capacités de partage. Parfait pour la collaboration d'équipe et l'organisation des alertes.",
        hero: {
          title: "Gestion Collaborative des Alertes",
          description:
            "Organisez vos notifications en canaux et partagez-les avec votre équipe. Tout le monde reste informé sans configuration complexe.",
        },
        sections: {
          organization: {
            title: "Organisation des Canaux",
            description:
              "Gardez vos alertes organisées avec des canaux nommés, des couleurs personnalisées et une catégorisation claire.",
            features: [
              "Noms et couleurs de canaux personnalisés",
              "Filtrage de conditions avancées",
              "Modèles de liens personnalisables",
              "Notes privées de canal",
            ],
          },
          sharing: {
            title: "Partage d'Équipe Facile",
            description:
              "Partagez des canaux avec les membres de l'équipe via des liens d'abonnement simples. Aucune permission complexe ou configuration requise.",
            steps: [
              {
                title: "Créez votre Canal",
                description:
                  "Configurez un canal avec nom personnalisé, couleur et modèles de notification.",
              },
              {
                title: "Partagez le Lien d'Abonnement",
                description:
                  "Copiez le lien d'abonnement et partagez-le avec les membres de l'équipe.",
              },
              {
                title: "L'Équipe Reçoit les Notifications",
                description:
                  "Tous les abonnés reçoivent des notifications lorsque le canal est déclenché.",
              },
            ],
          },
          advanced: {
            title: "Fonctionnalités Avancées",
            description:
              "Utilisez des conditions pour filtrer les notifications et personnaliser le comportement des liens pour un contrôle amélioré.",
          },
        },
        cta: {
          title: "Commencer à Organiser vos Alertes",
          description:
            "Créez votre premier canal de notification et invitez votre équipe.",
          action: "Commencer",
        },
      },
      templates: {
        title: "Modèles Dynamiques",
        subtitle: "Notifications personnalisées avec variables et expressions",
        description:
          "Créez du contenu de notification dynamique en utilisant des variables, expressions et logique conditionnelle. Rendez vos alertes plus informatives et exploitables.",
        hero: {
          title: "Modèles de Notification Intelligents",
          description:
            "Transformez les alertes statiques en notifications dynamiques et informatives en utilisant le puissant système de modèles d'Echobell.",
        },
        sections: {
          variables: {
            title: "Variables de Modèle",
            description:
              "Utilisez des variables pour insérer du contenu dynamique dans vos notifications.",
            examples: [
              {
                template:
                  "Serveur {{server_name}} utilisation CPU : {{cpu_usage}}%",
                result: "Serveur web-01 utilisation CPU : 85%",
              },
              {
                template: "Vous avez reçu {{amount}}€ de {{customer}}",
                result: "Vous avez reçu 150,00€ de Jean Dupont",
              },
            ],
          },
          expressions: {
            title: "Expressions Intelligentes",
            description:
              "Utilisez des expressions pour du contenu conditionnel et une logique avancée.",
            features: [
              "Expressions conditionnelles : {{status == 'active'}}",
              "Opérateurs de comparaison : {{age > 18}}",
              "Opérateurs logiques : {{isRegistered || hasParentControl}}",
              "Accès aux objets et tableaux : {{user.name}} ou {{items[0]}}",
            ],
          },
          conditions: {
            title: "Notifications Conditionnelles",
            description:
              "Définissez des conditions pour envoyer des notifications uniquement lorsque des critères spécifiques sont remplis.",
            example:
              "Notifier uniquement quand : status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "Créer des Notifications Intelligentes",
          description:
            "Commencez à utiliser des modèles dynamiques pour rendre vos alertes plus informatives.",
          action: "Essayer les Modèles",
        },
      },
      privacy: {
        title: "Conception Axée sur la Confidentialité",
        subtitle: "Vos données restent sur votre appareil",
        description:
          "Echobell est construit avec la confidentialité au cœur. Votre historique de notifications et contenu restent privés sur votre appareil tandis que seules les métadonnées essentielles sont stockées sur nos serveurs.",
        hero: {
          title: "Votre Confidentialité, Notre Priorité",
          description:
            "Profitez de notifications instantanées sans compromettre votre confidentialité. L'architecture d'Echobell assure que vos données sensibles ne quittent jamais votre appareil.",
        },
        sections: {
          dataStorage: {
            title: "Comment Nous Gérons Vos Données",
            description:
              "Comprendre quelles données sont stockées où et pourquoi.",
            onDevice: {
              title: "Stocké sur Votre Appareil",
              items: [
                "Historique complet des notifications",
                "Contenu et détails des notifications",
                "Enregistrements d'abonnement aux canaux",
                "Paramètres et préférences de l'application",
              ],
            },
            onServers: {
              title: "Stocké sur Nos Serveurs",
              items: [
                "Métadonnées de canal (noms, couleurs, déclencheurs)",
                "Informations de compte utilisateur",
                "Relations d'abonnement aux canaux",
                "Analyses d'utilisation de base (anonymes)",
              ],
            },
          },
          security: {
            title: "Mesures de Sécurité",
            description:
              "Comment nous protégeons vos données et communications.",
            features: [
              "Chiffrement de bout en bout pour les notifications",
              "Points de terminaison webhook sécurisés",
              "Aucun suivi ou profilage",
              "Conforme RGPD et CCPA",
            ],
          },
          control: {
            title: "Vous Avez le Contrôle",
            description:
              "Contrôle complet sur vos données et paramètres de confidentialité.",
            features: [
              "Supprimez votre compte à tout moment",
              "Exportez votre historique de notifications",
              "Contrôlez quelles données sont partagées",
              "Pratiques de confidentialité transparentes",
            ],
          },
        },
        cta: {
          title: "Découvrez les Notifications Privées",
          description:
            "Rejoignez des milliers qui font confiance à Echobell pour leurs alertes critiques.",
          action: "Télécharger Echobell",
        },
      },
    },
    breadcrumb: {
      home: "Accueil",
      docs: "Documentation",
      blog: "Blog",
      features: "Fonctionnalités",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      webhooks: "Webhooks",
      emailTriggers: "Déclencheurs Email",
      privacyFirst: "Confidentialité d'Abord",
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
      canBeIntegratedInto: "〜と統合できます",
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
            { label: "プライバシーポリシー", href: "/ja/privacy" },
            { label: "利用規約", href: "/ja/terms" },
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
    featurePages: {
      webhooks: {
        title: "Webhook統合",
        subtitle: "任意のアプリケーションやサービスから通知をトリガー",
        description:
          "Webhookを使用してEchobellを既存のシステムに接続。独自のURLにHTTPリクエストを送信し、カスタマイズ可能なテンプレートで即座に通知をトリガー。",
        hero: {
          title: "強力なWebhook統合",
          description:
            "アプリケーションイベントを即座のアラートに変換。EchobellのWebhookシステムは柔軟なデータ処理でGETおよびPOSTリクエストをサポート。",
        },
        sections: {
          howItWorks: {
            title: "Webhookトリガーの仕組み",
            description:
              "各チャンネルは独自のWebhook URLを取得します。アプリケーションがこのURLにデータを送信すると、Echobellはペイロードを処理し、すべての購読者に通知を送信します。",
            steps: [
              {
                title: "Webhook URLを取得",
                description: "チャンネル設定から独自のWebhook URLをコピー。",
              },
              {
                title: "HTTPリクエストを送信",
                description:
                  "アプリケーションからGETまたはPOSTリクエストを送信して通知をトリガー。",
              },
              {
                title: "変数でカスタマイズ",
                description:
                  "テンプレートで変数を使用して動的な通知コンテンツを作成。",
              },
            ],
          },
          examples: {
            title: "統合例",
            description:
              "人気のサービスやアプリケーションとEchobell Webhookを統合する方法をご覧ください。",
          },
          variables: {
            title: "Webhook変数",
            description:
              '{{amount}}、{{status}}、{{header["content-type"]}}などのテンプレート変数を通じてリクエストデータにアクセス。',
          },
        },
        cta: {
          title: "統合の準備はできましたか？",
          description: "数分でアプリケーションをEchobell Webhookに接続を開始。",
          action: "Echobellをダウンロード",
        },
      },
      emailTriggers: {
        title: "メールベースの通知",
        subtitle: "任意のメールを即座のアラートに変換",
        description:
          "メールを転送するか、EchobellチャンネルアドレスVに直接送信して通知をトリガー。メール監視とアラートに最適。",
        hero: {
          title: "メール駆動のアラート",
          description:
            "重要なメールを即座の通知に変換。各チャンネルはシームレスな統合のための専用メールアドレスを取得。",
        },
        sections: {
          howItWorks: {
            title: "メールトリガーの仕組み",
            description:
              "各チャンネルは独自のメールアドレスを受け取ります。このアドレスにメールを送信すると、Echobellは自動的にメール内容で通知を作成します。",
            steps: [
              {
                title: "メールアドレスを取得",
                description:
                  "チャンネル設定でチャンネルの独自メールアドレスを確認。",
              },
              {
                title: "メールを送信または転送",
                description:
                  "メールを直接送信するか、既存のメールを転送して通知をトリガー。",
              },
              {
                title: "自動処理",
                description: "Echobellは件名、送信者、内容を自動的に抽出。",
              },
            ],
          },
          useCases: {
            title: "最適な用途",
            items: [
              "システムアラートメール",
              "カスタマーサポート問い合わせ",
              "ニュースレター通知",
              "サーバー監視アラート",
              "Eコマース注文確認",
            ],
          },
          variables: {
            title: "メール変数",
            description:
              "{{from}}、{{subject}}、{{text}}、{{html}}などの変数を通じてメールデータにアクセス。",
          },
        },
        cta: {
          title: "メールトリガーを使い始める",
          description: "今日、最初のメールトリガー通知チャンネルを設定。",
          action: "開始する",
        },
      },
      callNotifications: {
        title: "電話アラート",
        subtitle: "即座の注意を要する重要なアラート",
        description:
          "プッシュ通知だけでは不十分な場合、Echobellが直接電話をかけます。本番障害、セキュリティアラート、その他の重要なイベントに最適。",
        hero: {
          title: "重要なアラートを見逃さない",
          description:
            "一部のアラートは無音通知には重要すぎます。Echobellの通話機能により、重要なイベントを即座に認識できます。",
        },
        sections: {
          whenToUse: {
            title: "通話通知をいつ使用するか",
            items: [
              "本番サーバーの障害",
              "セキュリティ侵害アラート",
              "支払い処理の失敗",
              "重要なシステムエラー",
              "チーム緊急通知",
            ],
          },
          howItWorks: {
            title: "通話通知の仕組み",
            description:
              "通話通知に設定されている場合、重要なアラートはデバイスへの実際の電話を発信し、通知内容が音声で読み上げられます。",
            features: [
              "通知内容のテキスト読み上げ",
              "カスタマイズ可能な繰り返し設定",
              "失敗した通話の自動再試行",
              "集中モードをバイパスする機能",
            ],
          },
          settings: {
            title: "通話設定",
            description:
              "内容の繰り返しや再試行回数など、通話動作を設定して最大の信頼性を確保。",
          },
        },
        cta: {
          title: "重要な通話アラートを設定",
          description:
            "別の重要なシステムアラートを見逃さないようにしてください。",
          action: "今すぐダウンロード",
        },
      },
      channels: {
        title: "スマートチャンネル管理",
        subtitle: "チームと通知を整理・共有",
        description:
          "カスタム名、色、共有機能を持つ整理された通知チャンネルを作成。チーム協力とアラート整理に最適。",
        hero: {
          title: "協調的アラート管理",
          description:
            "通知をチャンネルに整理し、チームと共有。複雑な設定なしで全員が情報を共有。",
        },
        sections: {
          organization: {
            title: "チャンネル整理",
            description:
              "名前付きチャンネル、カスタム色、明確な分類でアラートを整理。",
            features: [
              "カスタムチャンネル名と色",
              "高度な条件フィルタリング",
              "カスタマイズ可能なリンクテンプレート",
              "プライベートチャンネルメモ",
            ],
          },
          sharing: {
            title: "簡単チーム共有",
            description:
              "シンプルな購読リンクを通じてチームメンバーとチャンネルを共有。複雑な権限や設定は不要。",
            steps: [
              {
                title: "チャンネルを作成",
                description:
                  "カスタム名、色、通知テンプレートでチャンネルを設定。",
              },
              {
                title: "購読リンクを共有",
                description: "購読リンクをコピーしてチームメンバーと共有。",
              },
              {
                title: "チームが通知を受信",
                description:
                  "チャンネルがトリガーされると、すべての購読者が通知を受信。",
              },
            ],
          },
          advanced: {
            title: "高度な機能",
            description:
              "条件を使用して通知をフィルタリングし、リンク動作をカスタマイズして制御を強化。",
          },
        },
        cta: {
          title: "アラートの整理を開始",
          description: "最初の通知チャンネルを作成し、チームを招待。",
          action: "開始する",
        },
      },
      templates: {
        title: "動的テンプレート",
        subtitle: "変数と式を使用したパーソナライズされた通知",
        description:
          "変数、式、条件ロジックを使用して動的な通知コンテンツを作成。アラートをより情報豊富で実用的にします。",
        hero: {
          title: "スマート通知テンプレート",
          description:
            "Echobellの強力なテンプレートシステムを使用して、静的アラートを動的で情報豊富な通知に変換。",
        },
        sections: {
          variables: {
            title: "テンプレート変数",
            description: "変数を使用して通知に動的コンテンツを挿入。",
            examples: [
              {
                template: "サーバー {{server_name}} CPU使用率: {{cpu_usage}}%",
                result: "サーバー web-01 CPU使用率: 85%",
              },
              {
                template: "{{customer}}から¥{{amount}}を受け取りました",
                result: "田中太郎から¥15,000を受け取りました",
              },
            ],
          },
          expressions: {
            title: "スマート式",
            description: "条件付きコンテンツと高度なロジックに式を使用。",
            features: [
              "条件式: {{status == 'active'}}",
              "比較演算子: {{age > 18}}",
              "論理演算子: {{isRegistered || hasParentControl}}",
              "オブジェクトと配列アクセス: {{user.name}} または {{items[0]}}",
            ],
          },
          conditions: {
            title: "条件付き通知",
            description:
              "特定の基準が満たされた場合にのみ通知を送信する条件を設定。",
            example: "次の場合のみ通知: status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "スマート通知を作成",
          description:
            "動的テンプレートを使用してアラートをより情報豊富にする。",
          action: "テンプレートを試す",
        },
      },
      privacy: {
        title: "プライバシー第一設計",
        subtitle: "データはデバイスに残る",
        description:
          "Echobellはプライバシーを核として構築。通知履歴と内容はデバイス上でプライベートに保たれ、必要最小限のメタデータのみがサーバーに保存されます。",
        hero: {
          title: "あなたのプライバシー、私たちの優先事項",
          description:
            "プライバシーを犠牲にすることなく即座の通知を体験。Echobellのアーキテクチャは、機密データがデバイスから離れることがないことを保証。",
        },
        sections: {
          dataStorage: {
            title: "データの取り扱い方法",
            description: "どのデータがどこに保存され、その理由を理解。",
            onDevice: {
              title: "デバイスに保存",
              items: [
                "完全な通知履歴",
                "通知内容と詳細",
                "チャンネル購読記録",
                "アプリ設定と設定",
              ],
            },
            onServers: {
              title: "サーバーに保存",
              items: [
                "チャンネルメタデータ（名前、色、トリガー）",
                "ユーザーアカウント情報",
                "チャンネル購読関係",
                "基本使用分析（匿名）",
              ],
            },
          },
          security: {
            title: "セキュリティ対策",
            description: "データと通信を保護する方法。",
            features: [
              "通知のエンドツーエンド暗号化",
              "安全なWebhookエンドポイント",
              "トラッキングやプロファイリングなし",
              "GDPRおよびCCPA準拠",
            ],
          },
          control: {
            title: "あなたがコントロール",
            description: "データとプライバシー設定の完全なコントロール。",
            features: [
              "いつでもアカウントを削除",
              "通知履歴をエクスポート",
              "共有するデータをコントロール",
              "透明なプライバシー慣行",
            ],
          },
        },
        cta: {
          title: "プライベート通知を体験",
          description: "重要なアラートをEchobellに信頼する数千人に参加。",
          action: "Echobellをダウンロード",
        },
      },
    },
    breadcrumb: {
      home: "ホーム",
      docs: "ドキュメント",
      blog: "ブログ",
      features: "機能",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      webhooks: "Webhooks",
      emailTriggers: "メールトリガー",
      privacyFirst: "プライバシーファースト",
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
      canBeIntegratedInto: "Kann integriert werden in:",
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
            { label: "Datenschutzrichtlinie", href: "/de/privacy" },
            { label: "Nutzungsbedingungen", href: "/de/terms" },
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
    featurePages: {
      webhooks: {
        title: "Webhook-Integration",
        subtitle:
          "Benachrichtigungen von jeder Anwendung oder jedem Service auslösen",
        description:
          "Verbinden Sie Echobell mit Ihren bestehenden Systemen über Webhooks. Senden Sie HTTP-Anfragen an eindeutige URLs und lösen Sie sofortige Benachrichtigungen mit anpassbaren Vorlagen aus.",
        hero: {
          title: "Leistungsstarke Webhook-Integration",
          description:
            "Verwandeln Sie Ihre Anwendungsereignisse in sofortige Benachrichtigungen. Echobells Webhook-System unterstützt GET- und POST-Anfragen mit flexibler Datenbehandlung.",
        },
        sections: {
          howItWorks: {
            title: "Wie Webhook-Trigger funktionieren",
            description:
              "Jeder Kanal erhält eine eindeutige Webhook-URL. Wenn Ihre Anwendung Daten an diese URL sendet, verarbeitet Echobell die Payload und sendet Benachrichtigungen an alle Abonnenten.",
            steps: [
              {
                title: "Webhook-URL abrufen",
                description:
                  "Kopieren Sie die eindeutige Webhook-URL aus den Kanaleinstellungen.",
              },
              {
                title: "HTTP-Anfragen senden",
                description:
                  "Senden Sie GET- oder POST-Anfragen von Ihrer Anwendung, um Benachrichtigungen auszulösen.",
              },
              {
                title: "Mit Variablen anpassen",
                description:
                  "Verwenden Sie Variablen in Ihren Vorlagen, um dynamischen Benachrichtigungsinhalt zu erstellen.",
              },
            ],
          },
          examples: {
            title: "Integrationsbeispiele",
            description:
              "Sehen Sie, wie Sie Echobell-Webhooks mit beliebten Services und Anwendungen integrieren.",
          },
          variables: {
            title: "Webhook-Variablen",
            description:
              'Greifen Sie über Vorlagenvariablen wie {{amount}}, {{status}} oder {{header["content-type"]}} auf Anfragedaten zu.',
          },
        },
        cta: {
          title: "Bereit zur Integration?",
          description:
            "Beginnen Sie in wenigen Minuten, Ihre Anwendungen mit Echobell-Webhooks zu verbinden.",
          action: "Echobell herunterladen",
        },
      },
      emailTriggers: {
        title: "E-Mail-basierte Benachrichtigungen",
        subtitle: "Jede E-Mail in eine sofortige Benachrichtigung verwandeln",
        description:
          "Leiten Sie E-Mails weiter oder senden Sie direkt an Ihre Echobell-Kanal-Adresse, um Benachrichtigungen auszulösen. Perfekt für E-Mail-basierte Überwachung und Benachrichtigungen.",
        hero: {
          title: "E-Mail-gesteuerte Benachrichtigungen",
          description:
            "Verwandeln Sie wichtige E-Mails in sofortige Benachrichtigungen. Jeder Kanal erhält eine dedizierte E-Mail-Adresse für nahtlose Integration.",
        },
        sections: {
          howItWorks: {
            title: "Wie E-Mail-Trigger funktionieren",
            description:
              "Jeder Kanal erhält eine eindeutige E-Mail-Adresse. Wenn Sie eine E-Mail an diese Adresse senden, erstellt Echobell automatisch eine Benachrichtigung mit dem E-Mail-Inhalt.",
            steps: [
              {
                title: "E-Mail-Adresse abrufen",
                description:
                  "Finden Sie die eindeutige E-Mail-Adresse Ihres Kanals in den Kanaleinstellungen.",
              },
              {
                title: "E-Mails senden oder weiterleiten",
                description:
                  "Senden Sie E-Mails direkt oder leiten Sie bestehende weiter, um Benachrichtigungen auszulösen.",
              },
              {
                title: "Automatische Verarbeitung",
                description:
                  "Echobell extrahiert automatisch Betreff, Absender und Inhalt.",
              },
            ],
          },
          useCases: {
            title: "Perfekt für",
            items: [
              "System-Benachrichtigungs-E-Mails",
              "Kundensupport-Anfragen",
              "Newsletter-Benachrichtigungen",
              "Server-Überwachungsalarme",
              "E-Commerce-Bestellbestätigungen",
            ],
          },
          variables: {
            title: "E-Mail-Variablen",
            description:
              "Greifen Sie über Variablen wie {{from}}, {{subject}}, {{text}} und {{html}} auf E-Mail-Daten zu.",
          },
        },
        cta: {
          title: "E-Mail-Trigger verwenden",
          description:
            "Richten Sie heute Ihren ersten E-Mail-ausgelösten Benachrichtigungskanal ein.",
          action: "Jetzt starten",
        },
      },
      callNotifications: {
        title: "Telefonanruf-Benachrichtigungen",
        subtitle:
          "Kritische Benachrichtigungen, die sofortige Aufmerksamkeit erfordern",
        description:
          "Wenn Push-Benachrichtigungen nicht genug sind, kann Echobell Sie direkt anrufen. Perfekt für Produktionsausfälle, Sicherheitsalarme und andere kritische Ereignisse.",
        hero: {
          title: "Verpassen Sie nie kritische Benachrichtigungen",
          description:
            "Manche Benachrichtigungen sind zu wichtig für stumme Mitteilungen. Echobells Anruffunktion stellt sicher, dass Sie sofort über kritische Ereignisse informiert werden.",
        },
        sections: {
          whenToUse: {
            title: "Wann Anruf-Benachrichtigungen verwendet werden",
            items: [
              "Produktionsserver-Ausfälle",
              "Sicherheitsverletzungsalarme",
              "Zahlungsverarbeitungsfehler",
              "Kritische Systemfehler",
              "Team-Notfallbenachrichtigungen",
            ],
          },
          howItWorks: {
            title: "Wie Anruf-Benachrichtigungen funktionieren",
            description:
              "Bei Konfiguration für Anruf-Benachrichtigungen lösen kritische Alarme einen echten Telefonanruf an Ihr Gerät aus, wobei der Benachrichtigungsinhalt vorgelesen wird.",
            features: [
              "Text-zu-Sprache-Benachrichtigungsinhalt",
              "Anpassbare Wiederholungseinstellungen",
              "Automatische Wiederholung bei fehlgeschlagenen Anrufen",
              "Fähigkeit, Fokusmodus zu umgehen",
            ],
          },
          settings: {
            title: "Anrufeinstellungen",
            description:
              "Konfigurieren Sie das Anrufverhalten einschließlich Inhaltswiederholung und Wiederholungsversuche für maximale Zuverlässigkeit.",
          },
        },
        cta: {
          title: "Kritische Anruf-Benachrichtigungen einrichten",
          description:
            "Stellen Sie sicher, dass Sie nie wieder eine kritische Systemwarnung verpassen.",
          action: "Jetzt herunterladen",
        },
      },
      channels: {
        title: "Intelligente Kanal-Verwaltung",
        subtitle:
          "Organisieren und teilen Sie Benachrichtigungen mit Ihrem Team",
        description:
          "Erstellen Sie organisierte Benachrichtigungskanäle mit benutzerdefinierten Namen, Farben und Freigabefunktionen. Perfekt für Teamzusammenarbeit und Benachrichtigungsorganisation.",
        hero: {
          title: "Kollaborative Benachrichtigungsverwaltung",
          description:
            "Organisieren Sie Ihre Benachrichtigungen in Kanälen und teilen Sie sie mit Ihrem Team. Alle bleiben ohne komplexe Einrichtung informiert.",
        },
        sections: {
          organization: {
            title: "Kanalorganisation",
            description:
              "Halten Sie Ihre Benachrichtigungen mit benannten Kanälen, benutzerdefinierten Farben und klarer Kategorisierung organisiert.",
            features: [
              "Benutzerdefinierte Kanalnamen und -farben",
              "Erweiterte Bedingungsfilterung",
              "Anpassbare Link-Vorlagen",
              "Private Kanalnotizen",
            ],
          },
          sharing: {
            title: "Einfache Team-Freigabe",
            description:
              "Teilen Sie Kanäle über einfache Abonnement-Links mit Teammitgliedern. Keine komplexen Berechtigungen oder Einrichtungen erforderlich.",
            steps: [
              {
                title: "Kanal erstellen",
                description:
                  "Richten Sie einen Kanal mit benutzerdefiniertem Namen, Farbe und Benachrichtigungsvorlagen ein.",
              },
              {
                title: "Abonnement-Link teilen",
                description:
                  "Kopieren Sie den Abonnement-Link und teilen Sie ihn mit Teammitgliedern.",
              },
              {
                title: "Team erhält Benachrichtigungen",
                description:
                  "Alle Abonnenten erhalten Benachrichtigungen, wenn der Kanal ausgelöst wird.",
              },
            ],
          },
          advanced: {
            title: "Erweiterte Funktionen",
            description:
              "Verwenden Sie Bedingungen zum Filtern von Benachrichtigungen und passen Sie das Linkverhalten für verbesserte Kontrolle an.",
          },
        },
        cta: {
          title: "Beginnen Sie, Ihre Benachrichtigungen zu organisieren",
          description:
            "Erstellen Sie Ihren ersten Benachrichtigungskanal und laden Sie Ihr Team ein.",
          action: "Jetzt starten",
        },
      },
      templates: {
        title: "Dynamische Vorlagen",
        subtitle:
          "Personalisierte Benachrichtigungen mit Variablen und Ausdrücken",
        description:
          "Erstellen Sie dynamische Benachrichtigungsinhalte mit Variablen, Ausdrücken und bedingter Logik. Machen Sie Ihre Benachrichtigungen informativer und handlungsorientierter.",
        hero: {
          title: "Intelligente Benachrichtigungsvorlagen",
          description:
            "Verwandeln Sie statische Benachrichtigungen in dynamische, informative Mitteilungen mit Echobells leistungsstarkem Vorlagensystem.",
        },
        sections: {
          variables: {
            title: "Vorlagenvariablen",
            description:
              "Verwenden Sie Variablen, um dynamische Inhalte in Ihre Benachrichtigungen einzufügen.",
            examples: [
              {
                template:
                  "Server {{server_name}} CPU-Auslastung: {{cpu_usage}}%",
                result: "Server web-01 CPU-Auslastung: 85%",
              },
              {
                template: "Sie haben {{amount}}€ von {{customer}} erhalten",
                result: "Sie haben 150,00€ von Max Mustermann erhalten",
              },
            ],
          },
          expressions: {
            title: "Intelligente Ausdrücke",
            description:
              "Verwenden Sie Ausdrücke für bedingte Inhalte und erweiterte Logik.",
            features: [
              "Bedingte Ausdrücke: {{status == 'active'}}",
              "Vergleichsoperatoren: {{age > 18}}",
              "Logische Operatoren: {{isRegistered || hasParentControl}}",
              "Objekt- und Array-Zugriff: {{user.name}} oder {{items[0]}}",
            ],
          },
          conditions: {
            title: "Bedingte Benachrichtigungen",
            description:
              "Setzen Sie Bedingungen, um Benachrichtigungen nur zu senden, wenn bestimmte Kriterien erfüllt sind.",
            example:
              "Nur benachrichtigen wenn: status == 'error' && severity > 3",
          },
        },
        cta: {
          title: "Intelligente Benachrichtigungen erstellen",
          description:
            "Beginnen Sie mit dynamischen Vorlagen, um Ihre Benachrichtigungen informativer zu gestalten.",
          action: "Vorlagen ausprobieren",
        },
      },
      privacy: {
        title: "Datenschutz-First Design",
        subtitle: "Ihre Daten bleiben auf Ihrem Gerät",
        description:
          "Echobell ist mit Datenschutz im Kern entwickelt. Ihr Benachrichtigungsverlauf und -inhalt bleiben privat auf Ihrem Gerät, während nur wesentliche Metadaten auf unseren Servern gespeichert werden.",
        hero: {
          title: "Ihr Datenschutz, unsere Priorität",
          description:
            "Erleben Sie sofortige Benachrichtigungen ohne Kompromisse bei Ihrem Datenschutz. Echobells Architektur stellt sicher, dass Ihre sensiblen Daten Ihr Gerät nie verlassen.",
        },
        sections: {
          dataStorage: {
            title: "Wie wir Ihre Daten handhaben",
            description:
              "Verstehen Sie, welche Daten wo gespeichert werden und warum.",
            onDevice: {
              title: "Auf Ihrem Gerät gespeichert",
              items: [
                "Vollständiger Benachrichtigungsverlauf",
                "Benachrichtigungsinhalt und -details",
                "Kanal-Abonnement-Aufzeichnungen",
                "App-Einstellungen und -Präferenzen",
              ],
            },
            onServers: {
              title: "Auf unseren Servern gespeichert",
              items: [
                "Kanal-Metadaten (Namen, Farben, Trigger)",
                "Benutzerkonto-Informationen",
                "Kanal-Abonnement-Beziehungen",
                "Grundlegende Nutzungsanalysen (anonym)",
              ],
            },
          },
          security: {
            title: "Sicherheitsmaßnahmen",
            description: "Wie wir Ihre Daten und Kommunikation schützen.",
            features: [
              "Ende-zu-Ende-Verschlüsselung für Benachrichtigungen",
              "Sichere Webhook-Endpunkte",
              "Kein Tracking oder Profiling",
              "DSGVO- und CCPA-konform",
            ],
          },
          control: {
            title: "Sie haben die Kontrolle",
            description:
              "Vollständige Kontrolle über Ihre Daten und Datenschutzeinstellungen.",
            features: [
              "Löschen Sie Ihr Konto jederzeit",
              "Exportieren Sie Ihren Benachrichtigungsverlauf",
              "Kontrollieren Sie, welche Daten geteilt werden",
              "Transparente Datenschutzpraktiken",
            ],
          },
        },
        cta: {
          title: "Private Benachrichtigungen erleben",
          description:
            "Schließen Sie sich Tausenden an, die Echobell für ihre kritischen Benachrichtigungen vertrauen.",
          action: "Echobell herunterladen",
        },
      },
    },
    breadcrumb: {
      home: "Startseite",
      docs: "Dokumentation",
      blog: "Blog",
      features: "Funktionen",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      webhooks: "Webhooks",
      emailTriggers: "E-Mail-Auslöser",
      privacyFirst: "Datenschutz First",
    },
  },
};
