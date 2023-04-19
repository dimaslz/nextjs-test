import { useRef, useEffect, useCallback } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
/**
 *
 * @param {*} props
 * @returns
 */
const App = ({ type = "loop", src }: { type: string; src: string | object }) => {
  const myRef = useRef<HTMLDivElement>(null);
  const uuid = crypto.randomUUID();

  const onLoad = useCallback(() => {
    create({
      mode: 'scroll',
      player: `#lottie-${uuid}`,
      actions: [
        {
          visibility: [0, 100],
          type,
          frames: [0, 100],
        },
      ],
    });
  }, [type, uuid]);

  useEffect(() => {
    if (!myRef.current) return;

    myRef.current?.addEventListener('load', onLoad);

    return () => {
      myRef?.current?.removeEventListener('load', onLoad);
    }
  }, [myRef, onLoad])

  return (
    <div className="CustomLottie">
      <lottie-player
        ref={myRef}
        id={`lottie-${uuid}`}
        mode="normal"
        visibility={[0, 100]}
        src={src}
      ></lottie-player>
    </div>
  );
}

export default App;