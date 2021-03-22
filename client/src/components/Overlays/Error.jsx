import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'


export default function Error(props) {
  const {
		stateError
	} = useContext(CameraContext)

	const [error, setError] = stateError;

  return (
    <div className="overlay">
      <h2>ERROR</h2>
    </div>
  )
}