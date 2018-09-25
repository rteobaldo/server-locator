import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Loader from "./loader";

class MapContainer extends Component {
  render() {
    const lat = this.props.lat;
    const lng = this.props.lng;

    if (lat) {
      return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{
            lat,
            lng
          }}
        >
          {this.props.children}
        </Map>
      );
    } else {
      return <Map google={this.props.google} zoom={2} />;
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqMVhwDn6MoYiYfLiLedeAJgVxkniF9bk",
  LoadingContainer: Loader
})(MapContainer);
