/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'export',
	distDir: 'out',
	images: { unoptimized: true },
	trailingSlash: true
};

export default nextConfig;
