import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border pt-16 pb-8">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-white mb-4 block">Agenticos Labs</span>
                        <p className="text-text-muted max-w-sm">
                            The enterprise agentic AI platform. Secure, autonomous, and built for scale.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-text-main tracking-wider uppercase mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><a href="#capabilities" className="text-text-muted hover:text-primary transition-colors">Capabilities</a></li>
                            <li><a href="#how-it-works" className="text-text-muted hover:text-primary transition-colors">How it Works</a></li>
                            <li><a href="#enterprise" className="text-text-muted hover:text-primary transition-colors">Enterprise</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-text-main tracking-wider uppercase mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="/terms" className="text-text-muted hover:text-primary transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; {currentYear} Agenticos Labs. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
