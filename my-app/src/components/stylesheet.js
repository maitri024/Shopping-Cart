import React from 'react'
import './mystyles.css'

function stylesheet(props) {
    let className=props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}> Stylesheet</h1>
    </div>
  )
}
 
export default stylesheet
