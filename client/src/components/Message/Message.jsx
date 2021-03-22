import { useState } from 'react';

export default function Message(props) {
  const { socket } = props;
  const [msg, setMsg] = useState('');
  socket.off('chat');
  socket.on('chat', (data) => {
    const message = data.message;
    const attendeeName = data.attendeeName;
    setMsg((prev) => (prev += `${attendeeName}: ${message},`));
  });
  return <div class="messages">{msg ? msg.split(',').map((msg) => msg && <h4 className="message-text">{msg}</h4>) : null}</div>;
}
