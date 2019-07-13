import React from 'react';
import DetailView from './DetailView.jsx';
import styled from 'styled-components';

const HeaderBox = styled.div`
    background-color : #e6e6e6;
    flex-direction : column;
    display: flex;
    align-items : center;
    height : 450px;
`;

const TopBox = styled.div`
    flex-direction : row;
    display: flex;
    width : 850px;
    margin-top : 15px;  
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
align-items : center;
width : 900px;
`;
const StarBox = styled.div`
display : flex;
flex-direction : row;
align-items : center
width : 30%
margin-right : 10px;
`;

const StarIcon = styled.img`
height : 100%
width : 100%
`;

const ReviewAmount = styled.div`
display: block;
    color: #666;
    font-weight: normal;
    text-shadow: 0 1px rgba(255,255,255,0.7);
    font-size : 20px;
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
font-size : 15px;
padding: 0;
    border: 0;
    vertical-align: baseline;
`;

const Tags = styled.a`
color : #0073bb;
font-size : 20px;
margin-right : 5px;
`;
const Edit = styled.button`
`;
const SideBox = styled.div`
    display : flex;
    flex-direction : row;
    width : 800px;
    margin-left : 150px;
`;
const WriteReviewBox = styled.button`
    display : flex;
    flex-direction : row;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
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
    margin-left : 10px;
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
            avg : null,
            starimg : null,
        };
    }
    componentDidMount(){
        this.avgReviews(); 
    }
    avgReviews(){
        const stars = ["https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_0%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_1%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_1_half%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_2%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_2_half%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_3%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_3_half%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_4%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_4_half%403x.png", "https://s3-us-west-1.amazonaws.com/brandonheaderimages.com/yelpstars/regular_5%403x.png"]
        const avg = this.props.data["reviews"].reduce((acc, curr) => acc + curr["rating"], 0)/this.props.data["reviews"].length;
        console.log(avg);
        const rounded = Math.round(avg*2)/2;
        console.log(rounded);
        this.setState({avg : avg, starimg : stars[rounded/0.5-1]})
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
                            <StarBox>
                            {this.state.starimg ? <StarIcon src={this.state.starimg}/> : <div></div>}
                            </StarBox>
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
                            {this.props.data["priceRating"]} •
                        </Price>
                        <Tags href="https://www.yelp.com/c/sf/restaurants">
                        {this.props.data["tags"]}
                        </Tags>
                        <Edit>Edit</Edit>
                    </BottomBox>
                </HeaderBox>
            </div>
        )
    }
}

export default Header;