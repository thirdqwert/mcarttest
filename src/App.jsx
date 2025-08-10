import { useEffect } from 'react'
import Intro from './components/intro/Intro'
import Timer from './components/timer/Timer'
import Aos from 'aos'
import TextSlide from './components/textSlide/TextSlide'
import MCart from './components/mCart/MCart'
import Calendar from './components/calendar/Calendar'
import Location from './components/location/Location'
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: false,
      easing: "ease-in-out"
    });
    setTimeout(() => {
      Aos.refresh();
    }, 2000);
  }, [])

  return (
    <>
      <div className="container">
        <Intro />
        <Timer />
        <TextSlide />
        <MCart />
        <Calendar />
        <Location />
      </div>
    </>
  )
}

export default App
