import React from 'react'
import "../topcommon/topbelownav.css"

const Topbelownav = (props) => {
  return (
    <div className='topu'>
        <h1>{props.name}</h1>
        {/* <img src={props.imgsrc} className="img-fluid animated" alt='home img'/> */}
    </div>
  )
}

export default Topbelownav