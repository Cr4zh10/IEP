/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { SideNav } from './components/SideNav';
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
import { ArtefactsPage } from './pages/ArtefactsPage';
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
      'artefacts',
      'team',
      'references',
    ];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPageId, setCurrentPageId] = useState<PageId>(getInitialPage);
  // An element id to scroll to once the new page has drawn (used by the Artefacts page buttons).
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

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

  // After a page change that asked for an anchor, scroll to that figure or table and flash it.
  useEffect(() => {
    if (!pendingAnchor) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(pendingAnchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.remove('artefact-flash');
        // Force a reflow so the animation restarts if the same artefact is opened twice.
        void el.offsetWidth;
        el.classList.add('artefact-flash');
        window.setTimeout(() => el.classList.remove('artefact-flash'), 2800);
      }
      setPendingAnchor(null);
    }, 120);
    return () => window.clearTimeout(timer);
  }, [pendingAnchor, currentPageId]);

  /** Go to a page. Pass an anchor (for example "figure-3") to land on that figure or table. */
  const handleNavigate = (pageId: PageId, anchor?: string) => {
    setCurrentPageId(pageId);
    setPendingAnchor(anchor ?? null);
    window.location.hash = pageId;
    if (!anchor) window.scrollTo({ top: 0, behavior: 'smooth' });
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
      case 'artefacts':
        return <ArtefactsPage onNavigate={handleNavigate} />;
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

      {/*
        Page area. On wide screens (the "side" size, 1440 px and up, set at the top of src/index.css) the list of
        pages sits down the left side and the page content sits to its right. side:max-w-[97rem] = the old content
        width (80rem) + the side list (15rem) + the gap (2rem). On narrower screens the side list is hidden and
        the drop-down in the top bar is used.
      */}
      <div className="flex-1 w-full max-w-7xl side:max-w-[97rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 side:flex side:items-start side:gap-8">
        <SideNav currentPageId={currentPageId} onNavigate={handleNavigate} />
        <main className="min-w-0 w-full side:flex-1">{renderPage()}</main>
      </div>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Footer with Acknowledgement of Country */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
