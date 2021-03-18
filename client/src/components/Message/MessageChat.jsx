import ChatInput from './ChatInput';
import Message from './Message';
import useCameraData from '../../hooks/useCameraData';
export default function MessageChat(props) {
  const { attendeeName, roomId } = props;
  const { io } = useCameraData();
  return (
    <>
      <Message io={io} />
      <ChatInput io={io} attendeeName={attendeeName} roomId={roomId} />
    </>
  );
}
