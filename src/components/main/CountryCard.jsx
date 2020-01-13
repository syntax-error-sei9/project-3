import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class CountryCard extends Component {
  componentDidMount() {
    Axios.get(
      "https://www.triposo.com/api/20190906/location.json?tag_labels=country&count=100&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
    ).then(response => {
      const countries = response.data.results;
      let name = "";
      let coutryid = "";
      let image = "";
      let snippet = "";
      let countriesObj = {};
      let countriesArr = [];
      countries.map(country => {
        name = country.name;
        coutryid = country.country_id;
        image = country.images[0].sizes.original;
        snippet = country.snippet;
        countriesObj = {
          name: name,
          coutryid: coutryid,
          image: image,
          snippet: snippet
        };
        countriesArr.push(countriesObj);
      });
      this.props.setCountries(countriesArr);
      console.log(countriesArr);
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.props.countries.map(country => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={country.image.url}
                width="200"
                height="200"
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>
                  <p>{country.snippet}</p>
                </Card.Text>
                <Button variant="outline-secondary"
                Link to={`/countries/${country.coutryid}`}
                className="card"
                key={country.coutryid}
                Link>

                Discover</Button>
              </Card.Body>
            </Card>

            //     <Link to={`/countries/${country.coutryid}`}
            //     className="card"
            //     key={country.coutryid}
            //   >
            //                   <div className="CountryCard">
            //       <img src={country.image.url} width="200" height="200" />
            //       <h2>{country.name}</h2>
            //       <p>{country.snippet}</p>
            //     </div>
            //     </Link>
          );
        })}
      </React.Fragment>
    );
  }
}
const getState = state => {
  return { countries: state.countries };
};
const setState = dispatch => {
  return {
    setCountries: countries => {
      return dispatch({ type: "GET_COUNTRIES", value: countries });
    }
  };
};
export default connect(getState, setState)(CountryCard);
