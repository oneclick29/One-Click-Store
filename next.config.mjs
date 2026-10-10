/** @type {import('next').NextConfig} */
const nextConfig = {};

// Allow the Base44 preview origin in dev mode
if (process.env.BASE44_PREVIEW_MODE === "1" && process.env.BASE44_PUBLIC_HOST_SUFFIX) {
  nextConfig.allowedDevOrigins = [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`];
}

export default nextConfig;
