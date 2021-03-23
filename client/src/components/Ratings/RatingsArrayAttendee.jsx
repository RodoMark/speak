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
    <section class="ratings-array">
    { rating.ethical ? <True text="Ethical" /> : <False text="Ethical" /> }
      { rating.persuasive ? <True text="Persuasive" /> : <False text="Persuasive" /> }
      { rating.wellInformed ? <True text=" Informed" /> : <False text="Informed" /> }
    </section>
  )
}

export default RatingsArray