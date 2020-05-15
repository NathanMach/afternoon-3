import React, {Component} from 'react';
import WhiteCard from './components/WhiteCard'
import './App.css';
import Data from './components/Data'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      person: Data
    }
  }



  render(){
    return(
      <div className='App'>
        <header className='header'>
          <h1>Home</h1>        
        </header>
        <div className='white'>
          <div className='counter'>1/25</div>
          <div className='info'>
          <h3>First name</h3>
          <br></br>
          <p>From:</p>
          <p>Job Title:</p>
          <p>Employer:</p>
          <br></br>
          <h4>Favorite Movies:</h4>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          </div>
        </div>
        <div class='mother'>
          <button className='button'>Previous</button>
        <div>
          <button className='butten'>Edit</button>
          <button className='butten'>Delete</button>
          <button className='butten'>New</button>
        </div>
        <button className='button'>Next</button>
        </div>
      </div>
    )

  }
} 

  
