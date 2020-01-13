import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class CityDetails extends React.Component{
    state={
        city:{}
    }
    componentDidMount(){
        let cityCopy = {...this.state}
        let cityId= this.props.match.params.id
        
        axios.get(`https://www.triposo.com/api/20190906/location.json?id=${cityId}&fields=name,snippet&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe`)
        .then(res=>{
            cityCopy=res.data.results
            this.setState({
                city:cityCopy[0]
            })
            console.log(this.state.city)
        })
        .catch(err=>{alert(err)})
       
      
    }
    render(){
        return(
            <div>
            <h1>city Info</h1>
            <h1>{this.state.city.name}</h1>
            <p>{this.state.city.snippet}</p>
            <div>interest</div>
            <div>also visited</div>
            </div>
        )
    }
}



export default withRouter(CityDetails);
