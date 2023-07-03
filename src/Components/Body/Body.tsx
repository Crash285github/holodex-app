import { useEffect, useState } from 'react';
import './Body.css'
import TalentCard, { Talent } from '../TalentCard/TalentCard';
import useFetch from '../../useFetch';

const Body = () => {

  const [talents, setTalents] = useState<Talent[]>()

  const {data, isPending, error} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&org=Hololive', 
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
    { isPending && 
      <div>Loading...</div>
    }

    { error && 
      <div>Error: {error}</div>
    }

    { talents &&
      <div className="body">
        {talents?.map((talent) => (
          <TalentCard {...talent} key={talent.id}></TalentCard>
        ))}
      </div>
    }
    </>
   );
}
 
export default Body;