import ChatInput from './ChatInput';
import Message from './Message';

export default function MessageChat(props) {
  const { socket, attendeeId, attendeeName } = props;
  return (
    <section className="chat-log">
      <Message socket={socket} />
      <ChatInput
        socket={socket}
        attendeeName={attendeeName}
        attendeeId={attendeeId}
      />
    </section>
  );
}
