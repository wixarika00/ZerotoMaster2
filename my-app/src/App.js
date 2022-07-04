import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox';


const state = {
    robots: robots,
    searchfield:'',
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield:'' 
        }
    }

    onSearchChange = (event) => {  // any time you use your method on the component
        this.setState({searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots); // event always needs target and value - we need to remember that
    }
    render()  {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        ); 
    }
}

export default App;