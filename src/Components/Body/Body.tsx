import { useEffect, useState } from 'react';
import './Body.css'
import useFetch from '../../useFetch';
import TalentCard, { Talent } from '../TalentCard/TalentCard';

const Body = () => {
  const [talents, setTalents] = useState<Talent[]>()
  const [offset, setOffset] = useState(10)
  const [canLoad, setCanLoad] = useState(true)
  const [newTalentsPending, setNewTalentsPending] = useState(false)

  const {data, isPending, error} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&limit=10&org=Hololive&offset=0',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

    useEffect(() => {
      setTalents(data)  
    },[data])


  const handleClick = () => {
    setNewTalentsPending(true)
    const params = {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&limit=10&org=Hololive&offset=' + offset,
      options: {
      method: 'GET',
      headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
    }}

    const abortController = new AbortController()

    fetch(params.url, {...params.options, signal: abortController.signal})
      .then(response => {
        if(!response.ok){
        throw Error("Could not fetch data. :(")
        }
        return response.json()
      })
      .then((data) => {
        const newTalents = talents
        newTalents?.push(...data)
        setTalents(newTalents)
        setOffset(offset + 10)
        setNewTalentsPending(false)

        if(data.length < 10){
          setCanLoad(false)
        }
      })
      .catch(err => {
        if(err.name === 'AbortError'){
            console.log("fetch aborted");
        }
    })
    
  }
  
  return ( 
    <>
      <div className="body">
        { isPending && 
        <div className='loading'>Loading...</div>
        }

        { error && 
          <div className='error'>Error: {error}</div>
        }

        { talents &&
        <>
          <div className="talent-list">
            {talents?.map((talent) => (
              <TalentCard {...talent} key={talent.id}></TalentCard>
              ))}
          </div>
          { canLoad &&
            <button className='more-talents' disabled={newTalentsPending}
              onClick={handleClick}>More talents</button>
          }
        </>
        }
      </div>
      
    </>
   );
}
 
export default Body;
