import React, {Component} from 'react';
import WhiteCard from './components/WhiteCard'
import './App.css';
import Data from './components/Data'
import data from './components/Data';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      person: Data,
      index: 0
    }    
    this.buttonNext=this.buttonNext.bind(this)

    this.buttonPrevious=this.buttonPrevious.bind(this)
  }

buttonNext() {
  let nextIndex = this.state.index + 1
  if(nextIndex === this.state.person.length){
    nextIndex = this.state.person.length - 1
  }
  this.setState({index: nextIndex})
}

buttonPrevious() {
  {
    if(this.state.index === 0) 
    return;
  
    this.setState(element => ({
      index: element.index - 1
    }))
  }
}


  render(){
    return(
      <div className='App'>
        <header className='header'>
          <h1>Home</h1>        
        </header>
        <div className='white'>
          <div className='counter'>{this.state.person[this.state.index].id}/25</div>
          <div className='info'>
          <h3>{this.state.person[this.state.index].name.first} {this.state.person[this.state.index].name.last}</h3>
          <br></br>
          <p>From: {this.state.person[this.state.index].city}</p>
          <p>Job Title: {this.state.person[this.state.index].title}</p>
          <p>Employer: {this.state.person[this.state.index].employer}</p>
          <br></br>
          <h4>Favorite Movies:</h4>
          <ol>
            <li>{this.state.person[this.state.index].favoriteMovies[0]}</li>
            <li>{this.state.person[this.state.index].favoriteMovies[1]}</li>
            <li>{this.state.person[this.state.index].favoriteMovies[2]}</li>
          </ol>
          </div>
        </div>
        <div class='mother'>
          <button onClick={this.buttonPrevious} className='button'>Previous</button>
        <div>
          <button className='butten'>Edit</button>
          <button className='butten'>Delete</button>
          <button className='butten'>New</button>
        </div>
        <button onClick={this.buttonNext} className='button'>Next</button>
        </div>
      </div>
    )
  }
} 

  
