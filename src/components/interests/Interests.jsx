import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Interests extends Component {
    render() { 
        return ( <div>
        {this.props.interests.map(intrest => {
        return (
            <Link to={`/Interests/${intrest.intrestId}`}>
            <h1>{intrest.intrestName}</h1>
            </Link>
        )
        })}
        </div> );
    }
}

const getState = (state) => {
    return {
        
        interests: state.intrests
    }
}

 
export default connect(getState)(Interests);