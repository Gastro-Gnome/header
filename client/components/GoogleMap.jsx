import React from 'react';
import GOOGLE_MAP_API_KEY from '../../secret.js'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components';

const MarkerIcon = styled.div`
  color = red;
  font-size = 50px: 
`;
const AnyReactComponent = () => <MarkerIcon className="fas fa-map-marker-alt"></MarkerIcon>;

class GoogleMap extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY}}
            center={{lat: parseFloat(this.props.data["latitude"]), lng: parseFloat(this.props.data["longitude"])}}
            defaultZoom={10}
          >
        <AnyReactComponent
            lat={parseFloat(this.props.data["latitude"])}
            lng={parseFloat(this.props.data["longitude"])}
          />
          </GoogleMapReact>
        </div>
      );
    }
  }

export default GoogleMap;