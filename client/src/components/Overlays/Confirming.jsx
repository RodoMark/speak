import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

import { useHistory } from 'react-router-dom'

import Button from '../Buttons/Button'


export default function Confirming() {
  
const { 
  stateEndingCall, 
  callCancelled 
} = useContext(CameraContext)

console.log(stateEndingCall)

const [endingCall, setEndingCall] = stateEndingCall

const history = useHistory()

  return (
    <div className="overlay">
			<h2>Are you sure?</h2><br />
      <Button 
        call 
        confirm
        onClick={() => {
          setEndingCall(false)
          callCancelled()
          history.push('/')
        }
      }
        />
			<Button 
        call 
        reject
        onClick={() => setEndingCall(false)} />
		</div>
  )
}