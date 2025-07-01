/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**", // This matches any hostname (use with caution)
            },
        ],
    },
    webpack: (config) => {
        config.module.exprContextCritical = false;
        return config;
    },
    allowedDevOrigins: ['localhost', 'https://sg-bangladesh-japan-dealt.trycloudflare.com/images',
        'http://localhost:3010', 'https://internal.divmac.pt/']
};

export default nextConfig;
