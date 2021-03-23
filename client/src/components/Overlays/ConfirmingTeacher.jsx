import Overlay from './Overlay'
import Button from '../Buttons/Button';
import { useHistory } from 'react-router-dom';

export default function Confirming({ setEndingCall, callCancelled }) {
  const history = useHistory();
  return (
    <Overlay>
      <h2>Are you sure?</h2>
      <br />
      <Button
        call
        confirm
        onClick={() => {
          setEndingCall(false);
          callCancelled();
          history.push('/');
        }}
      />
      <Button call reject onClick={() => setEndingCall(false)} />
    </Overlay>
  );
}
