import React, { Component } from 'react'
import loading from "./component/spinner.gif"

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading}></img>
      </div>
    )
  }
}
