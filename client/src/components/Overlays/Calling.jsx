import { useContext } from 'react'
import Button from '../Buttons/Button'

export default function Calling({ attendeeName }) {

  const { setCalling } = useContext

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