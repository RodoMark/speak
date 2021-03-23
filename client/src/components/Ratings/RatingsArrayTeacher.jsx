import React, { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext';

import True from './True'
import False from './False'

const RatingsArray = () => {


  const {
    stateRating,
  } = useContext(CameraContext);
  
  const [rating, setRating] = stateRating;

  return (
    <section className="ratings-array">
      { rating.ethical ? 
        <True text="Ethical" /> : 
          <False 
            text="Ethical" 
            onClick={()=> setRating({...rating, ethical: true})} 
          /> }
        { rating.persuasive ? 
          <True text="Persuasive" /> : 
            <False 
              text="Persuasive" 
              onClick={()=> setRating({...rating, persuasive: true})} 
            /> }
        { rating.informed ? 
          <True text=" Informed" /> : 
            <False 
              text="Informed" 
              onClick={()=> setRating({...rating, informed: true})} 
            /> }
    </section>
  )
}

export default RatingsArray