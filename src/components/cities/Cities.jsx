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
        let cityObj={}
        let allCities=[]
        axios.get(apiUrl)
        .then(res => {
            res.data.results.map(city => {
                id = city.id
                name=city.name
                img=city.images[0].sizes.original
                snippet=city.snippet
                cityObj={id:id, name:name, img:img, snippet:snippet}
                allCities.push(cityObj)
            })
            this.props.setAllCities(allCities);
            console.log(allCities)
        })
    }
    render() { 
        return ( 
            <React.Fragment>
            <h1>ALL CITIES</h1>
            {this.props.allCities.map((city,index)=>{
                console.log(city.id)
                return(
                    <div>
                    <Link to={`/Cities/${city.id}`} key={index} >     
                        <CityCard id={city.id} name={city.name} imgURL={city.img.url} snippet={city.snippet} /> 
                    </Link>    
                     
                     </div>       
                )
            })}
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