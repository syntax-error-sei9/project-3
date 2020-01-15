import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";

class WhereToGo extends Component {
  state = {
    search: ""
  };
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
  handleInputChange = e => {
    const value = e.target.value;
    this.setState(({ ...copyState }) => {
      copyState.search = value;
      return copyState;
    });
  };

  render()
   {
    let arrSearch = this.props.cities.filter(city =>
      city.toLowerCase().includes(this.state.search.toLowerCase())
    );
    arrSearch = arrSearch.map(city => (
      <div>
        <p>{city}</p>
      </div>
    ));
    return (
      <div>
        <form className="iputinfo" onSubmit={this.onSubmit}>
          <InputGroup className="mb-2 mx-3 my-2 w-auto">
            <InputGroup.Prepend>
              <InputGroup.Text>Where You want to Go </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Riyadh"
              onChange={this.handleInputChange}
              value={this.state.search}
              autoFocus
            />
            
            <Button type="submit">
              Search{" "}
            </Button>
          </InputGroup>

        </form>
        {this.state.search ? arrSearch : null}
      </div>
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
