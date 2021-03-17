const Video = (props) => {
  return (
    <>
      <div className='video-container'>
        <div id='myVideo' className='video'>
          {props.stream && (
            <video
              playsInline
              muted
              ref={props.myVideo}
              autoPlay
              style={{ width: '300px' }}
            />
          )}
        </div>
        <div id='otherVideo' className='video'>
          {props.callAccepted && !props.callEnded ? (
            <video
              playsInline
              ref={props.userVideo}
              autoPlay
              style={{ width: '300px' }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Video;
