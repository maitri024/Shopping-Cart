import React, { Component } from 'react'

export class eventbind extends Component {
  
    constructor()
    {
        super()
        this.state={message:"hello"}

        this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler()
    // {this.setState({
    //     message:" gooodd  byeeeee"

    // })
    // }

    clickHandler=()=>{
    {this.setState({
        message:" gooodd  byeeeee"

    })
    }
}

    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default eventbind
