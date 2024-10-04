import { ISlide } from '../../utils/types'
import styles from './Slide.module.css'

type SlideProps = {
  slide: ISlide;
}

function Slide({ slide }: SlideProps) {
  return (
    <div className={styles['slide']}>
      <div className={styles['slide__column']}>
        <div className={styles['slide__title']}>
          {slide.title}
        </div>
        <div className={styles['slide__image']}>
          <img src={slide.image} alt="#" loading='lazy' />
        </div>
        <div className={styles['slide__description']}>
          {slide.description}
        </div>
      </div>
    </div>
  )
}

export default Slide