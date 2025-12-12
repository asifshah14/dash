export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Data",
            description: "Securely integrate your proprietary knowledge base and internal APIs with one click.",
        },
        {
            number: "02",
            title: "Configure Agents",
            description: "Select pre-built agent templates or customize workflows using our visual builder.",
        },
        {
            number: "03",
            title: "Deploy & Scale",
            description: "Launch instantly to thousands of users with enterprise-grade monitoring and guardrails.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl text-left md:text-center">
                        How It Works
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-start md:items-center md:text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-border text-primary font-bold text-lg mb-6 z-10 shadow-lg shadow-background">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3">
                                {step.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
