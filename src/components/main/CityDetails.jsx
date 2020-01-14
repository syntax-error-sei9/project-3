import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import AlsoVisited from '../cities/AlsoVisitedCities'
import ThingsToDo from '../cities/ThingsToDo'
class CityDetails extends React.Component{
    state={
        city:{}
    }
    componentDidMount(){
        let cityCopy = {...this.state}
        let cityId= this.props.match.params.id
        
        axios.get(`https://www.triposo.com/api/20190906/location.json?id=${cityId}&fields=name,snippet,id,country_id&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe`)
        .then(res=>{
            cityCopy=res.data.results
            this.setState({
                city:cityCopy[0]
            })
        })
        .catch(err=>{alert(err)})
    }
    render(){
        return(
            <div>
            <h1>city Info</h1>
            <h1>{this.state.city.name}</h1>
            <p>{this.state.city.snippet}</p>
            <ThingsToDo cityId={this.state.city.id}/>
            <AlsoVisited cityId={this.state.city.id} countryId={this.state.city.country_id} />
            </div>
        )
    }
}



export default withRouter(CityDetails);
