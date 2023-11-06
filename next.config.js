/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '**'
			}
		],
		unoptimized: true
	},
	trailingSlash: true
};

export default nextConfig;
