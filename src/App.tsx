/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

// Individual Page Components (easy for team members to edit their own pages)
import { HomePage } from './pages/HomePage';
import { ContextPage } from './pages/ContextPage';
import { EmpathisePage } from './pages/EmpathisePage';
import { DefinePage } from './pages/DefinePage';
import { IdeatePage } from './pages/IdeatePage';
import { PrototypePage } from './pages/PrototypePage';
import { TestResultsPage } from './pages/TestResultsPage';
import { CostsPage } from './pages/CostsPage';
import { ImplementationPage } from './pages/ImplementationPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { TeamPage } from './pages/TeamPage';
import { ReferencesPage } from './pages/ReferencesPage';

export default function App() {
  // Sync page state with window hash for direct shareable links (e.g. #prototype)
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'context',
      'empathise',
      'define',
      'ideate',
      'prototype',
      'test-results',
      'costs',
      'implementation',
      'recommendations',
      'team',
      'references',
    ];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPageId, setCurrentPageId] = useState<PageId>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash) {
        setCurrentPageId(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPageId(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the selected modular page
  const renderPage = () => {
    switch (currentPageId) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'context':
        return <ContextPage onNavigate={handleNavigate} />;
      case 'empathise':
        return <EmpathisePage onNavigate={handleNavigate} />;
      case 'define':
        return <DefinePage onNavigate={handleNavigate} />;
      case 'ideate':
        return <IdeatePage onNavigate={handleNavigate} />;
      case 'prototype':
        return <PrototypePage onNavigate={handleNavigate} />;
      case 'test-results':
        return <TestResultsPage onNavigate={handleNavigate} />;
      case 'costs':
        return <CostsPage onNavigate={handleNavigate} />;
      case 'implementation':
        return <ImplementationPage onNavigate={handleNavigate} />;
      case 'recommendations':
        return <RecommendationsPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'references':
        return <ReferencesPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FA] text-slate-800 flex flex-col antialiased selection:bg-[#1C7293]/20 selection:text-[#21295C]">
      {/* Sticky top navigation bar */}
      <Navbar currentPageId={currentPageId} onNavigate={handleNavigate} />

      {/* Main page content container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {renderPage()}
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Footer with Acknowledgement of Country */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
