import './NotFound.css'
import guraDrum from './guraDrum.webp'
import ameRun from './ameRun.gif'
import ameDrive from './ameDrive.gif'
import amePortal from './amePortal.gif'
import ameRoll from './ameRoll.gif'
import ameSpin from './ameSpin.gif'
import ameSame from './ameSame.gif'
import calliBow from './calliBow.gif'
import inaFlute from './inaFlute.gif'
import guraCake from './guraCake.gif'
import calliDrink from './calliDrink.gif'
import chamaEat from './chamaEat.gif'
import gura3d from './gura3D.gif'
import yagoo from './yagoo.gif'

import { Link } from 'react-router-dom';

const NotFound = () => {

  const images = [
    guraDrum, 
    ameRun, 
    ameDrive, 
    amePortal,
    ameRoll,
    ameSpin,
    ameSame,
    calliBow,
    inaFlute,
    guraCake,
    calliDrink,
    chamaEat,
    gura3d,
    yagoo
  ]
  const selectedImage = images[Math.floor(Math.random()*(images.length))]

  return ( 
    <>
      <div className="notfound">
        404 page not found   
        <div className="image">
          <img src={selectedImage} alt="" />
        </div>
        <Link to="/holodex-app">Homepage</Link>
      </div>
    </>
   );
}
 
export default NotFound;