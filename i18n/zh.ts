import type { en } from "./en";

export const zh: typeof en = {
  locale: "zh",
  label: "中文",
  otherName: "English",
  nav: {
    tools: "工具",
    guides: "指南",
    about: "关于我们",
    viewAll: "查看全部工具",
    getStarted: "开始计算",
    profit: "利润计算器",
    profitDesc: "计算你的真实利润",
    fee: "费用计算器",
    feeDesc: "估算 TikTok Shop 费用",
    roas: "ROAS 计算器",
    roasDesc: "分析广告投放效果",
  },
  footer: {
    tagline: "帮助电商卖家看懂真实数据的简单工具。",
    tools: "工具",
    resources: "资源",
    guides: "卖家指南",
    allTools: "全部工具",
    company: "公司",
    about: "关于我们",
    privacy: "隐私政策",
    terms: "服务条款",
    rights: "保留所有权利。",
  },
  home: {
    badge: "免费电商工具",
    title1: "为 TikTok 卖家打造的",
    title2: "利润计算工具",
    subtitle:
      "在投放广告、支付平台费用和达人佣金之前，先算清楚你的产品到底能赚多少钱。",
    cta: "计算利润",
    explore: "探索全部工具",
    popular: "热门 TikTok 卖家计算器",
    whyTitle: "为什么销量不等于利润",
    whyP1:
      "一款在 TikTok Shop 产生 1 万美元销售额的产品仍可能亏钱。产品成本、平台费用、达人佣金、履约、广告和退款都会影响最终利润。",
    whyP2:
      "SellerCalc AI 帮助卖家在决定是否上新或加量之前，先估算这些成本。",
    guides: "卖家指南",
    open: "打开计算器",
    tools: [
      {
        title: "TikTok Shop 利润计算器",
        desc: "计算扣除产品成本、费用、达人佣金和广告后的净利润。",
        href: "/profit-calculator",
      },
      {
        title: "TikTok Shop 费用计算器",
        desc: "估算平台费用，了解每笔销售你能拿到多少。",
        href: "/fee-calculator",
      },
      {
        title: "TikTok Shop ROAS 计算器",
        desc: "衡量广告回报，判断你的投放是否赚钱。",
        href: "/roas-calculator",
      },
    ],
    guideLinks: [
      {
        href: "/blog/how-to-calculate-tiktok-shop-profit",
        title: "如何计算 TikTok Shop 利润",
      },
      {
        href: "/blog/tiktok-shop-fees-guide",
        title: "TikTok Shop 费用详解",
      },
      {
        href: "/blog/tiktok-shop-roas-guide",
        title: "什么算好的 TikTok Shop ROAS",
      },
    ],
  },
  tools: {
    title: "TikTok 卖家工具",
    subtitle: "专为 TikTok Shop 卖家设计的免费计算器。",
    items: [
      {
        title: "TikTok Shop 利润计算器",
        desc: "计算扣除费用、广告和达人佣金后 TikTok Shop 的真实利润。",
        href: "/profit-calculator",
      },
      {
        title: "TikTok Shop 费用计算器",
        desc: "估算 TikTok Shop 平台费用和卖家到手金额。",
        href: "/fee-calculator",
      },
      {
        title: "TikTok Shop ROAS 计算器",
        desc: "计算广告投入的回报率。",
        href: "/roas-calculator",
      },
    ],
  },
  profit: {
    title: "TikTok Shop 利润计算器",
    subtitle:
      "计算 TikTok Shop 商品在扣除平台费用、达人佣金、产品成本、运费、广告和退款后的预估利润。",
    how: "如何计算 TikTok Shop 利润",
    howBody:
      "销售额并不等于利润。TikTok Shop 卖家需要把获取、履约和销售每笔订单的全部成本都计算在内。",
    formulaTitle: "预估利润公式",
    formula:
      "销售价格 − 平台费用 − 达人佣金 − 产品成本 − 运费 − 包装 − 广告 − 预计退款损失",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "如何计算 TikTok Shop 利润？",
        a: "预估利润 = 销售价格 − 商品成本 − 运费 − 包装 − 平台费用 − 达人佣金 − 广告成本 − 预计退款损失。",
      },
      {
        q: "应该用多少 TikTok Shop 费率？",
        a: "TikTok Shop 费率会因市场、品类、卖家等级和平台政策而不同。请以 Seller Center 中当前显示的费率为准，不要依赖过时的通用比例。",
      },
      {
        q: "达人佣金会影响利润吗？",
        a: "会。达人佣金是订单归因产生的额外销售成本，会显著降低商品利润率。",
      },
      {
        q: "什么样的 TikTok Shop 利润率算好？",
        a: "没有统一标准。健康利润率取决于产品成本、履约、广告、退货、达人佣金和卖家的运营开支。",
      },
    ],
  },
  calculator: {
    sellingPrice: "销售价格",
    productCost: "商品成本",
    shipping: "运费",
    packaging: "包装成本",
    platformFee: "TikTok Shop 平台费率",
    platformFeeHint: "请输入 Seller Center 中显示的当前费率。",
    affiliate: "达人佣金",
    advertising: "广告成本",
    refundRate: "预计退款率",
    calculate: "计算利润",
    emptyTitle: "你的利润",
    emptyBody: "输入商品成本数据即可估算预估利润。",
    resultLabel: "预计净利润",
    marginLabel: "利润率",
    revenue: "收入",
    platformFeeLine: "TikTok Shop 平台费用",
    affiliateFeeLine: "达人佣金",
    productCostLine: "商品成本",
    shippingLine: "运费",
    packagingLine: "包装成本",
    advertisingLine: "广告成本",
    refundLoss: "预计退款损失",
    breakEven: "预计盈亏平衡售价",
  },
  fee: {
    title: "TikTok Shop 费用计算器",
    subtitle: "估算 TikTok Shop 平台费用、达人佣金和卖家到手金额。",
    explainTitle: "TikTok Shop 费用说明",
    explainBody:
      "TikTok Shop 卖家在计算利润时，需要综合考虑平台费用、交易手续费、达人佣金和广告成本。",
    price: "商品价格",
    platformRate: "TikTok 平台费率 %",
    affiliateRate: "达人佣金 %",
    calculate: "计算费用",
    resultTitle: "计算结果",
    platformFeeLine: "平台费用",
    affiliateFeeLine: "达人费用",
    totalFees: "费用合计",
    sellerReceives: "卖家到手",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "TikTok Shop 收取哪些费用？",
        a: "TikTok Shop 会收取平台佣金，并可能收取交易手续费。费率取决于你的市场、品类和卖家等级。",
      },
      {
        q: "达人佣金是如何运作的？",
        a: "达人佣金由卖家设置，当达人创作的内容带来订单时，订单部分金额会支付给达人或推广者。",
      },
      {
        q: "每笔销售我能拿到多少？",
        a: "你的到手金额 = 销售价格 − 平台费用 − 达人佣金 − 运费和退款调整。",
      },
    ],
  },
  roas: {
    title: "TikTok Shop ROAS 计算器",
    subtitle: "衡量你的 TikTok 广告投放效果。",
    explainTitle: "如何计算 TikTok Shop ROAS",
    explainBody:
      "ROAS 衡量每花 1 美元广告费能带来多少收入。用广告带来的收入除以广告支出，即可得到广告回报率。",
    revenue: "广告收入",
    adSpend: "广告支出",
    calculate: "计算 ROAS",
    resultTitle: "你的 ROAS",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "TikTok Shop 多少 ROAS 算好？",
        a: "取决于你的商品利润率。用目标利润率除以广告占比，即可算出你需要的最低 ROAS。",
      },
      {
        q: "ROAS 如何计算？",
        a: "ROAS = 广告带来的收入 ÷ 广告支出。",
      },
      {
        q: "ROAS 等于利润吗？",
        a: "不等于。ROAS 只比较广告收入和广告支出，产品成本、平台费用等其他开支仍会影响真实利润。",
      },
    ],
  },
  blog: {
    title: "TikTok Shop 卖家指南",
    subtitle: "帮助你了解 TikTok Shop 费用、利润和广告投放的实用指南。",
  },
  about: {
    title: "关于 SellerCalc AI",
    intro:
      "SellerCalc AI 致力于构建简单、免费的工具，帮助电商卖家看懂自己的真实数据。",
    mission: "我们的使命",
    missionBody:
      "一款产品可能带来数千美元销售额，却仍然在亏钱。费用、佣金、履约、广告和退款都在悄悄侵蚀利润。我们的使命是让这些成本在卖家花钱推广产品之前变得可见。",
    what: "我们做什么",
    whatIntro: "我们为电商卖家构建专注的计算器和指南：",
    whatItems: [
      "分解每一笔销售所有成本的利润计算器。",
      "估算平台佣金和费用的费用计算工具。",
      "评估广告投放表现的 ROAS 和广告工具。",
      "讲解这些数字背后原理的指南。",
    ],
    estimates: "估算结果，不构成财务建议",
    estimatesBody:
      "本站的所有数字都是估算。费率、佣金和平台政策经常变化，你的具体卖家账号也可能与工具的假设不同。SellerCalc AI 上的任何内容都不构成财务、税务或法律建议。",
    contact: "联系我们",
    contactBody:
      "有建议或发现了 Bug？欢迎在 SellerCalc AI 的 GitHub 仓库提交 issue。",
  },
};