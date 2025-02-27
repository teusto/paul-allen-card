// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styles from './App.module.scss';
import IntroOverlay from './components/IntroOverlay';
import { useAnimations } from './contexts/AnimationProvider';
import Home from './pages/Home';

const App = () => {
  const { animationComplete } = useAnimations();
  // useEffect(() => {
  //   let vh = window.innerHeight * 0.1;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, [])

  console.log({animationComplete})
  return (
    <div className={styles.App}>
      {!animationComplete && <IntroOverlay />}
      <Home />
    </div>
  )
}

export default App;