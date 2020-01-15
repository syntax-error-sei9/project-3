import React from 'react'
import {Card} from 'react-bootstrap' 

class CityCard extends React.Component{
    render()
    {return(
        <Card style={{ width: "18rem" }}>
      <Card.Img
                variant="top"
                src={this.props.imgURL}
                width="200"
                height="200"
              />
        <Card.Body>
            <Card.Title>
                {this.props.name}
            </Card.Title>
            {/* <Card.Text>
                {this.props.snippet}
            </Card.Text> */}
        </Card.Body>
        {/* <img src={this.props.imgURL} alt="" width="400" height="200"/> */}
        {/* <h3>{this.props.name}</h3> */}
        {/* <p>{this.props.snippet}</p> */}
   
        </Card>
    )}
}
export default CityCard;