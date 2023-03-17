import React, { Component } from 'react'
import ComponentF from './ComponentF'
import usercontext from './usercontext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E {this.context}
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType=usercontext

export default ComponentE
