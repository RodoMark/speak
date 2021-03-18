// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from './Dropdown/Dropdown.jsx';
import ExtraCompsBar from './ExtraCompsBar/ExtraCompsBar';
import { useContext, useRef, useEffect, useState } from 'react';
import MessageChat from './Message/MessageChat';
const Room = (props) => {
  const [togleCamera, setTogleCamera] = useState(true);
  return (
    <>
      <div>Room</div>
      <Stage togleCamera={togleCamera} />
      <Dropdown />
      <MessageChat />
      <ExtraCompsBar />
    </>
  );
};
export default Room;
