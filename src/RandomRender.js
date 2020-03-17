// seems like this file isn't being used? dead code confuses future devs and should be deleted

import React, { Component } from 'react'
import ResidencyCard from './ResidencyCard.js'


let stateArray = this.state.data;
const randomRezRender = array => {
    let randomRezArray = [];
    for (let i = array.length - 1; i > 0; i--) {
      const randomRes = Math.floor(Math.random() * (i + 1));
      randomArray.push(randomRes);
      if (randomArray.length > 10) {
          return randomArray
      }
    }
    return randomArray;
  }

export default class RandomRender extends Component {


randomRezRender(stateArray)

  class RecommendedPosts extends React.Component {
    render() {
      const shuffledPosts = shuffleArray(this.props.posts);
      return (
 
              <ul>
                <li>
                  {randomArray.map(item => {
                    <ResidencyCard user={this.props.user} item={item} key={item.id} />)}</li>
              </ul>
            );
          }
        }
    



