import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import EnterpriseReady from "./components/EnterpriseReady";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import StructuredData from "./components/StructuredData";
import AdminPage from "./pages/admin";
import { useState } from "react";
import { Switch, Route } from "wouter";

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <ThemeProvider>
      <StructuredData />
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/">
          <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary selection:text-white">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" role="main">
              <Hero />
              <Capabilities />
              <HowItWorks />
              <EnterpriseReady />
              <CTA />
            </main>
            <Footer />

            {showPrivacyModal && (
              <PrivacyPolicy onClose={() => setShowPrivacyModal(false)} />
            )}

            {showTermsModal && (
              <TermsOfService onClose={() => setShowTermsModal(false)} />
            )}
          </div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
