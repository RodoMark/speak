import Button from '../buttons/Button'

export default function Calling(props) {
  return (
    <div className="overlay">
      <Button 
        call 
        onClick={() => {
          props.onCancel();
          props.transitionOverlay(props.overlayModes.HIDDEN);
        }}
      />
    <br />
    <h2>Calling attendee...</h2>
  </div>
  )
}