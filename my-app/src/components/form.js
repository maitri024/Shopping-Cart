import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        
    }
    handleComments = e => {
        this.setState({
            comments: e.target.value
        })
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleTopic = (e) => {
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit=e=>{
       alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
e.preventDefault()
    }

    render() {
        const{username,comments,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input
                    type='text'
                    value={username}
                    onChange={this.handleUsername} ref={this.inputRef}></input><br /><br />
                <label>Comments:</label>
                <textarea
                    value={comments}
                    onChange={this.handleComments}></textarea><br /><br />
                <label>Topic:</label>
                <select
                    value={topic}
                    onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select><br /><br />
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default form
