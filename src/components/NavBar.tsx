/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, Award, Mail, Download, Film } from "lucide-react";
import { MY_PROFILE } from "../data";

interface NavBarProps {
  activeTab: "home" | "projects" | "skills" | "contact";
  setActiveTab: (tab: "home" | "projects" | "skills" | "contact") => void;
  setSelectedProjectId: (id: string | null) => void;
  onSearchClick: () => void;
  onNotificationsClick: () => void;
  unreadNotificationsCount: number;
  onResumeDownload: () => void;
}

export default function NavBar({
  activeTab,
  setActiveTab,
  setSelectedProjectId,
  onSearchClick,
  onNotificationsClick,
  unreadNotificationsCount,
  onResumeDownload,
}: NavBarProps) {
  const handleTabClick = (tab: "home" | "projects" | "skills" | "contact") => {
    setActiveTab(tab);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* TopNavBar (Web Desktop) */}
      <nav
        id="desktop-nav"
        className="hidden md:flex fixed top-0 w-full z-50 bg-gradient-to-b from-background via-background/80 to-transparent justify-between items-center px-[4%] py-4 transition-all duration-300 ease-in-out h-20 border-b border-white/5 backdrop-blur-sm"
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div
            onClick={() => handleTabClick("home")}
            className="font-bebas text-4xl text-primary-container tracking-tighter cursor-pointer hover:opacity-95 transition-opacity"
          >
            DEVFLIX
          </div>
          {/* Nav Links */}
          <div className="flex gap-6">
            <button
              onClick={() => handleTabClick("home")}
              className={`font-semibold text-sm transition-all duration-200 cursor-pointer hover:scale-105 hover:text-on-surface ${activeTab === "home" ? "text-on-surface font-bold border-b-2 border-primary-container pb-1" : "text-secondary"
                }`}
            >
              Home Stream
            </button>
            <button
              onClick={() => handleTabClick("projects")}
              className={`font-semibold text-sm transition-all duration-200 cursor-pointer hover:scale-105 hover:text-on-surface ${activeTab === "projects" ? "text-on-surface font-bold border-b-2 border-primary-container pb-1" : "text-secondary"
                }`}
            >
              Projects Catalog
            </button>
            <button
              onClick={() => handleTabClick("skills")}
              className={`font-semibold text-sm transition-all duration-200 cursor-pointer hover:scale-105 hover:text-on-surface ${activeTab === "skills" ? "text-on-surface font-bold border-b-2 border-primary-container pb-1" : "text-secondary"
                }`}
            >
              Mastery Skills
            </button>
            <button
              onClick={() => handleTabClick("contact")}
              className={`font-semibold text-sm transition-all duration-200 cursor-pointer hover:scale-105 hover:text-on-surface ${activeTab === "contact" ? "text-on-surface font-bold border-b-2 border-primary-container pb-1" : "text-secondary"
                }`}
            >
              Contact Director
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Download Resume Button */}
          <button
            onClick={onResumeDownload}
            className="bg-surface-container-high/60 hover:bg-surface-container-highest/90 border border-white/10 hover:border-primary-container/60 text-on-surface hover:text-white px-4 py-2 rounded-md font-semibold text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(229,9,20,0.25)] group"
          >
            <Download className="w-3.5 h-3.5 text-primary-container group-hover:scale-110 transition-transform" />
            Download Resume
          </button>

          {/* Profile Avatar */}
          <div
            onClick={() => handleTabClick("contact")}
            className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center overflow-hidden hover:scale-110 border border-white/10 hover:border-primary-container/50 transition-all duration-200 cursor-pointer"
            title="View Profile"
          >
            <img
              alt="Developer Profile"
              className="w-full h-full object-cover"
              src={MY_PROFILE.avatarUrl}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Top Header (Visible only on small screens) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-background/95 border-b border-white/5 p-4 flex justify-between items-center h-16 backdrop-blur-md">
        <span
          onClick={() => handleTabClick("home")}
          className="font-bebas text-2xl text-primary-container tracking-tighter"
        >
          DEVFLIX
        </span>
        <div className="flex items-center gap-4">
          <img
            onClick={() => handleTabClick("contact")}
            className="w-8 h-8 rounded-full object-cover border border-white/10"
            src={MY_PROFILE.avatarUrl}
            alt="Karam Arora Portrait Thumbnail"
          />
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest/95 border-t border-surface-variant/30 z-[999] px-6 pt-3 pb-5 flex justify-between items-center backdrop-blur-md">
        <button
          onClick={() => handleTabClick("home")}
          className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-primary-container font-bold" : "text-secondary"}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        <button
          onClick={() => handleTabClick("projects")}
          className={`flex flex-col items-center gap-1 ${activeTab === "projects" ? "text-primary-container font-bold" : "text-secondary"}`}
        >
          <Film className="w-5 h-5" />
          <span className="text-[10px] font-medium">Projects</span>
        </button>

        <button
          onClick={() => handleTabClick("skills")}
          className={`flex flex-col items-center gap-1 ${activeTab === "skills" ? "text-primary-container font-bold" : "text-secondary"}`}
        >
          <Award className="w-5 h-5" />
          <span className="text-[10px] font-medium">Skills</span>
        </button>

        <button
          onClick={() => handleTabClick("contact")}
          className={`flex flex-col items-center gap-1 ${activeTab === "contact" ? "text-primary-container font-bold" : "text-secondary"}`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
      </nav>
    </>
  );
}
