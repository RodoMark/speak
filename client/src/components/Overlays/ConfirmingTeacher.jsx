import Overlay from './Overlay'
import Button from '../Buttons/Button';
import { useHistory } from 'react-router-dom';

import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

export default function Confirming({ setEndingCall, callCancelled }) {
  const history = useHistory();
  return (
    <Overlay>
      <h2>Are you sure?</h2>
        <button onClick={() => {
          setEndingCall(false);
          callCancelled();
          history.push('/');
            }
          }
        >
          <Check color="primary" />
        </button>
        <button onClick={() => setEndingCall(false)} >
          <Close color="secondary" />
        </button>
    </Overlay>
  );
}
