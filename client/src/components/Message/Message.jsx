// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
export default function Message(props) {
  const io = props.io;
  const [msg, setMsg] = useState('');
  io.off('chat');
  io.on('chat', (data) => {
    setMsg((prev) => (prev += `${data.msg},`));
  });
  const messageCopy = msg;
  const messageArray = messageCopy.split(',');
  return (
    <>
      {messageArray.map((msg, index) => (
        <h3 id={index}>{msg}</h3>
      ))}
    </>
  );
}
