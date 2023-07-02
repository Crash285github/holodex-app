import { useEffect, useState } from 'react';
import './Body.css'
import TalentCard, { Talent } from './TalentCard';

const Body = () => {

  const [talents, setTalents] = useState<Talent[]>()


//   async function asd(){
//     const url = 'https://holodex.net/api/v2/channels?type=vtuber&org=Hololive';
//     const options = {
//       method: 'GET',
//       headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
//     };

//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       setTalents(data)
//     } catch (error) {
//       console.error(error);
// }
//   }

  useEffect(() => {
    setTalents([])
  },[])

  return ( 
    <>
    { talents &&
      <div className="body">
        {talents?.map((talent) => (
          <TalentCard {...talent}></TalentCard>
        ))}
      </div>
    }
    </>
   );
}
 
export default Body;