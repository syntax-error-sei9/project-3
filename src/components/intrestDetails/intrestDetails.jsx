import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class intrestDetails extends Component {
    state = { 
        cities: [],
     }

    componentDidMount(){
    let intrestName = this.props.match.params.id

    axios.get(`https://www.triposo.com/api/20190906/location.json?child_tag_labels=${intrestName}&count=10&fields=id,name,score,snippet,images&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe`)
    .then(res => {
    const results = res.data.results;
console.log(results)
    let intCities = []
    let city = {}
       let id=""
       let name=""
       let snipet=""
       let image=""
    
    results.map(element => {
        id = element.id
        name = element.name
        snipet = element.snippet
        image = element.images[0].sizes.medium
        city={
            id:id, name:name, snipet:snipet,image:image
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
         <div>
             {this.state.cities.map(city => {
               return (
                <div>
                <img src={city.image.url} />
                <h2>{city.name}</h2>
                <p>{city.snipet}</p>
                </div>
               )  
             }
             )}
         </div>
         );
    }
}
 
export default withRouter(intrestDetails);