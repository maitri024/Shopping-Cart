import React, { Component } from 'react'

class lifecyclemoutingB  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "MAitri"
        }
        console.log("Life cycleB constructor")

    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB static")
        return null
    }
    componentDidMount() {
        console.log("lifecycleB Mount")
    }
    shouldComponentUpdate(){
        console.log("lifecycle B shouldUpdate")
    return true
    }
    getSnapshotBeforeUpdate(prevProps,preState){
        console.log("lifecycle B snapshotUpdate" )
        return  null
    }
    componentDidUpdate(){
        console.log("lifecycle B componenetUpdate")
    }

    

    render() {
        console.log("lifecycleB render")
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default lifecyclemoutingB
