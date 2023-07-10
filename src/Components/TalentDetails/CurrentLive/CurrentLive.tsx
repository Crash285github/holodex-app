import { useEffect, useState } from "react";
import useFetch from "../../../useFetch";
import { Stream } from "../StreamsList/StreamsList";
import './CurrentLive.css'

const CurrentLive = ({id}: {id: string}) => {
  const [currentLive, setCurrentLive] = useState<Stream>()
  const {data: currentData} = 
  useFetch({
      url: 'https://holodex.net/api/v2/live?channel_id=' + id +'&limit=1&status=live',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': process.env.REACT_APP_HOLODEX_API_KEY as string}
      }
  })

  useEffect(() => {   
    currentData && setCurrentLive(currentData[0]) 
  },[currentData])
  
  return ( 
    <div className="streams"> 
      { currentLive &&
        <div className="live">
          Currently Live!
          <iframe src={"https://www.youtube.com/embed/" + currentLive.id} title="live" allowFullScreen key={currentLive.id}/>
        </div>
      }
    </div>
   );
}
 
export default CurrentLive;