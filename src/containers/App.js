import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Loader from '../components/Loader';
import '../components/loader.css';
import Scroll from '../components/Scroll';




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
		const { robots,searchfield } = this.state;
        const filtetredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLowerCase())
        })
		
		return !robots.length ?
			<Loader /> :
			(
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

export default App;