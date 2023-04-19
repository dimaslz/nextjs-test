/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['default', 'es-ES', 'fr-FR', 'en-GB'],
		defaultLocale: 'default',
		localeDetection: false,
	},
};

module.exports = nextConfig;
