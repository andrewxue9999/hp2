import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const isVercel = process.env.VERCEL === "1";

export default function nextConfig(phase: string): NextConfig {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    distDir: isVercel ? ".next" : isDevelopmentServer ? ".next-dev" : ".next-build",
  };
}
