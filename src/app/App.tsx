import { motion, AnimatePresence } from "motion/react";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";
import { useSectionNavigation } from "./hooks/useSectionNavigation";
import "./styles.css";

type Section = "about" | "work" | "contact";

const sections: Section[] = ["about", "work", "contact"];

function App() {
  const { active: activeSection, setActive: scrollToSection } =
    useSectionNavigation({
      sections,
      initial: "about",
    });

  return (
    <div className="app-container">
      {/* Right Side Navigation Panel */}
      <nav className="nav-panel">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`nav-item ${activeSection === section ? "active" : ""}`}
          >
            {activeSection === section && (
              <span className="nav-triangle">▶</span>
            )}
            <span
              className={
                activeSection === section ? "nav-text-active" : "nav-text"
              }
            >
              {section.toUpperCase()}
            </span>
          </button>
        ))}
      </nav>

      {/* Sections */}
      <main>
        <section className="section">
          <AnimatePresence mode="wait">
            {activeSection === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <AboutSection />
              </motion.div>
            )}
            {activeSection === "work" && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <WorkSection />
              </motion.div>
            )}
            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ContactSection />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

export default App;
