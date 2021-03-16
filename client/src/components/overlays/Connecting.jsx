import React from 'react'

import Button from '../buttons/Button'

export default function Calling(props) {
  return (
    <div className="overlay">
			
			<form>
				<Button call confirm></Button>
			</form>
			<form>
				<Button call reject></Button>
			</form>
			<h2>Receiving Call</h2>
		</div>
  )
}    