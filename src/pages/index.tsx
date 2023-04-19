import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

type Flags = {
  [key: string]: string
};

const flags: Flags = {
  "en-GB": "🇬🇧",
  "es-ES": "🇪🇸",
  "fr-FR": "🇫🇷",
}
export default function Home() {
  const router = useRouter();
  const [countryFlag, setCountryFlag] = useState<string>();

  useEffect(() => {
    if (!router.locale) return;

    const currentLocale: string | null = localStorage.getItem("locale") || null;

    if (currentLocale === router.locale) return;
    if (currentLocale) {
      router.push(router.pathname, router.pathname, { locale: currentLocale });
    }

    localStorage.setItem("locale", router.locale);
    setCountryFlag(flags[router.locale])
  }, [])

  useEffect(() => {
    if (router.locale) {
      localStorage.setItem("locale", router.locale);
      setCountryFlag(flags[router.locale])
    }
  }, [router])

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
        <Link href="/" locale="es-ES" className="text-center">
          <div>spain</div>
          <div>{flags["es-ES"]}</div>
        </Link>
        <Link href="/" locale="fr-FR" className="text-center">
          <div>france</div>
          <div>{flags["fr-FR"]}</div>
        </Link>
        <Link href="/" locale="en-GB" className="text-center">
          <div>england</div>
          <div>{flags["en-GB"]}</div>
        </Link>
      </div>
    </main>
  </>
  )
}
