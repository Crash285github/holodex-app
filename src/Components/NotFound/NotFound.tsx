import './NotFound.css'
import guraDrum from './images/guraDrum.webp'
import ameRun from './images/ameRun.gif'
import ameDrive from './images/ameDrive.gif'
import amePortal from './images/amePortal.gif'
import ameRoll from './images/ameRoll.gif'
import ameSpin from './images/ameSpin.gif'
import ameSame from './images/ameSame.gif'
import calliBow from './images/calliBow.gif'
import inaFlute from './images/inaFlute.gif'
import guraCake from './images/guraCake.gif'
import calliDrink from './images/calliDrink.gif'
import chamaEat from './images/chamaEat.gif'
import gura3d from './images/gura3D.gif'
import yagoo from './images/yagoo.gif'

import { Link } from 'react-router-dom';

const NotFound = () => {

  const images = [
    guraDrum, ameRun, ameDrive, amePortal, ameRoll, ameSpin, ameSame, 
    calliBow, inaFlute, guraCake, calliDrink, chamaEat, gura3d, yagoo
  ]

  const selectedImage = images[Math.floor(Math.random()*(images.length))]

  return ( 
    <>
      <div className="notfound">
        404 page not found   

        <div className="image">
          <img src={selectedImage} alt="" />
        </div>

        <Link to="/holodex-app">Return to Homepage</Link>
      </div>
    </>
   );
}
 
export default NotFound;