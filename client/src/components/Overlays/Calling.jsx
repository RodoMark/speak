import Button from '../buttons/Button'


export default function Calling(props) {

  const overlayData = useContext(OverlayContext)
  
  const cameraData = useContext(camData)

  return (
    <Overlay>
      <Button 
        call 
        onClick={() => {
          cameraData.onCancel();
          cameraData.transitionOverlay(props.overlayModes.HIDDEN);
        }}
      />
    <br />
    <h2>Calling attendee...</h2>
  </Overlay>
  )
}