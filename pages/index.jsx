import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Router from "next/router";

import {
  inputText,
  getSearchInput
} from "../services/redux/modules/search-bar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    this.props.inputText(e.target.value);
  }

  render() {
    return (
      <Fragment>
        <style jsx>{`
          .row {
            margin-top: 12%;
          }
        `}</style>

        <div className="container-fluid vh-100">
          <div className="row justify-content-center">
            <div className="col-4 mt-5 text-center">
              <h1>Server Locator</h1>
              <p>Know where is located the site server you access.</p>
              <form
                className="d-flex align-items-center flex-column"
                onSubmit={e => this.onSearchSubmit(e)}
              >
                <input
                  className="w-100"
                  type="text"
                  autoFocus
                  defaultValue={this.props.domain}
                  onChange={e => this.handleInputChange(e)}
                />
                <button className="btn btn-primary w-25 mt-4">Search</button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
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
)(Home);
