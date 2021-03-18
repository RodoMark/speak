import ChatInput from './ChatInput';
import Message from './Message';

export default function MessageChat(props) {
  const { attendeeName, io, attendeeId } = props;
  return (
    <>
      <Message io={io} />
      <ChatInput io={io} attendeeName={attendeeName} attendeeId={attendeeId} />
    </>
  );
}
