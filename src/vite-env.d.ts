/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_WEB3FORMS_KEY: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_PLAUSIBLE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
