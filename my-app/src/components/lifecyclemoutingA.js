import React, { Component } from 'react'
import LifeCycleB from './lifecyclemoutingB'

class lifecyclemoutingA  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "MAitri"
        }
        console.log("Life cycleA constructor")

    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA static")
        return null
    }
    componentDidMount() {
        console.log("lifecycleA Mount")
    }
    shouldComponentUpdate(){
        console.log("lifecycle A shouldUpdate")
    return true
    }
    getSnapshotBeforeUpdate(prevProps,preState){
        console.log("lifecycle A snapshotUpdate" )
        return null
    }
    componentDidUpdate(){
        console.log("lifecycle A componenetUpdate")
    }

    changeState=()=>{
        this.setState({
            name:"CodeSuccess"
        })
    }

    render() {
        console.log("lifecycleA render")
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default lifecyclemoutingA
