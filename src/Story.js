import React, { Component } from 'react'

export default class Story extends Component {
    render() {
        return (
            <div>
            Title:{this.props.title}<br/>
            Author:{this.props.author}<br/>
            Date and Time Created:{this.props.created}
            </div>
        )
    }
}
