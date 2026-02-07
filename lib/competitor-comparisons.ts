import { Language } from "@/lib/i18n";

type ComparisonLanguage = "en" | "zh";

export type CompetitorSlug =
  | "pagerduty"
  | "opsgenie"
  | "better-stack"
  | "pushover"
  | "ifttt";

export const competitorSlugs: CompetitorSlug[] = [
  "pagerduty",
  "opsgenie",
  "better-stack",
  "pushover",
  "ifttt",
];

export interface ComparisonItem {
  dimension: string;
  echobell: string;
  competitor: string;
  advantage: string;
}

export interface ComparisonBlockItem {
  title: string;
  description: string;
}

export interface ComparisonFaqItem {
  question: string;
  answer: string;
}

export interface ComparisonCardData {
  slug: CompetitorSlug;
  competitorName: string;
  tagline: string;
  summary: string;
  highlights: string[];
}

export interface ComparisonsIndexData {
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
  };
  cardsTitle: string;
  cardsDescription: string;
  cards: ComparisonCardData[];
  methodology: {
    title: string;
    description: string;
    items: ComparisonBlockItem[];
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

export interface ComparisonPageData {
  slug: CompetitorSlug;
  competitorName: string;
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
  quickSummary: string;
  decisionHint: string;
  atAGlance: Array<{
    label: string;
    echobell: string;
    competitor: string;
  }>;
  differences: {
    title: string;
    description: string;
    items: ComparisonItem[];
  };
  advantages: {
    title: string;
    description: string;
    items: ComparisonBlockItem[];
  };
  scenarios: {
    title: string;
    description: string;
    items: ComparisonBlockItem[];
  };
  migration: {
    title: string;
    description: string;
    steps: ComparisonBlockItem[];
  };
  faq: {
    title: string;
    items: ComparisonFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

function normalizeLang(lang: Language): ComparisonLanguage {
  return lang === "zh" ? "zh" : "en";
}

const indexData: Record<ComparisonLanguage, ComparisonsIndexData> = {
  en: {
    meta: {
      title: "Echobell vs Competitors",
      description:
        "Compare Echobell with PagerDuty, Opsgenie, Better Stack, Pushover, and IFTTT. See which tool fits fast mobile incident alerts best.",
      keywords: [
        "Echobell comparison",
        "Echobell vs PagerDuty",
        "Echobell vs Opsgenie",
        "Echobell alternatives",
        "mobile alerting tool",
      ],
    },
    hero: {
      badge: "Competitor Comparisons",
      title: "Pick the right alerting stack for your team",
      subtitle: "Direct, practical comparisons based on real alert workflows",
      description:
        "These pages compare Echobell with common alerting products by setup speed, on-call delivery style, privacy model, and team sharing flow.",
    },
    cardsTitle: "Popular comparisons",
    cardsDescription:
      "Each page focuses on where Echobell wins, where competitors are strong, and which team profile benefits most.",
    cards: [
      {
        slug: "pagerduty",
        competitorName: "PagerDuty",
        tagline: "Enterprise incident orchestration vs lightweight mobile-first alerts",
        summary:
          "PagerDuty is deep and process-heavy. Echobell is fast to launch and easier for small teams that need instant action.",
        highlights: [
          "Faster first setup with webhook + email triggers",
          "Cleaner mobile workflow for direct call/notification alerts",
          "Lower operational overhead for lean teams",
        ],
      },
      {
        slug: "opsgenie",
        competitorName: "Opsgenie",
        tagline: "Atlassian-centric incident routing vs focused instant notifications",
        summary:
          "Opsgenie fits Jira-heavy orgs. Echobell fits teams that prioritize immediate delivery with less configuration.",
        highlights: [
          "Less complexity for non-enterprise teams",
          "Quick channel sharing without schedule plumbing",
          "Clear signal path from trigger to phone",
        ],
      },
      {
        slug: "better-stack",
        competitorName: "Better Stack",
        tagline: "Monitoring suite breadth vs dedicated notification speed",
        summary:
          "Better Stack offers broad observability. Echobell specializes in fast, actionable mobile alerts with simple sharing.",
        highlights: [
          "Focused on alert delivery quality",
          "Webhook/email trigger flow with dynamic templates",
          "Strong fit for app teams that already have monitoring elsewhere",
        ],
      },
      {
        slug: "pushover",
        competitorName: "Pushover",
        tagline: "Basic push notifications vs richer incident-ready alert channels",
        summary:
          "Pushover is simple for push. Echobell adds call-style urgency, team channel distribution, and richer trigger handling.",
        highlights: [
          "Critical path support with phone-call style alerts",
          "Better structure for team subscriptions",
          "Modernized alert content and action context",
        ],
      },
      {
        slug: "ifttt",
        competitorName: "IFTTT",
        tagline: "General automation recipes vs reliability-oriented incident alerts",
        summary:
          "IFTTT is flexible automation. Echobell is purpose-built for dependable alerting where delivery speed and clarity matter.",
        highlights: [
          "Built for critical event handling",
          "Lower noise through dedicated alert channels",
          "Operational clarity for engineering and ops teams",
        ],
      },
    ],
    methodology: {
      title: "How we evaluate",
      description:
        "We score products on practical incident-response criteria, not just feature count.",
      items: [
        {
          title: "Setup-to-value time",
          description:
            "How quickly a team can move from zero to dependable production alerts.",
        },
        {
          title: "Alert urgency delivery",
          description:
            "Whether the tool supports high-priority paths like call-style alerts and time-sensitive notifications.",
        },
        {
          title: "Team operational overhead",
          description:
            "How much routing, policy, and workflow maintenance is required over time.",
        },
        {
          title: "Signal quality & context",
          description:
            "How clear each alert is when an on-call engineer receives it on mobile.",
        },
      ],
    },
    cta: {
      title: "Try Echobell with your current stack",
      description:
        "You can keep your existing monitoring tools and switch only the notification layer first.",
      primary: "Download Echobell",
      secondary: "Read setup docs",
    },
  },
  zh: {
    meta: {
      title: "Echobell 与竞品对比",
      description:
        "对比 Echobell 与 PagerDuty、Opsgenie、Better Stack、Pushover、IFTTT。快速了解哪个方案更适合高时效告警。",
      keywords: [
        "Echobell 竞品对比",
        "Echobell vs PagerDuty",
        "Echobell 替代方案",
        "移动告警工具",
      ],
    },
    hero: {
      badge: "竞品对比",
      title: "为团队选择更合适的告警方案",
      subtitle: "聚焦真实告警流程，而不是功能堆砌",
      description:
        "这些页面从搭建速度、通知到达方式、隐私模型、团队共享效率等维度，对 Echobell 与常见竞品进行直接对比。",
    },
    cardsTitle: "常见竞品对比",
    cardsDescription:
      "每个页面都会明确说明 Echobell 的优势、竞品的强项，以及分别适合什么团队。",
    cards: [
      {
        slug: "pagerduty",
        competitorName: "PagerDuty",
        tagline: "企业级事件编排 vs 轻量移动优先告警",
        summary:
          "PagerDuty 深度强但配置重。Echobell 上手更快，更适合希望马上获得高质量告警的小团队。",
        highlights: [
          "Webhook + 邮件触发可快速上线",
          "移动端直达告警流程更短",
          "日常维护成本更低",
        ],
      },
      {
        slug: "opsgenie",
        competitorName: "Opsgenie",
        tagline: "Atlassian 生态联动 vs 即时通知聚焦体验",
        summary:
          "Opsgenie 适合 Jira 深度流程组织。Echobell 适合追求更快触达和更低配置成本的团队。",
        highlights: [
          "对中小团队更友好",
          "频道共享更直接",
          "从触发到电话/通知路径更清晰",
        ],
      },
      {
        slug: "better-stack",
        competitorName: "Better Stack",
        tagline: "可观测平台广度 vs 告警触达深度",
        summary:
          "Better Stack 在监控广度上有优势。Echobell 专注在关键通知触达和团队订阅效率。",
        highlights: [
          "专注提升告警送达质量",
          "Webhook/邮件模板体验更直接",
          "适合已有监控系统的团队升级通知层",
        ],
      },
      {
        slug: "pushover",
        competitorName: "Pushover",
        tagline: "基础推送提醒 vs 面向故障响应的通知能力",
        summary:
          "Pushover 适合简单推送。Echobell 提供电话级提醒、团队订阅和更完整的告警结构。",
        highlights: [
          "支持高紧急度来电提醒",
          "团队订阅管理更规范",
          "告警信息可读性更强",
        ],
      },
      {
        slug: "ifttt",
        competitorName: "IFTTT",
        tagline: "通用自动化编排 vs 可靠告警交付",
        summary:
          "IFTTT 灵活但偏通用。Echobell 面向告警场景优化，强调稳定送达与处理效率。",
        highlights: [
          "以关键事件响应为核心",
          "专用频道降低噪音",
          "工程/运维协作链路更清楚",
        ],
      },
    ],
    methodology: {
      title: "对比方法",
      description:
        "我们使用真实值班场景下更有意义的标准，而不是只看功能数量。",
      items: [
        {
          title: "上线速度",
          description: "从零到生产可用告警，需要多少时间和配置步骤。",
        },
        {
          title: "告警紧急触达能力",
          description: "是否支持来电级别或时效性通知等高优先级触达路径。",
        },
        {
          title: "团队运维成本",
          description: "日常维护排班、策略和路由的复杂度有多高。",
        },
        {
          title: "告警上下文质量",
          description: "值班人员在手机上收到通知时，是否能快速判断并行动。",
        },
      ],
    },
    cta: {
      title: "先替换通知层，再逐步迁移",
      description:
        "你可以保留现有监控系统，先把通知触达切到 Echobell，低风险验证效果。",
      primary: "下载 Echobell",
      secondary: "阅读接入文档",
    },
  },
};

const comparisonPages: Record<
  CompetitorSlug,
  Record<ComparisonLanguage, ComparisonPageData>
> = {
  pagerduty: {
    en: {
      slug: "pagerduty",
      competitorName: "PagerDuty",
      meta: {
        title: "Echobell vs PagerDuty",
        description:
          "See how Echobell compares to PagerDuty for mobile-first incident alerts, setup speed, and day-to-day operational overhead.",
        keywords: [
          "Echobell vs PagerDuty",
          "PagerDuty alternative",
          "incident alerting comparison",
        ],
      },
      hero: {
        badge: "Echobell vs PagerDuty",
        title: "Fast mobile incident alerts without heavyweight onboarding",
        description:
          "PagerDuty is powerful for mature enterprise workflows. Echobell is optimized for teams that need high-urgency notifications and calls with faster setup.",
      },
      quickSummary:
        "If your primary goal is rapid, dependable incident notification on iPhone, Echobell usually gets teams to value faster.",
      decisionHint:
        "Choose Echobell when you want direct trigger-to-phone delivery with minimal policy overhead.",
      atAGlance: [
        {
          label: "Initial setup",
          echobell: "Minutes with webhook/email channel setup",
          competitor: "Often longer due to policy/escalation configuration",
        },
        {
          label: "Mobile response path",
          echobell: "Designed around immediate app + call-style alerts",
          competitor: "Powerful, but often tied to larger incident workflows",
        },
        {
          label: "Ongoing maintenance",
          echobell: "Lean channel-based management",
          competitor: "Can require regular policy and schedule tuning",
        },
      ],
      differences: {
        title: "Key differences",
        description:
          "Both products can alert teams. The main difference is operational complexity versus speed of execution.",
        items: [
          {
            dimension: "Primary design goal",
            echobell: "Fast, actionable mobile alerts",
            competitor: "Enterprise incident orchestration",
            advantage:
              "Echobell keeps the path from trigger to human response short.",
          },
          {
            dimension: "Notification urgency options",
            echobell: "Standard, time-sensitive, and call-style alerts",
            competitor: "Alerting through escalation and routing logic",
            advantage:
              "Echobell exposes urgent delivery options quickly without heavy setup.",
          },
          {
            dimension: "Team adoption speed",
            echobell: "Share channel links and subscribe quickly",
            competitor: "Usually needs broader workflow planning first",
            advantage:
              "Smaller teams can roll out Echobell without a process redesign.",
          },
          {
            dimension: "Privacy model",
            echobell: "Notification content/history stays on-device",
            competitor: "Broader platform data handling for incident workflows",
            advantage:
              "Echobell fits teams that want a privacy-first notification layer.",
          },
        ],
      },
      advantages: {
        title: "Where Echobell stands out",
        description:
          "Echobell focuses on first-response reliability and mobile clarity.",
        items: [
          {
            title: "Lower setup friction",
            description:
              "A channel, a trigger endpoint, and subscribers are usually enough to launch meaningful coverage.",
          },
          {
            title: "Better fit for lean teams",
            description:
              "You can deliver urgent alerts without building a full incident-command process first.",
          },
          {
            title: "Mobile-first signal quality",
            description:
              "Alerts are designed to be read and acted on quickly in real on-call situations.",
          },
        ],
      },
      scenarios: {
        title: "Best-fit scenarios",
        description:
          "Echobell is commonly preferred in these practical cases.",
        items: [
          {
            title: "Small engineering teams",
            description:
              "When one team handles app + infra and needs immediate incident awareness.",
          },
          {
            title: "Startup operations",
            description:
              "When velocity matters and process overhead must stay low.",
          },
          {
            title: "Notification-layer replacement",
            description:
              "When existing monitoring is fine, but incident notifications are too noisy or too slow.",
          },
        ],
      },
      migration: {
        title: "How to migrate from PagerDuty",
        description: "A low-risk incremental approach that teams use often.",
        steps: [
          {
            title: "Mirror one critical service first",
            description:
              "Send one production alert source into Echobell while keeping existing PagerDuty policies active.",
          },
          {
            title: "Compare incident response speed",
            description:
              "Measure acknowledge/start-response time over one to two weeks.",
          },
          {
            title: "Expand channel by channel",
            description:
              "Move high-value alert streams first, then retire redundant escalation paths.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Can Echobell replace all PagerDuty workflows?",
            answer:
              "Echobell is strongest as a focused notification layer. Some enterprise workflow automation may still remain in other systems.",
          },
          {
            question: "Can we run both tools together during transition?",
            answer:
              "Yes. Many teams run parallel delivery for critical channels before fully switching.",
          },
          {
            question: "Do we need to change all monitors first?",
            answer:
              "No. You can keep your existing monitoring stack and only reroute alert outputs.",
          },
        ],
      },
      cta: {
        title: "Validate with a real on-call week",
        description:
          "Pilot one production channel in Echobell and compare signal quality against your current incident flow.",
        primary: "Download Echobell",
        secondary: "Open docs",
      },
    },
    zh: {
      slug: "pagerduty",
      competitorName: "PagerDuty",
      meta: {
        title: "Echobell vs PagerDuty",
        description:
          "对比 Echobell 与 PagerDuty 在移动告警、部署速度和日常维护成本上的差异，帮助团队快速选型。",
        keywords: [
          "Echobell vs PagerDuty",
          "PagerDuty 替代",
          "告警系统对比",
        ],
      },
      hero: {
        badge: "Echobell vs PagerDuty",
        title: "更快上线的移动故障告警体验",
        description:
          "PagerDuty 适合复杂企业级流程。Echobell 更适合希望以更少配置快速获得高紧急度通知与来电提醒的团队。",
      },
      quickSummary:
        "如果你的核心目标是在 iPhone 上稳定、快速接收关键故障告警，Echobell 通常能更快产生价值。",
      decisionHint: "当你希望降低策略编排成本并缩短响应链路时，优先考虑 Echobell。",
      atAGlance: [
        {
          label: "初始上线",
          echobell: "通过 webhook/邮件频道可在数分钟完成",
          competitor: "通常需配置更多策略与升级规则",
        },
        {
          label: "移动端响应路径",
          echobell: "围绕即时通知与来电提醒设计",
          competitor: "能力全面，但常绑定更复杂流程",
        },
        {
          label: "持续维护成本",
          echobell: "频道级管理，维护较轻",
          competitor: "需要持续维护排班与策略",
        },
      ],
      differences: {
        title: "核心差异",
        description: "两者都能告警，主要差别在于复杂度与落地效率。",
        items: [
          {
            dimension: "产品重心",
            echobell: "移动端高时效告警触达",
            competitor: "企业级事件编排",
            advantage: "Echobell 将“触发到处理人”路径压缩得更短。",
          },
          {
            dimension: "紧急通知方式",
            echobell: "标准通知、时效通知、来电提醒",
            competitor: "依赖更完整的升级/路由机制",
            advantage: "Echobell 可更快启用高优先级触达。",
          },
          {
            dimension: "团队落地速度",
            echobell: "分享频道链接即可快速订阅",
            competitor: "一般需要先规划完整流程",
            advantage: "中小团队可在不重构流程的情况下快速上线。",
          },
          {
            dimension: "隐私模型",
            echobell: "通知内容和历史优先保留在本地设备",
            competitor: "围绕平台化事件流程处理更多数据",
            advantage: "Echobell 更适合作为隐私优先的通知层。",
          },
        ],
      },
      advantages: {
        title: "Echobell 的优势",
        description: "重点提升第一时间响应的确定性与移动可操作性。",
        items: [
          {
            title: "接入门槛低",
            description: "创建频道、配置触发地址、添加订阅者即可形成闭环。",
          },
          {
            title: "更适合精简团队",
            description: "不依赖重型流程，也能建立高紧急度告警能力。",
          },
          {
            title: "移动端信息质量更高",
            description: "告警结构清晰，值班人员可更快判断并行动。",
          },
        ],
      },
      scenarios: {
        title: "适用场景",
        description: "以下场景中，团队通常会优先选择 Echobell。",
        items: [
          {
            title: "小团队值班",
            description: "研发兼顾应用与基础设施，需要高时效、低维护的告警。",
          },
          {
            title: "创业团队高速迭代",
            description: "强调上线速度，不希望被复杂流程拖慢。",
          },
          {
            title: "仅替换通知层",
            description: "保留现有监控系统，仅升级通知触达链路。",
          },
        ],
      },
      migration: {
        title: "从 PagerDuty 迁移建议",
        description: "采用低风险渐进迁移，便于量化效果。",
        steps: [
          {
            title: "先镜像一个关键服务",
            description:
              "保持原策略不变，同时把一个生产告警源并行接入 Echobell。",
          },
          {
            title: "对比响应指标",
            description: "在 1-2 周内比较确认时间与实际处理启动时间。",
          },
          {
            title: "按频道逐步迁移",
            description: "先迁高价值告警，再下线重复的升级路径。",
          },
        ],
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "Echobell 能完全替代 PagerDuty 吗？",
            answer:
              "Echobell 最强项是通知触达层。部分企业流程自动化能力可按需保留在现有系统中。",
          },
          {
            question: "迁移期间可以并行使用吗？",
            answer: "可以。很多团队都会先对关键频道并行运行再切换。",
          },
          {
            question: "需要先改造所有监控系统吗？",
            answer: "不需要。通常只需先改告警输出目标即可。",
          },
        ],
      },
      cta: {
        title: "用真实值班周验证效果",
        description: "先试点一个生产频道，对比信号质量与响应效率。",
        primary: "下载 Echobell",
        secondary: "查看文档",
      },
    },
  },
  opsgenie: {
    en: {
      slug: "opsgenie",
      competitorName: "Opsgenie",
      meta: {
        title: "Echobell vs Opsgenie",
        description:
          "Compare Echobell and Opsgenie for alert delivery speed, operational overhead, and mobile-first reliability.",
        keywords: [
          "Echobell vs Opsgenie",
          "Opsgenie alternative",
          "on-call alerting",
        ],
      },
      hero: {
        badge: "Echobell vs Opsgenie",
        title: "Faster mobile alert execution with less routing complexity",
        description:
          "Opsgenie is strong in Atlassian-heavy process ecosystems. Echobell is focused on quick deployment and high-urgency notifications.",
      },
      quickSummary:
        "When teams need immediate alert delivery more than deep workflow orchestration, Echobell is often the simpler win.",
      decisionHint:
        "Choose Echobell for rapid setup, transparent signal paths, and lower cognitive load for responders.",
      atAGlance: [
        {
          label: "Workflow complexity",
          echobell: "Channel-centric, easy to reason about",
          competitor: "Can involve layered routing and escalation setup",
        },
        {
          label: "Responder UX",
          echobell: "Clear mobile-first alert presentation",
          competitor: "Strong capabilities, but may require deeper process context",
        },
        {
          label: "Time to first value",
          echobell: "Short path from trigger to production usage",
          competitor: "Often longer in larger policy-driven environments",
        },
      ],
      differences: {
        title: "Key differences",
        description:
          "Opsgenie emphasizes process-rich incident routing. Echobell emphasizes direct delivery and response speed.",
        items: [
          {
            dimension: "Best organizational fit",
            echobell: "Lean teams with high urgency alerts",
            competitor: "Teams with mature enterprise workflow dependencies",
            advantage:
              "Echobell reduces operational setup for teams that move fast.",
          },
          {
            dimension: "Alert channel setup",
            echobell: "Webhook and email triggers per channel",
            competitor: "Broader rule configurations and integration layers",
            advantage:
              "Echobell minimizes steps between source events and notifications.",
          },
          {
            dimension: "Notification urgency controls",
            echobell: "Built-in standard/time-sensitive/call-style options",
            competitor: "Configured through broader incident policies",
            advantage:
              "Echobell provides direct urgency mapping on day one.",
          },
          {
            dimension: "Team onboarding",
            echobell: "Simple channel sharing and subscription flow",
            competitor: "Can require process education and policy mapping",
            advantage:
              "Echobell accelerates cross-team adoption during early rollout.",
          },
        ],
      },
      advantages: {
        title: "Where Echobell wins",
        description:
          "The product is purpose-built for fast, clear, and actionable notifications.",
        items: [
          {
            title: "Direct operational clarity",
            description:
              "Responders quickly understand alert intent without navigating heavy incident metadata.",
          },
          {
            title: "Rapid pilot capability",
            description:
              "Teams can test real production behavior in days, not months.",
          },
          {
            title: "Strong mobile execution",
            description:
              "The app and channel model are optimized for immediate action.",
          },
        ],
      },
      scenarios: {
        title: "Best-fit scenarios",
        description: "Echobell is a strong choice in these situations.",
        items: [
          {
            title: "Cross-functional startup teams",
            description:
              "Where engineers and operators both need simple, urgent notifications.",
          },
          {
            title: "Teams modernizing alert delivery",
            description:
              "Where current tooling exists but notification reliability is inconsistent.",
          },
          {
            title: "High-noise environments",
            description:
              "Where focused channel segmentation is needed to improve signal-to-noise.",
          },
        ],
      },
      migration: {
        title: "How to move from Opsgenie",
        description: "Keep changes controlled and measurable.",
        steps: [
          {
            title: "Start with one team-owned channel",
            description:
              "Choose a service with clear ownership and stable alert sources.",
          },
          {
            title: "Align urgency levels",
            description:
              "Map current priority tiers into Echobell notification modes.",
          },
          {
            title: "Replace routing in phases",
            description:
              "Cut over high-confidence channels first, then reduce legacy routing complexity.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Does Echobell support teams beyond engineering?",
            answer:
              "Yes. Any team that needs fast mobile alerts can use shared channels and structured templates.",
          },
          {
            question: "Can we keep existing Atlassian workflows?",
            answer:
              "Yes. Teams often keep workflow systems and swap in Echobell as the delivery layer.",
          },
          {
            question: "Is migration all-or-nothing?",
            answer:
              "No. Channel-by-channel migration works well and limits risk.",
          },
        ],
      },
      cta: {
        title: "Run a controlled migration pilot",
        description:
          "Use one production channel to validate faster delivery and clearer responder context.",
        primary: "Download Echobell",
        secondary: "Open docs",
      },
    },
    zh: {
      slug: "opsgenie",
      competitorName: "Opsgenie",
      meta: {
        title: "Echobell vs Opsgenie",
        description:
          "对比 Echobell 与 Opsgenie 在告警触达速度、配置复杂度和移动端响应体验方面的差异。",
        keywords: ["Echobell vs Opsgenie", "Opsgenie 替代", "值班告警对比"],
      },
      hero: {
        badge: "Echobell vs Opsgenie",
        title: "以更低路由复杂度实现更快告警执行",
        description:
          "Opsgenie 在流程化编排方面更强。Echobell 更聚焦于快速部署和高紧急度通知触达。",
      },
      quickSummary:
        "当团队更看重“第一时间通知到人”而不是复杂流程编排时，Echobell 通常更直接。",
      decisionHint: "如果希望更低认知负担、更短配置链路，可优先选择 Echobell。",
      atAGlance: [
        {
          label: "流程复杂度",
          echobell: "频道模型直观，易理解",
          competitor: "可能涉及多层路由和升级规则",
        },
        {
          label: "响应者体验",
          echobell: "移动端告警上下文清晰",
          competitor: "能力强，但常依赖流程背景",
        },
        {
          label: "首次见效时间",
          echobell: "从触发到生产使用路径更短",
          competitor: "在策略驱动场景中通常更久",
        },
      ],
      differences: {
        title: "核心差异",
        description:
          "Opsgenie 偏向流程丰富的事件路由，Echobell 偏向直接触达与响应速度。",
        items: [
          {
            dimension: "组织适配",
            echobell: "追求高时效与低维护的精简团队",
            competitor: "依赖企业级流程编排的团队",
            advantage: "Echobell 降低了落地门槛和维护负担。",
          },
          {
            dimension: "告警接入方式",
            echobell: "按频道配置 webhook 与邮件触发",
            competitor: "常见更多规则层与集成层",
            advantage: "Echobell 缩短了事件到通知的链路。",
          },
          {
            dimension: "紧急通知控制",
            echobell: "内建标准/时效/来电提醒",
            competitor: "更多依赖事件策略配置",
            advantage: "Echobell 在上线初期就能明确映射紧急等级。",
          },
          {
            dimension: "团队上手",
            echobell: "链接共享后即可快速订阅",
            competitor: "常需流程培训与策略映射",
            advantage: "Echobell 更利于跨团队快速推广。",
          },
        ],
      },
      advantages: {
        title: "Echobell 优势",
        description: "产品设计目标就是更快、更清晰、更可执行的通知。",
        items: [
          {
            title: "运维路径透明",
            description: "响应者无需解析复杂元数据即可理解告警意图。",
          },
          {
            title: "可快速试点",
            description: "通常几天内就可以用真实生产流量验证效果。",
          },
          {
            title: "移动端执行力强",
            description: "App 与频道模型围绕“立即处理”而优化。",
          },
        ],
      },
      scenarios: {
        title: "适用场景",
        description: "以下场景中 Echobell 往往更有优势。",
        items: [
          {
            title: "跨职能小团队",
            description: "研发与运维都需要低门槛高时效告警。",
          },
          {
            title: "升级通知层",
            description: "保留原系统，仅提升通知可靠性与可读性。",
          },
          {
            title: "高噪音告警环境",
            description: "需要通过频道分层提升信噪比。",
          },
        ],
      },
      migration: {
        title: "从 Opsgenie 迁移建议",
        description: "按阶段迁移，保持可观测与可回滚。",
        steps: [
          {
            title: "先选一个团队自主管理频道",
            description: "优先迁移归属明确、告警来源稳定的服务。",
          },
          {
            title: "映射紧急等级",
            description: "将现有优先级映射到 Echobell 的通知模式。",
          },
          {
            title: "分批替换路由",
            description: "先迁移高信心频道，再逐步简化旧规则。",
          },
        ],
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "Echobell 只适合研发团队吗？",
            answer: "不是。任何需要高时效移动告警的团队都可以使用。",
          },
          {
            question: "能否保留原有 Atlassian 流程？",
            answer: "可以。很多团队保留流程系统，只替换通知送达层。",
          },
          {
            question: "迁移必须一次完成吗？",
            answer: "不需要。按频道迁移是更稳妥的方式。",
          },
        ],
      },
      cta: {
        title: "先跑一个可控试点",
        description: "用一个生产频道验证更快触达与更清晰的响应上下文。",
        primary: "下载 Echobell",
        secondary: "查看文档",
      },
    },
  },
  "better-stack": {
    en: {
      slug: "better-stack",
      competitorName: "Better Stack",
      meta: {
        title: "Echobell vs Better Stack",
        description:
          "Compare Echobell with Better Stack for focused incident notification delivery versus broad observability platform coverage.",
        keywords: [
          "Echobell vs Better Stack",
          "Better Stack alternative",
          "notification delivery",
        ],
      },
      hero: {
        badge: "Echobell vs Better Stack",
        title: "Dedicated notification speed vs broad observability coverage",
        description:
          "Better Stack provides broad monitoring and status capabilities. Echobell specializes in getting critical alerts to humans quickly and clearly.",
      },
      quickSummary:
        "If you already have monitoring and want a stronger notification layer, Echobell is often the higher-leverage addition.",
      decisionHint:
        "Choose Echobell when alert delivery quality is your bottleneck, not data collection.",
      atAGlance: [
        {
          label: "Product scope",
          echobell: "Focused notification and alert delivery",
          competitor: "Wider observability and incident toolset",
        },
        {
          label: "Implementation objective",
          echobell: "Improve response speed and clarity fast",
          competitor: "Build unified monitoring + incident workflows",
        },
        {
          label: "Operational role",
          echobell: "Notification execution layer",
          competitor: "Monitoring + incident operations platform",
        },
      ],
      differences: {
        title: "Key differences",
        description:
          "The products are complementary in many stacks, but they optimize for different priorities.",
        items: [
          {
            dimension: "Core problem solved",
            echobell: "Critical event notification reliability",
            competitor: "End-to-end observability breadth",
            advantage:
              "Echobell is purpose-built for high-speed delivery to responders.",
          },
          {
            dimension: "Alert urgency execution",
            echobell: "Direct mode selection per channel",
            competitor: "Configured within broader monitoring workflows",
            advantage:
              "Echobell makes urgency handling easier to control per team.",
          },
          {
            dimension: "Team adoption curve",
            echobell: "Simple for teams replacing only notification paths",
            competitor: "Broader scope may require longer alignment",
            advantage:
              "Echobell can be deployed without re-platforming everything.",
          },
          {
            dimension: "Data privacy posture",
            echobell: "Notification content/history kept on-device",
            competitor: "Platform-scale telemetry and incident datasets",
            advantage:
              "Echobell aligns with teams that want minimal alert-content retention.",
          },
        ],
      },
      advantages: {
        title: "Where Echobell shines",
        description:
          "Echobell is strong as a high-quality last-mile alerting layer.",
        items: [
          {
            title: "Faster responder engagement",
            description:
              "Critical alerts are optimized for immediate acknowledgment and action.",
          },
          {
            title: "Low-risk deployment",
            description:
              "Keep existing monitoring and switch only alert outputs first.",
          },
          {
            title: "Better signal segmentation",
            description:
              "Channel-level organization helps teams reduce notification noise.",
          },
        ],
      },
      scenarios: {
        title: "Best-fit scenarios",
        description:
          "These teams commonly choose Echobell in parallel with observability tooling.",
        items: [
          {
            title: "Teams with mature monitoring",
            description:
              "Metrics and logs are fine, but alert delivery outcomes still need improvement.",
          },
          {
            title: "Incident-prone products",
            description:
              "Where seconds matter and clear escalation channels are required.",
          },
          {
            title: "Cross-region operations",
            description:
              "Where shared channels simplify team-wide alert awareness.",
          },
        ],
      },
      migration: {
        title: "How to introduce Echobell",
        description:
          "Treat it as a notification upgrade on top of existing observability.",
        steps: [
          {
            title: "Pick top 5 critical alerts",
            description:
              "Route only high-impact signals first to benchmark delivery quality.",
          },
          {
            title: "Tune templates and urgency modes",
            description:
              "Make each alert concise, actionable, and mapped to the right urgency.",
          },
          {
            title: "Expand to shared team channels",
            description:
              "Use channel subscriptions to align engineering, ops, and incident managers.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Can Echobell be used together with Better Stack?",
            answer:
              "Yes. Many teams keep their observability stack and use Echobell as the dedicated notification delivery layer.",
          },
          {
            question: "Will this duplicate monitoring costs?",
            answer:
              "Not necessarily. Echobell can focus on notification quality while existing tools keep monitoring responsibilities.",
          },
          {
            question: "Is this only for infrastructure alerts?",
            answer:
              "No. Product, business, and security alerts can use the same channel model.",
          },
        ],
      },
      cta: {
        title: "Upgrade alert outcomes, not your whole stack",
        description:
          "Pilot Echobell on your highest-severity alerts and compare real responder behavior.",
        primary: "Download Echobell",
        secondary: "Open docs",
      },
    },
    zh: {
      slug: "better-stack",
      competitorName: "Better Stack",
      meta: {
        title: "Echobell vs Better Stack",
        description:
          "对比 Echobell 与 Better Stack：一个专注通知触达效率，一个强调可观测平台广度，帮助团队更清晰选型。",
        keywords: ["Echobell vs Better Stack", "Better Stack 替代", "通知层升级"],
      },
      hero: {
        badge: "Echobell vs Better Stack",
        title: "告警触达深度 vs 平台能力广度",
        description:
          "Better Stack 在监控与状态页能力上更全面。Echobell 专注把关键告警更快、更清晰地送达到处理人。",
      },
      quickSummary:
        "如果你已有监控体系，当前短板在“通知触达质量”，Echobell 往往是更高杠杆的改进点。",
      decisionHint: "当瓶颈在告警响应效率而非数据采集时，优先选择 Echobell。",
      atAGlance: [
        {
          label: "产品范围",
          echobell: "聚焦通知与告警触达",
          competitor: "覆盖更广的可观测与事件能力",
        },
        {
          label: "上线目标",
          echobell: "快速提升响应速度和清晰度",
          competitor: "构建统一监控+事件体系",
        },
        {
          label: "系统角色",
          echobell: "通知执行层",
          competitor: "监控与事件运营平台",
        },
      ],
      differences: {
        title: "核心差异",
        description: "两者在不少架构中可互补，但优化重点不同。",
        items: [
          {
            dimension: "核心解决问题",
            echobell: "关键事件通知可靠触达",
            competitor: "端到端可观测能力广度",
            advantage: "Echobell 专为响应者高时效触达设计。",
          },
          {
            dimension: "紧急度执行",
            echobell: "按频道直接选择通知模式",
            competitor: "通常在更大监控流程内配置",
            advantage: "Echobell 更容易按团队精细控制触达策略。",
          },
          {
            dimension: "团队落地曲线",
            echobell: "仅替换通知路径时上手更快",
            competitor: "范围更广，协同成本可能更高",
            advantage: "Echobell 无需整体重构即可落地。",
          },
          {
            dimension: "隐私姿态",
            echobell: "通知内容与历史优先保留本地",
            competitor: "平台化遥测与事件数据处理更重",
            advantage: "Echobell 更适合追求最小化通知内容留存的团队。",
          },
        ],
      },
      advantages: {
        title: "Echobell 优势",
        description: "作为通知最后一公里，Echobell 能显著提升响应结果。",
        items: [
          {
            title: "更快拉起响应",
            description: "高优先级告警可更快触达并触发实际处理动作。",
          },
          {
            title: "低风险部署",
            description: "保留原监控系统，先替换通知输出目标即可。",
          },
          {
            title: "更好的信号分层",
            description: "频道级组织降低噪音，提升值班人员判断效率。",
          },
        ],
      },
      scenarios: {
        title: "适用场景",
        description: "以下团队常将 Echobell 作为可观测体系的通知升级层。",
        items: [
          {
            title: "监控体系成熟但响应慢",
            description: "指标/日志齐全，但通知效果不理想。",
          },
          {
            title: "高故障敏感业务",
            description: "秒级响应很关键，需要稳定紧急通知路径。",
          },
          {
            title: "跨地域协作团队",
            description: "通过共享频道提升全团队故障可见性。",
          },
        ],
      },
      migration: {
        title: "引入 Echobell 的建议",
        description: "把它当作通知层升级，而不是平台重建。",
        steps: [
          {
            title: "先选 5 条最高价值告警",
            description: "只迁高影响信号，先验证触达质量提升。",
          },
          {
            title: "优化模板与紧急模式",
            description: "让每条告警足够简洁、可执行、优先级明确。",
          },
          {
            title: "扩展到团队共享频道",
            description: "让研发、运维、值班负责人在同一信号面板下协作。",
          },
        ],
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "Echobell 可以和 Better Stack 一起用吗？",
            answer: "可以。很多团队保留可观测平台，同时用 Echobell 做专用通知层。",
          },
          {
            question: "会不会造成监控能力重复投入？",
            answer: "通常不会。Echobell 负责通知结果，原平台继续负责监控采集。",
          },
          {
            question: "只能用于基础设施告警吗？",
            answer: "不是。产品、业务和安全告警都可以使用同一频道模型。",
          },
        ],
      },
      cta: {
        title: "先升级告警结果，再决定平台策略",
        description: "用最高严重度告警做试点，观察真实响应行为变化。",
        primary: "下载 Echobell",
        secondary: "查看文档",
      },
    },
  },
  pushover: {
    en: {
      slug: "pushover",
      competitorName: "Pushover",
      meta: {
        title: "Echobell vs Pushover",
        description:
          "Compare Echobell and Pushover for team-ready critical alerts, call-style urgency, and structured notification workflows.",
        keywords: [
          "Echobell vs Pushover",
          "Pushover alternative",
          "critical mobile alerts",
        ],
      },
      hero: {
        badge: "Echobell vs Pushover",
        title: "From basic push to incident-ready alert delivery",
        description:
          "Pushover is straightforward for simple pushes. Echobell adds stronger urgency modes, channel sharing, and workflow clarity for incident response.",
      },
      quickSummary:
        "For personal push usage, Pushover can be enough. For team incident operations, Echobell is usually the better fit.",
      decisionHint:
        "Choose Echobell when alerts need ownership, urgency control, and team distribution.",
      atAGlance: [
        {
          label: "Primary use case",
          echobell: "Team-based incident and service alerts",
          competitor: "General push notifications",
        },
        {
          label: "Urgency capabilities",
          echobell: "Includes call-style and time-sensitive modes",
          competitor: "Push-focused notification model",
        },
        {
          label: "Team collaboration",
          echobell: "Channel subscription and sharing workflows",
          competitor: "Simpler individual notification usage",
        },
      ],
      differences: {
        title: "Key differences",
        description:
          "The biggest gap is team incident readiness versus simple push delivery.",
        items: [
          {
            dimension: "Alerting depth",
            echobell: "Structured alert channels with trigger context",
            competitor: "Lightweight push messaging",
            advantage:
              "Echobell scales better when multiple responders share ownership.",
          },
          {
            dimension: "Urgent escalation style",
            echobell: "Call-like path for high-criticality events",
            competitor: "Push-centric with limited escalation context",
            advantage:
              "Echobell improves wake-up reliability for severe incidents.",
          },
          {
            dimension: "Operational organization",
            echobell: "Service-based channel grouping",
            competitor: "Simpler per-app/per-user patterns",
            advantage:
              "Echobell makes alerts easier to triage across teams.",
          },
          {
            dimension: "Automation inputs",
            echobell: "Webhook + email triggers with templates",
            competitor: "Push API-centric integration patterns",
            advantage:
              "Echobell supports diverse alert sources with cleaner payload rendering.",
          },
        ],
      },
      advantages: {
        title: "Where Echobell wins",
        description:
          "Echobell is designed for teams that treat alerts as operational infrastructure.",
        items: [
          {
            title: "Team-first design",
            description:
              "Shared channel subscriptions align responders around service ownership.",
          },
          {
            title: "More actionable notifications",
            description:
              "Template-driven context helps responders diagnose faster.",
          },
          {
            title: "Higher critical-event reliability",
            description:
              "Urgency modes and call-style alerts improve visibility during incidents.",
          },
        ],
      },
      scenarios: {
        title: "Best-fit scenarios",
        description: "Echobell is preferred when notifications are mission-critical.",
        items: [
          {
            title: "Production incident handling",
            description:
              "When missed or delayed alerts have immediate user or revenue impact.",
          },
          {
            title: "Team-shared service ownership",
            description:
              "When more than one responder needs consistent channel context.",
          },
          {
            title: "Multi-source alert pipelines",
            description:
              "When alerts come from webhooks, emails, and multiple automation systems.",
          },
        ],
      },
      migration: {
        title: "Migration from Pushover",
        description:
          "Transition in waves to preserve continuity and reduce disruption.",
        steps: [
          {
            title: "Create service channels in Echobell",
            description:
              "Model channels by incident domain (API, payments, infra, security).",
          },
          {
            title: "Move high-severity alerts first",
            description:
              "Route only critical pushes to Echobell and compare responder behavior.",
          },
          {
            title: "Expand with template-based context",
            description:
              "Add structured payload fields to improve actionability.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Is Echobell overkill for personal alerts?",
            answer:
              "If your use case is simple personal pushes, you may not need all Echobell features.",
          },
          {
            question: "Can we keep existing push flows during migration?",
            answer:
              "Yes. Run parallel channels while teams validate urgency and reliability gains.",
          },
          {
            question: "Does Echobell support webhook-based sources?",
            answer:
              "Yes. Webhook and email triggers are core integration paths.",
          },
        ],
      },
      cta: {
        title: "Move from simple push to operational alerting",
        description:
          "Test one high-severity service in Echobell and evaluate responder speed.",
        primary: "Download Echobell",
        secondary: "Open docs",
      },
    },
    zh: {
      slug: "pushover",
      competitorName: "Pushover",
      meta: {
        title: "Echobell vs Pushover",
        description:
          "对比 Echobell 与 Pushover 在团队协作、紧急触达和告警结构化方面的差异，判断哪个更适合故障响应场景。",
        keywords: ["Echobell vs Pushover", "Pushover 替代", "关键告警通知"],
      },
      hero: {
        badge: "Echobell vs Pushover",
        title: "从基础推送升级到故障响应级通知",
        description:
          "Pushover 适合简单推送。Echobell 提供更强紧急度能力、频道共享和更清晰的故障响应工作流。",
      },
      quickSummary:
        "个人推送场景下 Pushover 可能够用；团队故障响应场景下，Echobell 通常更合适。",
      decisionHint: "当告警需要可分配、可升级、可协作时，优先考虑 Echobell。",
      atAGlance: [
        {
          label: "核心场景",
          echobell: "团队级故障与服务告警",
          competitor: "通用推送通知",
        },
        {
          label: "紧急触达能力",
          echobell: "支持时效通知与来电提醒",
          competitor: "以推送模型为主",
        },
        {
          label: "团队协作",
          echobell: "频道订阅与共享流程完整",
          competitor: "更偏个人使用路径",
        },
      ],
      differences: {
        title: "核心差异",
        description: "最大差异在于团队故障响应能力，而不仅是推送送达。",
        items: [
          {
            dimension: "告警深度",
            echobell: "带触发上下文的结构化频道告警",
            competitor: "轻量推送消息",
            advantage: "Echobell 更适合多人协作值班。",
          },
          {
            dimension: "高紧急事件触达",
            echobell: "支持来电式高优先级路径",
            competitor: "以推送为主，升级语义较弱",
            advantage: "Echobell 在严重故障中更容易唤醒处理人。",
          },
          {
            dimension: "运营组织方式",
            echobell: "按服务分层管理频道",
            competitor: "偏应用/个人粒度",
            advantage: "Echobell 更利于跨团队分流与排障。",
          },
          {
            dimension: "自动化输入",
            echobell: "Webhook + 邮件触发 + 模板",
            competitor: "更偏 API 推送模式",
            advantage: "Echobell 适配更多来源并保持内容可读性。",
          },
        ],
      },
      advantages: {
        title: "Echobell 优势",
        description: "Echobell 把告警当作团队级运营基础设施来设计。",
        items: [
          {
            title: "团队优先模型",
            description: "共享频道订阅让责任边界更清晰。",
          },
          {
            title: "通知更可执行",
            description: "模板化上下文帮助值班人员更快定位问题。",
          },
          {
            title: "关键事件可靠性更高",
            description: "紧急模式与来电提醒提升故障期间可见性。",
          },
        ],
      },
      scenarios: {
        title: "适用场景",
        description: "当通知具备业务关键性时，Echobell 更有优势。",
        items: [
          {
            title: "生产故障处理",
            description: "错过告警会直接影响用户体验或业务收入。",
          },
          {
            title: "服务归属由团队共享",
            description: "多个响应者需要统一上下文与订阅机制。",
          },
          {
            title: "多来源告警管道",
            description: "告警来自 webhook、邮件和多种自动化系统。",
          },
        ],
      },
      migration: {
        title: "从 Pushover 迁移建议",
        description: "分波次迁移，保证连续性并降低扰动。",
        steps: [
          {
            title: "先建立服务频道",
            description: "按 API、支付、基础设施、安全等域划分频道。",
          },
          {
            title: "先迁高严重度告警",
            description: "先对关键告警并行验证触达和响应效率。",
          },
          {
            title: "补齐模板上下文",
            description: "逐步加入结构化字段提升可执行性。",
          },
        ],
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "Echobell 对个人推送场景会不会太重？",
            answer: "如果只是简单个人推送，未必需要 Echobell 的全部能力。",
          },
          {
            question: "迁移时可以保留原推送链路吗？",
            answer: "可以。建议并行运行一段时间后再切换。",
          },
          {
            question: "Echobell 支持 webhook 来源吗？",
            answer: "支持，Webhook 和邮件触发都是核心接入方式。",
          },
        ],
      },
      cta: {
        title: "从“能推送”升级到“能响应”",
        description: "先在一个高严重度服务上试点，验证响应速度提升。",
        primary: "下载 Echobell",
        secondary: "查看文档",
      },
    },
  },
  ifttt: {
    en: {
      slug: "ifttt",
      competitorName: "IFTTT",
      meta: {
        title: "Echobell vs IFTTT",
        description:
          "Compare Echobell and IFTTT for critical alert reliability, delivery urgency, and team incident response readiness.",
        keywords: ["Echobell vs IFTTT", "IFTTT alternative", "incident alerting"],
      },
      hero: {
        badge: "Echobell vs IFTTT",
        title: "Reliability-focused incident alerting vs general automation",
        description:
          "IFTTT is a broad automation platform. Echobell is purpose-built for dependable, urgent alert delivery to responders.",
      },
      quickSummary:
        "Use IFTTT for broad app automation. Use Echobell when alert delivery speed, urgency, and responder clarity are non-negotiable.",
      decisionHint:
        "Choose Echobell when missed alerts are expensive and team response discipline matters.",
      atAGlance: [
        {
          label: "Core function",
          echobell: "Critical notification delivery for teams",
          competitor: "General trigger-action automation",
        },
        {
          label: "Incident urgency support",
          echobell: "Built-in urgent modes including call-style alerts",
          competitor: "General notification actions with broader use cases",
        },
        {
          label: "Operational governance",
          echobell: "Channel-based service ownership patterns",
          competitor: "Recipe-style automations across many domains",
        },
      ],
      differences: {
        title: "Key differences",
        description:
          "The platforms optimize for very different jobs in modern teams.",
        items: [
          {
            dimension: "Optimization target",
            echobell: "Incident response speed and reliability",
            competitor: "Cross-service automation flexibility",
            advantage:
              "Echobell prioritizes alert outcomes over automation breadth.",
          },
          {
            dimension: "Signal quality controls",
            echobell: "Structured templates and service channels",
            competitor: "Applets designed for broad trigger-action patterns",
            advantage:
              "Echobell improves message clarity during high-pressure incidents.",
          },
          {
            dimension: "Responder experience",
            echobell: "Mobile-first and urgency-aware",
            competitor: "General-purpose action routing",
            advantage:
              "Echobell reduces delay and ambiguity for on-call teams.",
          },
          {
            dimension: "Team scaling",
            echobell: "Built around shared incident channels",
            competitor: "Automation-centric user workflows",
            advantage:
              "Echobell aligns better with service ownership models.",
          },
        ],
      },
      advantages: {
        title: "Where Echobell is stronger",
        description:
          "For teams managing production systems, Echobell delivers clearer operational value.",
        items: [
          {
            title: "Incident-first architecture",
            description:
              "Designed to reduce missed, delayed, and unclear critical alerts.",
          },
          {
            title: "Higher urgency confidence",
            description:
              "Time-sensitive and call-style options increase response reliability.",
          },
          {
            title: "Team-ready channel model",
            description:
              "Shared subscriptions improve coverage during shifts and handoffs.",
          },
        ],
      },
      scenarios: {
        title: "Best-fit scenarios",
        description:
          "Echobell is favored when alerts are part of production risk management.",
        items: [
          {
            title: "SRE and on-call rotations",
            description:
              "Where clear, immediate alerts are required for service continuity.",
          },
          {
            title: "Revenue-critical services",
            description:
              "Where delay in notification can create direct financial impact.",
          },
          {
            title: "Security and compliance alerting",
            description:
              "Where urgent and trackable delivery pathways are required.",
          },
        ],
      },
      migration: {
        title: "Move from IFTTT-style alerting",
        description: "Decouple automation logic from critical alert delivery.",
        steps: [
          {
            title: "Keep app automation where it works",
            description:
              "Leave non-critical applets in place and extract only incident alerts first.",
          },
          {
            title: "Map critical triggers to Echobell channels",
            description:
              "Create one channel per service domain and route high-priority events.",
          },
          {
            title: "Apply urgency and template standards",
            description:
              "Standardize payload context so alerts stay actionable under pressure.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Can I still use IFTTT together with Echobell?",
            answer:
              "Yes. Use IFTTT for broad automation and Echobell for mission-critical alert delivery.",
          },
          {
            question: "Is Echobell only for infrastructure teams?",
            answer:
              "No. Product, support, operations, and security teams can all use channel-based alerts.",
          },
          {
            question: "How quickly can we validate value?",
            answer:
              "Most teams can validate on one critical channel within a few days.",
          },
        ],
      },
      cta: {
        title: "Keep automation broad, make alerts dependable",
        description:
          "Pilot Echobell on your highest-risk service notifications this week.",
        primary: "Download Echobell",
        secondary: "Open docs",
      },
    },
    zh: {
      slug: "ifttt",
      competitorName: "IFTTT",
      meta: {
        title: "Echobell vs IFTTT",
        description:
          "对比 Echobell 与 IFTTT 在关键告警可靠性、紧急触达和团队响应准备度方面的差异。",
        keywords: ["Echobell vs IFTTT", "IFTTT 替代", "值班告警系统"],
      },
      hero: {
        badge: "Echobell vs IFTTT",
        title: "面向可靠告警触达，而非通用自动化",
        description:
          "IFTTT 是通用自动化平台。Echobell 则专注于把关键告警稳定、及时地送达到响应人。",
      },
      quickSummary:
        "如果目标是广泛自动化，IFTTT 很灵活；如果目标是关键告警可靠触达，Echobell 更合适。",
      decisionHint: "当漏报/延迟会带来明显损失时，优先选择 Echobell。",
      atAGlance: [
        {
          label: "核心能力",
          echobell: "团队级关键通知交付",
          competitor: "跨应用触发-动作自动化",
        },
        {
          label: "紧急场景支持",
          echobell: "内建时效与来电级通知",
          competitor: "偏通用通知动作",
        },
        {
          label: "运营治理模型",
          echobell: "基于频道的服务归属",
          competitor: "以 recipe/applet 为中心",
        },
      ],
      differences: {
        title: "核心差异",
        description: "两者面向的任务本质不同。",
        items: [
          {
            dimension: "优化目标",
            echobell: "故障响应速度与触达可靠性",
            competitor: "跨服务自动化灵活性",
            advantage: "Echobell 更关注告警结果，而非自动化覆盖广度。",
          },
          {
            dimension: "信号质量控制",
            echobell: "结构化模板 + 服务频道",
            competitor: "面向通用触发-动作编排",
            advantage: "Echobell 在高压故障场景中信息更清晰。",
          },
          {
            dimension: "响应者体验",
            echobell: "移动端优先 + 紧急度可控",
            competitor: "通用动作路由",
            advantage: "Echobell 降低值班团队的延迟和歧义。",
          },
          {
            dimension: "团队扩展性",
            echobell: "围绕共享频道协作",
            competitor: "更偏个人自动化工作流",
            advantage: "Echobell 更贴合服务归属与值班体系。",
          },
        ],
      },
      advantages: {
        title: "Echobell 更强的点",
        description: "对生产系统团队而言，Echobell 的运营价值更直接。",
        items: [
          {
            title: "故障优先架构",
            description: "减少关键告警的漏报、延迟和理解偏差。",
          },
          {
            title: "更高紧急触达确定性",
            description: "时效通知与来电提醒提升响应可靠性。",
          },
          {
            title: "团队就绪频道模型",
            description: "共享订阅机制提升轮班与交接覆盖率。",
          },
        ],
      },
      scenarios: {
        title: "适用场景",
        description: "当告警属于生产风险管理的一部分时，Echobell 更有优势。",
        items: [
          {
            title: "SRE 与值班轮班",
            description: "需要快速、明确、可执行的告警触达。",
          },
          {
            title: "营收关键服务",
            description: "通知延迟会造成直接业务损失。",
          },
          {
            title: "安全与合规告警",
            description: "需要高优先级且可追踪的通知路径。",
          },
        ],
      },
      migration: {
        title: "从 IFTTT 风格告警迁移",
        description: "将通用自动化与关键告警交付解耦。",
        steps: [
          {
            title: "保留有效的通用自动化",
            description: "非关键 applet 保留，仅先抽离关键告警。",
          },
          {
            title: "关键触发映射到 Echobell 频道",
            description: "按服务域建立频道并接入高优先级事件。",
          },
          {
            title: "统一紧急度与模板规范",
            description: "确保高压场景下每条告警都可快速执行。",
          },
        ],
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "可以同时使用 IFTTT 和 Echobell 吗？",
            answer: "可以。IFTTT 做通用自动化，Echobell 做关键告警交付。",
          },
          {
            question: "Echobell 只适用于基础设施团队吗？",
            answer: "不是。产品、支持、运营、安全团队都可以使用。",
          },
          {
            question: "多快能验证价值？",
            answer: "大多数团队几天内即可在一个关键频道看到差异。",
          },
        ],
      },
      cta: {
        title: "保留自动化广度，升级告警可靠性",
        description: "本周先在最高风险服务上试点 Echobell。",
        primary: "下载 Echobell",
        secondary: "查看文档",
      },
    },
  },
};

export function getComparisonsIndexData(lang: Language): ComparisonsIndexData {
  return indexData[normalizeLang(lang)];
}

export function getComparisonPageData(
  slug: CompetitorSlug,
  lang: Language
): ComparisonPageData {
  return comparisonPages[slug][normalizeLang(lang)];
}

export function isCompetitorSlug(value: string): value is CompetitorSlug {
  return competitorSlugs.includes(value as CompetitorSlug);
}
