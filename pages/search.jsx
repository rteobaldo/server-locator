import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

class Search extends Component {
  render() {
    return (
      <>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </>
    );
  }
}

export default connect()(
  GoogleApiWrapper({
    apiKey: "AIzaSyAqMVhwDn6MoYiYfLiLedeAJgVxkniF9bk"
  })(Search)
);
