import React from 'react'

import Button from '../buttons/Button'

export default function Calling(props) {
  return (
    <div className="overlay">
    <form>
      <Button call></Button>
    </form><br />
    <h2>Calling...</h2>
  </div>
  )
}