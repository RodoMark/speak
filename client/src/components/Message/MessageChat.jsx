import ChatInput from './ChatInput';
import Message from './Message';

export default function MessageChat(props) {
  const { socket, attendeeId, attendeeName } = props;
  return (
    <>
      <Message socket={socket} />
      <ChatInput
        socket={socket}
        attendeeName={attendeeName}
        attendeeId={attendeeId}
      />
    </>
  );
}
