import Button from '../buttons/Button'

export default function Calling(props) {
  return (
    <div className="overlay">
      <Button 
        call 
        onClick={props.onCancel}
      />
    <br />
    <h2>Calling attendee...</h2>
  </div>
  )
}