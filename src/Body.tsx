import './Body.css'
import TalentCard from './TalentCard';



const Body = () => {

  const gura = {
    "id": "UCoSrY_IQQVpmIRZ9Xf-y93g",
    "name": "Gawr Gura Ch. hololive-EN",
    "english_name": "Gawr Gura",
    "type": "vtuber",
    "org": "Hololive",
    "group": "English -Myth-",
    "photo": "https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s800-c-k-c0x00ffffff-no-rj",
    "twitter": "gawrgura",
    "video_count": "474",
    "subscriber_count": "4320000",
    "clip_count": 19966,
    "top_topics": [
      "minecraft",
      "membersonly",
      "singing"
    ],
    "inactive": false,
    "twitch": "gawrgura"
  }

  return ( 
    <div className="body">
      <TalentCard {...gura}/>
    </div>
   );
}
 
export default Body;