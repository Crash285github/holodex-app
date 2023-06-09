import { useEffect, useState } from "react";
import useFetch from "../../../useFetch";
import './StreamsList.css'

export interface Stream{
  id: string
  topic_id: string
  type: string
}

const StreamsList = ({url, title} : {url: string, title : string}) => { 
  const [lives, setLives] = useState<Stream[]>()
  const {data} = 
  useFetch({
    url: url,
    options: {
      method: 'GET',
      headers: {Accept: 'application/json', 'X-APIKEY': process.env.REACT_APP_HOLODEX_API_KEY as string}
    }
  })
    
  useEffect(() => {
    data && setLives(data) 
  },[data])
      
  return ( 
    <div className="streams"> 
      { lives &&
        <div className="videosContainer">
          <p className="text">{title}</p>
          <div className="videos">
            {lives.map(live => 
                (live.topic_id !== 'membersonly' && live.type !== 'placeholder') &&
                <iframe src={"https://www.youtube.com/embed/" + live.id} title="live" allowFullScreen key={live.id} loading="lazy"/>
            )}
          </div>
        </div>
      }
    </div>
   );
}
 
export default StreamsList;