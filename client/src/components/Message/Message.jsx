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
      const processed = prev
      processed.push(`${attendeeName}: ${message}`)
      return processed.reverse()});
  });


  return (
    <div className="messages">
      <h4 className="message-text">Here's a message</h4>
      <h4 className="message-text">And another one.</h4>
      <h4 className="message-text">And another one!</h4>
      <h4 className="message-text">such message</h4>
      <h4 className="message-text">very txt</h4>
      <h4 className="message-text">much words</h4>
      <h4 className="message-text">Olay!</h4>
    {msg.length ? msg.map((msg) => msg && <h4 className="message-text">{msg}</h4>) : null}
    </div>
  );
    
}
