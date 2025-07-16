/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // This matches any hostname (use with caution)
            },
        ],
    },
    webpack: (config) => {
        config.module.exprContextCritical = false;
        return config;
    },
    allowedDevOrigins: [
        "localhost",
        "http://localhost:3010",
        "https://internal.divmac.pt/",
        "https://prix-exam-tone-situation.trycloudflare.com",
    ],
};

export default nextConfig;
