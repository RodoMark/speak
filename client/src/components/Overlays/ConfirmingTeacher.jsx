import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

import Button from '../Buttons/Button'
import { useHistory } from 'react-router-dom'

export default function ConfirmingTeacher({ endingCall, setEndingCall, callCancelled}) {
   
const history = useHistory()


  return (
    <div className="overlay">
			<h2>Are you sure?</h2><br />
      <Button 
        call 
        confirm
        onClick={() => {
          setEndingCall(false)
          callEnded()
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