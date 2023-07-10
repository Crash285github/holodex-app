import './TalentCard.css'
import twitter_logo from './assets/twitter-logo.png'
import twitch_logo from './assets/twitch-logo.png'
import default_photo from '../default_photo.png'
import { Link } from 'react-router-dom';
import { Talent } from '../../Model/Talent'

const TalentCard = ({id, name, photo, group, twitch, twitter, subscriber_count, top_topics} : Talent) => {

  return ( 
    <div className="talent-card">

      <a href={"https://www.youtube.com/channel/" + id} className="profile-image" title={name} target='_blank' rel='noreferrer'>
        <div className="image-container">
          {photo && <img src={photo} alt={name+'\'s photo'} loading='lazy'/> }
          {!photo && <img src={default_photo} alt={"unavailable"} className='default'/> }
        </div>
      </a>

      <Link to={`/holodex-app/talent/`+id} className="details" title='Click for more details!'>
        <div className="name-and-group" title={name}>
          {name + " [" + group + "]"}
        </div>

        <div className="subs">
          {(+subscriber_count).toLocaleString('da-DK') + " subscribers"}
        </div>

        <div className="topics">
          {top_topics?.join(", ")}
        </div>
      </Link>

      <div className="socials">
        {twitch && (
          <a href={'https://www.twitch.tv/' + twitch} className="twitch" title={twitch} target='_blank' rel='noreferrer'>
            <img src={twitch_logo} alt="twitch logo" />
          </a>
        )}

        {twitter && (
          <a href={'https://twitter.com/' + twitter} className="twitter" title={twitter} target='_blank' rel='noreferrer'>
            <img src={twitter_logo} alt="twitter logo" />
          </a>
        )}
      </div>

    </div>
   );
}
 
export default TalentCard;