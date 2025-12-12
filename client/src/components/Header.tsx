import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-text-main tracking-tight">
              Agenticos Labs
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#capabilities" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#enterprise" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@agenticoslabs.com"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors"
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-muted hover:text-text-main p-2"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <ul className="space-y-4 px-2">
              <li>
                <a
                  href="#capabilities"
                  className="block px-3 py-2 text-base font-medium text-text-muted hover:text-text-main hover:bg-surface rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-base font-medium text-text-muted hover:text-text-main hover:bg-surface rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#enterprise"
                  className="block px-3 py-2 text-base font-medium text-text-muted hover:text-text-main hover:bg-surface rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enterprise
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="mailto:hello@agenticoslabs.com"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-primary hover:bg-primary-hover rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
