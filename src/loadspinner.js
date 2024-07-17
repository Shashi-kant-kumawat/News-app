import React, { Component } from 'react'
import Loading from "./component/spinner.gif"

export default class loadspinner extends Component {
  render() {
    return (
      <img src={Loading}></img>
    )
  }
}
