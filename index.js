const { useState, useEffect } = React;
const { createRoot } = ReactDOM;
const { Menu, X, Sun, Moon, ExternalLink } = Lucide;

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return React.createElement("div", { className: "min-h-screen" },
    
    // Theme toggle
    React.createElement("button", {
      onClick: () => setDark(!dark),
      className: "fixed top-6 left-6 z-50 w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-sand dark:bg-espresso"
    }, dark ? React.createElement(Sun, { size: 18 }) : React.createElement(Moon, { size: 18 })),

    // Menu toggle
    React.createElement("button", {
      onClick: () => setMenu(!menu),
      className: "fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-sand dark:bg-espresso"
    }, menu ? React.createElement(X, { size: 18 }) : React.createElement(Menu, { size: 18 })),

    // Menu overlay
    menu && React.createElement("div", { className: "fixed inset-0 z-40 bg-sand dark:bg-espresso flex items-center justify-center" },
      React.createElement("div", { className: "text-center space-y-8" },
        ["home","origins","author","writing","notebook","media"].map(id => 
          React.createElement("a", { key: id, href: `#${id}`, onClick: () => setMenu(false), className: "block font-serif text-5xl hover:text-accent" }, id.toUpperCase())
        )
      )
    ),

    // HERO
    React.createElement("section", { id: "home", className: "h-screen flex items-center justify-center text-center px-6" },
      React.createElement("div", null,
        React.createElement("h1", { className: "font-serif text-5xl md:text-7xl font-black mb-8" }, "Creative Instincts ", React.createElement("span", { className: "text-accent" }, "//"), " STEM Brain"),
        React.createElement("p", { className: "font-mono tracking-widest opacity-60" }, "ADITYA NEIL BANERJEE — CLASS OF 2027")
      )
    ),

    // ORIGINS
    React.createElement("section", { id: "origins", className: "py-32 text-center" },
      React.createElement("h2", { className: "font-serif text-6xl mb-12" }, "Global Origins"),
      React.createElement("p", { className: "max-w-3xl mx-auto opacity-70" }, "Brazil. USA. Portugal. India. Identity forged through movement, contradiction, and density.")
    ),

    // AUTHOR
    React.createElement("section", { id: "author", className: "py-32 bg-accent text-espresso text-center" },
      React.createElement("h2", { className: "font-serif text-6xl mb-6" }, "The Weight of a Cloud"),
      React.createElement("p", { className: "max-w-xl mx-auto mb-8" }, "A debut poetry collection exploring home, absence, and inheritance."),
      React.createElement("a", { href: "https://www.amazon.com/Weight-Cloud-Other-Poems-ebook/dp/B0FXGLB1W7/", target: "_blank", className: "inline-flex items-center gap-2 font-bold underline" },
        "Amazon ", React.createElement(ExternalLink, { size: 16 })
      )
    ),

    // WRITING
    React.createElement("section", { id: "writing", className: "py-32 text-center" },
      React.createElement("h2", { className: "font-serif text-6xl mb-12" }, "Writing"),
      React.createElement("ul", { className: "space-y-4 font-mono opacity-70" },
        React.createElement("li", null, "New York Times — How to Be a Stargazer"),
        React.createElement("li", null, "Stanford OHS Observer — Overwhelmed"),
        React.createElement("li", null, "Stanford OHS Observer — The Rent Question")
      )
    ),

    // NOTEBOOK
    React.createElement("section", { id: "notebook", className: "py-32 bg-sand/10 dark:bg-white/5 text-center" },
      React.createElement("h2", { className: "font-serif text-6xl mb-12" }, "Notebook"),
      React.createElement("p", { className: "max-w-2xl mx-auto opacity-70" }, "Essays on AI, identity, systems, and modern attention.")
    ),

    // MEDIA
    React.createElement("section", { id: "media", className: "py-32 text-center" },
      React.createElement("h2", { className: "font-serif text-6xl mb-12" }, "Sound & Vision"),
      React.createElement("p", { className: "opacity-70" }, "Spotify curation & photography archives.")
    ),

    // FOOTER
    React.createElement("footer", { className: "py-24 bg-accent text-espresso text-center" },
      React.createElement("h3", { className: "font-serif text-4xl mb-4" }, "ADITYA NEIL BANERJEE"),
      React.createElement("p", { className: "font-mono text-sm" }, "No cookies. No tracking. © 2027")
    )
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
