
export default function Footer({setActiveTab}:{
    setActiveTab: (tab: "home" | "projects" | "skills" | "contact") => void;
}){
    return(
        <footer className="w-full py-12 mt-auto border-t border-white/5 bg-surface-container-lowest text-secondary text-sm">
        <div className="max-w-7xl mx-auto px-[4%] md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-4 mb-4">
            <span className="font-bebas text-3xl text-primary-container tracking-tighter">DEVFLIX</span>
            <p className="text-xs text-secondary/50 mt-1">Immersive Developer Portfolios | Built with Code.</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Company</span>
            <a href="#privacy" className="hover:underline hover:text-on-surface text-secondary/80">Privacy Policy</a>
            <a href="#terms" className="hover:underline hover:text-on-surface text-secondary/80">Terms of Use</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Production</span>
            <a href="#preferences" className="hover:underline hover:text-on-surface text-secondary/80">Cookie Preferences</a>
            <a href="#jobs" className="hover:underline hover:text-on-surface text-secondary/80">Corporate Jobs</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Media Center</span>
            <a href="#press" className="hover:underline hover:text-on-surface text-secondary/80">Press Kits</a>
            <a href="#contact-us" className="hover:underline hover:text-on-surface text-secondary/80" onClick={(e) => { e.preventDefault(); setActiveTab("contact"); }}>Contact Support</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-white/95 text-xs uppercase tracking-widest mb-1">Interactive</span>
            <a href="#skills" className="hover:underline hover:text-on-surface text-secondary/80" onClick={(e) => { e.preventDefault(); setActiveTab("skills"); }}>Skills Deck</a>
            <a href="#projects" className="hover:underline hover:text-on-surface text-secondary/80" onClick={(e) => { e.preventDefault(); setActiveTab("projects"); }}>Catalog Titles</a>
          </div>

          <div className="col-span-2 md:col-span-4 mt-8 pt-8 border-t border-white/5 text-xs text-secondary/45 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Developer Portfolio (Karam Arora). All rights reserved. Built natively with React and Tailwind CSS v4.</p>
            <p className="font-mono text-[10px]">SERVICE STATUS: STABLE ONLINE</p>
          </div>
        </div>
      </footer>
    )
}
    