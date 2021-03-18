import Button from '../Buttons/Button'

export default function Confirming(props) {
  const { endingCall, setEndingCall} = props

  return (
    <div className="overlay">
			<h2>Are you sure?</h2><br />
      <Button 
        call 
        confirm
        onClick={() => setEndingCall(false)}
        />
			<Button 
        call 
        reject
        onClick={() => setEndingCall(false)} />
		</div>
  )
}