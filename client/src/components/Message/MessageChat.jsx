import ChatInput from './ChatInput';
import Message from './Message';

export default function MessageChat(props) {
  const { socket, attendeeId } = props;
  return (
    <>
      <Message socket={socket} />
      <ChatInput
        socket={socket}
        attendeeName={'teacher'}
        attendeeId={attendeeId}
      />
    </>
  );
}
