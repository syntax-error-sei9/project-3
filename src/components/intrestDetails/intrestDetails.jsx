import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import CityCard from '../main/CityCard'
class intrestDetails extends Component {
    state = { 
        cities: [],
     }

    componentDidMount(){
    let intrestName = this.props.match.params.id

    axios.get(`https://www.triposo.com/api/20190906/location.json?child_tag_labels=${intrestName}&count=10&fields=id,name,score,snippet,images,country_id&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe`)
    .then(res => {
    const results = res.data.results;
console.log(results)
    let intCities = []
    let city = {}
       let id=""
       let name=""
       let snipet=""
       let image=""
    let countryId=""
    results.map(element => {
        id = element.id
        name = element.name
        snipet = element.snippet
        image = element.images[0].sizes.medium
        countryId=element.country_id
        city={
            id:id, name:name, snipet:snipet,image:image, countryId:countryId
        }
         intCities.push(city)
    })
    this.setState({
        cities: intCities
    })
    })
    }

    render() { 
        return ( 
         <div className="CitiesContainer">
             {this.state.cities.map((city,index) => {
               return (
                <div>
                <Link to={`/Countries/${city.countryId}/Cities/${city.id}`} key={index} >     
                    <CityCard id={city.id} name={city.name} imgURL={city.image.url} snippet={city.snipet} /> 
                </Link>    
                 
                 </div> 
                // <div>
                // <img src={city.image.url} />
                // <h2>{city.name}</h2>
                // <p>{city.snipet}</p>
                // </div>
               )  
             }
             )}
         </div>
         );
    }
}
 
export default withRouter(intrestDetails);