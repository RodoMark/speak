import Button from '../Buttons/Button';

export default function Calling({ setReceivingCall }) {
  return (
    <div>
      <Button
        id='cancel-call'
        call
        onClick={() => {
          setReceivingCall(false);
        }}
      />
      <br />
      <h2>Calling...</h2>
    </div>
  );
}
