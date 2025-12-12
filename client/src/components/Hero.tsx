import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -ml-[50%] w-[200%] h-[500px] bg-gradient-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main mb-6">
            Enterprise Agentic AI: <span className="text-primary">Autonomous. Secure. Scalable.</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy autonomous workflows that transform operations. 10x faster execution with enterprise-grade security and governance controls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@agenticoslabs.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary-hover transition-colors rounded-lg shadow-lg shadow-primary/25"
            >
              Deploy Agents
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-text-main bg-surface hover:bg-surface/80 border border-border transition-colors rounded-lg"
            >
              View Platform
              <ChevronRight className="ml-2 h-5 w-5 text-text-muted" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
