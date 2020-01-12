import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(){
    return ( 
        <div>
        <h1>NAVbar</h1>
        <Link to="/Country">Country</Link>
        <Link to="/City">City</Link>
        <Link to="/Interests">Interests</Link>
        </div>
     )  
}
 
export default Nav;