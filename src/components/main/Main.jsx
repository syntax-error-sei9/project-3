import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import CityCard from './CityCard'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
class MainSection extends React.Component{
    componentDidMount(){
        const apiKey="&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
        const apiHttps="https://www.triposo.com/api/20190906/"
        const citiesInfo = "location.json?&count=15" // need id of city , has array of images , has intro
        const apiUrl= apiHttps+citiesInfo+apiKey

        let name=""
        let img=""
        let cityId=""
        let countryId=""
        let snippet=""
        let cityObj={}
        let citiesTop=[]
        axios.get(apiUrl)
        .then(res => {
            res.data.results.map(city => {
                name=city.name
                img=city.images[0].sizes.original
                cityId=city.id
                countryId=city.country_id
                snippet=city.snippet
                cityObj={name:name, img:img, snippet:snippet ,cityId:cityId,countryId:countryId}
                citiesTop.push(cityObj)
            })
            this.props.setTopCities(citiesTop);
        })
    }
    render(){
        return(
            <Carousel>
            {this.props.topCities.map((city,index)=>
                        <Carousel.Item>
                            <Link to={`/Countries/${city.countryId}/Cities/${city.cityId}`}>
                       <img src={city.img.url} width="1500" height="600"/>
                       </Link>
                       <Carousel.Caption>
                        <h1>{city.name}</h1>
                         <h4>{city.snippet}</h4>
                        </Carousel.Caption>
                        </Carousel.Item>
            )}               
            
            </Carousel>
            // <Carousel>
            // {this.props.topCities.map((city,index)=>
            //             <Carousel.Item>
            //              <CityCard key={index} name={city.name} imgURL={city.img.url} snippet={city.snippet} style={{width:"800px"}}/>
            //             </Carousel.Item>
            // )}               
            
            // </Carousel>
        )
    }
}
const getState=state=>{
    return{topCities: state.topCities}
}
const setState=dispatch=>{
    return{
        setTopCities:(arrTopCities)=>{
            return dispatch({
                type:"SET_TOP_CITIES",
                value:arrTopCities
            })
        }
    }

}
export default connect(getState,setState)(MainSection)