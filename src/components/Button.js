import React, { Component } from 'react'

export default class Button extends Component {

  render() {
    const { name } = this.props;
    return (
      <div>
        <p>{name}</p>
      </div>
    )
  }
}
