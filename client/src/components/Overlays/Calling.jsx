import { useContext } from 'react'
import Button from '../Buttons/Button'

import { CameraContext } from '../../context/CameraContext'

export default function Calling({ attendeeName }) {

  const { stateCalling } = useContext(CameraContext)
  const [calling, setCalling ] = stateCalling

  return (
    <div>
      <Button id="cancel-call"
        call 
        onClick={() => {
          setCalling(false);
        }
      }
      />
    <br />
    <h2>Calling {attendeeName}...</h2>
  </div>
  )
}