import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CityCard from '../main/CityCard'
import {withRouter} from 'react-router-dom'

class AlsoVisitedCities extends React.Component {
    state={
        alsoVisited:[]
    }
    componentDidMount(){
        axios.get("https://www.triposo.com/api/20190906/location.json?part_of="+this.props.match.params.countryId+"&also_visited="+this.props.match.params.id+"&order_by=-also_visited_score&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe")
        .then(res =>{
            const alsoVisitedCopy = res.data.results
            this.setState({
                alsoVisited:alsoVisitedCopy
            })
        
        })
        .catch(err=>alert(err))
    }

    render() { 
        return ( 
    
                    <div style={{display:"flex", flexDirection:"row"}}>
                {this.state.alsoVisited.map((city,index)=>{
                return(
                    <Link to={`/Cities/${city.id}`} key={index}> 
                    <CityCard name={city.name} imgURL={city.images[0].sizes.original.url} snippet={city.snippet} />
                    </Link> 
                )
            })}
                </div>
                
          
         )
    }
}
 
export default withRouter(AlsoVisitedCities);