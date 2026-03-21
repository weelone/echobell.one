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
import { getAppStoreLink } from "@/constants";
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
          { label: "Call Features", href: "/en/features/call-notifications" },
          { label: "Grafana Guide", href: "/en/docs/developer/grafana" },
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
          { label: "Templates", href: "/en/features/templates" },
          { label: "TradingView Docs", href: "/en/docs/trader/tradingview" },
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
          { label: "Email Triggers", href: "/en/features/email-triggers" },
          { label: "Email Trigger Guide", href: "/en/docs/email-trigger" },
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
          { label: "Channels", href: "/en/features/channels" },
          { label: "Home Assistant Guide", href: "/en/blog/home-assistant-notifications-with-echobell" },
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
          { label: "Webhooks", href: "/en/features/webhooks" },
          { label: "GitHub Actions Blog", href: "/en/blog/github-actions-notifications" },
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
          { label: "Conditions", href: "/en/docs/conditions" },
          { label: "Upptime Blog", href: "/en/blog/upptime-alerts-with-echobell" },
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
          { label: "Webhook API", href: "/en/docs/webhook" },
          { label: "Developer Guides", href: "/en/docs/developer" },
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
          { label: "Privacy", href: "/en/privacy" },
          { label: "Channel Subscriptions", href: "/en/features/channels" },
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
          { label: "来电通知功能", href: "/zh/features/call-notifications" },
          { label: "Grafana 接入指南", href: "/zh/docs/developer/grafana" },
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
          { label: "模板功能", href: "/zh/features/templates" },
          { label: "TradingView 文档", href: "/zh/docs/trader/tradingview" },
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
          { label: "邮件触发功能", href: "/zh/features/email-triggers" },
          { label: "邮件触发指南", href: "/zh/docs/email-trigger" },
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
          { label: "频道功能", href: "/zh/features/channels" },
          { label: "Home Assistant 案例", href: "/zh/blog/home-assistant-notifications-with-echobell" },
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
          { label: "Webhook 功能", href: "/zh/features/webhooks" },
          { label: "GitHub Actions 博客", href: "/zh/blog/github-actions-notifications" },
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
          { label: "条件规则", href: "/zh/docs/conditions" },
          { label: "Upptime 案例", href: "/zh/blog/upptime-alerts-with-echobell" },
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
          { label: "Webhook API", href: "/zh/docs/webhook" },
          { label: "开发者指南", href: "/zh/docs/developer" },
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
          { label: "隐私保护", href: "/zh/privacy" },
          { label: "频道订阅", href: "/zh/features/channels" },
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
    useCases: [
      {
        id: "incident-response",
        title: "Rotación de Guardia de Desarrollo",
        summary: "Convierte eventos de monitoreo en llamadas urgentes cuando falla producción.",
        problemLabel: "El reto",
        problem: "Las notificaciones silenciosas se pierden fácilmente durante el sueño o trabajo profundo.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Conecta Grafana/Prometheus a un canal Webhook de Echobell.",
          "Configura escalado por llamada para alertas críticas.",
          "Usa plantillas dinámicas para mostrar servicio y error en la notificación.",
        ],
        resultLabel: "Impacto",
        result: "Menor tiempo de respuesta y menos inactividad en servicios críticos.",
        links: [
          { label: "Llamadas", href: "/es/features/call-notifications" },
          { label: "Guía Grafana", href: "/es/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "Alertas de Trading de Alta Frecuencia",
        summary: "Recibe señales de TradingView al instante sin revisar el móvil constantemente.",
        problemLabel: "El reto",
        problem: "Las alertas de mercado se entierran entre notificaciones sociales.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Crea una alerta Webhook en TradingView para tus símbolos.",
          "Envíala a un canal dedicado con prioridad Time-Sensitive.",
          "Incluye precio e indicadores en la plantilla.",
        ],
        resultLabel: "Impacto",
        result: "Reacción más rápida ante rupturas y stop-loss.",
        links: [
          { label: "Plantillas", href: "/es/features/templates" },
          { label: "Docs TradingView", href: "/es/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "Escalación de Tickets de Soporte",
        summary: "Conecta CRM y soporte para solicitudes VIP urgentes.",
        problemLabel: "El reto",
        problem: "Los correos VIP pueden quedar horas sin atenderse.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Reenvía correos VIP al canal de email trigger.",
          "Filtra por palabras clave como URGENT o DOWN.",
          "Difunde la notificación al canal completo de soporte.",
        ],
        resultLabel: "Impacto",
        result: "Mejor cumplimiento de SLA y mayor satisfacción del cliente.",
        links: [
          { label: "Email Triggers", href: "/es/features/email-triggers" },
          { label: "Guía Email Trigger", href: "/es/docs/email-trigger" },
        ],
      },
      {
        id: "smart-home",
        title: "Seguridad Smart Home e IoT",
        summary: "Recibe una llamada cuando tu sistema detecte humo o fugas.",
        problemLabel: "El reto",
        problem: "Las alertas de detectores suelen tratarse como baja prioridad.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Configura Home Assistant para enviar un Webhook al dispararse un sensor.",
          "Usa llamadas para atravesar modos de enfoque.",
          "Invita a tu familia a suscribirse al mismo canal.",
        ],
        resultLabel: "Impacto",
        result: "Respuesta inmediata ante incidentes domésticos críticos.",
        links: [
          { label: "Canales", href: "/es/features/channels" },
          { label: "Caso Home Assistant", href: "/es/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "Fallos de Pipeline CI/CD",
        summary: "Entérate al instante cuando falla el build de la rama principal.",
        problemLabel: "El reto",
        problem: "Muchos equipos descubren fallos demasiado tarde.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Añade un paso post-build en GitHub Actions o GitLab CI.",
          "Dispara un Webhook de Echobell cuando el estado sea failed.",
          "Incluye commit y autor en el payload.",
        ],
        resultLabel: "Impacto",
        result: "Ciclos de corrección más rápidos y despliegues más estables.",
        links: [
          { label: "Webhooks", href: "/es/features/webhooks" },
          { label: "Blog GitHub Actions", href: "/es/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "Alertas de Uptime",
        summary: "Integra Upptime/UptimeRobot para llamadas cuando tu API cae.",
        problemLabel: "El reto",
        problem: "Los emails de monitoreo se pierden con facilidad.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Apunta Webhooks de uptime a Echobell.",
          "Usa condiciones para alertar solo en producción.",
          "Incluye código de respuesta y latencia en la plantilla.",
        ],
        resultLabel: "Impacto",
        result: "Menor MTTR y mayor disponibilidad.",
        links: [
          { label: "Condiciones", href: "/es/docs/conditions" },
          { label: "Caso Upptime", href: "/es/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Seguimiento de Errores Serverless",
        summary: "Recibe alertas en tiempo real de excepciones en Lambda/Cloud Functions.",
        problemLabel: "El reto",
        problem: "Los errores serverless suelen quedar ocultos en logs.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Añade un handler de errores en tu función.",
          "Envía stack traces al Webhook de Echobell.",
          "Configura llamadas para errores críticos.",
        ],
        resultLabel: "Impacto",
        result: "Resolución proactiva antes de afectar a más usuarios.",
        links: [
          { label: "API Webhook", href: "/es/docs/webhook" },
          { label: "Guías Developer", href: "/es/docs/developer" },
        ],
      },
      {
        id: "team-sync",
        title: "Coordinación de Equipos Distribuidos",
        summary: "Mantén sincronizados cambios de turno y handover operativo.",
        problemLabel: "El reto",
        problem: "Las diferencias horarias dificultan la continuidad operativa.",
        workflowLabel: "Flujo recomendado",
        workflowSteps: [
          "Crea un canal de handover para operaciones.",
          "Publica resúmenes de turno por email trigger.",
          "Activa Time-Sensitive para asegurar lectura.",
        ],
        resultLabel: "Impacto",
        result: "Operación más fluida y mejor responsabilidad entre turnos.",
        links: [
          { label: "Privacidad", href: "/es/privacy" },
          { label: "Suscripciones de Canal", href: "/es/features/channels" },
        ],
      },
    ],
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Puedo usar varios triggers en un canal?",
          answer: "No. Cada canal usa un solo origen (Webhook o Email), pero puedes crear varios canales.",
        },
        {
          question: "¿Funciona en Android?",
          answer: "Echobell está optimizado para iOS con capacidades como Time-Sensitive y alertas por llamada.",
        },
        {
          question: "¿Hay límite de suscriptores?",
          answer: "No. Puedes invitar a miembros ilimitados a canales públicos o privados.",
        },
      ],
    },
    howTo: {
      name: "Cómo implementar un flujo",
      description: "Guía rápida para configurar tu primer flujo de alertas.",
      steps: [
        { name: "Crear canal", text: "Elige Webhook o Email como origen." },
        { name: "Configurar origen", text: "Copia la URL o dirección única a tu sistema origen." },
        { name: "Definir prioridad", text: "Selecciona normal, time-sensitive o llamada." },
        { name: "Probar y lanzar", text: "Envía un evento de prueba y valida la entrega." },
      ],
    },
    cta: {
      title: "¿Listo para lanzar tu flujo?",
      description: "Descarga Echobell y no pierdas ninguna señal crítica.",
      primary: "Comenzar",
      secondary: "Precios",
    },
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
    useCases: [
      {
        id: "incident-response",
        title: "Astreinte Développeur",
        summary: "Transformez les alertes de monitoring en appels urgents en cas d'incident production.",
        problemLabel: "Le défi",
        problem: "Les notifications silencieuses passent facilement inaperçues.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Connectez Grafana/Prometheus à un canal Webhook Echobell.",
          "Activez l'escalade par appel pour les alertes critiques.",
          "Utilisez des templates dynamiques avec service et erreur.",
        ],
        resultLabel: "Impact",
        result: "Réduction du temps de prise en charge et des indisponibilités.",
        links: [
          { label: "Appels", href: "/fr/features/call-notifications" },
          { label: "Guide Grafana", href: "/fr/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "Alertes Trading à Haute Fréquence",
        summary: "Recevez instantanément les signaux TradingView.",
        problemLabel: "Le défi",
        problem: "Les alertes marché sont noyées dans les notifications non critiques.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Créez une alerte Webhook dans TradingView.",
          "Envoyez-la vers un canal dédié en mode Time-Sensitive.",
          "Ajoutez prix et indicateurs dans le template.",
        ],
        resultLabel: "Impact",
        result: "Réaction plus rapide aux signaux de marché.",
        links: [
          { label: "Templates", href: "/fr/features/templates" },
          { label: "Docs TradingView", href: "/fr/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "Escalade des Tickets Support",
        summary: "Reliez CRM et support pour les demandes VIP urgentes.",
        problemLabel: "Le défi",
        problem: "Les emails VIP peuvent rester non traités trop longtemps.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Transférez les emails VIP vers un canal email trigger.",
          "Filtrez avec des conditions (URGENT, DOWN, etc.).",
          "Diffusez l'alerte à toute l'équipe support.",
        ],
        resultLabel: "Impact",
        result: "Meilleur respect des SLA et satisfaction client accrue.",
        links: [
          { label: "Déclencheurs Email", href: "/fr/features/email-triggers" },
          { label: "Guide Email Trigger", href: "/fr/docs/email-trigger" },
        ],
      },
      {
        id: "smart-home",
        title: "Sécurité Smart Home & IoT",
        summary: "Recevez un appel en cas de fuite d'eau ou fumée.",
        problemLabel: "Le défi",
        problem: "Les alertes domestiques peuvent être classées en faible priorité.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Configurez Home Assistant pour envoyer un Webhook à l'événement.",
          "Utilisez les appels pour contourner les modes de concentration.",
          "Invitez votre foyer à s'abonner au même canal.",
        ],
        resultLabel: "Impact",
        result: "Réaction immédiate face aux incidents critiques à domicile.",
        links: [
          { label: "Canaux", href: "/fr/features/channels" },
          { label: "Cas Home Assistant", href: "/fr/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "Échec de Pipeline CI/CD",
        summary: "Soyez notifié immédiatement en cas d'échec de build.",
        problemLabel: "Le défi",
        problem: "Les échecs sont souvent découverts trop tard.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Ajoutez une étape post-build dans GitHub Actions/GitLab CI.",
          "Déclenchez un Webhook Echobell si le statut est failed.",
          "Incluez commit et auteur dans le payload.",
        ],
        resultLabel: "Impact",
        result: "Correction plus rapide et pipeline plus fiable.",
        links: [
          { label: "Webhooks", href: "/fr/features/webhooks" },
          { label: "Blog GitHub Actions", href: "/fr/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "Alertes de Disponibilité",
        summary: "Intégrez Upptime/UptimeRobot pour être appelé en cas de panne.",
        problemLabel: "Le défi",
        problem: "Les emails de monitoring se perdent facilement.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Pointez les Webhooks uptime vers Echobell.",
          "Déclenchez uniquement en production via conditions.",
          "Ajoutez code réponse et latence au template.",
        ],
        resultLabel: "Impact",
        result: "MTTR réduit et meilleure disponibilité.",
        links: [
          { label: "Conditions", href: "/fr/docs/conditions" },
          { label: "Cas Upptime", href: "/fr/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Suivi d'Erreurs Serverless",
        summary: "Recevez en temps réel les exceptions Lambda/Cloud Functions.",
        problemLabel: "Le défi",
        problem: "Les erreurs serverless restent souvent cachées dans les logs.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Ajoutez un gestionnaire d'erreurs dans votre fonction.",
          "Envoyez les stack traces vers Webhook Echobell.",
          "Configurez les appels pour les erreurs critiques.",
        ],
        resultLabel: "Impact",
        result: "Résolution proactive avant impact large.",
        links: [
          { label: "API Webhook", href: "/fr/docs/webhook" },
          { label: "Guides Développeur", href: "/fr/docs/developer" },
        ],
      },
      {
        id: "team-sync",
        title: "Coordination d'Équipe Distribuée",
        summary: "Synchronisez les handovers et changements d'astreinte.",
        problemLabel: "Le défi",
        problem: "Les fuseaux horaires compliquent la continuité opérationnelle.",
        workflowLabel: "Flux recommandé",
        workflowSteps: [
          "Créez un canal handover pour les opérations.",
          "Publiez les résumés via email trigger.",
          "Activez Time-Sensitive pour garantir la lecture.",
        ],
        resultLabel: "Impact",
        result: "Opérations plus fluides et meilleure responsabilité d'équipe.",
        links: [
          { label: "Confidentialité", href: "/fr/privacy" },
          { label: "Abonnements de Canal", href: "/fr/features/channels" },
        ],
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Puis-je utiliser plusieurs déclencheurs sur un canal ?",
          answer: "Non. Un canal utilise un seul type de source (Webhook ou Email), mais vous pouvez créer plusieurs canaux.",
        },
        {
          question: "Ces workflows fonctionnent-ils sur Android ?",
          answer: "Echobell est actuellement optimisé pour iOS (Time-Sensitive et alertes par appel).",
        },
        {
          question: "Y a-t-il une limite d'abonnés ?",
          answer: "Non, vous pouvez inviter un nombre illimité de membres.",
        },
      ],
    },
    howTo: {
      name: "Comment implémenter un workflow",
      description: "Guide rapide pour déployer votre premier flux d'alerte.",
      steps: [
        { name: "Créer un canal", text: "Choisissez Webhook ou Email." },
        { name: "Configurer la source", text: "Copiez l'URL ou l'adresse unique dans votre système source." },
        { name: "Définir la priorité", text: "Normal, time-sensitive ou appel." },
        { name: "Tester et déployer", text: "Envoyez un test et vérifiez la réception." },
      ],
    },
    cta: {
      title: "Prêt à lancer votre workflow ?",
      description: "Téléchargez Echobell et ne manquez plus aucun signal critique.",
      primary: "Commencer",
      secondary: "Tarifs",
    },
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
    useCases: [
      {
        id: "incident-response",
        title: "開発オンコール対応",
        summary: "本番障害時に監視イベントを緊急コールへ変換します。",
        problemLabel: "課題",
        problem: "サイレント通知は就寝中や集中作業中に見逃されがちです。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "Grafana/Prometheus を Echobell の Webhook チャンネルに接続。",
          "重大アラートに対して通話エスカレーションを設定。",
          "テンプレートでサービス名とエラー情報を表示。",
        ],
        resultLabel: "効果",
        result: "初動対応が速くなり、ダウンタイムを削減できます。",
        links: [
          { label: "通話通知", href: "/ja/features/call-notifications" },
          { label: "Grafana ガイド", href: "/ja/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "高頻度トレード通知",
        summary: "TradingView の価格変動シグナルを即時に受け取ります。",
        problemLabel: "課題",
        problem: "相場アラートが他の通知に埋もれて機会損失が発生します。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "TradingView で Webhook アラートを設定。",
          "Time-Sensitive の専用チャンネルへルーティング。",
          "価格や指標をテンプレートへ埋め込む。",
        ],
        resultLabel: "効果",
        result: "ブレイクアウトや損切りに素早く対応できます。",
        links: [
          { label: "テンプレート", href: "/ja/features/templates" },
          { label: "TradingView ドキュメント", href: "/ja/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "サポートチケットのエスカレーション",
        summary: "CRM とサポートをつなぎ、VIP の緊急依頼を即時共有します。",
        problemLabel: "課題",
        problem: "VIP メールが担当者不在で長時間放置されることがあります。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "VIP メールを email trigger チャンネルへ転送。",
          "URGENT/DOWN などの条件でフィルタ。",
          "サポート全体のチャンネルへ通知を配信。",
        ],
        resultLabel: "効果",
        result: "SLA 達成率と顧客満足度を向上できます。",
        links: [
          { label: "メールトリガー", href: "/ja/features/email-triggers" },
          { label: "メールトリガーガイド", href: "/ja/docs/email-trigger" },
        ],
      },
      {
        id: "smart-home",
        title: "スマートホーム / IoT セキュリティ",
        summary: "漏水や煙を検知したら即時に電話通知を受け取れます。",
        problemLabel: "課題",
        problem: "家庭向け通知は優先度が低く扱われやすいです。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "Home Assistant から Webhook を送信。",
          "通話通知でフォーカスモードを回避。",
          "家族を同一チャンネルに招待して共有。",
        ],
        resultLabel: "効果",
        result: "重大インシデントへの初動を早められます。",
        links: [
          { label: "チャンネル", href: "/ja/features/channels" },
          { label: "Home Assistant 事例", href: "/ja/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "CI/CD パイプライン障害",
        summary: "main ブランチのビルド失敗を即時に検知します。",
        problemLabel: "課題",
        problem: "ビルド失敗の発見が遅れて修正が後手になります。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "GitHub Actions/GitLab CI に post-build ステップを追加。",
          "failed 時に Echobell Webhook を送信。",
          "コミット情報と作成者を payload に含める。",
        ],
        resultLabel: "効果",
        result: "修正サイクルが短くなり、配信品質が向上します。",
        links: [
          { label: "Webhooks", href: "/ja/features/webhooks" },
          { label: "GitHub Actions ブログ", href: "/ja/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "稼働監視アラート",
        summary: "Upptime/UptimeRobot と連携し、障害時に通話通知します。",
        problemLabel: "課題",
        problem: "監視メールは見落とされやすく対応が遅れます。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "稼働監視の Webhook を Echobell に接続。",
          "本番障害のみ条件で通知。",
          "レスポンスコードと遅延をテンプレートへ追加。",
        ],
        resultLabel: "効果",
        result: "MTTR を下げ、可用性を高められます。",
        links: [
          { label: "条件", href: "/ja/docs/conditions" },
          { label: "Upptime 事例", href: "/ja/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Serverless エラー追跡",
        summary: "Lambda/Cloud Functions の例外をリアルタイムで検知します。",
        problemLabel: "課題",
        problem: "Serverless エラーはログ内に埋もれがちです。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "関数コードにエラーハンドラを追加。",
          "スタックトレースを Echobell Webhook へ送信。",
          "重大エラーには通話通知を設定。",
        ],
        resultLabel: "効果",
        result: "ユーザー影響が広がる前に対応できます。",
        links: [
          { label: "Webhook API", href: "/ja/docs/webhook" },
          { label: "開発者ガイド", href: "/ja/docs/developer" },
        ],
      },
      {
        id: "team-sync",
        title: "分散チーム連携",
        summary: "シフト交代・引き継ぎを確実に同期します。",
        problemLabel: "課題",
        problem: "時差により引き継ぎ漏れが発生しやすいです。",
        workflowLabel: "推奨フロー",
        workflowSteps: [
          "運用チーム用の handover チャンネルを作成。",
          "交代サマリーを email trigger で投稿。",
          "Time-Sensitive で既読率を確保。",
        ],
        resultLabel: "効果",
        result: "運用の継続性が上がり、責任分担が明確になります。",
        links: [
          { label: "プライバシー", href: "/ja/privacy" },
          { label: "チャンネル購読", href: "/ja/features/channels" },
        ],
      },
    ],
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "1つのチャンネルで複数トリガーを使えますか？",
          answer: "いいえ。1チャンネルは Webhook か Email のどちらか1種類です。必要に応じて複数チャンネルを作成してください。",
        },
        {
          question: "Android でも使えますか？",
          answer: "Echobell は現在 iOS 向けに最適化されています（Time-Sensitive や通話通知）。",
        },
        {
          question: "購読者数に上限はありますか？",
          answer: "上限はありません。公開/非公開チャンネルに無制限で招待できます。",
        },
      ],
    },
    howTo: {
      name: "ワークフロー導入手順",
      description: "最初の通知ワークフローをすぐに構築するための手順です。",
      steps: [
        { name: "チャンネル作成", text: "Webhook か Email を選択します。" },
        { name: "送信元設定", text: "発行された URL/メールアドレスを送信元に設定します。" },
        { name: "優先度設定", text: "通常・Time-Sensitive・通話を選びます。" },
        { name: "テスト実行", text: "テストイベントを送信して到達を確認します。" },
      ],
    },
    cta: {
      title: "ワークフローを始めますか？",
      description: "Echobell をダウンロードして重要なシグナルを見逃さない運用へ。",
      primary: "今すぐ開始",
      secondary: "料金を見る",
    },
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
    useCases: [
      {
        id: "incident-response",
        title: "Entwickler-On-Call",
        summary: "Wandeln Sie Monitoring-Events bei Produktionsstörungen in dringende Anrufe um.",
        problemLabel: "Herausforderung",
        problem: "Stille Push-Benachrichtigungen werden im Schlaf oder Fokusmodus oft übersehen.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Verbinden Sie Grafana/Prometheus mit einem Echobell-Webhook-Kanal.",
          "Aktivieren Sie Anruf-Eskalation für kritische Alarme.",
          "Nutzen Sie Templates mit Service-Name und Fehlermeldung.",
        ],
        resultLabel: "Nutzen",
        result: "Schnellere Reaktion und weniger Ausfallzeit bei kritischen Diensten.",
        links: [
          { label: "Anruf-Funktionen", href: "/de/features/call-notifications" },
          { label: "Grafana-Leitfaden", href: "/de/docs/developer/grafana" },
        ],
      },
      {
        id: "trading-signals",
        title: "High-Frequency-Trading-Alarme",
        summary: "Erhalten Sie TradingView-Signale sofort ohne ständiges Handy-Checken.",
        problemLabel: "Herausforderung",
        problem: "Marktsignale gehen zwischen unwichtigen Benachrichtigungen unter.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Richten Sie in TradingView einen Webhook-Alarm ein.",
          "Leiten Sie ihn in einen dedizierten Time-Sensitive-Kanal.",
          "Fügen Sie Preis und Indikatoren ins Template ein.",
        ],
        resultLabel: "Nutzen",
        result: "Schnellere Reaktion auf Ausbrüche und Stop-Loss-Ereignisse.",
        links: [
          { label: "Templates", href: "/de/features/templates" },
          { label: "TradingView-Doku", href: "/de/docs/trader/tradingview" },
        ],
      },
      {
        id: "support-escalation",
        title: "Support-Ticket-Eskalation",
        summary: "Verbinden Sie CRM und Support für dringende VIP-Anfragen.",
        problemLabel: "Herausforderung",
        problem: "VIP-Mails bleiben ohne Eskalation häufig zu lange unbearbeitet.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Leiten Sie VIP-Mails an einen Email-Trigger-Kanal weiter.",
          "Filtern Sie mit Bedingungen wie URGENT oder DOWN.",
          "Senden Sie die Benachrichtigung an das gesamte Support-Team.",
        ],
        resultLabel: "Nutzen",
        result: "Bessere SLA-Einhaltung und höhere Kundenzufriedenheit.",
        links: [
          { label: "Email Trigger", href: "/de/features/email-triggers" },
          { label: "Email-Trigger-Guide", href: "/de/docs/email-trigger" },
        ],
      },
      {
        id: "smart-home",
        title: "Smart Home & IoT-Sicherheit",
        summary: "Erhalten Sie einen Anruf bei Rauch- oder Wasseralarm.",
        problemLabel: "Herausforderung",
        problem: "Wichtige Smart-Home-Warnungen werden oft als niedrig priorisiert behandelt.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Konfigurieren Sie Home Assistant für Webhook-Auslösung.",
          "Nutzen Sie Anrufe, um Fokus-Modi zu umgehen.",
          "Laden Sie Familienmitglieder in denselben Kanal ein.",
        ],
        resultLabel: "Nutzen",
        result: "Schnelle Reaktion bei kritischen Vorfällen zuhause.",
        links: [
          { label: "Kanäle", href: "/de/features/channels" },
          { label: "Home-Assistant-Beispiel", href: "/de/blog/home-assistant-notifications-with-echobell" },
        ],
      },
      {
        id: "cicd-monitoring",
        title: "CI/CD-Pipeline-Fehler",
        summary: "Werden Sie sofort informiert, wenn Builds auf dem Hauptbranch fehlschlagen.",
        problemLabel: "Herausforderung",
        problem: "Build-Fehler werden oft erst spät entdeckt.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Fügen Sie in GitHub Actions/GitLab CI einen Post-Build-Step hinzu.",
          "Senden Sie bei failed einen Echobell-Webhook.",
          "Übermitteln Sie Commit und Autor im Payload.",
        ],
        resultLabel: "Nutzen",
        result: "Schnellere Fixes und stabilere Deployments.",
        links: [
          { label: "Webhooks", href: "/de/features/webhooks" },
          { label: "GitHub-Actions-Blog", href: "/de/blog/github-actions-notifications" },
        ],
      },
      {
        id: "uptime-monitoring",
        title: "Uptime-Alarmierung",
        summary: "Integrieren Sie Upptime/UptimeRobot und erhalten Sie Anrufe bei Ausfällen.",
        problemLabel: "Herausforderung",
        problem: "Monitoring-Mails gehen häufig unter.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Leiten Sie Uptime-Webhooks an Echobell weiter.",
          "Alarmieren Sie per Bedingungen nur für Produktion.",
          "Ergänzen Sie Statuscode und Latenz im Template.",
        ],
        resultLabel: "Nutzen",
        result: "Niedrigerer MTTR und höhere Verfügbarkeit.",
        links: [
          { label: "Bedingungen", href: "/de/docs/conditions" },
          { label: "Upptime-Beispiel", href: "/de/blog/upptime-alerts-with-echobell" },
        ],
      },
      {
        id: "serverless-functions",
        title: "Serverless-Fehlerverfolgung",
        summary: "Erkennen Sie Ausnahmen in Lambda/Cloud Functions in Echtzeit.",
        problemLabel: "Herausforderung",
        problem: "Serverless-Fehler bleiben oft in Logs verborgen.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Ergänzen Sie einen Error-Handler in Ihrer Funktion.",
          "Senden Sie Stack-Traces an Echobell Webhook.",
          "Aktivieren Sie Anrufe für kritische Fehler.",
        ],
        resultLabel: "Nutzen",
        result: "Proaktive Fehlerbehebung vor großem Nutzerimpact.",
        links: [
          { label: "Webhook-API", href: "/de/docs/webhook" },
          { label: "Entwickler-Guides", href: "/de/docs/developer" },
        ],
      },
      {
        id: "team-sync",
        title: "Koordination Verteilter Teams",
        summary: "Synchronisieren Sie Schichtwechsel und operative Übergaben.",
        problemLabel: "Herausforderung",
        problem: "Zeitzonen erschweren die lückenlose Übergabe.",
        workflowLabel: "Empfohlener Ablauf",
        workflowSteps: [
          "Erstellen Sie einen Handover-Kanal fürs Ops-Team.",
          "Posten Sie Schichtzusammenfassungen per Email Trigger.",
          "Aktivieren Sie Time-Sensitive für hohe Lesesicherheit.",
        ],
        resultLabel: "Nutzen",
        result: "Reibungslosere Abläufe und klarere Verantwortlichkeiten.",
        links: [
          { label: "Datenschutz", href: "/de/privacy" },
          { label: "Kanal-Abonnements", href: "/de/features/channels" },
        ],
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Kann ich mehrere Trigger pro Kanal nutzen?",
          answer: "Nein. Ein Kanal nutzt nur eine Quelle (Webhook oder Email), aber Sie können mehrere Kanäle anlegen.",
        },
        {
          question: "Funktionieren diese Workflows auf Android?",
          answer: "Echobell ist aktuell auf iOS optimiert (Time-Sensitive und Anruf-Benachrichtigungen).",
        },
        {
          question: "Gibt es ein Limit für Abonnenten?",
          answer: "Nein. Sie können unbegrenzt Teammitglieder einladen.",
        },
      ],
    },
    howTo: {
      name: "So implementieren Sie einen Workflow",
      description: "Kurzanleitung für Ihren ersten Alarm-Workflow.",
      steps: [
        { name: "Kanal erstellen", text: "Webhook oder Email als Quelle auswählen." },
        { name: "Quelle konfigurieren", text: "URL oder Email-Adresse im Quellsystem hinterlegen." },
        { name: "Priorität setzen", text: "Normal, Time-Sensitive oder Anruf auswählen." },
        { name: "Testen & starten", text: "Testevent senden und Zustellung prüfen." },
      ],
    },
    cta: {
      title: "Bereit, Ihren Workflow zu starten?",
      description: "Laden Sie Echobell herunter und verpassen Sie keine kritischen Signale mehr.",
      primary: "Loslegen",
      secondary: "Preise",
    },
  },
};

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
            <Link
              href={getAppStoreLink(["use-cases", "hero", lang])}
              target="_blank"
              className="hover:scale-105 transition-transform duration-200"
            >
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
                            href={link.href}
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
