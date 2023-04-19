import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import LocaleLink from '@/components/LocaleLink.component';
import FLAGS, { FlagKey, FlagValue } from '@/constants/flags.constant';

export default function Home() {
	const router = useRouter();
	const [countryFlag, setCountryFlag] = useState<FlagValue>();

	const updateLocaleCache = useCallback((locale: FlagKey) => {
		setCountryFlag(FLAGS[locale]);
		localStorage.setItem('locale', locale);
	}, []);

	useEffect(() => {
		if (router.locale) {
			setCountryFlag(FLAGS[router.locale as FlagKey]);
		}
	}, [router]);


	return (<>
		<div className="fixed top-0 right-0 p-4">
			<Link href="/lottie-example/1" className="text-teal-600 hover:text-teal-400">
        Lottie examples
			</Link>
		</div>

		<main className="flex min-h-screen flex-col items-center justify-center w-full">
			<h1 className="text-6xl">HOME</h1>
			<div>locale: <span className="font-mono">{router.locale} {countryFlag}</span></div>

			<div className="mt-12 space-x-4 flex">
				<LocaleLink
					href="/"
					locale="es-ES"
					className="text-center"
					onClick={updateLocaleCache}
				>
					<div>spain</div>
					<div>{FLAGS['es-ES']}</div>
				</LocaleLink>
				<LocaleLink
					href="/"
					locale="fr-FR"
					className="text-center"
					onClick={updateLocaleCache}
				>
					<div>france</div>
					<div>{FLAGS['fr-FR']}</div>
				</LocaleLink>
				<LocaleLink
					href="/"
					locale="en-GB"
					className="text-center"
					onClick={updateLocaleCache}
				>
					<div>england</div>
					<div>{FLAGS['en-GB']}</div>
				</LocaleLink>
			</div>
		</main>
	</>
	);
}
