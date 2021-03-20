import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../Buttons/Button'
import { CameraContext } from '../../context/CameraContext'


export default function Confirming() {
  
const { 
  setEndingCall, 
  callCancelled 
} = useContext(CameraContext)
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