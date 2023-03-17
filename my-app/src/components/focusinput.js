import React, { Component } from 'react'
import Input from './input'

 class focusinput extends Component {
    constructor(props)
    {
        super(props)
        this.componentRef=React.createRef()
    }
    clickhandler=()=>
    {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickhandler}>Focus Input</button>
      </div>
    )
  }
}

export default focusinput
