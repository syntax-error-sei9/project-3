import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Card} from 'react-bootstrap' 

class ThingsToDo extends React.Component {
    state = { 
        cityRestrunts:[]
     }
    componentDidMount(){
        //restrunts
        //https://www.triposo.com/api/20190906/poi.json?location_id=${this.props.match.params.id}&tag_labels=eatingout&fields=id,name,images,booking_info&count=5&order_by=-score
        // hotels
        //https://www.triposo.com/api/20190906/poi.json?location_id=Paris&tag_labels=hotels&fields=id,name,images,booking_info&count=5&order_by=-score
        //museums
        //https://www.triposo.com/api/20190906/poi.json?location_id=Paris&tag_labels=museums&bookable=1&fields=id,name,images,booking_info&count=5&order_by=-score
        axios.get("https://www.triposo.com/api/20190906/poi.json?location_id="+this.props.match.params.id+"&tag_labels=eatingout&fields=id,name,images,booking_info&count=5&order_by=-score&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe")
        .then(res =>{
            const cityRestruntsCopy = res.data.results
            this.setState({
                cityRestrunts:cityRestruntsCopy
            })
            console.log(cityRestruntsCopy)
        })
        .catch(err=>alert(err))
    }

    render() { 
        
        return ( 
            <div className="CitiesContainer">
            {this.state.cityRestrunts.map(rest=>{
                return(
                <Card style={{ width: "18rem" }}>
                <Card.Img
                          variant="top"
                          src={rest.images[0].sizes.original.url}
                          width="200"
                          height="200"
                        />
                  <Card.Body>
                      <Card.Title>
                          {rest.name}
                      </Card.Title>
                  </Card.Body>   
                  </Card>
                )
            })}
           </div>
         );
    }
}
 
export default withRouter(ThingsToDo);