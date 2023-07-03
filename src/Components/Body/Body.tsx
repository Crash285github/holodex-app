import { useEffect, useState } from 'react';
import './Body.css'
import useFetch from '../../useFetch';
import TalentCard, { Talent } from '../TalentCard/TalentCard';

const Body = () => {
  const [talents, setTalents] = useState<Talent[]>()

  const {data, isPending, error} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&limit=10&org=Hololive&offset=67',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

    useEffect(() => {
      setTalents(data)  
    },[data])
  
  return ( 
    <>
      <div className="talent-list">
      { isPending && 
      <div className='loading'>Loading...</div>
      }

      { error && 
        <div className='error'>Error: {error}</div>
      }

      { talents &&
        <div className="body">
          {talents?.map((talent) => (
            <TalentCard {...talent} key={talent.id}></TalentCard>
          ))}
        </div>
      }
    </div>
      
    </>
   );
}
 
export default Body;