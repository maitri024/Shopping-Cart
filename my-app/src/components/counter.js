import React, { Component } from "react";
import UpdatedComponent from "./HOC"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment=()=> {
        // this.setState({
        //     count:this.state.count + 1
        // },
        // ()=>{
        //     console.log('Callback value:',this.state.count)
        // })
        
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }

    // incrementFive()
    // {
    //    this.increment()
    //    this.increment()
    //    this.increment()
    //    this.increment()
    //    this.increment()
    // }


    render() {
        const { count }=this.state
        return <button onClick={this.increment}>{this.props.name} increment {count} times</button>
    }
}

export default  UpdatedComponent(Counter)