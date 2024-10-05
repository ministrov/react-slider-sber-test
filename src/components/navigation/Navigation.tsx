import { useCallback, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { ISlide } from '../../utils/types'
import previous from '../../utils/images/previous.png'
import start from '../../utils/images/start.png'
import pause from '../../utils/images/pause.png'
import next from '../../utils/images/next.png'
import styles from './Navigation.module.css'

type NavigationProps = {
  setCurrentSlide: (setSlider: (currentSlide: number) => number) => void;
  currentSlide: number;
  slides: ISlide[];
}

function Navigation({ currentSlide, setCurrentSlide, slides }: NavigationProps) {
  const slider = useRef<number | null>(null);

  const handleNextSlide = useCallback(() => {
    clearInterval(slider.current!)
    slider.current = null
    setCurrentSlide((currentSlide) => {
      if (currentSlide < slides.length) {
        return currentSlide + 1
      } else {
        return 1
      }
    })
  }, [setCurrentSlide, slides.length])

  const handlePreviousSlide = useCallback(() => {
    clearInterval(slider.current!)
    slider.current = null
    if (currentSlide > 1) {
      setCurrentSlide((currentSlide) => currentSlide - 1)
    }
  }, [currentSlide, setCurrentSlide])

  const handleNextSlideAuto = useCallback(() => {
    setCurrentSlide((currentSlide) => {
      if (currentSlide < slides.length) {
        return currentSlide + 1
      } else {
        return 1
      }
    })
  }, [setCurrentSlide, slides.length])

  const handleStartSlide = useCallback(() => {
    if (!slider.current) {
      slider.current = setInterval(() => handleNextSlideAuto(), 2000)
    }
  }, [handleNextSlideAuto])

  const handleStopSlide = useCallback(() => {
    clearInterval(slider.current!)
    slider.current = null
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(slider.current!)
      slider.current = null
    }
  }, [])

  return (
    <div className={styles['navigation']}>
      <div className={styles['navigation__row']}>
        <button className={classNames(styles['navigation__btn'], styles['navigation__btn--previous'])} onClick={handlePreviousSlide}>
          <img src={previous} width={48} height={48} alt="#" />
        </button>
        <button className={classNames(styles['navigation__btn'], styles['navigation__btn--start'])} onClick={handleStartSlide}>
          <img src={start} width={48} height={48} alt="#" />
        </button>
        <button className={classNames(styles['navigation__btn'], styles['navigation__btn--stop'])} onClick={handleStopSlide}>
          <img src={pause} width={48} height={48} alt="#" />
        </button>
        <button className={classNames(styles['navigation__btn'], styles['navigation__btn--next'])} onClick={handleNextSlide}>
          <img src={next} width={48} height={48} alt="#" />
        </button>
      </div>
    </div>
  )
}

export default Navigation
