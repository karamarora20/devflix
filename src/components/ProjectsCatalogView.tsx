import { Project } from "../types";
import { MY_PROFILE } from "../data";

interface ProjectsCatalogViewProps {
  projects: Project[];
  onProjectSelect: (id: string) => void;
}

export default function ProjectsCatalogView({
  projects,
  onProjectSelect,
}: ProjectsCatalogViewProps) {
  return (
    <section className="relative min-h-[85vh] w-full py-24 overflow-hidden">
      {/* Background image backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-102"
          style={{ backgroundImage: `url('${MY_PROFILE.workspaceBackground}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-[4%] md:px-12">
        <div className="mb-12">
          <h1 className="font-bebas text-5xl md:text-7xl text-on-surface tracking-wide uppercase">
            Catalog Titles
          </h1>
          <p className="text-secondary text-sm max-w-md mt-2">
            Browse my developer portfolio "Original Series" releases. Filter by matches, stacks, or completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                onProjectSelect(p.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-surface-container-high rounded-md overflow-hidden cursor-pointer group border border-white/5 hover:border-primary-container/30 transition-all duration-300 shadow hover:scale-[1.03]"
            >
              <div className="aspect-[2/3] overflow-hidden relative">
                <img
                  src={p.posterUrl}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/15 transition-colors flex items-end p-4">
                  <span className="text-xs font-bold text-green-500 bg-black/70 backdrop-blur px-2 py-1 rounded">
                    {p.matchScore}% Match
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-xs text-secondary/70">
                  <span>{p.year}</span>
                  <span className="font-mono text-[10px] text-primary-container font-semibold bg-primary-container/10 px-1.5 py-0.5 rounded">
                    {p.level}
                  </span>
                </div>
                <h3 className="font-bebas text-2xl text-on-surface tracking-wide group-hover:text-primary-container transition-colors truncate">
                  {p.title}
                </h3>
                <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex gap-1 pt-2">
                  {p.genres.slice(0, 2).map((g) => (
                    <span key={g} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-secondary/95">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
