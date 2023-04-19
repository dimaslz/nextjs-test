import LocaleLink from '@/components/LocaleLink.component';
import FLAGS, { FlagKey } from '@/constants/flags.constant';
import { useCallback } from 'react';

const CountryNavigator = () => {
	const updateLocaleCache = useCallback((locale: FlagKey) => {
		localStorage.setItem('locale', locale);
	}, []);

	return (
		<div className="fixed bottom-0 left-0 text-black p-4 space-x-4">
			<LocaleLink
				locale="es-ES"
				className="text-center hover:opacity-60"
				onClick={updateLocaleCache}
			>
				{FLAGS['es-ES']}
			</LocaleLink>
			<LocaleLink
				locale="fr-FR"
				className="text-center hover:opacity-60"
				onClick={updateLocaleCache}
			>
				{FLAGS['fr-FR']}
			</LocaleLink>
			<LocaleLink
				locale="en-GB"
				className="text-center hover:opacity-60"
				onClick={updateLocaleCache}
			>
				{FLAGS['en-GB']}
			</LocaleLink>
		</div>
	);
};

export default CountryNavigator;