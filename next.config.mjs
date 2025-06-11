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
    }
};

export default nextConfig;
