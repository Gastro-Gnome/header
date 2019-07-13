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
margin-left : 2px;
color : #0073bb
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
display : flex;
flex-direction : row;
align-items : flex-end;
width : 900px;
`;
const Stars = styled.div`
margin-right : 5px;
`;
const ReviewAmount = styled.div`
display: block;
    float: left;
    color: #666;
    font-weight: normal;
    text-shadow: 0 1px rgba(255,255,255,0.7);
`;

const BottomBox = styled.div`
    display : flex;
    flex-direction : row;
    align-items : flex-end;
    width : 850px;
`;

const Price = styled.div`
margin-right : 5px;
letter-spacing: 1px;
padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
`;
const Tags = styled.a`
font-color : blue
color : blue
`;
const Edit = styled.div`
`;
const SideBox = styled.div`
    display : flex;
    flex-direction : row;
    width : 700px;
`;
const WriteReviewBox = styled.button`
    display : flex;
    flex-direction : row;
    align-items : center;
    color: #fff;
    background: #d32323;
    border: 1px solid #d32323;
    background-image: none;
    background-repeat: no-repeat;
    transition: all 0.6s;
    transition-property: background-color, background-position, background-size, border-color;
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
const AddPhotoBox = styled.button`
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
const ShareBox = styled.button`
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
const SaveBox = styled.button`
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
        this.state = {
            avg : this.avgReviews(),
        };
    }
    avgReviews(){
        return this.props.data["reviews"].reduce((acc, curr) => acc + curr["rating"], 0)/this.props.data["reviews"].length;
    }
    render(){
        return(
            <div>
                <HeaderBox>
                    <TopBox>
                        <RestaurantName>{this.props.data["name"]}</RestaurantName>
                        <ClaimedBox>
                        <CheckIcon className = "fas fa-check-circle"/>
                        <div>Claimed</div>
                        </ClaimedBox>
                    </TopBox>
                    <MiddleBox>
                        <LeftMiddleBox>
                        <Stars>{this.state.avg}Ratings</Stars>
                        <ReviewAmount>
                        {this.props.data["reviews"].length} reviews
                        </ ReviewAmount>
                        <DetailView id="#detailViewElement" data={this.props.data}/>
                        </LeftMiddleBox>
                        <SideBox>
                            <WriteReviewBox>     
                                <WriteReviewIcon className="fas fa-star"/>
                           <div>
                            Write A Review   
                            </div> 
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
                            {this.props.data["priceRating"]}
                        </Price>
                        <Tags href="https://www.yelp.com/c/sf/restaurants">
                        {this.props.data["tags"]}
                        </Tags>
                        <Edit />
                    </BottomBox>
                </HeaderBox>
            </div>
        )
    }
}

export default Header;