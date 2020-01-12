import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import CityCard from './CityCard'
class MainSection extends React.Component{
    componentDidMount(){
        const apiKey="&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
        const apiHttps="https://www.triposo.com/api/20190906/"
        const citiesInfo = "location.json?&count=25" // need id of city , has array of images , has intro
        const apiUrl= apiHttps+citiesInfo+apiKey

        let name=""
        let img=""
        let snippet=""
        let cityObj={}
        let citiesTop=[]
        axios.get(apiUrl)
        .then(res => {
            res.data.results.map(city => {
                name=city.name
                img=city.images[0].sizes.original
                snippet=city.snippet
                cityObj={name:name, img:img, snippet:snippet}
                citiesTop.push(cityObj)
            })
            this.props.setTopCities(citiesTop);
            console.log(citiesTop)
        })
    }
    render(){
        return(
            this.props.topCities.map((city,index)=>{
                return(
                    <CityCard key={index} name={city.name} imgURL={city.img.url} snippet={city.snippet} />
                )
            })
           
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