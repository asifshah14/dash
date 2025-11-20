import { Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
    onOpenPrivacy: () => void;
    onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="aurora-bg bg-gradient-to-b from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary border-t border-brand-slate-light/20 dark:border-brand-slate/20 transition-all duration-300 relative overflow-hidden">
                                <a href="#features" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    Features
                                </a>
                                <a href="#ag-ui" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    RAG Data Retrieval
                                </a>
                                <a href="#demo-form" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    Contact
                                </a>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/agenticoslabs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-elegant w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-soft-lg transition-all duration-500 group shadow-soft"
                                    aria-label="Visit Agenticoslabs on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 text-brand-blue-mid group-hover:text-brand-teal-mid soft-glow transition-all duration-300" />
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-elegant w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-soft-lg transition-all duration-500 group shadow-soft"
                                    aria-label="Visit Agenticoslabs on Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-brand-teal-mid group-hover:text-brand-emerald-mid soft-glow transition-all duration-300" />
                                </a>
                            </div>
                        </div >
                    </div >

        <div className="pt-8 border-t border-brand-slate-light/20 dark:border-brand-slate/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base text-center md:text-left font-medium">
                &copy; {currentYear} Agenticoslabs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base">
                <button
                    onClick={onOpenPrivacy}
                    className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110"
                >
                    Privacy Policy
                </button>
                <button
                    onClick={onOpenTerms}
                    className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110"
                >
                    Terms of Service
                </button>
            </div>
        </div>
                </div >
            </div >
        </footer >
    );
}
