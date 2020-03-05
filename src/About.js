import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
  render() {
    return (
      <>
        <main>
          <div className='main-container'>
            <div className='devs'>
              <h1 className='h1'>The Four Foolios</h1>
            </div>

            <div className='devs'>
              <div className='dev'>
                <h3>Foolio One</h3>
                <p>...foolishness...</p>
                <image src=""></image>

              </div>

              <div className='dev'>
                <h3>Foolio Two</h3>
                <p>...foolishness...</p>
                <image src=""></image>
              </div>

              <div className='dev'>
                <h3>Foolio Three</h3>
                <p>...foolishness...</p>
                <image src=""></image>
              </div>

              <div className='dev'>
                <h3>Foolio Four</h3>
                <p>...foolishness...</p>
                <image src=""></image>
              </div>

            </div>
          </div>
        </main>
      </>
    )
  }
}
