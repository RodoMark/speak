import Video from '../Video';
export default function Stage(props) {
  
  return (
    <div className="stage">
      <Video hangUp={props.hangUp} />
    </div>
  );
}
