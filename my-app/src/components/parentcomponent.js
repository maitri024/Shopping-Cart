import React, { Component } from 'react'
import Childcomponent from './childcomponent'

class parentcomponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"maitri"
      }
      this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <Childcomponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default parentcomponent
