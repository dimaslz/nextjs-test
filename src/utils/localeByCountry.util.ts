const localeByCountry = (country: string) => {
	const Default = 'es-ES';

	return {
		ES: Default,
		UK: 'en-GB',
		FR: 'fr-FR',
	}[country] || Default;
};

export default localeByCountry;