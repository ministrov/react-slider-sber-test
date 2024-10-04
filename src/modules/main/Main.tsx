import SlideList from '../../components/slideList/SlideList'
import Navigation from '../../components/navigation/Navigation'
import './Main.module.css'

function Main() {
  return (
    <div className='main'>
      <div className="main__row">
        <SlideList />
        <Navigation />
      </div>
    </div>
  )
}

export default Main