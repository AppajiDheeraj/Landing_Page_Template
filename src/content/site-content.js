export const siteContent = {
  brand: {
    name: "Your Product",
    tagline: "Your Product Tagline",
    shortDescription:
      "Write a short description of your product, service, or company here.",
    siteUrl: "https://example.com",
    repositoryUrl: "https://github.com/your-org/your-repo",
    releasesUrl: "https://example.com/download",
    documentationUrl: "https://example.com/docs",
    author: {
      name: "Your Name",
      githubUrl: "https://github.com/your-handle",
      linkedinUrl: "https://linkedin.com/in/your-handle",
      twitterUrl: "https://x.com/your-handle",
      twitterHandle: "@yourhandle",
    },
  },
  metadata: {
    title: {
      default: "Your Product - Short SEO Headline",
      template: "%s | Your Product",
    },
    description:
      "Write an SEO-friendly description for your landing page here.",
    keywords: [
      "your product",
      "your category",
      "your industry",
      "feature keyword one",
      "feature keyword two",
      "landing page template",
    ],
    openGraphTitle: "Your Product - Social Sharing Title",
    openGraphDescription:
      "Write a short social preview description for your product here.",
    twitterTitle: "Your Product - Social Sharing Title",
    twitterDescription:
      "Write a short Twitter/X description here.",
    jsonLd: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Describe your product in one sentence for structured data.",
      downloadUrl: "https://example.com/download",
      softwareVersion: "0.0.1",
      featureList: [
        "Primary feature placeholder",
        "Secondary feature placeholder",
        "Third feature placeholder",
        "Fourth feature placeholder",
      ],
    },
  },
  navigation: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    primaryCta: {
      label: "Primary Action",
      href: "https://example.com/get-started",
      external: true,
    },
    downloadMenu: {
      label: "Resources",
      groups: [
        {
          title: "Resource Group One",
          items: [
            { label: "Resource Link One", href: "#resource-one", platform: "apple" },
            { label: "Resource Link Two", href: "#resource-two", platform: "windows" },
            { label: "Resource Link Three", href: "#resource-three", platform: "linux" },
          ],
        },
        {
          title: "Resource Group Two",
          items: [{ label: "Resource Link Four", href: "#resource-four", platform: "apple" }],
        },
      ],
    },
  },
  hero: {
    badge: {
      label: "Add a short badge label here",
      href: "https://example.com",
      external: true,
    },
    titlePrefix: "Your",
    titleSuffix: "Main Headline",
    description:
      "Use this section to explain your main value proposition in one or two lines.",
    primaryCta: {
      label: "Primary CTA",
      href: "https://example.com/primary-action",
      external: true,
    },
    secondaryCta: {
      label: "Secondary CTA",
      href: "https://example.com/secondary-action",
      external: true,
    },
  },
  bucketChips: [
    {
      id: 1,
      title: "Feature One",
      description: "Short supporting line",
      icon: "zap",
    },
    {
      id: 2,
      title: "Feature Two",
      description: "Short supporting line",
      icon: "security",
    },
    {
      id: 3,
      title: "Feature Three",
      description: "Short supporting line",
      icon: "story",
    },
    {
      id: 4,
      title: "Feature Four",
      description: "Short supporting line",
      icon: "sparkles",
    },
  ],
  featuresSection: {
    id: "features",
    title: "Core Features",
    description:
      "Introduce the main capabilities or benefits of your product here.",
    items: [
      {
        name: "Feature Card One",
        className: "col-span-3 lg:col-span-2",
        icon: "trending-up",
        description:
          "Add a short explanation for this feature card.",
        href: "#",
        cta: "Learn More",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
      },
      {
        name: "Feature Card Two",
        className: "col-span-3 lg:col-span-1",
        icon: "zap",
        description:
          "Add a short explanation for this feature card.",
        href: "#",
        cta: "Explore",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      },
      {
        name: "Feature Card Three",
        className: "col-span-3 lg:col-span-1",
        icon: "activity",
        description:
          "Add a short explanation for this feature card.",
        href: "#",
        cta: "View More",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20",
      },
      {
        name: "Feature Card Four",
        className: "col-span-3 lg:col-span-2",
        icon: "shield-check",
        description:
          "Add a short explanation for this feature card.",
        href: "#",
        cta: "Get Started",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20",
      },
    ],
  },
  testimonialsSection: {
    id: "testimonials",
    title: "Customer",
    highlightedTitle: "Stories",
    highlightedEmoji: "★",
    emptyTitle: "No testimonials added yet",
    emptyDescription: "Replace this with social proof, quotes, or customer feedback.",
    cta: {
      label: "Add Testimonial",
      href: "https://example.com/testimonials",
      external: true,
    },
  },
  faqSection: {
    id: "faq",
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=830&h=844&auto=format&fit=crop",
      alt: "Placeholder product visual",
    },
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Use this section to answer the most common questions about your product.",
    items: [
      {
        question: "What problem does your product solve?",
        answer:
          "Add a clear answer explaining the main value of your product.",
      },
      {
        question: "Who is this product for?",
        answer:
          "Describe your target audience, ideal customers, or use cases here.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Explain your pricing model, free plan, trial, or contact process here.",
      },
      {
        question: "How do users get started?",
        answer:
          "Add the first steps a new user should take to start using your product.",
      },
      {
        question: "Where can people learn more?",
        answer:
          "Link to your documentation, onboarding guide, support email, or help center.",
      },
    ],
  },
  footer: {
    resourceLinks: [
      { label: "Documentation", href: "https://example.com/docs", external: true },
      { label: "Repository", href: "https://github.com/your-org/your-repo", external: true },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    downloadLinks: [
      { label: "Resource One", href: "#resource-one" },
      { label: "Resource Two", href: "#resource-two" },
      { label: "Download Page", href: "https://example.com/download", external: true },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms", href: "/legal/tos" },
      { label: "Your Name", href: "https://example.com/about", external: true },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/your-handle",
        external: true,
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-handle",
        external: true,
        icon: "linkedin",
      },
      {
        label: "X (formerly Twitter)",
        href: "https://x.com/your-handle",
        external: true,
        icon: "twitter",
      },
    ],
  },
};
