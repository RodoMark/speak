import { useState } from 'react';

export default function Message(props) {
  const { socket } = props;
  const [msg, setMsg] = useState([]);
  socket.off('chat');
  socket.on('chat', (data) => {
    const message = data.message;
    const attendeeName = data.attendeeName;
    setMsg((prev) => {
      // to avoid data mutation, create a new array
      const processed = prev.length
        ? [...prev, `${attendeeName}: ${message}`]
        : [`${attendeeName}: ${message}`];
      const result = processed.reverse();
      return result;
    });
  });
  return (
    <div className='messages'>
      {msg.length
        ? msg.map((msg) => msg && <h5 className='message-text'>{msg}</h5>)
        : null}
    </div>
  );
}