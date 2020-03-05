import React, { Component } from 'react'
//import ResidencyCard from './ResidencyCard.js';
import List from './List.js'

export default class StateSelect extends Component {

  state = {
    states: [],
    selectedState: [],
    validationError: ""
  };
  
  componentDidMount() {
    fetch(`${process.env.REACT_APP_DB_URL}/listings/state/dropdown/show`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let fetchedListings = data.map(state => {
            return { value: state.state, display: state.state}
        });
        this.setState({
          states: [
            {
              value: "",
              display: "Select A State"
            }
          ].concat(fetchedListings)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleChange(event) {
  //   this.setState({selectedState: event.target.value});
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   alert('Your favorite flavor is: ' + this.state.selectedState);
  //   this.setState({selectedState: event.target.value}) 
  // }

  render() {
    {console.log("YOOOOOOOOOOOOOFIRST",this.state.selectedState)}
    return (
    
    <>
      <div>
       <form>
          {
            this.state.selectedState && 
            <select
            value={this.state.selectedState}
            onChange={e => 
              this.setState({
                selectedState: e.target.value,
                validationError:
                  e.target.value === ""
                    ? "Please select your state"
                    : ""
                })
              }
            >
              {this.state.states.map(state => (
                <option
                    key={state.value}
                    value={state.value}
                >
                    {state.display}
                </option>
              ))}
            </select>
          }

          {console.log("YOOOOOOOOOOOOOSECOND",this.state.selectedState)}

      </form>
    </div>

    <div>
          <List resState={this.state.selectedState} /> 
    </div>

         {/*{console.log("YOOOOOOOOOOOOO",this.state.selectedState)}
          {this.state.selectedState.map(state => <ResidencyCard item={state.state} key={state.id} />)}
            {this.state.validationError}*/} 
  </>
    )
  }
}