import Button from '../Buttons/Button'
import Overlay from '../Overlays/Overlay'

export default function Receiving(props) {
  return (
    <Overlay className="overlay">
				<Button call confirm></Button>
				<Button call reject></Button>
			<h2>Receiving Call</h2>
		</Overlay>
  )
}