import React, { Component } from 'react';

class NameBox extends Component {
    constructor(){
        super()
    
        this.state = {
            firstName: '',
            lastName: '',
            list: [] // an empty array for the names to be spreaded [ex: ...prevState.listi] into is necessary here
        }
        
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}) // this controls the input value ; e.target.name refers to every name attribute ; you need square [] to make it dynamic
    }
    
    handleClick = e => {
        this.setState(prevState => {
            return {
                list: [`${prevState.firstName} ${prevState.lastName}`, ...prevState.list]  // here you control the  onClick in <button> ; 
                
                // here you are also plugging the prevState.firstName/lastName and the prevState.list to render a list of names onClick
            }
        })
    }
    render() {
        const mappedList = this.state.list.map(name => { /* here we are mapping through the list array for it to 
            return an ordered list of names(name = firstName/lastName in the input) */

            return <li>{name}</li>
        })
        const {firstName, lastName} = this.state; /* here I declare that firstName & lastName = this.state ; this allows me to only have to 
        write just value={firstName} in */

        return (


            
            <div>
                
                <input type="text" value={firstName} name='firstName' placeholder="Your Name Here" onChange={this.handleChange} />
                <input type="text" value={lastName} name='lastName' placeholder="Your Name Here" onChange={this.handleChange} />

                <button onClick={this.handleClick}>Submit</button> {/* your button needs an onClick event  */}
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                
                <ol>{mappedList}</ol> 
                {/* here is JSX for the now mappedList of names to appear as an ordered list */}
            </div>
        );
    }
}

export default NameBox;