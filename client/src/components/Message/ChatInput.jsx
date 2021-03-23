/* eslint-disable */

import Form from 'react-bootstrap/Form';
import Button from '../Buttons/Button';
import axios from 'axios';
import { useRef } from 'react';
import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';

export default function ChatInput(props) {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  let { socket, attendeeId, attendeeName } = props;
  const message = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attendeeName) {
      attendeeName = 'teacher';
    }
    const data = {
      message: message.current.value,
      attendeeName: attendeeName,
      attendeeId: attendeeId,
    };
    socket.emit('chat', data);
    setLoading(true);
    axios
      .post('/api/messages', data)
      .then((res) => {
        message.current.value = ''
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
    <div className='form' >
          <form action='' onSubmit={handleSubmit}>
            <div className='inputBox'>
              <input className="chat-input" ref={message} type='text' placeholder='Enter a message' />
            </div>
            <div className='inputBox'>
              <button type="submit" call confirm  type='submit'>
                  Send
              </button>
            </div>
          </form>
        </div>
    </>
  );
}
