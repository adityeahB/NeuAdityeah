import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Menu, X, Sun, Moon, ExternalLink } from "lucide-react";

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div>

      {/* THEME TOGGLE */}
      <button onClick={() => setDark(!dark)}
        className="fixed top-6 left-6 z-50 w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-sand dark:bg-espresso">
        {dark ? <Sun size={18}/> : <Moon size={18}/>}
      </button>

      {/* MENU TOGGLE */}
      <button onClick={() => setMenu(!menu)}
        className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-sand dark:bg-espresso">
        {menu ? <X size={18}/> : <Menu size={18}/>}
      </button>

      {/* MENU OVERLAY */}
      {menu && (
        <div className="fixed inset-0 z-40 bg-sand dark:bg-espresso flex items-center justify-center">
          <div className="text-center space-y-8">
            {["home","origins","author","writing","notebook","media"].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}
                className="block font-serif text-5xl hover:text-accent">
                {id.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl font-black mb-8">
            Creative Instincts <span className="text-accent">//</span> STEM Brain
          </h1>
          <p className="font-mono tracking-widest opacity-60">
            ADITYA NEIL BANERJEE — CLASS OF 2027
          </p>
        </div>
      </section>

      {/* ORIGINS */}
      <section id="origins" className="py-32 text-center">
        <h2 className="font-serif text-6xl mb-12">Global Origins</h2>
        <p className="max-w-3xl mx-auto opacity-70">
          Brazil. USA. Portugal. India. Identity forged through movement,
          contradiction, and density.
        </p>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-32 bg-accent text-espresso text-center">
        <h2 className="font-serif text-6xl mb-6">The Weight of a Cloud</h2>
        <p className="max-w-xl mx-auto mb-8">
          A debut poetry collection exploring home, absence, and inheritance.
        </p>
        <a href="https://www.amazon.com/Weight-Cloud-Other-Poems-ebook/dp/B0FXGLB1W7/"
           target="_blank"
           className="inline-flex items-center gap-2 font-bold underline">
          Amazon <ExternalLink size={16}/>
        </a>
      </section>

      {/* WRITING */}
      <section id="writing" className="py-32 text-center">
        <h2 className="font-serif text-6xl mb-12">Writing</h2>
        <ul className="space-y-4 font-mono opacity-70">
          <li>New York Times — How to Be a Stargazer</li>
          <li>Stanford OHS Observer — Overwhelmed</li>
          <li>Stanford OHS Observer — The Rent Question</li>
        </ul>
      </section>

      {/* NOTEBOOK */}
      <section id="notebook" className="py-32 bg-sand/10 dark:bg-white/5 text-center">
        <h2 className="font-serif text-6xl mb-12">Notebook</h2>
        <p className="max-w-2xl mx-auto opacity-70">
          Essays on AI, identity, systems, and the failure modes of modern ambition.
        </p>
      </section>

      {/* MEDIA */}
      <section id="media" className="py-32 text-center">
        <h2 className="font-serif text-6xl mb-12">Sound & Vision</h2>
        <p className="opacity-70">Spotify curation & photography archives.</p>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-accent text-espresso text-center">
        <h3 className="font-serif text-4xl mb-4">ADITYA NEIL BANERJEE</h3>
        <p className="font-mono text-sm">No cookies. No tracking. © 2027</p>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
