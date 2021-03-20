import { useState } from 'react';

export default function Message(props) {
  const { socket } = props;
  const [msg, setMsg] = useState('.');
  socket.off('chat');
  socket.on('chat', (data) => {
    const message = data.message;
    const attendeeName = data.attendeeName;
    setMsg((prev) => (prev += `${attendeeName}: ${message},`));
  });
  return <>{msg ? msg.split(',').map((msg) => msg && <h4>{msg}</h4>) : null}</>;
}
