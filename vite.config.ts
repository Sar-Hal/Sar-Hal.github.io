import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0]?.toLowerCase() ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]?.toLowerCase() ?? "";
const isUserSiteRepo = repositoryName === `${repositoryOwner}.github.io`;
const githubPagesBase = isUserSiteRepo ? "/" : `/${repositoryName}/`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_ACTIONS === "true" ? githubPagesBase : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
