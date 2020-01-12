import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SideBar extends Component {
    render() { 
        return ( 
            <div>
                {this.props.intrests.map(element => {
                    return (
                    <h1 key={element.intrestId}>{element.intrestName}</h1>
                    )
                })}
            </div>
         );
    }

    componentDidMount(){
        // const apiKey="&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
        // const apiHttps="https://www.triposo.com/api/20190906/"
        // const citiesInfo = "location.json?&count=50" // need id of city , has array of images , has intro
        // const apiUrl= apiHttps+citiesInfo+apiKey
        let intrests=[]
        axios.get('https://www.triposo.com/api/20190906/common_tag_labels.json')
        .then(res => {
          const results = res.data.results;
          results.map(intrest => {
            intrests.push({
                intrestName: intrest.name,
                intrestId: intrest.id,
                intrestDesc: intrest.description
             })
    
          })
          this.props.setIntrest(intrests)
        })
    }

}


const getState = (state) => {
  return {
      intrests: state.intrests
  }
}

const setState = (dispatch) => {
    return {
        setIntrest: (intrests) => dispatch({
            type: "Add_intrest",
            value: intrests
        })
    }
  }

export default connect(getState, setState) (SideBar);
