import React, { Component } from 'react'
import loading from '../assets/thin.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img src={loading} alt= "loading" height="180px" width="300px" />
      </div>
    )
  }
}

export default Spinner