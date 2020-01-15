import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CityCard from '../main/CityCard'


class CitiesInCountry extends React.Component {
    state = {  }
    render() { 
        console.log("is it working?")
        return ( 
            <React.Fragment>
            <div className="CitiesContainer">
            {this.props.CountryCities.map((city,index)=>{
                return(
                    <Link to={`/Countries/${city.countryId}/Cities/${city.id}`} key={index} >     
                        <CityCard id={city.id} name={city.name} imgURL={city.images[0].sizes.original.url} snippet={city.snippet} /> 
                    </Link>    
                )
            })}
            </div> 
            </React.Fragment>
        );
    }




    componentDidMount(){
        axios.get("https://www.triposo.com/api/20190906/location.json?part_of="+this.props.match.params.countryId+"&tag_labels=city&count=10&fields=id,name,score,snippet,images&order_by=-score&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe")
        .then(res => {
            let cities = res.data.results
            this.props.setCountryCities(cities)
        })
    }

}

const getState = (state) => {
   return{
    CountryCities: state.CountryCities
   }
}

const setState = (dispatch) => {
    return {
        setCountryCities: (cities) => dispatch({type: "SET_CITIES_IN_COUNRTY", value: cities})
    }
}
export default withRouter(connect(getState,setState)(CitiesInCountry));