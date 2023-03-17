import React, { Component } from "react";

class ClassClick extends Component{
    classHandler(){
        console.log("Clciked the button")
    }
    render() {
      return (
        <div>
          <button onClick={this.classHandler}>CLick ME</button>
        </div>
      )
    }
}

export default ClassClick