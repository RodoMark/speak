import Button from '../Buttons/Button'

export default function Calling({ attendeeName, setCalling }) {

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