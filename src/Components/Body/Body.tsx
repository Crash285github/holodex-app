import { useEffect, useState } from 'react';
import useFetch from '../../useFetch';
import TalentCard from '../TalentCard/TalentCard';
import { Talent } from '../../Model/Talent'
import InfiniteScroll from 'react-infinite-scroll-component';
import './Body.css';

const Body = () => {

  const [talents, setTalents] = useState<Talent[]>()
  const [offset, setOffset] = useState(10)
  const [canLoadMore, setCanLoadMore] = useState(true)

  

  const {data} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&limit=10&org=Hololive&offset=0',
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': process.env.REACT_APP_HOLODEX_API_KEY as string}
      }
    })

  useEffect(() => {
    setTalents(data)  
  },[data])

  const steps = 10
  const handleScrollLoad = () => {
    const params = {
      url: 'https://holodex.net/api/v2/channels?type=vtuber&limit='+steps+'&org=Hololive&offset=' + offset,
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
        setOffset(offset + steps)

        if(data.length < steps){
          setCanLoadMore(false)
        }
      })
      .catch(err => {
        if(err.name === 'AbortError'){
            console.log("fetch aborted");
        }
        else {
          console.log(err.message);
        }        
    })
  }
  
  return ( 
    <>
      <div className="body">
        <InfiniteScroll 
          dataLength={talents ? talents.length : 0}
          next={handleScrollLoad}
          hasMore={canLoadMore}
          loader={<div className='loading'>Loading...</div>}
          >

          <div className="talent-list">
            { talents?.map((talent) => ( <TalentCard {...talent} key={talent.id}/> )) }
          </div>

        </InfiniteScroll>
      </div>     
    </>
   );
}
 
export default Body;
