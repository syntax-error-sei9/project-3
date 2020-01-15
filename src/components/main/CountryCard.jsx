import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class CountryCard extends Component {
  componentDidMount() {
    Axios.get(
      "https://www.triposo.com/api/20190906/location.json?tag_labels=country&count=20&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 4,
            flexWrap: "wrap",
            justifyContent: "space-around"
            
          }}
        >
          {this.props.countries.map(country => {
            return (
           
              <div class="card-group">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    variant="top"
                    src={country.image.url}
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{country.name}</h5>
                    <p class="card-text">{country.snippet}</p>
                  </div>
                  <Link to={`/Countries/${country.coutryid}/Cities`}
                  className="card"
                  key={country.coutryid}>
                  <Button variant="outline-secondary">
                  Discover</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
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
