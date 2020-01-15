import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import CityCard from '../main/CityCard'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


class Cities extends React.Component {
    
    componentDidMount(){
        const apiUrl= 'https://www.triposo.com/api/20190906/location.json?&fields=all&count=10&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe'
        let id =""
        let name=""
        let img=""
        let snippet=""
        let countryId=""
        let cityObj={}
        let allCities=[]
        axios.get(apiUrl)
        .then(res => {
            res.data.results.map(city => {
                id = city.id
                name=city.name
                img=city.images[0].sizes.original
                snippet=city.snippet
                countryId=city.country_id
                cityObj={id:id, name:name, img:img, snippet:snippet, countryId:countryId}
                allCities.push(cityObj)
            })
            this.props.setAllCities(allCities);
        })
    }
    render() { 
        return ( 
            <React.Fragment>
            <h1>Cities Around The World</h1>
            <div className="CitiesContainer">
            {this.props.allCities.map((city,index)=>{
                return(
                    
                    <Link to={`/Countries/${city.countryId}/Cities/${city.id}`} key={index} >     
                        <CityCard id={city.id} name={city.name} imgURL={city.img.url} snippet={city.snippet} /> 
                    </Link>    
                     
                           
                )
            })}
            </div> 
            </React.Fragment>
         );
    }
}
 
const getState=state=>{
    return{
        allCities:state.allCities
    }
}
const setState=dispatch=>{
    return{
        setAllCities:(arrAllCities)=>{
            return dispatch({
                type:"SET_ALL_CITIES",
                value:arrAllCities
            })
        }
    }

}
export default connect(getState,setState)(Cities)