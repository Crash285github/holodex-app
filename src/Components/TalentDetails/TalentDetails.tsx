import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useEffect, useState } from "react";
import { Talent } from "../TalentCard/TalentCard";
import './TalentDetails.css'
import default_photo from '../default_photo.png'
import Streams from "../Streams/Streams";

const TalentDetails = () => {
  const { id } = useParams()

  const [talent, setTalent] = useState<Talent>()

  const {data: talentData, isPending: talentIsPending, error: talentError} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels/' + id,
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

    useEffect(() => {
      setTalent(talentData)  
    },[talentData])

  return ( 
    <>
      { talentIsPending && 
        <div className='loading'>Loading...</div>
      }

      { talentError && 
        <div className='error'>Error: {talentError}</div>
      }

      {talent && 
        <div className="talent-details-container">

          <div className="banner">
            <img src={talent?.banner} alt="banner" />
          </div>

          <div className="main">

            <a href={"https://www.youtube.com/channel/" + id} className="profile-image" title={talent.name}>
              <div className="image-container">
                {talent.photo && <img src={talent.photo} alt="profile" />}
                {!talent.photo && <img src={default_photo} alt={talent.name+'\'s photo'} className='default'/> }
              </div>
            </a>

            <div className="details">
              <div className="name">{talent.name}</div>
              <div className="desc">{talent.description}</div>
            </div>

          </div>

          <div className="numbers">
            <div className="subs">{
              (+talent.subscriber_count).toLocaleString('da-DK') + " subs"
            }
            </div>
            <div className="videos">{talent.video_count &&
            (+talent.video_count).toLocaleString('da-DK') + " videos"
            }</div>
            <div className="clips">{talent.clip_count &&
            "("+(+talent.clip_count).toLocaleString('da-DK') + " clips)"
            }</div>
            <div className="views">{talent.view_count &&
            (+talent.view_count).toLocaleString('da-DK') + " views"
            }</div>
          </div>

          <Streams {...talent}/>
          
        </div>
      }
    </>
   );
}
 
export default TalentDetails;