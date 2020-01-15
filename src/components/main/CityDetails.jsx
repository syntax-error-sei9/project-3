import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import AlsoVisited from '../cities/AlsoVisitedCities'
import ThingsToDo from '../cities/ThingsToDo'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

class CityDetails extends React.Component{
    state={
        city:[]
    }
    componentDidMount(){
        let cityId= this.props.match.params.id
        let cityCopy = {}
        let name =""
        let snippet=""
        let id=""
        let countryId=""
        let images=[]
        let cityData=[]
        let arrCity=[]
        axios.get(`https://www.triposo.com/api/20190906/location.json?id=${cityId}&fields=name,snippet,id,country_id,images&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe`)
        .then(res=>{
            cityData = res.data.results[0]
            name= cityData.name
            snippet= cityData.snippet
            id= cityData.id
            countryId= cityData.country_id
            images= cityData.images
            cityCopy={name:name,snippet:snippet,id:id,countryId:countryId,images:images}  
            arrCity.push(cityCopy)     
            this.setState({
                city: arrCity
            })
        })
        .catch(err=>{alert(err)})
    }
    render(){
        return(
            this.state.city.length ?
            <div>
          
            <Jumbotron fluid>
            <Container>
            <h1>{this.state.city[0].name}</h1>
            <h5>{this.state.city[0].snippet}</h5>
            <Carousel>
            {/* <div style={{ display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>   */}
            {this.state.city[0].images.map(img =>
                        <Carousel.Item>
                        <img src={img.sizes.original.url} alt="city" width="1500" height="600"/>
                        </Carousel.Item>
            )}               
            {/* </div> */}
            </Carousel>
            </Container>
            </Jumbotron>
            <h3>Restaurants worth discovering</h3>
            <ThingsToDo />
            <br/>
            <h3>People also visited</h3>
            <AlsoVisited cityId={this.state.city[0].id} countryId={this.state.city[0].countryId} />
            </div> : null
        
        )
    }
}



export default withRouter(CityDetails);
