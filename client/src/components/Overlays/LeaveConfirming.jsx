import Button from '../Buttons/Button';
import { useHistory } from 'react-router-dom';
export default function LeaveConfirming(props) {
  const { cancelCall, setLeaveConfirm } = props;

  const history = useHistory();
  return (
    <div className='overlay'>
      <h2>Are you sure?</h2>
      <br />
      <Button
        call
        confirm
        onClick={() => {
          setLeaveConfirm(false);
          cancelCall();
          history.push('/');
        }}
      />
      <Button call reject onClick={() => setLeaveConfirm(false)} />
    </div>
  );
}
