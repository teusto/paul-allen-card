import styles from './App.module.scss';
import IntroOverlay from './components/IntroOverlay';
import Home from './pages/Home';

const App = () => {
  
  // useEffect(() => {
  //   let vh = window.innerHeight * 0.1;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, [])

  return (
    <div className={styles.App}>
      <IntroOverlay />
      <Home />
    </div>
  )
}

export default App;