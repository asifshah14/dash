import { ShieldCheck } from "lucide-react";

const features = [
    "SOC 2 Type II & HIPAA Compliant Security",
    "Role-Based Access Control (RBAC) & SSO",
    "Real-time Observability & Audit Logs",
    "Private VPC & On-Premise Deployment Options",
    "99.99% Uptime SLA & Dedicated Support",
];

export default function EnterpriseReady() {
    return (
        <section id="enterprise" className="py-24 bg-surface border-y border-border">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl mb-6">
                            Enterprise-Ready Infrastructure
                        </h2>
                        <p className="text-lg text-text-muted mb-8 leading-relaxed">
                            Built for the most demanding environments. We ensure your data remains secure, compliant, and under your control at all times.
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-text-main font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-3xl" />
                        <div className="relative bg-background border border-border rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-4">
                                <div className="h-2 w-1/3 bg-border rounded animate-pulse" />
                                <div className="h-2 w-2/3 bg-surface rounded animate-pulse" />
                                <div className="h-32 bg-surface/50 rounded-lg border border-border/50" />
                                <div className="flex gap-4 pt-4">
                                    <div className="h-8 w-24 bg-primary/20 rounded animate-pulse" />
                                    <div className="h-8 w-16 bg-surface rounded animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
