import { useEffect, useState } from "react";
import type { GitHubContribution } from "../types";
import { siteConfig } from "../config/site";

interface GitHubApiDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubApiResponse {
  contributions: GitHubApiDay[];
  total?: { [year: string]: number };
}

function toContribution(day: GitHubApiDay): GitHubContribution {
  return {
    date: day.date,
    count: day.count,
    level: Math.min(4, Math.max(0, day.level)) as GitHubContribution["level"],
  };
}

export function useGitHubContributions() {
  const [contributions, setContributions] = useState<GitHubContribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${siteConfig.githubUsername}?y=last`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("GitHub API unavailable");

        const data: GitHubApiResponse = await response.json();
        setContributions(data.contributions.map(toContribution));
        setError(false);
      } catch {
        if (!controller.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchContributions();
    return () => controller.abort();
  }, []);

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const maxDay = contributions.reduce((max, day) => Math.max(max, day.count), 0);

  return { contributions, loading, error, totalContributions, maxDay };
}
