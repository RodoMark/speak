import Video from "../Video";
import CameraContextProvider from "../../context/CameraContext";

export default function Stage(props) {
  return (
    <div>
      <CameraContextProvider>
        <Video togleCamera = {props.togleCamera}/>
      </CameraContextProvider>
    </div>
  );
}