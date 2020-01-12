import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class WhereToGo extends Component {
  onSubmit = event => {
    event.preventDefault();
    console.log(this.props.cities);
  };
  componentDidMount() {
    axios
      .get(
        "https://www.triposo.com/api/20190906/location.json?&fields=name&count=100&account=M48YWFOZ&token=8tobp16qxx6luhn0k0fhlou5m4h52poe"
      )
      .then(response => {
        let cities = response.data.results;
        let citiesNames = cities.map(c => c.name);
        this.props.setCities(citiesNames);
        // console.log(citiesNames)
      });
  }
  render() {
    return (
      <form className="iputinfo" onSubmit={this.onSubmit}>
        <input type="text" cities="cities" />
        <button type="submit" />
      </form>
    );
  }
}
const getState = state => {
  return { cities: state.cities };
};
const setState = dispatch => {
  return {
    setCities: cities => {
      return dispatch({ type: "SET_CITIES", value: cities });
    }
  };
};
export default connect(getState, setState)(WhereToGo);
