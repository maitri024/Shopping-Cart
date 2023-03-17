import React, { Component } from "react";

class Welcome extends Component {
    // render() {
    //     return <h1>Class Welcome {this.props.name} {this.props.heroName}</h1>
    // }

    render() {
        const {name,heroName}=this.props
      return (
        <div>
          <h1>Welcome {name} {heroName}</h1>
        </div>
      )
    }
}

export default Welcome