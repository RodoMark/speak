import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'


export default function Error(props) {
  const {
		stateError
	} = useContext(CameraContext)

	const [error, setError] = stateError;

  return (
    <Overlay>
      <h2>ERROR</h2>
    </Overlay>
  )
}