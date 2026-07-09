import { useEffect } from "react";
import { siteConfig } from "../config/site";

interface PageSEOOptions {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function usePageSEO({ title, description, path = "", noIndex = false }: PageSEOOptions) {
  useEffect(() => {
    const isHome = path === "/" || path === "";
    const fullTitle = isHome ? siteConfig.tabTitle : `${title} | ${siteConfig.tabTitle}`;
    const desc = description ?? siteConfig.description;
    const url = `${siteConfig.url}${path}`;
    const image = `${siteConfig.url}${siteConfig.ogImage}`;

    document.title = fullTitle;
    setMeta("description", desc);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);

    setMeta("og:title", fullTitle, true);
    setMeta("og:description", desc, true);
    setMeta("og:url", url, true);
    setMeta("og:image", image, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", siteConfig.name, true);
    setMeta("og:locale", siteConfig.locale, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", image);
    if (siteConfig.twitterHandle) {
      setMeta("twitter:site", siteConfig.twitterHandle);
    }
  }, [title, description, path, noIndex]);
}
