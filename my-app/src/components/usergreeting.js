import { render } from '@testing-library/react'
import React, { Component } from 'react'

class usergreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    //if-else
    // if(this.state.isLoggedIn){
    //     return (<div>Welcome maitri</div>)
    // }
    // else{
    //     return (<div>Welcome guest</div>)
    // }


    // let message
    // if(this.state.isLoggedIn){
    //     message= (<div>Welcome maitri</div>)
    // }
    // else{
    //     message= (<div>Welcome guest</div>)
    // }
    // return <div>{message}</div>

    //ternary operator
    // return(
    //     this.state.isLoggedIn ?
    //     <div>welcome maitri</div>:
    //     <div>Welcome guest</div>
    // )

    //short-circuit
   
    return this.state.isLoggedIn && <div>WElcome maitri</div>
    
    
    // return (
    //   <div>
    //     <div>Welcome maitri</div>
    //     <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default usergreeting
