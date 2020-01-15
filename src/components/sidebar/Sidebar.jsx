import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'


class SideBar extends Component {
    
    render() { 
        const firstTen = this.props.intrests.slice(0,9)
        return ( 
        <Container>
            <Row>
        {firstTen.map(intrest => {
            let colors=["primary","secondary","success","danger","warning","info","dark"]
           let color= colors[Math.floor(Math.random()*colors.length)]
        return (
          
            <Col xs={3} md={4}>
            <br/>
             <Card bg={color} text="white" style={{ width: '18rem' ,textAlign:'center'}}>
                <Link style={{textDecoration: "none", color: "white"}} to={`/Interests/${intrest.intrestId}`}>
                <Card.Header>
                {intrest.intrestName}
                </Card.Header>
                </Link>
                {/* <Card.Body>
                <Card.Title>{intrest.intrestName}</Card.Title> 
                 <Card.Text>
                {intrest.intrestDesc}
                </Card.Text>
                </Card.Body> */}
             </Card>
            <br/>
             </Col>
        )
        
        })}
        </Row>
        </Container> 
            // <div>
            //     {firstTen.map(element => {
            //         return (
            //         <Link to={`/Interests/${element.intrestId}`}>
            //         <li key={element.intrestId}> {element.intrestName} </li>
            //         </Link>
            //         )
            //     })}       
            // </div>
         );
    }

    componentDidMount(){
        // const apiKey="&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
        // const apiHttps="https://www.triposo.com/api/20190906/"
        // const citiesInfo = "location.json?&count=50" // need id of city , has array of images , has intro
        // const apiUrl= apiHttps+citiesInfo+apiKey
        let intrests=[]
        axios.get('https://www.triposo.com/api/20190906/common_tag_labels.json')
        .then(res => {
          const results = res.data.results;
          results.map(intrest => {
            intrests.push({
                intrestName: intrest.name,
                intrestId: intrest.id,
                intrestDesc: intrest.description
             })
    
          })
          this.props.setIntrest(intrests)
        })
    }

}


const getState = (state) => {
  return {
      intrests: state.intrests
  }
}

const setState = (dispatch) => {
    return {
        setIntrest: (intrests) => dispatch({
            type: "Add_intrest",
            value: intrests
        })
    }
  }

export default withRouter(connect(getState, setState) (SideBar));
