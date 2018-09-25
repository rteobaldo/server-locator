import "isomorphic-unfetch";
import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { Marker, InfoWindow } from "google-maps-react";

import MapContainer from "../components/map-container";
import {
  inputText,
  getSearchInput
} from "../services/redux/modules/search-bar";

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static async getInitialProps({ query, reduxStore }) {
    reduxStore.dispatch(inputText(query.domain));

    const res = await fetch(
      `http://api.ipstack.com/${
        query.domain
      }?access_key=58b9b13d71bd70ed7583f35bd2ac3509`
    );
    const json = await res.json();

    return {
      currentDomain: query.domain,
      domain: query.domain,
      domainInfo: json
    };
  }

  onSearchSubmit(e) {
    e.preventDefault();
    let parsedURL = "";

    try {
      parsedURL = new URL(this.props.domain);
      parsedURL = parsedURL.hostname;
    } catch (e) {
      if (e instanceof TypeError) {
        parsedURL = this.props.domain;
      } else {
        console.log(e);
      }
    }

    Router.push(`/search/${parsedURL}`);
  }

  handleInputChange(e) {
    e.preventDefault();
    if(e.target.value === '') return false;
    this.props.inputText(e.target.value);
  }

  render() {
    const domain = this.props.domain;
    const lat = this.props.domainInfo.latitude;
    const lng = this.props.domainInfo.longitude;

    return (
      <>
        <style jsx>{`
          .sidebar {
            box-shadow: 1px 0px 5px #000;
            z-index: 101;
          }
        `}</style>

        <div className="container-fluid vh-100">
          <div className="row vh-100">
            <div className="col-3 py-4 sidebar">
              <form
                className="d-flex align-items-center flex-column"
                onSubmit={e => this.onSearchSubmit(e)}
              >
                <div class="input-group">
                  <input
                    className="form-control"
                    type="text"
                    autoFocus
                    defaultValue={this.props.domain}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <div class="input-group-append">
                    <button className="btn btn-outline-primary">Search</button>
                  </div>
                </div>
              </form>

              <div className="mt-4">
                {lat ? (
                  <>
                    <p className="font-italic">
                      Details about <strong>{this.props.currentDomain}</strong>:
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Location:</strong>
                        &nbsp;
                        {this.props.domainInfo.location.country_flag_emoji}
                        &nbsp;
                        {this.props.domainInfo.country_name}
                      </li>
                      <li>
                        <strong>Latitude:</strong>
                        &nbsp;
                        {this.props.domainInfo.latitude}
                      </li>
                      <li>
                        <strong>Longitude:</strong>
                        &nbsp;
                        {this.props.domainInfo.longitude}
                      </li>
                      <li>
                        <strong>Capital:</strong>
                        &nbsp;
                        {this.props.domainInfo.location.capital}
                      </li>
                    </ul>
                  </>
                ) : (
                  <p>
                    <strong>{this.props.currentDomain}</strong> not found =T
                  </p>
                )}
              </div>
            </div>
            <div className="col p-0">
              <MapContainer lat={lat} lng={lng}>
                <Marker
                  position={{ lat: lat, lng: lng }}
                  name={"Current location"}
                />
              </MapContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  domain: getSearchInput(state)
});

const mapDispatchToProps = {
  inputText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
