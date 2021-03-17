import React from 'react'

import Button from '../buttons/Button'

export default function Receiving(props) {
  return (
    <div className="overlay">
				<Button call confirm></Button>
				<Button call reject></Button>
			<h2>Receiving Call</h2>
		</div>
  )
}