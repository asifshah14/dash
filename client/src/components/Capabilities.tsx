import { Bot, Network, Mic, MessageSquare } from "lucide-react";

const capabilities = [
    {
        title: "Advanced Agentic RAG",
        description: "Connect proprietary data to agents for highly accurate, context-aware automated reasoning.",
        icon: Network,
    },
    {
        title: "AI Avatars",
        description: "Hyper-realistic interactive avatars for 24/7 human-like customer engagement and support.",
        icon: Bot,
    },
    {
        title: "Voice Calling Agents",
        description: "Natural, low-latency voice agents executing complex phone workflows and scheduling autonomously.",
        icon: Mic,
    },
    {
        title: "Chat Agents",
        description: "Intelligent multi-modal chat interfaces handling support, sales, and internal ticket resolution.",
        icon: MessageSquare,
    },
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-20 bg-surface/50 border-y border-border/50">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <cap.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3">
                                {cap.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
