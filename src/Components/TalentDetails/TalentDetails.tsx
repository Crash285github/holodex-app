import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useEffect, useState } from "react";
import { Talent } from "../../Model/Talent";
import './TalentDetails.css'
import default_photo from '../default_photo.png'
import StreamsList from "./StreamsList/StreamsList";
import CurrentLive from "./CurrentLive/CurrentLive";

const TalentDetails = () => {
  const { id } = useParams()
  const [talent, setTalent] = useState<Talent>()
  const {data: talentData, isPending: talentIsPending, error: talentError} = 
    useFetch({
      url: 'https://holodex.net/api/v2/channels/' + id,
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': process.env.REACT_APP_HOLODEX_API_KEY as string}
      }
    })

  useEffect(() => {
    setTalent(talentData)  
  },[talentData])

  return ( 
    <>
      { talentIsPending && <p className='loading'>Loading...</p> }

      { talentError && <p className='error'>Error: {talentError}</p> }

      { talent && 
        <div className="talent-details-container">

          <div className="banner">
            <img src={talent?.banner} alt="banner" />
          </div>

          <div className="main">

            <a href={"https://www.youtube.com/channel/" + id} className="profile-image" title={talent.name} target="_blank" rel="noreferrer">
              <div className="image-container">
                {talent.photo && <img src={talent.photo} alt="profile" />}
                {!talent.photo && <img src={default_photo} alt={talent.name+'\'s photo'} className='default'/> }
              </div>
            </a>

            <div className="details">
              <p className="name">{talent.name}</p>
              <p className="desc">{talent.description}</p>
            </div>

          </div>

          <div className="numbers">
            <p className="subs">
              {(+talent.subscriber_count).toLocaleString('da-DK') + " subs"}
            </p>

            <p className="videos">
              {talent.video_count && (+talent.video_count).toLocaleString('da-DK') + " videos"}
            </p>

            <p className="clips">
              {talent.clip_count && "("+(+talent.clip_count).toLocaleString('da-DK') + " clips)"}
            </p>

            <p className="views">
              {talent.view_count && (+talent.view_count).toLocaleString('da-DK') + " views"}
            </p>
          </div>

          <CurrentLive id={id+""}/>

          <StreamsList 
            url={'https://holodex.net/api/v2/videos?channel_id=' + id +'&limit=10&status=past'}
            title={'Most recent livestreams & videos:'}/>

          { talent.top_topics.map(
              topic => topic !== 'membersonly' &&
              <StreamsList 
                url={'https://holodex.net/api/v2/videos?channel_id=' + id + '&limit=10&status=past&topic=' + topic}
                title={'From this topic: ' + topic}
                key={topic}/>
          )}
          
        </div>
      }
    </>
   );
}
 
export default TalentDetails;