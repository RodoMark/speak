import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'

export default function Receiving(props) {
  return (
    <Overlay className="overlay">
			<h2>Are you sure?</h2><br />
      <Button call confirm></Button>
			<Button call reject></Button>
		</Overlay>
  )
}