import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
  render() {
    return (
      <>
        <main>
            <div className='devs'>
                <div className='team-dev'>
                  <a href="https://github.com/Artists-In-Residency" target="_blank" rel="noopener noreferrer">
                  <h1 className='airSupplyHeader'>airSupply</h1>
                    <img src="../assets/GITHUB.png" alt="air"/>
                  </a>
                  <p className="supplyPara">airSupply is a project committed to faciliating the creation and pursuit of artistic expression. For those interested in securing residency, airSupply helps artists locate the requisite information in order to achieve their goals and meet their needs.</p>
                  
                </div>    
            </div>

            <div className='devs'>
              <div className='dev'>
                <img src="../assets/JOSH.png" alt="Josh"/>
                <br></br>
                <p>JOSH FORD is an underground glass artist turned programmer and has made it his mission to fuse creativity with technology.  He is humbled and impassioned to contribute to a project that will serve as a utility to artists, and hopes that this tool will serve as a gateway to individuals pursuing creation.</p>
                <div className="links">
                    <a href="https://github.com/thisisjoshford" target="_blank" rel="noopener noreferrer">
                      <img src="../assets/GITHUB.png" alt="air"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thisisjoshford/" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/LINKED.png"></img>
                    </a>
                    
                </div>
              </div>

              <div className='dev'>
                <img src="../assets/MIKEY.jpg" alt="MIKEY"/><br></br>
                <p>MICHAEL ROMAY is a musician and an installation artist who loves to make weird digital visual and interactive art.  Code, music and art go hand in hand for him and finding cool residencies around the world where he can work on his craft is what pushed him to be involved with this project.  He also has a baby bird named Rico that is very sweet.</p>
                <div className = "links">
                    <a href="https://github.com/mikeymasonic" target="_blank" rel="noopener noreferrer">
                      <img src="../assets/GITHUB.png" alt="air"/>
                    </a>
                    <a href="https://www.linkedin.com/in/michaelromay/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedImg" src="../assets/LINKED.png" rel="noopener noreferrer"></img>
                    </a>
                   
                </div>   
              </div>

              <div className='dev'>
                <img src="../assets/NATHAN.png" alt="Nathan"/>
                <br></br>
                <p>NATHAN MARTEL is a graphic designer and developer in Portland, Oregon. Having hosted many Couchsurfers from around the world, he is a strong believer in cultural exchange and in the inspiration that can come from traveling.</p>
                <div className = "links">
                    <a href="https://github.com/nathanmartel" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/GITHUB.png" alt="air"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nathanmartel/" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/LINKED.png"></img>
                    </a>
                   
                </div>  
              </div>

              <div className='dev'>
                <img src="../assets/SCOTT.jpeg" alt="Scott"/>
                <br></br>
                <p>SCOTT CAMPBELL dropped out of law school to a write a novel once. He believes creative expression is imperative for both individual and social growth. As such, is inspired by the mission of the project and grateful to be party to the cause.</p>
                <div className = "links">
                    <a href="https://github.com/scottCampbell86" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/GITHUB.png" alt="air"/>
                    </a>
                    <a href="https://www.linkedin.com/in/scottthomascampbell/" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/LINKED.png"></img>
                    </a>
                  
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
