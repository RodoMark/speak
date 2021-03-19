import Button from '../Buttons/Button'

export default function Receiving(props) {
	
	const { setCallAccepted, setReceivingCall} = props

  return (
    <div className="overlay">
				<Button 
					call 
					confirm
					onClick={
						()=>{
							setCallAccepted(true)
							setReceivingCall(false)
						}
					}
				/>
				<Button 
					call 
					reject
					onClick={()=>setReceivingCall(false)}
				/>
			<h2>Receiving Call</h2>
		</div>
  )
}