import classNames from 'classnames'
import previous from '../../utils/images/previous.png'
import start from '../../utils/images/start.png'
import pause from '../../utils/images/pause.png'
import next from '../../utils/images/next.png'
import styles from './Navigation.module.css'

function Navigation() {
  const handlePreviousSlide = () => {};
  const handleStartSlide = () => {};
  const handleStopSlide = () => {};
  const handleNextSlide = () => {};
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
