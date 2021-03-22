import Button from '../Buttons/Button';

export default function EndConfirming(props) {
  const { setHangUp, setEndConfirm } = props;
  return (
    <div className='overlay'>
      <h2>Are you sure?</h2>
      <br />
      <Button
        call
        confirm
        onClick={() => {
          setEndConfirm(false);
          setHangUp(true);
        }}
      />
      <Button call reject onClick={() => setEndConfirm(false)} />
    </div>
  );
}
