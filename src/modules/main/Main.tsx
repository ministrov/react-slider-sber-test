import SlideList from '../../components/slideList/SlideList'
import Navigation from '../../components/navigation/Navigation'
import {slides} from '../../utils/data'
import styles from './Main.module.css'

console.log(slides);

function Main() {
  return (
    <div className={styles['main']}>
      <div className={styles['main__row']}>
        <SlideList slides={slides} currentSlide={1} />
        <Navigation />
      </div>
    </div>
  )
}

export default Main