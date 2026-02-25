import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  BellRingIcon,
  CandlestickChartIcon,
  CheckCircle2Icon,
  LifeBuoyIcon,
  ServerCogIcon,
  HomeIcon,
  RocketIcon,
  ActivityIcon,
  Code2Icon,
} from "lucide-react";
import type { Metadata } from "next";
import { APP_STORE_LINK } from "@/constants";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQJsonLd, FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";
import { Language, languages, localizeUrl, uiDictionary } from "@/lib/i18n";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { FAQSection } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

type UseCaseLink = {
  label: string;
  href: string;
};

type UseCase = {
  id: string;
  title: string;
  summary: string;
  problemLabel: string;
  problem: string;
  workflowLabel: string;
  workflowSteps: string[];
  resultLabel: string;
  result: string;
  links: UseCaseLink[];
};

type UseCasePageCopy = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    primary: string;
    secondary: string;
  };
  useCases: UseCase[];
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  howTo: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string }>;
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const pageCopy: Record<Language, UseCasePageCopy> = {
  en: {
    meta: {
      title: "Alerting Use Cases for On-Call, Trading, and Support Teams",
      description:
        "Discover 8+ high-conversion alerting workflows with Echobell: webhook incident response, trading signals, smart home security, and CI/CD monitoring.",
      keywords: [
        "alerting use cases",
        "webhook alert workflow",
        "on-call incident alerts",
        "tradingview phone alert",
        "home assistant notification",
        "github actions alert",
      ],
    },
    hero: {
      badge: "Use Cases",
      title: "Practical alerting workflows for every critical scenario",
      subtitle: "From devops to day-trading, Echobell ensures you hear the signals that matter",
      description:
        "Explore how Echobell bridges the gap between silent notifications and immediate action. Choose a scenario below to see the recommended setup.",
      primary: "Download Echobell",
      secondary: "Read Documentation",
    },
    useCases: [
      {
        id: "incident-response",
        title: "Developer On-Call Rotation",
        summary: "Convert monitoring events into urgent calls when production systems fail.",
        problemLabel: "The Challenge",
        problem: "Silent push notifications are easily missed during sleep or deep work, leading to high MTTR.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Connect Grafana/Prometheus to an Echobell Webhook channel.",
          "Set up 'Call' escalation for high-severity alerts.",
          "Use dynamic templates to show service name and error log in the notification.",
        ],
        resultLabel: "Business Impact",
        result: "Faster incident acknowledgment and lower downtime for critical services.",
        links: [
          { label: "Call Features", href: "/features/call-notifications" },
          { label: "Grafana Guide", href: "/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "High-Frequency Trading Alerts",
        summary: "Get instant price movement alerts from TradingView without checking your phone constantly.",
        problemLabel: "The Challenge",
        problem: "Market opportunities are lost when price alerts are buried under social media pings.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Set a webhook alert in TradingView for your chosen symbols.",
          "Route to a dedicated Echobell channel with 'Time-Sensitive' status.",
          "Template the alert to include current price and technical indicator values.",
        ],
        resultLabel: "Business Impact",
        result: "Immediate reaction to breakouts and stop-loss triggers, protecting your capital.",
        links: [
          { label: "Templates", href: "/features/templates" },
          { label: "TradingView Docs", href: "/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "Support Ticket Escalation",
        summary: "Bridge the gap between your CRM and support team for urgent VIP requests.",
        problemLabel: "The Challenge",
        problem: "VIP support emails can sit in an inbox for hours if the agent is away from their desk.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Forward VIP customer emails to your Echobell email-triggered channel.",
          "Apply conditions to filter for 'URGENT' or 'DOWN' keywords.",
          "Broadcast the notification to the entire support team channel.",
        ],
        resultLabel: "Business Impact",
        result: "Improved SLA adherence and higher customer satisfaction scores.",
        links: [
          { label: "Email Triggers", href: "/features/email-triggers" },
          { label: "Zendesk Guide", href: "/docs/integrations/zendesk" },
        ],
      },
      {
        id: "smart-home",
        title: "Smart Home & IoT Security",
        summary: "Get a phone call when your home security system detects water leaks or smoke.",
        problemLabel: "The Challenge",
        problem: "Generic app notifications for smoke/leak detectors are often treated as low priority by iOS.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Configure Home Assistant to send a webhook request on sensor trigger.",
          "Set the Echobell channel to override focus modes via phone calls.",
          "Invite family members to subscribe to the same channel for shared safety.",
        ],
        resultLabel: "Business Impact",
        result: "Prevent massive property damage with instant, hard-to-ignore alerts.",
        links: [
          { label: "Channels", href: "/features/channels" },
          { label: "Home Assistant Guide", href: "/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "CI/CD Pipeline Failure",
        summary: "Get notified immediately when a main branch build fails, keeping development moving.",
        problemLabel: "The Challenge",
        problem: "Developers often realize a build failed only after checking GitHub an hour later.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Add a post-build step in GitHub Actions or GitLab CI.",
          "Trigger an Echobell webhook if the build status is 'failed'.",
          "Include the commit message and author in the notification payload.",
        ],
        resultLabel: "Business Impact",
        result: "Faster fix cycles and more reliable deployment pipelines.",
        links: [
          { label: "Webhooks", href: "/features/webhooks" },
          { label: "GitHub Actions Blog", href: "/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "Website Uptime Alerts",
        summary: "Integrate with monitoring tools like Upptime to get called when your API is down.",
        problemLabel: "The Challenge",
        problem: "Third-party uptime services often send emails that are buried in marketing folders.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Point Upptime/UptimeRobot webhooks to your Echobell endpoint.",
          "Use conditions to only trigger calls for production-environment outages.",
          "Include the response code and latency in the alert template.",
        ],
        resultLabel: "Business Impact",
        result: "Reduced MTTR and increased availability for your web applications.",
        links: [
          { label: "Conditions", href: "/features/conditions" },
          { label: "Upptime Blog", href: "/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Serverless Error Tracking",
        summary: "Get notified of runtime exceptions in Lambda or Cloud Functions in real-time.",
        problemLabel: "The Challenge",
        problem: "Serverless errors often stay hidden in logs until users start complaining.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Add an error handler to your Lambda/Cloud Function code.",
          "Send error stack traces to an Echobell webhook.",
          "Subscribe the engineering lead to receive phone calls for critical errors.",
        ],
        resultLabel: "Business Impact",
        result: "Proactive error resolution before they impact a large user base.",
        links: [
          { label: "Developer API", href: "/docs/api/getting-started" },
          { label: "Python/JS SDK", href: "/docs/api/libraries" },
        ],
      },
      {
        id: "team-sync",
        title: "Distributed Team Coordination",
        summary: "Keep a global team synced on operational shifts and handover events.",
        problemLabel: "The Challenge",
        problem: "Timezone differences make it hard to ensure the next shift is aware of ongoing issues.",
        workflowLabel: "Solution Workflow",
        workflowSteps: [
          "Create a 'Handover' channel for the operations team.",
          "Post shift-summary emails to the channel via the email trigger.",
          "Enable time-sensitive delivery to ensure everyone reads the handover notes.",
        ],
        resultLabel: "Business Impact",
        result: "Smoother operations and better accountability across global timezones.",
        links: [
          { label: "Privacy", href: "/features/privacy" },
          { label: "Channel Subscriptions", href: "/docs/app/channels" },
        ],
      },
    ],
    faq: {
      title: "Use Case FAQ",
      items: [
        {
          question: "Can I use multiple triggers for one channel?",
          answer: "No, each channel has its own trigger (either Webhook or Email). However, you can create multiple channels for different trigger sources.",
        },
        {
          question: "Do these workflows work on Android?",
          answer: "Echobell is currently optimized for iOS to provide deep system integration like Time-Sensitive notifications and Call alerts.",
        },
        {
          question: "Is there a limit to the number of subscribers?",
          answer: "No, you can invite unlimited team members to subscribe to your public or private channels.",
        },
      ],
    },
    howTo: {
      name: "How to implement a workflow",
      description: "Step-by-step guide to setting up your first alerting workflow.",
      steps: [
        { name: "Create Channel", text: "Choose between Webhook or Email trigger source." },
        { name: "Configure Source", text: "Copy your unique URL or Email address to your source system." },
        { name: "Set Priority", text: "Choose standard, time-sensitive, or phone call notifications." },
        { name: "Test & Deploy", text: "Send a test event to verify the alert reaches your device." },
      ],
    },
    cta: {
      title: "Ready to launch your workflow?",
      description: "Download Echobell today and never miss a critical signal again.",
      primary: "Get Started",
      secondary: "View Pricing",
    },
  },
  zh: {
    meta: {
      title: "告警场景方案 - 适用于值班、交易、智能家居与开发团队",
      description:
        "探索 Echobell 的 8+ 种实战告警工作流：Webhook 值班响应、交易信号提醒、智能家居安全与 CI/CD 监控。",
      keywords: [
        "告警场景",
        "Webhook 告警工作流",
        "值班通知",
        "交易提醒",
        "智能家居通知",
        "GitHub Actions 告警",
      ],
    },
    hero: {
      badge: "场景方案",
      title: "覆盖所有关键时刻的实战告警工作流",
      subtitle: "从运维值班到金融交易，Echobell 确保您听到最重要的信号",
      description:
        "探索 Echobell 如何打破“静默通知”与“即时行动”之间的屏障。选择下方场景，查看推荐配置方案。",
      primary: "下载 Echobell",
      secondary: "阅读文档",
    },
    useCases: [
      {
        id: "incident-response",
        title: "运维值班响应",
        summary: "在生产系统故障时，将监控事件转化为紧急电话提醒。",
        problemLabel: "面临挑战",
        problem: "静音推送在睡眠或深度工作时极易被忽略，导致事故响应时间（MTTR）过长。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "将 Grafana/Prometheus 接入 Echobell Webhook 频道。",
          "为高严重级别告警配置“电话”升级通知。",
          "使用动态模板在通知中直接显示服务名称和错误日志。",
        ],
        resultLabel: "业务价值",
        result: "更快的事故确认速度，显著降低关键服务的停机时间。",
        links: [
          { label: "来电通知功能", href: "/features/call-notifications" },
          { label: "Grafana 接入指南", href: "/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "高频交易提醒",
        summary: "无需时刻盯盘，从 TradingView 获取实时的行情波动提醒。",
        problemLabel: "面临挑战",
        problem: "当行情告警被淹没在社交媒体的推送中时，极易错失交易良机。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "在 TradingView 中为目标交易对设置 Webhook 告警。",
          "路由至 Echobell 专属频道并开启“时间敏感”状态。",
          "配置模板以包含当前价格、技术指标数值等关键信息。",
        ],
        resultLabel: "业务价值",
        result: "对突破和止损触发做出即时反应，有效保护您的交易资本。",
        links: [
          { label: "模板功能", href: "/features/templates" },
          { label: "TradingView 文档", href: "/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "客户工单升级",
        summary: "在 CRM 系统与技术支持团队之间建立 VIP 紧急请求的直连通道。",
        problemLabel: "面临挑战",
        problem: "如果坐席不在电脑前，VIP 客户的紧急邮件可能会在收件箱中堆积数小时。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "将 VIP 客户邮件转发至 Echobell 邮件触发频道。",
          "通过条件规则过滤“URGENT”或“故障”等关键词。",
          "将通知同步广播给整个技术支持团队频道。",
        ],
        resultLabel: "业务价值",
        result: "提升 SLA 达成率，显著提高客户满意度评分。",
        links: [
          { label: "邮件触发功能", href: "/features/email-triggers" },
          { label: "Zendesk 集成指南", href: "/docs/integrations/zendesk" },
        ],
      },
      {
        id: "smart-home",
        title: "智能家居与 IoT 安全",
        summary: "当家中检测到漏水或火灾烟雾时，第一时间接收电话提醒。",
        problemLabel: "面临挑战",
        problem: "普通的烟雾/漏水传感器通知常被 iOS 视为低优先级提醒，无法引起注意。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "配置 Home Assistant 在传感器触发时发送 Webhook 请求。",
          "设置 Echobell 频道通过电话呼叫绕过专注模式。",
          "邀请家庭成员订阅同一频道，共享安全保障。",
        ],
        resultLabel: "业务价值",
        result: "通过难以被忽略的即时告警，防止重大家产损失。",
        links: [
          { label: "频道功能", href: "/features/channels" },
          { label: "Home Assistant 案例", href: "/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "CI/CD 流水线状态",
        summary: "在主分支构建失败时立即获知，确保开发流程不中断。",
        problemLabel: "面临挑战",
        problem: "开发者往往在提交代码一小时后再次查看 GitHub 时才发现构建失败。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "在 GitHub Actions 或 GitLab CI 中添加构建后置步骤。",
          "若构建状态为“失败”，则触发 Echobell Webhook。",
          "在通知负载中包含提交信息（Commit Message）和作者。",
        ],
        resultLabel: "业务价值",
        result: "缩短修复周期，提升部署流水线的可靠性。",
        links: [
          { label: "Webhook 功能", href: "/features/webhooks" },
          { label: "GitHub Actions 博客", href: "/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "网站可用性监测",
        summary: "与 Upptime 等工具集成，在 API 或网站宕机时自动拨打电话。",
        problemLabel: "面临挑战",
        problem: "第三方监控服务的邮件经常被归类到营销文件夹，无法及时处理。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "将 Upptime/UptimeRobot 的 Webhook 指向 Echobell 端点。",
          "利用条件配置仅针对“生产环境”宕机触发电话提醒。",
          "在告警模板中包含状态码、延迟等关键诊断数据。",
        ],
        resultLabel: "业务价值",
        result: "降低平均修复时间（MTTR），提升 Web 应用的可用性。",
        links: [
          { label: "条件规则", href: "/features/conditions" },
          { label: "Upptime 案例", href: "/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Serverless 错误跟踪",
        summary: "实时获知 AWS Lambda 或云函数中的运行异常，实现秒级感知。",
        problemLabel: "面临挑战",
        problem: "Serverless 报错往往隐藏在海量日志中，直到用户投诉才能被发现。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "在 Lambda/云函数代码中添加错误处理句柄（Error Handler）。",
          "将错误堆栈信息（Stack Trace）发送至 Echobell Webhook。",
          "为核心开发人员配置关键错误下的电话提醒。",
        ],
        resultLabel: "业务价值",
        result: "在错误影响扩大之前，实现主动式的问题解决。",
        links: [
          { label: "开发者 API", href: "/docs/api/getting-started" },
          { label: "Python/JS SDK", href: "/docs/api/libraries" },
        ],
      },
      {
        id: "team-sync",
        title: "分布式团队协作",
        summary: "确保全球团队在运维交接和重大事件上保持步调一致。",
        problemLabel: "面临挑战",
        problem: "时差导致很难确保接班人员对正在进行的事故有清晰的认知。",
        workflowLabel: "方案流程",
        workflowSteps: [
          "为运维团队创建“交接（Handover）”频道。",
          "通过邮件触发功能将交接摘要同步至该频道。",
          "启用“时间敏感”推送，确保每个成员都能阅读交接重点。",
        ],
        resultLabel: "业务价值",
        result: "更顺畅的运维流转，跨时区协作的责任归属更明确。",
        links: [
          { label: "隐私保护", href: "/features/privacy" },
          { label: "频道订阅", href: "/docs/app/channels" },
        ],
      },
    ],
    faq: {
      title: "常见问题",
      items: [
        {
          question: "一个频道可以配置多个触发器吗？",
          answer: "不可以，每个频道都有其固有的触发源（Webhook 或 Email）。不过您可以为不同的来源创建多个频道。",
        },
        {
          question: "这些流程支持安卓系统吗？",
          answer: "Echobell 目前专注于 iOS 平台的深度优化，以提供“时间敏感”通知和“来电告警”等核心系统级能力。",
        },
        {
          question: "频道订阅人数有限制吗？",
          answer: "没有限制，您可以邀请无限数量的团队成员订阅您的公开或私有频道。",
        },
      ],
    },
    howTo: {
      name: "如何落地一个工作流",
      description: "简单几步，即可搭建您的第一条告警链路。",
      steps: [
        { name: "创建频道", text: "在 Webhook 或邮件触发源中二选一。" },
        { name: "配置来源", text: "将生成的唯一 URL 或地址复制到您的源系统中。" },
        { name: "设置优先级", text: "根据重要程度选择普通、时间敏感或电话通知。" },
        { name: "测试并上线", text: "发送一条测试事件，验证告警是否能触达您的设备。" },
      ],
    },
    cta: {
      title: "准备好上线您的告警流程了吗？",
      description: "立即下载 Echobell，绝不错过任何关键信号。",
      primary: "立即开始",
      secondary: "查看定价",
    },
  },
  es: {
    meta: {
      title: "Casos de Uso de Alertas - Equipos de Guardia, Trading y Hogar",
      description: "Descubra 8+ flujos de alerta con Echobell: respuesta a incidentes, señales de trading, seguridad del hogar y monitoreo CI/CD.",
      keywords: ["casos de uso de alertas", "webhook workflow", "alertas de guardia", "tradingview alert", "notificaciones hogar inteligente"],
    },
    hero: {
      badge: "Casos de Uso",
      title: "Flujos de alerta prácticos para cada escenario crítico",
      subtitle: "De devops a trading, Echobell asegura que escuches las señales importantes",
      description: "Explore cómo Echobell cierra la brecha entre las notificaciones silenciosas y la acción inmediata.",
      primary: "Descargar Echobell",
      secondary: "Documentación",
    },
    useCases: [], // To be populated if needed
    faq: { title: "Preguntas Frecuentes", items: [] },
    howTo: { name: "Cómo implementar", description: "", steps: [] },
    cta: { title: "Listo para empezar?", description: "", primary: "Comenzar", secondary: "Precios" },
  },
  fr: {
    meta: {
      title: "Cas d'Utilisation d'Alerte - Équipes d'Astreinte, Trading et Maison",
      description: "Découvrez 8+ flux d'alerte avec Echobell : réponse aux incidents, signaux de trading, sécurité domestique et surveillance CI/CD.",
      keywords: ["cas d'utilisation d'alerte", "workflow webhook", "alertes astreinte", "tradingview alert", "notifications maison intelligente"],
    },
    hero: {
      badge: "Cas d'Utilisation",
      title: "Flux d'alerte pratiques pour chaque scénario critique",
      subtitle: "Du devops au trading, Echobell vous assure d'entendre les signaux importants",
      description: "Découvrez comment Echobell comble le fossé entre les notifications silencieuses et l'action immédiate.",
      primary: "Télécharger Echobell",
      secondary: "Documentation",
    },
    useCases: [],
    faq: { title: "FAQ", items: [] },
    howTo: { name: "Comment implémenter", description: "", steps: [] },
    cta: { title: "Prêt à commencer ?", description: "", primary: "Commencer", secondary: "Tarifs" },
  },
  ja: {
    meta: {
      title: "活用シーン - オンコール、トレード、スマートホーム、開発チーム向け",
      description: "Echobellを使用した8つ以上の通知ワークフロー：インシデント対応、取引シグナル、ホームセキュリティ、CI/CD監視など。",
      keywords: ["通知活用シーン", "Webhookワークフロー", "オンコール通知", "TradingViewアラート", "スマートホーム通知"],
    },
    hero: {
      badge: "活用シーン",
      title: "あらゆる重要な瞬間のための実用的な通知ワークフロー",
      subtitle: "DevOpsからトレードまで、Echobellは重要な信号を確実に届けます",
      description: "静かな通知と即時の行動の間のギャップをEchobellがどのように埋めるかをご覧ください。",
      primary: "Echobellをダウンロード",
      secondary: "ドキュメント",
    },
    useCases: [],
    faq: { title: "よくある質問", items: [] },
    howTo: { name: "導入方法", description: "", steps: [] },
    cta: { title: "準備はできましたか？", description: "", primary: "今すぐ開始", secondary: "料金表" },
  },
  de: {
    meta: {
      title: "Anwendungsfälle für Alarme - On-Call, Trading und Smart Home",
      description: "Entdecken Sie 8+ Alarm-Workflows mit Echobell: Incident Response, Trading-Signale, Smart Home Sicherheit und CI/CD-Überwachung.",
      keywords: ["Anwendungsfälle Alarme", "Webhook Workflow", "On-Call Alarme", "TradingView Alert", "Smart Home Benachrichtigungen"],
    },
    hero: {
      badge: "Anwendungsfälle",
      title: "Praktische Alarm-Workflows für jedes kritische Szenario",
      subtitle: "Von DevOps bis Trading – Echobell stellt sicher, dass Sie wichtige Signale hören",
      description: "Erfahren Sie, wie Echobell die Lücke zwischen stillen Benachrichtigungen und sofortigem Handeln schließt.",
      primary: "Echobell herunterladen",
      secondary: "Dokumentation",
    },
    useCases: [],
    faq: { title: "FAQ", items: [] },
    howTo: { name: "Implementierung", description: "", steps: [] },
    cta: { title: "Bereit zu starten?", description: "", primary: "Loslegen", secondary: "Preise" },
  },
};

// Fill placeholders for other languages with English content if they are empty
Object.keys(pageCopy).forEach((lang) => {
  const l = lang as Language;
  if (l !== "en" && l !== "zh" && pageCopy[l].useCases.length === 0) {
    pageCopy[l].useCases = pageCopy.en.useCases;
    pageCopy[l].faq = pageCopy.en.faq;
    pageCopy[l].howTo = pageCopy.en.howTo;
    pageCopy[l].cta = pageCopy.en.cta;
  }
});

const useCaseIcons = [
  BellRingIcon,
  CandlestickChartIcon,
  LifeBuoyIcon,
  HomeIcon,
  RocketIcon,
  ActivityIcon,
  Code2Icon,
  ServerCogIcon,
];

function getCopy(lang: Language): UseCasePageCopy {
  return pageCopy[lang] || pageCopy.en;
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(localizeUrl("/use-cases", lang), baseUrl).toString();
  const dict = uiDictionary[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />
      <HowToJsonLd
        name={t.howTo.name}
        description={t.howTo.description}
        steps={t.howTo.steps}
        totalTime="PT15M"
      />
      <FAQJsonLd faqs={t.faq.items} />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: t.hero.badge,
              href: localizeUrl("/use-cases", lang),
              isCurrentPage: true,
            },
          ]}
        />
      </div>

      <section className="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 text-center">
          <div className="mb-6 flex justify-center">
            <div className="group rounded-full border border-black/10 bg-white text-base transition-all ease-in dark:border-white/10 dark:bg-neutral-800 shadow-sm ring-1 ring-black/5">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="text-sm font-medium tracking-wide">{t.hero.badge}</span>
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance opacity-90 sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-pretty opacity-60 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-40 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <Link href={APP_STORE_LINK} target="_blank" className="hover:scale-105 transition-transform duration-200">
              <Image src={dict.hero.appStoreImage} alt="App Store" width={160} height={48} />
            </Link>
            <Link
              href={localizeUrl("/docs", lang)}
              className="text-sm font-bold opacity-90 group flex items-center gap-1.5 py-3"
            >
              {t.hero.secondary}
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {t.useCases.map((useCase, index) => {
              const Icon = useCaseIcons[index];
              return (
                <div id={useCase.id} key={useCase.id} className="scroll-mt-24">
                  <div className="grid gap-12 lg:grid-cols-12 items-start">
                    {/* Sticky Info Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-xl shadow-orange-600/20 mb-8 ring-1 ring-orange-600/50">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl opacity-90 leading-tight">
                        {useCase.title}
                      </h2>
                      <p className="mt-6 text-xl opacity-60 leading-relaxed">
                        {useCase.summary}
                      </p>

                      <div className="mt-12 space-y-10 border-l-2 border-neutral-100 dark:border-neutral-800 pl-8 ml-1">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600/80 mb-3">
                            {useCase.problemLabel}
                          </h3>
                          <p className="text-base opacity-70 leading-relaxed">
                            {useCase.problem}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 mb-3">
                            {useCase.resultLabel}
                          </h3>
                          <p className="text-base font-medium opacity-80 leading-relaxed">
                            {useCase.result}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 flex flex-wrap gap-4">
                        {useCase.links.map((link) => (
                          <Link
                            key={link.href}
                            href={localizeUrl(link.href, lang)}
                            className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-900 px-5 py-2.5 text-sm font-bold transition-all hover:bg-orange-600 hover:text-white ring-1 ring-black/5 dark:ring-white/5"
                          >
                            {link.label}
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Workflow Column */}
                    <div className="lg:col-span-7">
                      <div className="relative flex flex-col gap-1 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/50 p-4 ring-1 ring-black/5 dark:ring-white/10 shadow-inner">
                        <div className="bg-white dark:bg-black rounded-[2.5rem] p-8 sm:p-12 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                          <h3 className="text-xl font-bold mb-10 opacity-90 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-600 animate-pulse" />
                            {useCase.workflowLabel}
                          </h3>
                          <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-100 dark:bg-neutral-800" style={{ height: "calc(100% - 2.5rem)" }} />
                            <div className="space-y-12">
                              {useCase.workflowSteps.map((step, sIndex) => (
                                <div key={sIndex} className="relative flex gap-8">
                                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-100 dark:border-neutral-700 font-bold text-lg shadow-sm text-orange-600 ring-4 ring-white dark:ring-neutral-900">
                                    {sIndex + 1}
                                  </div>
                                  <div className="flex-1 pt-2.5">
                                    <p className="text-lg font-medium opacity-80 leading-relaxed">
                                      {step}
                                    </p>
                                  </div>
                                </div>
                              ))}
                              <div className="relative flex gap-8">
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg shadow-orange-600/30 ring-4 ring-white dark:ring-neutral-900">
                                  <CheckCircle2Icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1 pt-3">
                                  <p className="text-lg font-bold text-orange-600">
                                    Done! System ready.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-neutral-50/50 dark:bg-neutral-900/20 py-12">
        <FAQSection
          lang={lang}
          title={t.faq.title}
          items={t.faq.items}
        />
      </div>

      <CTASection lang={lang} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getCopy(lang);
  const canonical = new URL(localizeUrl("/use-cases", lang), baseUrl).toString();

  const ogImageParams = new URLSearchParams({
    title: t.meta.title,
    description: t.meta.description,
    type: "default",
    lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/use-cases", "en"),
        ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/use-cases", l)])),
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
