import {
  BarChart3,
  FileSpreadsheet,
  FileText,
  Gauge,
  MessageSquareText,
  Sparkles,
  Timer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollButton } from "@/components/ui/scroll-button";
import { cn } from "@/lib/cn";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 dark:border-zinc-800/60 dark:bg-zinc-950",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/70 via-white to-white dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/15 blur-3xl dark:from-emerald-400/12 dark:to-teal-400/8"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm shadow-zinc-900/5 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 dark:text-zinc-200">
              <Sparkles className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
              Built for MSME manufacturing teams in India
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Transform Your Business with Intelligent AI Frameworks
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Turn your raw data into actionable insights in seconds. Upload
              files, ask questions in plain English, and get answers your team
              can trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ScrollButton targetId="cta">Get Demo</ScrollButton>
              <ScrollButton variant="secondary" targetId="features">
                Start Free
              </ScrollButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="mr-1 font-medium text-zinc-600 dark:text-zinc-300">
                Connectors:
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900/60">
                CSV
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900/60">
                Excel
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900/60">
                SAP
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900/60">
                Databases
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl" />
            <Card className="rounded-3xl p-0 overflow-hidden">
              <div className="border-b border-zinc-200/70 bg-zinc-50 px-5 py-4 dark:border-zinc-800/60 dark:bg-zinc-900/30">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-zinc-900 dark:text-white">
                    Insights
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Updated just now
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
                    <Gauge className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                    Cost leakage
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                    8.4%
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Material variance across 3 lines
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
                    <Timer className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                    Lead time
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                    -12%
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Faster dispatch vs last month
                  </div>
                </Card>
                <div className="sm:col-span-2">
                  <div className="rounded-2xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800/60 dark:bg-zinc-950">
                    <div className="flex items-start gap-3">
                      <MessageSquareText className="mt-0.5 h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                      <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-white">
                          Ask in natural language
                        </div>
                        <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          “Which supplier contributed the most to scrap in March
                          and why?”
                        </p>
                        <div className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          Answer: Supplier B — higher moisture, inconsistent
                          batch size. Recommended actions generated.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProblemSection() {
  const items = [
    {
      title: "Data scattered across Excel and PDFs",
      description:
        "Production, purchase, and quality data lives in multiple formats and systems.",
      icon: FileSpreadsheet,
    },
    {
      title: "No real-time insights",
      description:
        "By the time you consolidate reports, the month is already over.",
      icon: BarChart3,
    },
    {
      title: "Manual analysis is slow",
      description:
        "Teams spend hours creating pivots and charts instead of taking action.",
      icon: Timer,
    },
  ];

  return (
    <section id="problem" className="bg-white py-16 dark:bg-zinc-950 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Operations teams are drowning in spreadsheets."
          description="Manufacturing decisions need speed and clarity. Most MSME teams are still stuck in fragmented data and manual reporting."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
                {it.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {it.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionSection() {
  const bullets = [
    { label: "Connect CSV, Excel, SAP, Databases", icon: FileText },
    { label: "AI understands manufacturing context", icon: Sparkles },
    { label: "Insights, summaries, dashboards", icon: BarChart3 },
  ];

  return (
    <section
      id="solution"
      className="bg-zinc-50 py-16 dark:bg-black/20 sm:py-20"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The solution"
            title="An AI analyst that speaks your data."
            description="ThinkEasyLabs converts your messy files into a structured model — then answers questions, highlights anomalies, and produces dashboards your team can share."
          />

          <Card className="rounded-3xl">
            <div className="text-sm font-medium text-zinc-900 dark:text-white">
              What you can do
            </div>
            <div className="mt-5 grid gap-4">
              {bullets.map((b) => (
                <div key={b.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                    <b.icon className="h-4 w-4 text-zinc-700 dark:text-zinc-200" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {b.label}
                    </div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      Built for production, procurement, quality, and finance
                      teams.
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-700 p-5 text-white shadow-sm">
              <div className="text-sm font-semibold">Example insight</div>
              <div className="mt-2 text-sm leading-6 text-white/90">
                “Scrap increased on Line 2 after supplier change. Moisture
                variance rose by 14%. Recommend tightening incoming QC for Batch
                #A12 and adjusting drying time.”
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Smart Data Analysis",
      description:
        "Automatically detects trends, outliers, and root causes across your operations data.",
      icon: BarChart3,
    },
    {
      title: "Natural Language Queries",
      description:
        "Ask questions like you would ask an analyst — no formulas or SQL needed.",
      icon: MessageSquareText,
    },
    {
      title: "Automated Reports",
      description:
        "Generate daily/weekly summaries for production, purchase, quality, and finance.",
      icon: FileText,
    },
    {
      title: "Cost Optimization Insights",
      description:
        "Identify material variance, energy inefficiency, and procurement leakages.",
      icon: Gauge,
    },
  ];

  return (
    <section
      id="features"
      className="bg-white py-16 dark:bg-zinc-950 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run a tighter factory."
          description="A modern analytics layer for MSMEs — fast to adopt, easy to use, and built for action."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {f.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Upload Data",
      description:
        "Drop your CSV or Excel files. ThinkEasyLabs structures the data.",
      icon: FileSpreadsheet,
    },
    {
      step: "Step 2",
      title: "Ask Questions",
      description:
        "Type what you need in English (or Hindi). ThinkEasyLabs understands context.",
      icon: MessageSquareText,
    },
    {
      step: "Step 3",
      title: "Get Insights",
      description:
        "Receive answers, summaries, and dashboards — ready to share.",
      icon: BarChart3,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-zinc-50 py-16 dark:bg-black/20 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From files to decisions in minutes."
          description="No complex setup. Start with the data you already have."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title}>
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                  {s.step}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <s.icon className="h-5 w-5 text-emerald-700 dark:text-emerald-200" />
                </div>
              </div>
              <div className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="cta" className="bg-white py-16 dark:bg-zinc-950 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-emerald-700 to-teal-700 px-6 py-12 text-white shadow-sm shadow-zinc-900/10 dark:border-zinc-800/60 sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Start using AI for your business today
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
              Get a guided demo for your production, purchase, quality or finance
              data. See cost drivers, anomalies, and opportunities — fast.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="mailto:contact@thinkeasylabs.com?subject=ThinkEasyLabs%20Demo%20Request"
                className="bg-white text-zinc-900 hover:bg-white/90"
              >
                Get Demo
              </Button>
              <ScrollButton
                targetId="features"
                variant="ghost"
                className="bg-white/0 text-white hover:bg-white/10"
              >
                Start Free
              </ScrollButton>
            </div>
            <div className="mt-6 text-xs text-white/80">
              Talk to us for a plan that fits your factory.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

