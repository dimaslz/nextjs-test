import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { FlagKey } from '@/constants/flags.constant';
import CountryNavigator from '@/components/CountryNavigator.component';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const redirect = useCallback(async () => {
		if (!router.locale) return;

		const currentLocale: string | null = localStorage.getItem('locale') || null;

		if (currentLocale === router.locale) return;
		if (currentLocale) {
			await router.push(
				router.pathname,
				router.pathname,
				{ locale: currentLocale },
			);

			return;
		}

		localStorage.setItem('locale', router.locale as FlagKey);
	}, [router]);

	useEffect(() => {
		redirect();
	}, [router]);

	return (<div>
		<Component {...pageProps} />

		<CountryNavigator />
	</div>);
}
