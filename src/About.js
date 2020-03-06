import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
  render() {
    return (
      <>
        <main>
          <div className='main-container'>
            <div className='devs'>
              <h1 className='h1'>Air Supply</h1>
            </div>

            <div className='devs'>
              <div className='dev'>
                <h3>Josh</h3>
                <p>...foolishness...</p>
                <img src="../assets/JOSH.png" alt="Josh"/>

              </div>

              <div className='dev'>
                <h3>Mikey</h3>
                <p>...foolishness...</p>
                <img src="../assets/MIKEY.jpg" alt="MIKEY"/>
              </div>

              <div className='dev'>
                <h3>Nathan</h3>
                <p>...foolishness...</p>
                <img src="../assets/NATHAN.png" alt="Nathan"/>
              </div>

              <div className='dev'>
                <h3>Scott</h3>
                <p>...foolishness...</p>
                <img src="../assets/SCOTT.jpeg" alt="Scott"/>
              </div>

            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="thanks">
          Air Supply would like to extend a special thanks to Everest Pimpkin. Without their mission of compiling a compendium of artist residencies around the globe—and their further willingness to share that information—this project would not have been possible. 
          </div>
        </footer>
      </>
    )
  }
}
