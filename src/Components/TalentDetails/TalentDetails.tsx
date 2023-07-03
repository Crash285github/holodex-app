import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useEffect, useState } from "react";
import { Talent } from "../TalentCard/TalentCard";
import './TalentDetails.css'

const TalentDetails = () => {
  const { id } = useParams()

  const [talent, setTalent] = useState<Talent>()

  const {data, isPending, error} = useFetch(
    {
      url: 'https://holodex.net/api/v2/channels/' + id,
      options: {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-APIKEY': 'e25fc430-10c6-490a-b7e8-af76fc275cfd'}
      }
    })

    useEffect(() => {
      setTalent(data)  
    },[data])

  return ( 
    <>
      { isPending && 
      <div className='loading'>Loading...</div>
      }

      { error && 
        <div className='error'>Error: {error}</div>
      }

      {talent && 
        <div className="talent-details-container">

          <div className="banner">
            <img src={talent?.banner} alt="banner" />
          </div>

          
        </div>
      }
    </>
   );
}
 
export default TalentDetails;