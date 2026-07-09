import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import { ScrollProgress } from "../ui/ScrollProgress";
import { Footer } from "../ui/Footer";
import { BackToTop } from "../ui/BackToTop";
import { motion, AnimatePresence } from "motion/react";

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:rounded-lg focus:font-mono focus:text-sm"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navigation />
      <BackToTop />
      
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Grid background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};