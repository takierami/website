import { motion } from "motion/react";
import { useState } from "react";
import { useGitHubContributions } from "../../hooks/useGitHubContributions";
import { siteConfig } from "../../config/site";
import { ExternalLink } from "lucide-react";

const getLevelColor = (level: number): string => {
  const colors = [
    "rgb(22, 27, 34)",
    "rgb(14, 68, 41)",
    "rgb(0, 109, 50)",
    "rgb(38, 166, 65)",
    "rgb(57, 211, 83)",
  ];
  return colors[level] || colors[0];
};

export const GitHubContributions = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const { contributions, loading, error, totalContributions, maxDay } = useGitHubContributions();

  const weeks: (typeof contributions)[] = [];
  let currentWeek: typeof contributions = [];

  contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === contributions.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-mono text-white/70">GitHub Activity</h3>
          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="View GitHub profile"
          >
            <ExternalLink size={14} />
          </a>
        </div>
        {!loading && !error && (
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-cyan-400">{totalContributions} contributions</span>
            <span className="text-purple-400">Max: {maxDay}/day</span>
          </div>
        )}
      </div>

      {loading && (
        <div className="flex gap-1 overflow-hidden" aria-label="Loading GitHub contributions">
          {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-2.5 h-2.5 rounded-sm bg-white/10 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm font-mono text-white/50">
          Unable to load live GitHub data.{" "}
          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View profile on GitHub
          </a>
        </p>
      )}

      {!loading && !error && contributions.length > 0 && (
        <div className="flex gap-1 overflow-x-auto pb-2" role="img" aria-label="GitHub contribution heatmap">
          {weeks.slice(-52).map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day) => {
                const isHovered = hoveredDay === day.date;
                return (
                  <motion.div
                    key={day.date}
                    className="relative group"
                    onMouseEnter={() => setHoveredDay(day.date)}
                    onMouseLeave={() => setHoveredDay(null)}
                    whileHover={{ scale: 1.5, zIndex: 10 }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-sm transition-all"
                      style={{
                        backgroundColor: getLevelColor(day.level),
                        boxShadow: isHovered ? `0 0 10px ${getLevelColor(day.level)}` : "none",
                      }}
                    />
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 rounded text-xs whitespace-nowrap z-20 border border-white/20"
                      >
                        <div className="font-mono text-cyan-400">{day.count} contributions</div>
                        <div className="font-mono text-white/60">{day.date}</div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {!loading && !error && contributions.length > 0 && (
        <div className="flex items-center justify-end gap-2 mt-3 text-xs font-mono text-white/40">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: getLevelColor(level) }}
            />
          ))}
          <span>More</span>
        </div>
      )}
    </motion.div>
  );
};
