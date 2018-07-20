import React, { Component } from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Loader from './Loader';
import './loader.css';
import Scroll from './Scroll';




class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			return response.json()
		})
		.then( users =>{
			this.setState({ robots: users })
		})
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
		if(this.state.robots.length === 0){
			return <Loader />
		}else{
			return(
				<div className="tc">
					<h1 className="f-headline lh-solid">RoboFriends</h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<Scroll>
						<CardList robots={ filtetredRobots }/>
					</Scroll>
				</div>
			)
		}
    }

} 

export default App;