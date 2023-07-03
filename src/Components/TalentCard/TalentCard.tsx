import './TalentCard.css'
import twitter_logo from './twitter-logo.png'
import twitch_logo from './twitch-logo.png'
import default_photo from './default_photo.png'

export interface Talent{
  id: string;
  name: string;
  photo?: string;
  subscriber_count?: string;
  group: string;
  video_count?: string;
  twitch?: string;
  twitter?: string;
  top_topics: string[];
}

const TalentCard = ({id, name, photo, group, twitch, twitter, subscriber_count, top_topics} : Talent) => {

  return ( 
    <div className="talent-card">

      <a href={"https://www.youtube.com/channel/" + id} className="profile-image" title={name}>
        <div className="image-container">
          {photo && <img src={photo} alt={name+'\'s photo'} /> }
          {!photo && <img src={default_photo} alt={name+'\'s photo'} className='default'/> }
        </div>
      </a>

      <div className="details">
        <div className="name-and-group" title={name}>
          {name + " [" + group + "]"}
        </div>

        <div className="subs">
          {subscriber_count + " subscribers"}
        </div>

        <div className="topics">
          {top_topics?.join(", ")}
        </div>
      </div>

      <div className="socials">
        {twitch && (
          <a href={'https://www.twitch.tv/' + twitch} className="twitch" title={twitch}>
            <img src={twitch_logo} alt="twitch logo" />
          </a>
        )}

      {twitter && (
          <a href={'https://twitter.com/' + twitter} className="twitter" title={twitter}>
            <img src={twitter_logo} alt="twitter logo" />
          </a>
        )}
      </div>

    </div>
   );
}
 
export default TalentCard;