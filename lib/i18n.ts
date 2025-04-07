import type { I18nConfig } from "fumadocs-core/i18n";

import appStoreImageEn from "@/public/images/app-store.en.svg";
import appStoreImageZh from "@/public/images/app-store.zh.svg";

export const languages = ["en", "zh"];

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages,
  hideLocale: "default-locale",
};

export const uiDictionary = {
  en: {
    nav: {
      navigation: [
        { name: "Pricing", href: "/#pricing" },
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
      ],
    },
    hero: {
      title: "Instant alerts for different scenarios.",
      description:
        "Echobell helps you stay notified with instant alerts from webhooks and emails. Create channels, share with your team, and never miss critical events from your applications and services.",
      downloadApp: "Download App",
      getStarted: "Get Started",
      releaseNote: "Echobell has released now",
      learnMore: "Learn more",
      appStoreImage: appStoreImageEn,
    },
    features: {
      title: "Powerful Features",
      subtitle: "Stay on top of important notifications",
      description:
        "Welcome to Echobell, the instant alert app that helps you stay on top of important notifications.",
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
        price: "2.99",
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
        price: "24.99",
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
      subtitle: "Instant alerts for different scenarios.",
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
          label: "Documentation",
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
  },
  zh: {
    nav: {
      navigation: [
        { name: "定价", href: "/zh/#pricing" },
        { name: "文档", href: "/zh/docs" },
        { name: "博客", href: "/zh/blog" },
      ],
    },
    hero: {
      title: "适用于多种场景的即时通知。",
      description:
        "Echobell 帮助你通过 Webhook 和电子邮件的即时通知保持消息畅通。你可以创建频道，与团队共享，永不错过来自应用程序和服务的关键事件。",
      downloadApp: "下载应用",
      getStarted: "立即开始",
      releaseNote: "Echobell 现已发布",
      learnMore: "了解更多",
      appStoreImage: appStoreImageZh,
    },
    features: {
      title: "即时通知",
      subtitle: "掌握重要通知的最新动态",
      description:
        "欢迎使用 Echobell，这是一款即时提醒应用，帮助你随时掌握重要通知。",
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
    },
    pricing: {
      title: "简单定价",
      subtitle: "选择适合您的方案",
      callout:
        "Echobell 提供功能有限的免费计划，您可以升级到付费计划以获得更多功能和支持。",
      monthly: {
        id: "monthly",
        featured: false,
        name: "按月订阅",
        price: "22",
        description: "按月订阅 Echobell 高级版以获取所有特性。",
        features: ["无限频道数量", "无限订阅数量", "来电通知"],
      },
      annual: {
        id: "annual",
        featured: true,
        name: "按年订阅",
        price: "16.5",
        description: "按年订阅 Echobell 高级版以获取最佳价值和专属支持。",
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
        "在 Echobell 应用中打开链接以订阅频道，或复制链接并粘贴到回声铃应用中的订阅视图中。",
      downloadTips: "如果您还没有回声铃应用，可以从 App Store 下载。",
      learnMore: "了解更多",
      appStoreImage: appStoreImageZh,
    },
  },
};
