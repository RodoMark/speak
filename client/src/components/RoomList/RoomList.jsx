import RoomListItem from './RoomListItem.jsx';

export default function RoomList(props) {
  const { rooms, setRoomList } = props;
  console.log(rooms);
  const list =
    rooms.map((room, index) => {
      return <RoomListItem key={index} room={room} setRoomList={setRoomList} />;
    });
  return <ul>{list}</ul>;
}
