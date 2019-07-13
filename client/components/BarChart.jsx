import React from 'react';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    render() {
        return (
            <div>
                Overall Rating
                <div>Yelping since 2013 with {this.props.data["reviews"].length} reviews</div>
                <svg className="chart" width="420" height="150" aria-labelledby="title desc" role="img">
                    <title id="title">A bar chart showing information</title>
                    <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc>
                    <g className="bar" fill="white" stroke="black">
                        <rect width="40" height="19">5 stars  </rect>
                        <text x="45" y="9.5" dy=".35em">119</text>
                    </g>
                    <g className="bar">
                        <rect width="80" height="19" y="20"></rect>
                        <text x="85" y="28" dy=".35em">4 stars</text>
                    </g>
                    <g className="bar">
                        <rect width="150" height="19" y="40"></rect>
                        <text x="150" y="48" dy=".35em">3 stars</text>
                    </g>
                    <g className="bar">
                        <rect width="160" height="19" y="60"></rect>
                        <text x="161" y="68" dy=".35em">2 stars</text>
                    </g>
                    <g className="bar">
                        <rect width="230" height="19" y="80"></rect>
                        <text x="235" y="88" dy=".35em">1 stars</text>
                    </g>
                </svg>
            </div>

        )
    }
}

export default BarChart;     