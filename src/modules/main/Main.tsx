import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import SlideList from '../../components/slideList/SlideList';
import { slides } from '../../utils/data';
import { ISlide } from '../../utils/types';
import styles from './Main.module.css';

function Main() {
  const [slidesState, setSlidesState] = useState<ISlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  useEffect(() => {
    setSlidesState(slides);
  }, []);
  return (
    <div className={styles['main']}>
      <div className={styles['main__row']}>
        <SlideList slides={slidesState} currentSlide={currentSlide} />
        <Navigation setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} slides={slides} />
      </div>
    </div>
  )
}

export default Main