import React from 'react'

import Button from '../buttons/Button'

export default function Receiving(props) {
  return (
    <div className="overlay">
			<h2>Are you sure?</h2><br />
      <Button call confirm></Button>
			<Button call reject></Button>
		</div>
  )
}