import React from 'react'

class CityCard extends React.Component{
    render()
    {return(
        <div className="cityCard">
        <img src={this.props.imgURL} alt="" width="400" height="200"/>
        <h3>{this.props.name}</h3>
        <p>{this.props.snippet}</p>
        </div>
    )}
}
export default CityCard;