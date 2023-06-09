import { NextRequest, NextResponse } from 'next/server';
import localeByCountry from './utils/localeByCountry.util';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
	if (
		req.nextUrl.pathname.startsWith('/_next') ||
		req.nextUrl.pathname.includes('/api/') ||
		PUBLIC_FILE.test(req.nextUrl.pathname)
	) {
		return;
	}

	if (req.nextUrl.locale === 'default') {
		if (req.geo?.country) {
			const locale = localeByCountry(req.geo?.country);

			return NextResponse.redirect(
				new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
			);
		}

		return NextResponse.redirect(
			new URL(`/es-ES${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
		);
	}

	return NextResponse.rewrite(
		new URL(`/${req.nextUrl.locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
	);
}
