import { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqMVhwDn6MoYiYfLiLedeAJgVxkniF9bk"
})(MapContainer);
