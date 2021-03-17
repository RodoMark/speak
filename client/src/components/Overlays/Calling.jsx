import Button from '../buttons/Button'


export default function Calling(props) {

  const overlayData = useContext(CameraContext)
  
  const cameraData = useContext(camData)
  console.log("CAM DATA", cameraData)

  return (
    <div className="overlay">
      <Button 
        call 
        onClick={() => {
          cameraData.onCancel();
          cameraData.transitionOverlay(props.overlayModes.HIDDEN);
        }}
      />
    <br />
    <h2>Calling attendee...</h2>
  </div>
  )
}