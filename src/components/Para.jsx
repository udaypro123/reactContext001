import React, { useContext } from 'react'
import { globaldata } from '../App'
const Para = () => {
    const a = useContext(globaldata);
    console.log(a)
  return (
    <div>
      {a?<p>I have change the theme dark</p>: <p>I have change the theme light</p>}
    </div>
  )
}

export default Para;
