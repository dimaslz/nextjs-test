import { NextRequest, NextResponse } from 'next/server'
import localeByCountry from "./utils/localeByCountry.util";

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
	if (
		req.nextUrl.pathname.startsWith('/_next') ||
		req.nextUrl.pathname.includes('/api/') ||
		PUBLIC_FILE.test(req.nextUrl.pathname)
	) {
		return
	}

	console.log("GEO", req.geo);
	console.log("Country", req.geo?.country);
	console.log("Locale", req.nextUrl.locale);

	if (req.geo?.country) {
		const locale = localeByCountry(req.geo?.country);

		console.log("Locale", locale, req.nextUrl.locale);
		if (req.nextUrl.locale === locale) return;

		return NextResponse.redirect(
			new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
		)
	}

	if (req.nextUrl.locale === 'default') {
		return NextResponse.redirect(
			new URL(`/es-ES${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
		)
	}
}