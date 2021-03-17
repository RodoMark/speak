import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'


export default function Calling(props) {

  return (
    <Overlay>
      <Button 
        call 
        onClick={() => {
        }}
      />
    <br />
    <h2>Calling attendee...</h2>
  </Overlay>
  )
}