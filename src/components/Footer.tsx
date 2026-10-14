import React from 'react';
import { Heart, Compass, FileText } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#21295C] text-slate-300 mt-20 border-t border-[#1C7293]/40">
      {/* Acknowledgement of Country - Highlighted Section */}
      <div className="bg-[#1C7293]/20 border-b border-[#1C7293]/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#065A82] flex items-center justify-center text-cyan-200 shrink-0 shadow">
            <Heart size={24} className="fill-red-400 stroke-none" />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-cyan-200 mb-1">
              Acknowledgement of Country
            </h3>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
              We acknowledge the Lama Lama people as the Traditional Owners of the Country this project is about, and pay respect to Elders past and present.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-700/60">
          <div>
            <h4 className="text-white font-bold text-base mb-2">
              Stewart River Iron-Removal System
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Design Area 6.2: Water Quality and Treatment. Developed for the Engineers Without Borders (EWB) Challenge in partnership with the Lama Lama community at Port Stewart, Cape York, Queensland.
            </p>
            <div className="text-xs text-cyan-300 font-mono">
              University Engineering Design Project · 2026
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
              <Compass size={16} className="text-cyan-300" /> Engineering Student Team
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C7293]"></span>
                <span>Ethan Illidge</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C7293]"></span>
                <span>Huy Truong</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C7293]"></span>
                <span>Natalia Tran</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C7293]"></span>
                <span>Tan Dong</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
              <FileText size={16} className="text-cyan-300" /> Academic & Report Standards
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Written in simple, clear English with short sentences and accessible explanations. All factual claims are grounded in peer-reviewed literature, official guidelines (ADWG), and EWB project documentation.
            </p>
            <button
              type="button"
              onClick={() => {
                onNavigate('references');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-cyan-300 hover:text-white underline font-medium"
            >
              View complete APA 7th reference list →
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Stewart River Water Engineering Team · EWB Challenge
          </div>
          <div className="flex items-center gap-4">
            <span>Writing Style: Simple, Plain English</span>
            <span>·</span>
            <span>Off-grid Appropriate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
