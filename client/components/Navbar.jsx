import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

const Yelp = styled.div`
    z-index : 7;
`;
const TopContainer = styled.div`
  background: #d32323;
  display: flex;
  align-items : center;
  height : 55px;
  justify-content : center;
  `;
const TopBox = styled.div`
  display: flex;
  align-items: center;
`;
const YelpLogoBox = styled.div`
  font-size: 20px;
  display : flex;
  flex-direction : row; 
  color:white;
  font-family: cursive;
`;
const YelpLogo = styled.img`
    height : 40px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding : 20px;
`;

const FindIcon = styled.div`
  float: left;
    font-weight: bold;
    color: #333;
    cursor: default;
    background-color : white;
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
  font-size : 13px;
`;
const SearchIconBox = styled.button`
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
const ButtonsBox = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    color : white;
`;
const Buttons = styled.div`
    margin: 10px;
    font-size : 20px;
`;
const ProfileIcon = styled.div`
    color : white;
    margin-left: 10px;
    width: 25px;
    height: 25px;
    :hover {
        background-color: white;
    }
`;
const ProfileDropdown = styled.button`
    margin-right: 10px;
`;
const BottomContainer = styled.div`
    background-color : #fafafa;
    height:100%;
`;
const BottomBox = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    width : 100%;
    height : 30px;;
`;
const RestaurantBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    border-width: 1px;
    width 150px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const RestaurantLogo = styled.div`
    font-size : 20px;
    margin-right : 5px;
`;
const Chevron = styled.div`
    margin-left : 5px;
`;
const HomeServiceBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    width 150px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const HomeServiceLogo = styled.div`
    font-size : 20px;
    margin-right : 5px;
`;
const AutoServiceBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    width 150px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const AutoServiceIcon = styled.div`
    font-size : 20px;
`;
const MoreBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    margin-right : 80px;
    width 100px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const PencilBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    width 150px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const PencilIcon = styled.div`
    font-size : 20px;
`;
const BusinessBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    margin-right : 20px;
    width 150px;
    align-items : center;
    :hover{
        color : blue;
    }
    height : 100%;
`;
const BusinessIcon = styled.div`
    font-size : 20px;
`;

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            findQuery: "",
        }
    }
    render() {
        return (
            <div>
                <Yelp>
                    <TopContainer>
                        <TopBox>
                            <YelpLogoBox>
                                <YelpLogo src ="https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/images.png" />
                                <div color="white">Gastro Gnome</div>
                            </YelpLogoBox>
                            <SearchBox>
                                <FindIcon> Find </FindIcon>
                                <Search placeholder="tacos, cheap dinner, Max's"/>
                                <NearIcon> Near </NearIcon>
                                <NearInput placeholder="Financial District, San Francisco, CA" />
                                <SearchIconBox>

                                    <SearchButton>
                                        <SearchIcon className="fas fa-search" />
                                    </SearchButton>
                                </SearchIconBox>
                            </SearchBox>
                            <ButtonsBox>


                                <Buttons className="fas fa-comment-alt" />

                                <Buttons className="fas fa-bell" />
                            </ButtonsBox>


                            <ProfileIcon className="fas fa-user-alt" />
                            <ProfileDropdown className="fas fa-caret-down">

                            </ProfileDropdown>
                        </TopBox>
                    </TopContainer>

                    <BottomContainer>
                        <BottomBox>
                            <RestaurantBox>
                                <RestaurantLogo className="fas fa-utensils" />
                                Restaurants
                    <Chevron className="fas fa-chevron-down" />
                        <div className="name-box">
                            {/* <RestaurantNameBox /> */}
                        </div>
                            </RestaurantBox>
                            <HomeServiceBox>
                                <HomeServiceLogo className="fas fa-home" />
                                Home Services
                    <Chevron className="fas fa-chevron-down" />
                            </HomeServiceBox>
                            <AutoServiceBox>
                                <AutoServiceIcon className="fas fa-car" />
                                <div>Auto Services</div>
                                <Chevron className="fas fa-chevron-down" />
                            </AutoServiceBox>
                            <MoreBox>
                                <div>
                                    More
                </div>
                                <Chevron className="fas fa-chevron-down" />
                            </MoreBox>
                            <PencilBox>
                                <PencilIcon className="fas fa-pencil-alt" />
                                <div>Write a Review</div>
                            </PencilBox>
                            <BusinessBox>
                                <BusinessIcon className="far fa-building" />
                                <div>For Businesseses</div>
                            </BusinessBox>
                        </BottomBox>
                    </BottomContainer>
                </Yelp>
            </div>
        )
    }
}
export default Navbar;
