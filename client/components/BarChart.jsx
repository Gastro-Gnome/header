import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.div`
    margin-bottom: 11px;
    border-bottom: 1px solid #e6e6e6;
`;
const OverallRating = styled.div`
font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-weight: bold;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
const Appetizing = styled.div`
font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-bottom : 20px;
`;

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {//store review counter per star rating
                zeroCount : 0, 
                oneCount : 0, 
                twoCount : 0, 
                threeCount : 0, 
                fourCount : 0, 
                fiveCount : 0
            }, 
        }
        this.sortReviews = this.sortReviews.bind(this);
    }
    
    componentDidMount(){
        this.sortReviews();
    }

    sortReviews(){
        var zero = 0;
        var one = 0;
        var two = 0;
        var three =  0;
        var four = 0;
        var five = 0;
        this.props.data["reviews"].forEach((item) => item["rating"] < 0.5 ? zero++ : item["rating"] < 1.5 ? one++ : item["rating"] < 2.5 ? two++ : item["rating"] < 3.5 ? three++ : item["rating"] < 4.5 ? four++ : five++)
        this.setState({data : {zeroCount : zero, oneCount : one, twoCount : two, threeCount : three, fourCount : four, fiveCount : five}})
    }

    render() {
        return (
            <div>
                <OverallRating>
                    Overall Rating
                </OverallRating>
                    
                <SectionHeader />
                <Appetizing>

                Appetizing since 2015 with {this.props.data["reviews"].length} reviews
                </Appetizing>
                <svg className="chart" width="500" height="200" aria-labelledby="title desc" role="img">
                    <title id="title">A bar chart showing information</title>
                    <desc id="desc"></desc>
                    <g className="bar" fill="#fcd6d3" 
                    stroke="#fff7cc" >
                        <rect width={(this.state.data.fiveCount*10).toString()} height="19">{(this.state.data.fiveCount).toString()}  </rect>
                    </g>
                        <text x="0" y="9.5" dy=".35em" fontWeight= "bold">5 Stars</text>
                        <text x={(this.state.data.fiveCount*10).toString()}y="9.5" dy=".35em" fontWeight= "bold"> {(this.state.data.fiveCount).toString()}</text>
                    <g className="bar" fill="#fcd6d3" 
                   stroke="#fff7cc" >
                        <rect width={(this.state.data.fourCount*10).toString()} height="19" y="20">{(this.state.data.fourCount).toString()}</rect>
                    </g>
                        <text x="0" y="28" dy=".35em" fontWeight= "bold">4 stars</text>
                        <text x={(this.state.data.fourCount*10).toString()}y="28" dy=".35em" fontWeight= "bold"> {(this.state.data.fourCount).toString()}</text>
                    <g className="bar" fill="#fcd6d3" 
                    stroke="#fff7cc" >
                        <rect width={(this.state.data.threeCount*10).toString()} height="19" y="40">{(this.state.data.threeCount).toString()}</rect>
                    </g>
                        <text x="0" y="48" dy=".35em" fontWeight= "bold">3 stars </text>
                        <text x={(this.state.data.threeCount*10).toString()} y="48" dy=".35em" fontWeight= "bold"> {(this.state.data.threeCount).toString()}</text>
                    <g className="bar" fill="#fcd6d3" stroke="#fff7cc" >
                        <rect width={(this.state.data.twoCount*10).toString()} height="19" y="60">{(this.state.data.twoCount).toString()}</rect>
                    </g>
                        <text x="0" y="68" dy=".35em" fontWeight= "bold">2 stars</text>
                        <text x={(this.state.data.twoCount*10).toString()} y="68" dy=".35em" fontWeight= "bold"> {(this.state.data.twoCount).toString()}</text>


                    <g className="bar" fill="#fcd6d3" stroke="#fff7cc" >
                        <rect width={(this.state.data.oneCount*10).toString()} height="19" y="80"></rect>
                    </g>
                        <text x="0" y="88" dy=".35em" fontWeight= "bold">1 star</text>
                        <text x={(this.state.data.oneCount*10).toString()} y="88" dy=".35em" fontWeight= "bold"> {(this.state.data.oneCount).toString()}</text>
                </svg>
            </div>

        )
    }
}

export default BarChart;     