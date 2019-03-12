import React, { Component } from 'react';
import axios from "axios"

class CategoryList extends Component {
    constructor () {
        super()
        this.state = {
            activity: {}
        }
    }
    // componentDidMount
    componentDidMount() {
        axios.get(`http://www.boredapi.com/api/activity/`)
            .then(res => {
                this.setState({ activity: res.data})
            })
    }

    render() {
            
            return (
            <div className="categoryBox">
                <h1 className="task">{this.state.activity.activity} </h1>
                
            </div>
        );
    }
}

export default CategoryList;