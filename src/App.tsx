/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Project, SkillCategory, Notification, Message } from "./types";
import { PROJECTS_DATA, SKILLS_DATA, MOCK_NOTIFICATIONS, ACTIVE_FOCUS_DATA, MY_PROFILE } from "./data";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Billboard from "./components/Billboard";
import ProjectRail from "./components/ProjectRail";
import ActiveFocusRail from "./components/ActiveFocusRail";
import ProjectsCatalog from "./components/ProjectsCatalog";
import ProjectDetailView from "./components/ProjectDetailView";
import SkillsView from "./components/SkillsView";
import ContactView from "./components/ContactView";
import SearchModal from "./components/SearchModal";
import NotificationsDropdown from "./components/NotificationsDropdown";
import ExperienceEducation from "./components/ExperienceEducation";
import { Star, Code, ArrowRight, Play, Heart } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "projects" | "skills" | "contact">("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Interactive Overlays
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Data State
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [sentMessages, setSentMessages] = useState<Message[]>([]);

  // Load sent messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("devflix_sent_messages");
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync messages with localStorage
  const saveMessages = (msgs: Message[]) => {
    setSentMessages(msgs);
    localStorage.setItem("devflix_sent_messages", JSON.stringify(msgs));
  };

  const handleSendMessage = (msgData: Omit<Message, "id" | "timestamp">) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg: Message = {
      id: `msg_${Date.now()}`,
      name: msgData.name,
      email: msgData.email,
      text: msgData.text,
      timestamp
    };
    const updatedMsgs = [newMsg, ...sentMessages];
    saveMessages(updatedMsgs);

    // Spawn a feedback notification
    const newAlert: Notification = {
      id: `notif_${Date.now()}`,
      title: `Karam received your telemetry: "${msgData.text.substring(0, 30)}..."`,
      timestamp: "Just now",
      read: false
    };
    setNotifications([newAlert, ...notifications]);
  };

  const handleDeleteMessage = (id: string) => {
    const filtered = sentMessages.filter((m) => m.id !== id);
    saveMessages(filtered);
  };

  const handleMarkRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleResumeDownload = () => {
    // Generate simulated print / alert telemetry
    const newAlert: Notification = {
      id: `notif_${Date.now()}`,
      title: " Karam's printable resume requested. Outbox telemetry initialized.",
      timestamp: "Just now",
      read: false
    };
    setNotifications([newAlert, ...notifications]);

    // Smoothly route to the profile / contact view to see print details or prompt success
    // setActiveTab("contact");
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    if (MY_PROFILE.resumeUrl) {
      // Resolve Google Drive file ID to a direct download link
      const match = MY_PROFILE.resumeUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      const downloadUrl = match && match[1]
        ? `https://drive.google.com/uc?export=download&id=${match[1]}`
        : MY_PROFILE.resumeUrl;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Resume URL is not defined.");
    }
  };

  const handleProjectSelectFromSearch = (id: string) => {
    setSelectedProjectId(id);
    setActiveTab("projects");
  };

  const handleSkillSelectFromSearch = (skillId: string, categoryId: string) => {
    // Skills are integrated directly in Skills view
    setActiveTab("skills");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="bg-background text-on-surface flex flex-col min-h-screen font-sans antialiased">
      {/* Navigation Header */}
      <NavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedProjectId={setSelectedProjectId}
        onSearchClick={() => setSearchOpen(true)}
        onNotificationsClick={() => setNotificationsOpen(!notificationsOpen)}
        unreadNotificationsCount={unreadCount}
        onResumeDownload={handleResumeDownload}
      />

      {/* Floating Notifications Dropdown Panel */}
      <NotificationsDropdown
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkRead={handleMarkRead}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* Search Bar Screen Overlay */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        projects={PROJECTS_DATA}
        skillsCategories={SKILLS_DATA}
        onProjectClick={handleProjectSelectFromSearch}
        onSkillClick={handleSkillSelectFromSearch}
      />

      {/* Main Views Router */}
      <div className="flex-1 w-full pt-20 md:pt-0">
        {activeTab === "home" && (
          <div className="animate-fade-in space-y-2 md:space-y-4">
            {/* Billboard Hero */}
            <Billboard onPlayClick={() => {
              setSelectedProjectId("multimodal_rag");
              setActiveTab("projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
            
            {/* Active Focus ("Continue Watching") Sprints */}
            <ActiveFocusRail items={ACTIVE_FOCUS_DATA} />

            {/* Curated Rail 1: Trending Now / Blockbuster Matches */}
            <ProjectRail
              title="Trending Now"
              projects={PROJECTS_DATA.filter((p) => p.matchScore >= 96)}
              onProjectClick={(id) => {
                setSelectedProjectId(id);
                setActiveTab("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Resume Credits: Experience and Education Section */}
            <ExperienceEducation />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="animate-fade-in">
            {selectedProjectId ? (
              // Specific Detailed Project page (Project Genesis, etc)
              <ProjectDetailView
                project={PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0]}
                allProjects={PROJECTS_DATA}
                onProjectSelect={setSelectedProjectId}
                onBackClick={() => {
                  setSelectedProjectId(null);
                  setActiveTab("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ) : (
              // Highly Interactive Projects Catalog Browser View (Filters, Sorter, Stats)
              <ProjectsCatalog
                projects={PROJECTS_DATA}
                onProjectSelect={(id) => {
                  setSelectedProjectId(id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            )}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="animate-fade-in">
            <SkillsView categories={SKILLS_DATA} />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="animate-fade-in">
            <ContactView
              onSendMessage={handleSendMessage}
              sentMessages={sentMessages}
              onDeleteMessage={handleDeleteMessage}
            />
          </div>
        )}
      </div>

      {/* Shared Cinematic Footer */}
      <Footer setActiveTab={setActiveTab}/>
    </div>
  );
}
