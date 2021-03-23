import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Videocall from '../Videocall';
import axios from 'axios';
import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';
export default function Dropdowns(props) {
  const { stateIdToCall, stateLoading, stateChosen, stateCallAccepted, stateCallEnded, leaveCall, callUser } = useContext(CameraContext);

  const [chosen, setChosen] = stateChosen;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;
  const [loading, setLoading] = stateLoading;
  const [idToCall, setIdToCall] = stateIdToCall;
  const [list, setList] = useState([]);
  const { socket, roomId } = props;
  
  socket.on('refresh', (data) => {
    setLoading(true);
    axios.get('/api/attendees').then((res) => {
      setLoading(false);
      const nameList = res.data.filter((obj) => obj.room_id === Number(roomId));
      setList(nameList);
    });
  });
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Call
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
            Alon
          </Dropdown.Item>
          <Dropdown.Item>
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
            Ed
          </Dropdown.Item>
          <Dropdown.Item>
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
            Thomas
          </Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Menu>
          {list.length>0 &&
            list.map((obj, index) => {
              setIdToCall(obj.attendee_name.split('&')[1])
              
              return (
                <Dropdown.Item 
                  key={index}
                  onClick={() => {
                    callUser(idToCall);
                    setChosen(idToCall);
                    }
                  }
                >
                <Videocall idToCall={idToCall} />
                  {obj.attendee_name.split('&')[0]}
                </Dropdown.Item>
              )  
            } 
          )
        }
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}