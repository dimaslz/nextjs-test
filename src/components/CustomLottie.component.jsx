import { useRef, useEffect, useCallback } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
/**
 *
 * @param {*} props
 * @returns
 */
const App = ({ type = "loop", src }) => {
  const myRef = useRef(null);
  const uuid = crypto.randomUUID();

  const onLoad = useCallback(() => {
    create({
      mode: 'scroll',
      player: `#firstLottie-${uuid}`,
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

    myRef.current.addEventListener('load', onLoad);

    return () => {
      myRef?.current?.removeEventListener('load', onLoad);
    }
  }, [myRef, onLoad])

  return (
    <div className="CustomLottie">
      {window !== undefined && <lottie-player
        ref={myRef}
        id={`firstLottie-${uuid}`}
        mode="normal"
        src={src}
      ></lottie-player>}
    </div>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef(); // 1. create a reference for the lottie player
//   }
//   componentDidMount() {
//     // 3. listen for player load. see lottie player repo for other events
//     this.myRef.current.addEventListener('load', (e) => {
//       create({
//         mode: 'scroll',
//         player: '#firstLottie',
//         actions: [
//           {
//             visibility: [0, 1],
//             type: "loop"
//           },
//         ],
//       });
//     });
//   }
//   render() {
// 		return (
//       <div className="App">
//         <div style={{ height: '400px' }}></div>
//         {window !== undefined && <lottie-player
//           ref={this.myRef} // 2. set the reference for the player
//           id="firstLottie"
//           src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
//         ></lottie-player>}
//       </div>
//     );
//   }
// }

export default App;