import Button from '../Buttons/Button';
import { useHistory } from 'react-router-dom';
export default function Confirming(props) {
  const { leaveRoom, setLeaveConfirm } = props;

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
          leaveRoom();
          history.push('/');
        }}
      />
      <Button call reject onClick={() => setLeaveConfirm(false)} />
    </div>
  );
}
