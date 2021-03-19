import { useState } from 'react';

export default function Message(props) {
  const { io } = props;
  const [msg, setMsg] = useState('.');
  io.off('chat');
  io.on('chat', (data) => {
    const message = data.message;
    const attendeeName = data.attendeeName;
    setMsg((prev) => (prev += `${attendeeName}: ${message},`));
  });
  return <>{msg ? msg.split(',').map((msg) => msg && <h4>{msg}</h4>) : null}</>;
}
