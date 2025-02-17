import { type Metadata } from "next";
import { Header } from "@/components/LandingLayout/header";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
}

export const metadata: Metadata = {
  title: "Modern Web Application Boilerplate",
  description:
    "Build scalable applications faster with our production-ready template featuring Next.js, TypeScript, and modern tooling.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative">
      <Header />

      {/* Hero Section */}
      <section className="container pt-32 pb-20 text-center lg:pt-40 lg:pb-32">
        <div className="mx-auto mb-8 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Modern Web Application Boilerplate
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Build scalable applications faster with our production-ready
            template featuring Next.js, TypeScript, and modern tooling.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container py-20 lg:py-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 text-2xl">{feature.icon}</div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t">
        <div className="container py-20 lg:py-32">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold lg:text-4xl">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features: Feature[] = [
  {
    title: "Type Safety",
    description:
      "End-to-end type safety with TypeScript across your entire stack.",
    icon: "🛡️",
  },
  {
    title: "Modern Stack",
    description:
      "Built with Next.js 14, React Server Components, and Tailwind CSS.",
    icon: "⚡️",
  },
  {
    title: "Authentication",
    description:
      "Secure authentication system with JWT and role-based access control.",
    icon: "🔒",
  },
  {
    title: "Database Ready",
    description: "Integration with your preferred database through Prisma ORM.",
    icon: "💾",
  },
  {
    title: "API Routes",
    description:
      "RESTful API endpoints with built-in validation and error handling.",
    icon: "🔌",
  },
  {
    title: "Testing",
    description:
      "Comprehensive testing setup with Jest and React Testing Library.",
    icon: "✅",
  },
];

const stats: Stat[] = [
  {
    value: "100%",
    label: "Type Coverage",
  },
  {
    value: "50+",
    label: "Components",
  },
  {
    value: "99",
    label: "Lighthouse Score",
  },
];
