import React, { Component } from 'react'
import { Userconsumer } from './usercontext'

export class ComponentF extends Component {
    render() {
        return (
            <Userconsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }

            </Userconsumer>


        )
    }
}

export default ComponentF
