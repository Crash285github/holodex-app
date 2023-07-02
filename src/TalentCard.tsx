import './TalentCard.css'
import twitter_logo from './twitter-logo.png'
import twitch_logo from './twitch-logo.png'
import default_photo from './default_photo.png'

interface Talent{
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

const TalentCard = (talent : Talent) => {

  return ( 
    <div className="talent-card">
      <a href={"https://www.youtube.com/channel/" + talent.id} className="profile">
        <div className="image-container">
          {talent.photo && <img src={talent.photo} alt={talent.name+'\'s photo'} /> }
          {!talent.photo && <img src={default_photo} alt={talent.name+'\'s photo'} className='default'/> }
        </div>
      </a>
      <div className="information">
        <div className="name-and-group">
          {talent.name + " [" + talent.group + "]"}
        </div>

        <div className="subs">
          {talent.subscriber_count + " subscribers"}
        </div>

        <div className="videos">
          {talent.video_count + " videos"}
        </div>

        {talent.twitch &&
          <a href={'https://www.twitch.tv/' + talent.twitch} className="twitch">
          <img src={twitch_logo} alt="twitch logo" />
            {talent.twitch}
          </a>
        }

        {talent.twitter && 
          <a href={'https://twitter.com/' + talent.twitter} className="twitter">
            <img src={twitter_logo} alt="twitter logo" />
            {talent.twitter}
          </a>
        }

        <div className="hot-topics">
          {"Popular topics: " + talent.top_topics.join(", ")}
        </div>

      </div>
    </div>
   );
}
 
export default TalentCard;