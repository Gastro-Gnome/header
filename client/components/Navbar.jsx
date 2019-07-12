import React from 'react';
import styled from 'styled-components';

const Yelp = styled.div`
`;

const TopContainer = styled.div`
  background: #d32323;
  display: flex;
  justify-content: center;
  height : 55px ;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

const YelpLogoBox = styled.div`
  font-size: 50px;
`;

const YelpLogo = styled.div`
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  margin: 10px;
  padding : 20px;
`;

const FindIcon = styled.div`
  float: left;
  font: inherit;
    font-weight: bold;
    color: #333;
    cursor: default;
    background-color : white;
`;

const FindInput = styled.input`
  width : 250px;
`;

const NearIcon = styled.div`
float: left;
    font-weight: bold;
    color: #333;
    cursor: default;
    background-color : white;
`;

const NearInput = styled.input`
  width : 250px;
`;
const SearchIconBox = styled.div`
display : flex;
align-items : center;
justify-content : center;
width : 40px;
background-color: #bd1f1f;
`;

const SearchIcon = styled.div`
`;

const SearchButton = styled.div`
margin-left : 5px;
  color : white;
  font-size : 20px;
  display: inline-block;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    top: -.1em;
`;


const Buttons = styled.div`
margin: 10px;
font-size : 20px;
color : white;
`;

const ProfileIcon = styled.div`
color : white;
margin-left: 10px;
width: 25px;
height: 25px;

:hover {
    background-color: pink;
}
`;

const ProfileDropdown = styled.div`
background-color: purple;
margin-right: 10px;
`;

const BottomContainer = styled.div`
background-color : #e6e6e6;
border-style: solid;
border-width: 1px;
`;

const BottomBox = styled.div`
    display : flex;
    flex-direction : row;
    allign-items : center;
    justify-content : center;

`;

const RestaurantBox  = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
margin-right : 20px;
border-style: solid;
border-width: 1px;
width 150px;
`;

const RestaurantLogo = styled.div`
font-size : 20px;
margin-right : 5px;
`;
const Chevron = styled.div`
    margin-left : 5px;
`;

const RestaurantDrop = styled.div`
background-color : blue;    
display : flex;
flex-wrap : wrap;
display : none;
${RestaurantBox} : hover & {
    display : block;
}
`;
const HomeServiceBox = styled.div`
margin-right : 20px;
border-style: solid;
border-width: 1px;
`;
const HomeServiceLogo = styled.div`
font-size : 25px;
width: 24px;
height: 24px;
`;
const AutoServiceBox = styled.div`
display : flex;
flex-direction : row;
allign-items : center;
margin-right : 20px;
border-style: solid;
border-width: 1px;
`;
const AutoServiceIcon = styled.div`
font-size : 25px;
width: 24px;
height: 24px;
`;
const MoreBox = styled.div`
display : flex;
flex-direction : row;
allign-items : center;
border-style: solid;
border-width: 1px;
`;

const PencilBox = styled.div`
display : flex;
flex-direction : row;
allign-items : center;
border-style: solid;
border-width: 1px;
`;
const PencilIcon = styled.div`
font-size : 25px;
width: 24px;
height: 24px;
`;

const BusinessBox = styled.div`
display : flex;
flex-direction : row;
allign-items : center;
border-style: solid;
border-width: 1px;
`;

const BusinessIcon = styled.div`
font-size : 25px;
width: 24px;
height: 24px;
`;

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            findQuery : "",
            nearQuery : "",
        }
    }
    /*
    handleInputChange(e) {
        this.props.handleSearchInputChange(e.target.value);
        this.setState({
          value: e.target.value
        });
      }
      */
    render(){
        return(
            <div>
                <Yelp>
                    <TopContainer>
                    <TopBox>
                    <YelpLogoBox>
                        <YelpLogo className="fas fa-drumstick-bite"/>
                    </YelpLogoBox>
                    <SearchBox>
                        <FindIcon> Find </FindIcon>
                        <FindInput placeholder="tacos, cheap dinner, Max's"/>
                        <NearIcon> Near </NearIcon>
                        <NearInput placeholder="Financial District, San Francisco, CA"/>
                            <SearchIconBox>

                            <SearchButton>
                                <SearchIcon className ="fas fa-search"/>
                            </SearchButton>
                            </SearchIconBox>
                    </SearchBox>
              <Buttons className="fas fa-comment-alt">
                
                </Buttons>
                    <Buttons className="far fa-bell">
                
              </Buttons>
              <ProfileIcon className="fas fa-user-alt"/>
              <ProfileDropdown>
                P
              </ProfileDropdown>
            </TopBox>
          </TopContainer>

          <BottomContainer>
            <BottomBox>
                <RestaurantBox>
                    <RestaurantLogo className = "fas fa-utensils"/>
                    Restaurants
                    <Chevron className = "fas fa-chevron-down"/>
                    <RestaurantDrop>
                        <div>A</div>
                        <div>B</div>
                    </RestaurantDrop>
                </RestaurantBox>
                <HomeServiceBox>
                    <HomeServiceLogo className="fas fa-home"/>                        
                    Home Services
                    <Chevron className = "fas fa-chevron-down"/>
                </HomeServiceBox>
                <AutoServiceBox>
                    <AutoServiceIcon className="fas fa-car"/>
                    <div>Auto Services</div>
                    <Chevron className = "fas fa-chevron-down"/>
                </AutoServiceBox>
                <MoreBox>
                <div>
                    More
                </div>
                <Chevron className = "fas fa-chevron-down"/>
                </MoreBox>
                <PencilBox>
                    <PencilIcon className="fas fa-pencil-alt"/>
                    <div>Write a Review</div>
                </PencilBox>
                <BusinessBox>
                    <BusinessIcon className="far fa-building"/>
                    <div>For Businesses</div>
                </BusinessBox>
            </BottomBox>
          </BottomContainer>
        </Yelp>
            </div>
        )
    }
}
export default Navbar;
