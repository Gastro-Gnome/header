import React from 'react'
import styled from 'styled-components';
import GoogleMap from './GoogleMap.jsx';

const GoogleBox = styled.div`
    border-style: solid;
    border-width: thin;
    width : 35%;
    height : 100%
`;
const MapBox = styled.div`
    display : flex;
    flex-direction : row;
    height : 300px;
    width : 100%;
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
                            <div>{this.props.data["address"]}</div>
                        </LocationBox>
                        <DirectionBox>
                            <DirectionIcon className="fas fa-directions"/>
                            <div>Get Directions</div>
                        </DirectionBox>
                        <PhoneBox>
                            <PhoneIcon className="fas fa-phone-alt"/>
                            <div>{this.props.data["phone"]}</div>
                        </PhoneBox>
                        <WebsiteBox>
                            <WebsiteIcon className="fas fa-location-arrow"/>
                            <div>{this.props.data["website"]}</div>
                        </WebsiteBox>
                        <ReservationBox>
                            <ReservationIcon className="far fa-calendar-check"/>
                            <div>Make a Reservation</div>
                        </ReservationBox>
                        <SendPhoneBox>
                            <SendPhoneIcon className="fas fa-mobile-alt"/>
                            <div>Send to your Phone</div>
                        </SendPhoneBox>
                    </InfoBox>
                </GoogleBox>
            </div>
        )
    }
}

export default GoogleMapView;