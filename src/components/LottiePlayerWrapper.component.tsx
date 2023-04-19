import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';
import { RefObject, useCallback, useEffect, useRef } from "react";

const LottiePlayerWrapper = ({
	src,
	observeTo,
	loop = true
}: {
		src: string | object;
		observeTo?: RefObject<HTMLElement>;
		loop: boolean;
	}) => {
	const lottiePlayerRef = useRef<LottiePlayer>(null);

	const intersectionObserverCallback = useCallback((entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if (!entry.isIntersecting) {
				lottiePlayerRef.current?.pause()

				return
			}

			lottiePlayerRef.current?.play()
		})
	}, [lottiePlayerRef]);

	useEffect(() => {
		if (!lottiePlayerRef.current) return;

    const observer = new IntersectionObserver(intersectionObserverCallback, {});

		let observeToRef: any;
		if (observeTo && "current" in observeTo) {
			observeToRef = observeTo.current;
			observer.observe(observeToRef)
		} else if(lottiePlayerRef.current) {
			observeToRef = lottiePlayerRef.current.container;
			observer.observe(observeToRef)
		}


		return () => {
      if (observeToRef) observer.unobserve(observeToRef);
    }
	}, [
		observeTo,
		lottiePlayerRef,
		intersectionObserverCallback,
	]);

	return <LottiePlayer
		ref={lottiePlayerRef}
		src={src}
		loop={loop}
	/>
}

export default LottiePlayerWrapper;