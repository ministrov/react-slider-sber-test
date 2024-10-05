import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import SlideList from '../../components/slideList/SlideList';
import { slides } from '../../utils/data'
import styles from './Main.module.css'
import { ISlide } from '../../utils/types';

// console.log(data);
console.log(slides);

function Main() {
  const [slidesState, setSlidesState] = useState<ISlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  console.log(slidesState);

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