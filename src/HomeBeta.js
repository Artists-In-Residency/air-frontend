import React, { Component } from 'react'
import Search from './Search.js';
import Map from './GMap.js';
import ResidencyCard from './ResidencyCard';
import SelectState from './SelectState';
import { getPagedResidencies, getUserFromLocalStorage } from './api';


export default class Home extends Component {
    state = {
        data: [],
        totalPage: 20,
        pageNumber: 1,
        shortData: [],
        user: {}
    }
    
    async componentDidMount() {
        // const result = await getAllResidencies();
        const result = await getPagedResidencies(1);
        this.setState({ data: result });
        // this.setState({ shortData: result.slice(0, 3) });
    }

    async pageThing(number) {
        // const result = await getAllResidencies();
        await this.setState({ pageNumber: this.state.pageNumber + number });
        const result = await getPagedResidencies(this.state.pageNumber);
        this.setState({ data: result });
        // this.setState({ shortData: result.slice(0, 3) });
        const userFromLocalStorage = getUserFromLocalStorage();
        if (userFromLocalStorage) {
            this.setState({ user: userFromLocalStorage });
        }          
    }

    let stateArray = this.state.data;
          const randomRezRender = array => {
              let randomRezArray = [];
              for (let i = array.length - 1; i > 0; i--) {
                const randomRes = Math.floor(Math.random() * (i + 1));
                randomArray.push(randomRes);
                if (randomArray.length > 10) {
                    return randomArray;
                }
              }
            return randomArray;
          }}



    render() {
        console.log('Home props:', this.props);

        let stateArray = this.state.data;
          const randomRezRender = array => {
              let randomRezArray = [];
              for (let i = array.length - 1; i > 0; i--) {
                const randomRes = Math.floor(Math.random() * (i + 1));
                randomArray.push(randomRes);
                if (randomArray.length > 10) {
                    return randomArray;
                }
              }
            return randomArray;
          }}

        return (
          <>
            <div>
                <SelectState />
                <Search user={this.props.user} />
                <Map />
                <ul className='residency-list'>
                  {randomArray.map(item => <ResidencyCard user={this.props.user} item={item} key={item.id} />)}
                </ul>
                <div className="paging">
                <button id="paging-button1" onClick={() => this.pageThing(-1)} disabled={this.state.pageNumber === 1} > LAST </button>
                <button id="paging-button2" onClick={() => this.pageThing(1)} disabled={this.state.page === 12}> NEXT </button>
                </div>
            </div>
          </>
        )
    }
