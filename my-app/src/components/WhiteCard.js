import React from 'react'

export default class WhiteCard extends React.Component{
    constructor(){
     super()
     this.state = {
         name: 'Marion Santori',
         from: 'Liverpool, United Kingdom',
         jobTitle: 'Research Associate',
         employer: 'Skinix',
         favoriteMovies: ['Fathom', 'Strange Magic', 'Martian Child']
        }
    }
    
    
    render(){
        return <div>
             <h1>Person no. {props.person.id}</h1>
            <p>{props.person.firstName} {props.person.lastName}</p>
            <span>name: </span>
            <p>{props.person.name}</p>
            <span>from:</span>
            <p>{props.person.person}</p>
            <span>Job Title:</span>
            <p>{props.person.jobTitle}</p>
            <span>employer:</span>
            <p>{props.person.employer}</p>
            <span>Favorite Movies:</span>
            <p>{props.person.favoriteMovies}</p>
        </div>
    }

}
