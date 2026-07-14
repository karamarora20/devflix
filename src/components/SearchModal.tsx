/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Project, SkillCategory } from "../types";
import { Search, Film, Award, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  skillsCategories: SkillCategory[];
  onProjectClick: (id: string) => void;
  onSkillClick: (skillId: string, categoryId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  projects,
  skillsCategories,
  onProjectClick,
  onSkillClick,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const flattenedSkills = skillsCategories.flatMap((cat) => 
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id }))
  );

  const filteredProjects = query
    ? projects.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.genres.some((g) => g.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const filteredSkills = query
    ? flattenedSkills.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.details.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleProjectSelect = (id: string) => {
    onProjectClick(id);
    setQuery("");
    onClose();
  };

  const handleSkillSelect = (skillId: string, categoryId: string) => {
    // Find skill category card and trigger its display
    onSkillClick(skillId, categoryId);
    setQuery("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-start justify-center pt-[15vh] px-4">
      <div className="max-w-2xl w-full bg-surface-container-low rounded-lg border border-white/10 overflow-hidden shadow-2xl">
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-surface-container-high">
          <Search className="w-5 h-5 text-secondary" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none focus:ring-0 text-on-surface text-base placeholder-secondary/50 font-sans"
            placeholder="Search titles, tech stack, genres, skills..."
            autoFocus
          />
          <button 
            onClick={onClose}
            className="text-secondary hover:text-white font-medium text-xs font-mono border border-white/10 px-2.5 py-1 rounded hover:bg-white/5 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-[50vh] overflow-y-auto pr-2 hide-scrollbar font-sans">
          {!query ? (
            <div className="text-center py-10 text-secondary/60">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40 text-secondary" />
              <p className="text-sm">Type anything to explore Karam's credentials instantly.</p>
              <div className="flex justify-center gap-2 mt-4 flex-wrap text-xs">
                <span className="bg-white/5 px-2.5 py-1 rounded cursor-pointer hover:bg-white/10 text-secondary/95" onClick={() => setQuery("FastAPI")}>FastAPI</span>
                <span className="bg-white/5 px-2.5 py-1 rounded cursor-pointer hover:bg-white/10 text-secondary/95" onClick={() => setQuery("Python")}>Python</span>
                <span className="bg-white/5 px-2.5 py-1 rounded cursor-pointer hover:bg-white/10 text-secondary/95" onClick={() => setQuery("DynamoDB")}>DynamoDB</span>
                <span className="bg-white/5 px-2.5 py-1 rounded cursor-pointer hover:bg-white/10 text-secondary/95" onClick={() => setQuery("AWS")}>AWS</span>
              </div>
            </div>
          ) : filteredProjects.length === 0 && filteredSkills.length === 0 ? (
            <div className="text-center py-10 text-secondary/60">
              <p className="text-sm">No series matching "{query}" found in production.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Projects Results */}
              {filteredProjects.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-2">
                    <Film className="w-4 h-4 text-primary-container" />
                    Recommended Projects ({filteredProjects.length})
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {filteredProjects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleProjectSelect(p.id)}
                        className="flex items-center justify-between p-3 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={p.posterUrl} alt={p.title} className="w-10 h-14 object-cover rounded" referrerPolicy="no-referrer" />
                          <div>
                            <span className="text-green-500 font-bold text-xs">{p.matchScore}% Match</span>
                            <h5 className="font-semibold text-sm text-on-surface group-hover:text-primary-container transition-colors">{p.title}</h5>
                            <p className="text-xs text-secondary/70 truncate max-w-sm">{p.genres.join(" • ")}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Results */}
              {filteredSkills.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary-container" />
                    Skills in Production ({filteredSkills.length})
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {filteredSkills.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => handleSkillSelect(s.id, s.categoryId)}
                        className="flex items-center justify-between p-3 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={s.imageUrl} alt={s.title} className="w-14 h-9 object-cover rounded" referrerPolicy="no-referrer" />
                          <div>
                            <span className="text-primary-container font-semibold text-xs tracking-wide uppercase">{s.level}</span>
                            <h5 className="font-semibold text-sm text-on-surface group-hover:text-primary-container transition-colors">{s.title}</h5>
                            <p className="text-xs text-secondary/70 truncate max-w-sm">{s.details}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
