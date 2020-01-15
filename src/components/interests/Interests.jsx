import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

class Interests extends Component {
    render() { 
        return ( 
        <Container>
            <Row>
        {this.props.interests.map(intrest => {
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
        </Container>);
    }
}

const getState = (state) => {
    return {
        
        interests: state.intrests
    }
}

 
export default connect(getState)(Interests);