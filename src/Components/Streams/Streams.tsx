import { useEffect, useState } from "react";
import { Talent } from "../TalentCard/TalentCard";
import './Streams.css'
import useFetch from "../../useFetch";

interface Stream{
  id: string
  topic_id: string
}

const Streams = ({id, top_topics} : Talent) => {

  const [currentLive, setCurrentLive] = useState<Stream>()
  const [pastLives, setPastLives] = useState<Stream[]>()

  const [topic1Lives, setTopic1Lives] = useState<Stream[]>()
  const [topic2Lives, setTopic2Lives] = useState<Stream[]>()
  const [topic3Lives, setTopic3Lives] = useState<Stream[]>()

  // #region currentLive fetch
  const {data: currentData} = useFetch(
    {
      url: 'https://holodex.net/api/v2/live?channel_id=' + id +'&limit=1',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

    useEffect(() => {
      
      currentData && setCurrentLive(currentData[0]) 
    },[currentData])
    // #endregion

  // #region pastLives fetch
  const {data: pastData} = useFetch(
    {
      url: 'https://holodex.net/api/v2/videos?channel_id=' + id +'&limit=10&status=past',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

  useEffect(() => {
    pastData && setPastLives(pastData) 
  },[pastData])
  // #endregion
  
  // #region topic fetches
  const {data: topic1Data} = useFetch(
    {
      url: 'https://holodex.net/api/v2/videos?channel_id=' + id +'&limit=10&status=past&topic=' + top_topics[0],
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

  useEffect(() => {
    topic1Data && setTopic1Lives(topic1Data)     
  },[topic1Data])

  const {data: topic2Data} = useFetch(
    {
      url: 'https://holodex.net/api/v2/videos?channel_id=' + id +'&limit=10&status=past&topic=' + top_topics[1],
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

  useEffect(() => {
    topic2Data && setTopic2Lives(topic2Data)     
  },[topic2Data])

  const {data: topic3Data} = useFetch(
    {
      url: 'https://holodex.net/api/v2/videos?channel_id=' + id +'&limit=10&status=past&topic=' + top_topics[2],
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

  useEffect(() => {
    topic3Data && setTopic3Lives(topic3Data)     
  },[topic3Data])
  // #endregion

  return ( 
    <div className="streams"> 
      {currentLive &&
        <div className="live">
          Currently Live!
          <iframe src={"https://www.youtube.com/embed/" + currentLive.id} title="live" allowFullScreen key={currentLive.id}/>
        </div>
      }

      {pastLives &&
        <div className="videosContainer">
          <div className="text">Past livestreams & videos:</div>
          <div className="videos">
            {pastLives.map(live => live.topic_id !== 'membersonly' &&
              <iframe src={"https://www.youtube.com/embed/" + live.id} title="live" allowFullScreen key={live.id}/>
            )}
          </div>
        </div>
      }

    {topic1Lives && top_topics[0] !== 'membersonly' &&
        <div className="videosContainer">
          <div className="text">From this topic: {top_topics[0]}</div>
          <div className="videos">
            {topic1Lives.map(live => live.topic_id !== 'membersonly' &&
              <iframe src={"https://www.youtube.com/embed/" + live.id} title="live" allowFullScreen key={live.id}/>
            )}
          </div>
        </div>
      }

    {topic2Lives && top_topics[1] !== 'membersonly' &&
        <div className="videosContainer">
          <div className="text">From this topic: {top_topics[1]}</div>
          <div className="videos">
            {topic2Lives.map(live => live.topic_id !== 'membersonly' &&
              <iframe src={"https://www.youtube.com/embed/" + live.id} title="live" allowFullScreen key={live.id}/>
            )}
          </div>
        </div>
      }

    {topic3Lives && top_topics[2] !== 'membersonly' &&
        <div className="videosContainer">
          <div className="text">From this topic: {top_topics[2]}</div>
          <div className="videos">
            {topic3Lives.map(live => live.topic_id !== 'membersonly' &&
              <iframe src={"https://www.youtube.com/embed/" + live.id} title="live" allowFullScreen key={live.id}/>
            )}
          </div>
        </div>
      }
    </div>
   );
}
 
export default Streams;