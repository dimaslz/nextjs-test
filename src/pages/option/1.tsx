import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';
import { useCallback, useEffect, useRef } from 'react';
import AnimationSection1 from "@/assets/AnimationSection1.json";
import AnimationSection3 from "@/assets/AnimationSection3.json";
import Link from 'next/link';


export default function Home() {
  const imageAnimatedRef1 = useRef<LottiePlayer>(null);
  const imageAnimatedRef2 = useRef<LottiePlayer>(null);
  const imageAnimatedRef3 = useRef<LottiePlayer>(null);
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

	const intersectionObserverCallback = useCallback((entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if (!entry.isIntersecting) {
				if (entry.target.id === "section3") {
					console.log("pause image 3")
					imageAnimatedRef3.current?.pause()
				}

				return
			};

			if (entry.target.id === "section1") {
				console.log("run image 1")
				imageAnimatedRef1.current?.play()
			}
			if (entry.target.id === "section2") {
				console.log("run image 2")
				imageAnimatedRef2.current?.play()
			}
			if (entry.target.id === "section3") {
				console.log("run image 3")
				imageAnimatedRef3.current?.play()
			}
		})
	}, [imageAnimatedRef1, imageAnimatedRef2, imageAnimatedRef3]);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCallback, {});

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current)
    }
    if (sectionRef2.current) {
      observer.observe(sectionRef2.current)
    }
    if (sectionRef3.current) {
      observer.observe(sectionRef3.current)
    }

    return () => {
      if (sectionRef1.current) observer.unobserve(sectionRef1.current);
      if (sectionRef2.current) observer.unobserve(sectionRef2.current);
      if (sectionRef3.current) observer.unobserve(sectionRef3.current);
    }
	}, [
		sectionRef1,
		sectionRef2,
		sectionRef3,
		intersectionObserverCallback,
	]);

	return (<>
		<header>
			<ul className='space-x-4 flex items-center justify-center p-6 fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-15'>
				<li><Link href="#section1">section 1</Link></li>
				<li><Link href="#section2">section 2</Link></li>
				<li><Link href="#section3">section 3</Link></li>
			</ul>
		</header>
    <main className="flex min-h-screen flex-col items-center justify-between">
			<section
				ref={sectionRef1}
				id="section1"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 1</div>
				<p className='text-sm'>use animation by JSON Object</p>
				<p className='text-sm'>start animation on load page</p>
				<LottiePlayer
					ref={imageAnimatedRef1}
					src={AnimationSection1}
					loop
				/>
			</section>

			<section
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>NO IMAGES</div>
			</section>

			<section
				ref={sectionRef2}
				id="section2"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 2</div>
				<p className='text-sm'>use animation by url .json file</p>
				<p className='text-sm'>start animation on is visible</p>
				<LottiePlayer
					ref={imageAnimatedRef2}
					src="https://assets9.lottiefiles.com/packages/lf20_PLHgmd.json"
					loop
				/>
			</section>

			<section
				ref={sectionRef3}
				id="section3"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 3</div>
				<p className='text-sm'>use animation by JSON Object</p>
				<p className='text-sm'>start animation on is visible</p>
				<p className='text-sm'>pause animation on is not visible</p>
				<LottiePlayer
					ref={imageAnimatedRef3}
					src={AnimationSection3}
					loop
				/>
			</section>
    </main>
	</>
  )
}
