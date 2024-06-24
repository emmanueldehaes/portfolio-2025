import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

const sentryWebpackPluginOptions = {
    // General options for all environments
    silent: true, // Suppresses source map uploading logs during build
    hideSourceMaps: true, // Hides source maps from generated client bundles
    disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
    widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces (increases build time)
    automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors.

    // Specific organization and project configuration
    org: "gloweste", // Ensure this is consistent with your Sentry organization
    project: "javascript-nextjs",

    // Uncomment and configure as necessary
    // tunnelRoute: "/monitoring", // Use this to route Sentry through a Next.js rewrite
    // transpileClientSDK: true, // Transpile SDK for older browsers compatibility, such as IE11
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
