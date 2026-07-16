
export default function Footer({setActiveTab}:{
    setActiveTab: (tab: "home" | "projects" | "skills" | "contact") => void;
}){
    const handleTabClick = (tab: "home" | "projects" | "skills" | "contact") => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <footer className="w-full py-12 mt-auto border-t border-white/5 bg-surface-container-lowest text-secondary text-sm">
        <div className="max-w-7xl mx-auto px-[4%] md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-4 md:mb-0">
            <span className="font-bebas text-3xl text-primary-container tracking-tighter">PORTFOLIO</span>
            <p className="text-xs text-secondary/50 mt-1">Immersive Developer Portfolio of Karam Arora.</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Navigation</span>
            <button 
              onClick={() => handleTabClick("home")} 
              className="text-left hover:underline hover:text-on-surface text-secondary/80 cursor-pointer"
            >
              Home Stream
            </button>
            <button 
              onClick={() => handleTabClick("projects")} 
              className="text-left hover:underline hover:text-on-surface text-secondary/80 cursor-pointer"
            >
              Projects Catalog
            </button>
            <button 
              onClick={() => handleTabClick("skills")} 
              className="text-left hover:underline hover:text-on-surface text-secondary/80 cursor-pointer"
            >
              Mastery Skills
            </button>
            <button 
              onClick={() => handleTabClick("contact")} 
              className="text-left hover:underline hover:text-on-surface text-secondary/80 cursor-pointer"
            >
              Contact Director
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Profiles</span>
            <a 
              href="https://github.com/karamarora20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-on-surface text-secondary/80"
            >
              GitHub Codebases
            </a>
            <a 
              href="https://www.linkedin.com/in/karam-arora-896952200/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-on-surface text-secondary/80"
            >
              LinkedIn Network
            </a>
            <a 
              href="https://leetcode.com/u/arorakaram41" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-on-surface text-secondary/80"
            >
              LeetCode Profile
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Connect</span>
            <a 
              href="mailto:karam.arora2002@gmail.com" 
              className="hover:underline hover:text-on-surface text-secondary/80 break-all"
            >
              karam.arora2002@gmail.com
            </a>
            <a 
              href="tel:+91-8368055676" 
              className="hover:underline hover:text-on-surface text-secondary/80"
            >
              +91 83680 55676
            </a>
            <a 
              href="https://drive.google.com/file/d/1lfaIxNrlx4yEGvB8Bmnc4nuzgQ91gY8Y/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-on-surface text-secondary/80"
            >
              Resume PDF Link
            </a>
          </div>

          <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-white/5 text-xs text-secondary/45 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Karam Arora (SDE 1 Backend &amp; AI Systems). All rights reserved. Built with React &amp; Tailwind CSS.</p>
            <p className="font-mono text-[10px]">PRODUCTION ENGINES: STABLE</p>
          </div>
        </div>
      </footer>
    )
}
    