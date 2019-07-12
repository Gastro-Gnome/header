import React from 'react';
import DetailView from './DetailView.jsx';
import styled from 'styled-components';

const HeaderBox = styled.div`
    flex-direction : column;
    display: flex;
    justify-content: center;
    align-items : center;
`;

const TopBox = styled.div`
    flex-direction : row;
    display: flex;
    height : px ;
    width : 850px;
`;

const RestaurantName = styled.div`
    font-size : 40px;
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 30px;
    line-height: 1.2em;
    color: #333;
`;

const CheckIcon = styled.div`
margin-left 2px;
color : blue;
margin-right : 5px;   
`;

const ClaimedBox = styled.div`
display : flex;
flex-direction : row;
align-items : center;
font-size: 14px;
    line-height: 1.28571em;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333;
`;

const MiddleBox = styled.div`
    display : flex;
    flex-direction : row;
    width : 850px;
    height : 40px;
`;

const LeftMiddleBox = styled.div`
background-color : purple;
display : flex;
flex-direction : row;
align-items : flex-end;
width : 900px;
`;
const Stars = styled.div`

`;
const ReviewAmount = styled.div`
`;

const BottomBox = styled.div`
    background-color : orange
    display : flex;
    flex-direction : row;
    align-items : flex-end;
    width : 850px;
`;

const Price = styled.div`

`;
const Tags = styled.div`
`;
const Edit = styled.div`
`;
const SideBox = styled.div`
    background-color : green;
    display : flex;
    flex-direction : row;
    width : 700px;
`;
const WriteReviewBox = styled.div`
    background-color : red
    display : flex;
    flex-direction : row;
    align-items : center;
`;

const WriteReviewIcon = styled.i`
color : white;
`;
const SideSubBox = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-left : 50px;
`;
const AddPhotoBox = styled.div`
    display : flex;
    flex-direction : row;
    color: #666;
    background: #fff;
    border: 1px solid #ccc;
    background-image: none;
    background-repeat: no-repeat;
    transition: all 0.6s;
    transition-property: background-color, background-position, background-size, border-color;
`;
const AddPhotoIcon = styled.div`

`;
const ShareBox = styled.div`
    display : flex;
    flex-direction : row;
    color: #666;
    background: #fff;
    border: 1px solid #ccc;
    background-image: none;
    background-repeat: no-repeat;
    transition: all 0.6s;
    transition-property: background-color, background-position, background-size, border-color;
`;
const ShareIcon = styled.div`

`;
const SaveBox = styled.div`
    display : flex;
    flex-direction : row;
    color: #666;
    background: #fff;
    border: 1px solid #ccc;
    background-image: none;
    background-repeat: no-repeat;
    transition: all 0.6s;
    transition-property: background-color, background-position, background-size, border-color;
`;

const SaveIcon = styled.div`
`;

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <HeaderBox>
                    <TopBox>
                        <RestaurantName>Archive Bar</RestaurantName>
                        <ClaimedBox>
                        <CheckIcon className = "fas fa-check-circle"/>
                        <div>Claimed</div>
                        </ClaimedBox>
                    </TopBox>
                    <MiddleBox>
                        <LeftMiddleBox>
                        <Stars>Ratings</Stars>
                        <ReviewAmount>
                        330 Reviews
                        </ ReviewAmount>
                        <DetailView />
                        </LeftMiddleBox>
                        <SideBox>
                            <WriteReviewBox>     
                                <WriteReviewIcon className="fas fa-star"/>
                           <button>
                            Write A Review   
                            </button> 
                            </WriteReviewBox>
                            <SideSubBox>
                                <AddPhotoBox>
                                    <AddPhotoIcon className="fas fa-camera"/>
                                    <div>Add Photo</div>
                                </AddPhotoBox>
                                <ShareBox>
                                    <ShareIcon className="fas fa-external-link-alt"/>
                                    <div>Share</div>
                                </ShareBox>
                                <SaveBox>
                                    <SaveIcon className="fas fa-bookmark"/>
                                    <div>Save</div>
                                </SaveBox>
                            </SideSubBox>
                        </SideBox>
                    </MiddleBox>
                    <BottomBox>
                        <Price>
                            $$$
                        </Price>
                        <Tags>
                        American (New), Pizza 
                        </Tags>
                        <Edit />
                    </BottomBox>
                </HeaderBox>
            </div>
        )
    }
}

export default Header;