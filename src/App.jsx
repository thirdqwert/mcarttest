import { useEffect } from 'react'
import Intro from './components/intro/Intro'
import Timer from './components/timer/Timer'
import Aos from 'aos'
import TextSlide from './components/textSlide/TextSlide'
import MCart from './components/mCart/MCart'
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
      easing: "ease-in-out"
    });
  }, [])

  return (
    <>
      <div className="container">
        <Intro />
        <Timer />
        <TextSlide />
        <MCart />
      </div>
    </>
  )
}

export default App
