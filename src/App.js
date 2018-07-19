import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';




class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        
        this.setState({
            searchfield: event.target.value
        })
    }
    
    render(){
        const filtetredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={ filtetredRobots }/>
            </div>
        )
    }

} 

export default App;