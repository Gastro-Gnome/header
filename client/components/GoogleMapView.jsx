import React from 'react'
import styled from 'styled-components';
import GoogleMap from './GoogleMap.jsx';

const GoogleBox = styled.div`
    border-style: solid;
    border-width: thin;
    width : 28%;
    background-color : white;
`;
const MapBox = styled.div`
    display : flex;
    flex-direction : row;
    height : 200px;
    width : 100%;
    color : -internal-root-color;
`;
const InfoBox = styled.div`
    display : flex;
    flex-direction : column;
`;
const LocationBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const LocationIcon = styled.div`
    margin-right : 5px;
`;
const DirectionBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const DirectionIcon = styled.div`
    margin-right : 5px;
`;
const PhoneBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const PhoneIcon = styled.div`
    margin-right : 5px;
`;
const WebsiteBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const WebsiteIcon = styled.div`
    margin-right : 5px;
`;
const ReservationBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const ReservationIcon = styled.div`
    margin-right : 5px;
`;
const SendPhoneBox = styled.div`
    display : flex;
    flex-direction : row;
`;
const SendPhoneIcon = styled.div`
    margin-right : 5px;
`;

class GoogleMapView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <GoogleBox>
                    <MapBox>
                        <GoogleMap data={this.props.data}/>
                    </MapBox>
                    <InfoBox>
                        <LocationBox>
                            <LocationIcon className="fas fa-map-marker-alt"/>
                            <div href="www.google.com">{this.props.data["address"]}</div>
                        </LocationBox>
                        <DirectionBox>
                            <DirectionIcon className="fas fa-directions"/>
                            <a href="">Get Directions</a>
                        </DirectionBox>
                        <PhoneBox>
                            <PhoneIcon className="fas fa-phone-alt"/>
                            <div>{this.props.data["phone"]}</div>
                        </PhoneBox>
                        <WebsiteBox>
                            <WebsiteIcon className="fas fa-location-arrow"/>
                            <a href="" >{this.props.data["website"]}</a>
                        </WebsiteBox>
                        <ReservationBox>
                            <ReservationIcon className="far fa-calendar-check"/>
                            <a href="">Make a Reservation</a>
                        </ReservationBox>
                        <SendPhoneBox>
                            <SendPhoneIcon className="fas fa-mobile-alt"/>
                            <a href="">Send to your Phone</a>
                        </SendPhoneBox>
                    </InfoBox>
                </GoogleBox>
            </div>
        )
    }
}

export default GoogleMapView;