import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Videocall = (props) => {
  return (
    <>
      <div className='myId'>
        <TextField
          id='filled-basic'
          label='Name'
          variant='filled'
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <CopyToClipboard text={props.me} style={{ marginBottom: '2rem' }}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<AssignmentIcon fontSize='large' />}
          >
            Copy ID
          </Button>
        </CopyToClipboard>

        <TextField
          id='filled-basic'
          label='ID to call'
          variant='filled'
          value={props.idToCall}
          onChange={(e) => props.setIdToCall(e.target.value)}
        />
        <div className='call-button'>
          {props.callAccepted && !props.callEnded ? (
            <Button
              variant='contained'
              color='secondary'
              onClick={props.leaveCall}
            >
              End Call
            </Button>
          ) : (
            <IconButton
              color='primary'
              aria-label='call'
              onClick={() => props.callUser(props.idToCall)}
            >
              <PhoneIcon fontSize='large' />
            </IconButton>
          )}
          {props.idToCall}
        </div>
      </div>
      <div>
        {props.receivingCall && !props.callAccepted ? (
          <div className='caller'>
            <h1>{props.name} is calling...</h1>
            <Button
              variant='contained'
              color='primary'
              onClick={props.answerCall}
            >
              Answer
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Videocall;
