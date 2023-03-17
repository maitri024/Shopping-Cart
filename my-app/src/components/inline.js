import React from 'react'

const heading={
    fontSize:'72px',
    color:'blue'
}

function inline() {
  return (
    <div>
        <h1 className='error'>ERROR</h1>
      <h1 style={heading}> INLINE</h1>
    </div>
  )
}

export default inline
