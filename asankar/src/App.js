import React, { Fragment } from 'react'
import './App.css'
import Asaid from './Asaid'
import Content from './Content'
const App = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='left'>
          <img className='humburger' src="https://supersimple.dev/public/img/exercises/youtube/icons/hamburger-menu.svg"/>
          <img className='youtube' src="https://supersimple.dev/public/img/exercises/youtube/icons/youtube-logo.svg"/>
        </div>
        <div  className='middile'>
          <input className='searchbar' type="text" placeholder='Search'/>
          <button className='buttonone'>
            <img className='searchicon' title='Search' src="	https://supersimple.dev/public/img/exercises/youtube/icons/search.svg"/>
          </button>
          <button className='buttontwo'>
          <img className='voiceicon' src="	https://supersimple.dev/public/img/exercises/youtube/icons/voice-search-icon.svg"/>

          </button>
        </div>
        <div className='reight'>
          <img className='uplode' src='	https://supersimple.dev/public/img/exercises/youtube/icons/upload.svg'/>
          <img className='youtub-apps' src='	https://supersimple.dev/public/img/exercises/youtube/icons/youtube-apps.svg'/>
          <img className='notification' src='	https://supersimple.dev/public/img/exercises/youtube/icons/notifications.svg'/>
          <img className='profile' src="	https://yt3.ggpht.com/ytc/AOPolaT4Z2i2hEpR6x0EYSPLzeVWtJ7_NT5M5bxqWKhp=s68-c-k-c0x00ffffff-no-rj"/>

        </div>

      </div>
      <Asaid/>
      <Content/>
    </Fragment>
  )
}

export default App
