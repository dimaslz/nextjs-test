import dynamic from 'next/dynamic';
import Link from 'next/link';

const CustomLottie = dynamic(
	() => import('@/components/CustomLottie.component'),
	{ ssr: false },
);

export default function Home() {

	return (<>
		<div className="fixed top-0 left-0 p-4 z-10 space-x-4 text-sm">
			<Link href="/" className="text-teal-600 hover:text-teal-400">
        home
			</Link>
		</div>

		<div className="fixed top-0 right-0 p-4 z-10 space-x-4 text-sm">
			<Link href="/lottie-example/1" className="text-teal-600 hover:text-teal-400 z-10">
        Lottie example #1
			</Link>
			<Link href="/lottie-example/1x" className="text-teal-600 hover:text-teal-400 z-10">
        Lottie example #1x
			</Link>
		</div>

		<header>
			<ul className="space-x-4 flex items-center justify-center p-6 fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-15">
				<li><Link href="#section1">section 1</Link></li>
				<li><Link href="#section2">section 2</Link></li>
				<li><Link href="#section3">section 3</Link></li>
			</ul>
		</header>
		<main className="flex min-h-screen flex-col items-center justify-between">
			<section
				id="section1"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 1</div>
				<p className="text-sm">start animation only on scroll</p>
				<CustomLottie
					src="https://assets3.lottiefiles.com/packages/lf20_jeZMJEoXD0.json"
					type="loop"
				/>
			</section>

			<section
				id="section2"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 2</div>
				<CustomLottie
					src="https://assets3.lottiefiles.com/packages/lf20_eSr9cajwxS.json"
					type="loop"
				/>
			</section>

			<section
				id="section3"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 3</div>
				<CustomLottie
					src="https://assets9.lottiefiles.com/private_files/lf30_fpxjxaot.json"
					type="loop"
				/>
			</section>

		</main>
	</>
	);
}
