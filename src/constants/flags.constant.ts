const FLAGS = {
	'en-GB': '🇬🇧',
	'es-ES': '🇪🇸',
	'fr-FR': '🇫🇷',
} as const;

export default FLAGS;
export type FlagKey = keyof typeof FLAGS;
export type FlagValue = (typeof FLAGS)[FlagKey];