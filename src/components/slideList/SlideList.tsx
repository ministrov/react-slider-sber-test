import { ISlide } from '../../utils/types'
import Slide from '../slide/Slide'
import styles from './SlideList.module.css'

type SlideListProps = {
  slides: ISlide[];
  currentSlide: number
}

function SlideList({ slides, currentSlide }: SlideListProps) {
  return (
    <div className={styles['slideslist']}>
      <div className={styles['slideslist__slide']}>
        {slides.map((slide: ISlide) => (
          slide.id === currentSlide && <Slide key={slide.id} slide={slide}/>
        ))}
      </div>
      <div className={styles['slidelist__counter']}>
        <p className={styles['counter__number']}>{currentSlide}</p> из <p className={styles['counter__number']}>{slides.length}</p>
      </div>
    </div>
  )
}

export default SlideList