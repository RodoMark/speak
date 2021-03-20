import ChatInput from './ChatInput';
import Message from './Message';

export default function MessageChat(props) {
  const { io, attendeeId } = props;
  return (
    <>
      <Message io={io} />
      <ChatInput io={io} attendeeName={'teacher'} attendeeId={attendeeId} />
    </>
  );
}
