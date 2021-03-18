import ChatInput from './ChatInput';
import Message from './Message';
import useCameraData from '../../hooks/useCameraData';
export default function MessageChat() {
  const { io, message } = useCameraData();
  return (
    <>
      <Message io={io} />
      <ChatInput io={io} message={message} />
    </>
  );
}
