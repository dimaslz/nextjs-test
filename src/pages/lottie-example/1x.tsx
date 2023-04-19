import { useRef } from 'react';
import AnimationSection1 from '@/assets/AnimationSection1.json';
import AnimationSection3 from '@/assets/AnimationSection3.json';
import LottiePlayerWrapper from '@/components/LottiePlayerWrapper.component';
import Link from 'next/link';


export default function Home() {
	const sectionRef1 = useRef<HTMLDivElement>(null);
	const sectionRef2 = useRef<HTMLDivElement>(null);
	const sectionRef3 = useRef<HTMLDivElement>(null);

	return (<>
		<div className="fixed top-0 left-0 p-4 z-10 space-x-4 text-sm">
			<Link href="/" className="text-teal-600 hover:text-teal-400">
        home
			</Link>
		</div>

		<div className="fixed top-0 right-0 p-4 z-10 space-x-4 text-sm">
			<Link href="/lottie-example/1" className="text-teal-600 hover:text-teal-400">
        Lottie example #1
			</Link>
			<Link href="/lottie-example/2" className="text-teal-600 hover:text-teal-400">
        Lottie example #2
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
				ref={sectionRef1}
				id="section1"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 1</div>
				<p className="text-sm">use animation by JSON Object</p>
				<p className="text-sm">start animation on load page</p>
				<LottiePlayerWrapper
					observeTo={sectionRef1}
					src={AnimationSection1}
					loop
				/>
			</section>

			<section
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">NO IMAGES</div>
			</section>

			<section
				ref={sectionRef2}
				id="section2"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 2</div>
				<p className="text-sm">use animation by url .json file</p>
				<p className="text-sm">start animation on is visible</p>
				<LottiePlayerWrapper
					src="https://assets9.lottiefiles.com/packages/lf20_PLHgmd.json"
					loop
				/>
			</section>

			<section
				ref={sectionRef3}
				id="section3"
				className="flex w-full h-screen justify-center items-center flex-col"
			>
				<div className="text-4xl text-white uppercase">section 3</div>
				<p className="text-sm">use animation by JSON Object</p>
				<p className="text-sm">start animation on is visible</p>
				<p className="text-sm">pause animation on is not visible</p>
				<LottiePlayerWrapper
					observeTo={sectionRef3}
					src={AnimationSection3}
					loop
				/>
			</section>
		</main>
	</>
	);
}
