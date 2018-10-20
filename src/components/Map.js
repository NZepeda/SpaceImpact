import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
    />
  ))
);

Map.defaultProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOOhhv1qEQ3UAT83137FmiMUfJhzGw27U&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

export default Map;
