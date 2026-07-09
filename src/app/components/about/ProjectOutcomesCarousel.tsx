import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import type { ProjectOutcome } from "../../types";

interface ProjectOutcomesCarouselProps {
  outcomes: ProjectOutcome[];
}

export const ProjectOutcomesCarousel = ({ outcomes }: ProjectOutcomesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % outcomes.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + outcomes.length) % outcomes.length);
  const current = outcomes[currentIndex];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-8 sm:p-12">
        <TrendingUp className="absolute top-8 left-8 text-cyan-400/20" size={64} aria-hidden="true" />

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full font-mono text-xs text-cyan-400">
              {current.industry}
            </span>
            <span className="font-mono text-sm text-white/50">{current.project}</span>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">{current.highlight}</p>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
            {current.content}
          </p>

          {current.demo && (
            <a
              href={current.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
            >
              View live project
              <ExternalLink size={16} />
            </a>
          )}
        </motion.div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous outcome"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2 flex-1 justify-center" role="tablist" aria-label="Project outcomes">
            {outcomes.map((outcome, index) => (
              <button
                key={outcome.id}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`${outcome.project} outcome`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next outcome"
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
