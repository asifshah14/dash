import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6">
                        Start Your Autonomous Transformation Today
                    </h2>
                    <p className="text-xl text-text-muted mb-10">
                        Join forward-thinking enterprises automating millions of workflows securely with Agenticos Labs.
                    </p>
                    <a
                        href="mailto:hello@agenticoslabs.com"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-hover transition-colors rounded-lg shadow-lg shadow-primary/25"
                    >
                        Contact Sales
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
