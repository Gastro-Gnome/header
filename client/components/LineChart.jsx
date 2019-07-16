import React from 'react';
import styled from 'styled-components';

const LineChartLabel = styled.text`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans serif;
  color: #666666;
  font-size: 11px;
`;
const LineChartBox = styled.div`
    margin-bottom : 20px;
`;
const MonthlyTrend = styled.div`
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-weight: bold;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-bottom : 10px;
`;
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: "2015",
            points: null
        }
        this.storeReviews = this.storeReviews.bind(this);
        this.createPoints = this.createPoints.bind(this);
        this.yearChange = this.yearChange.bind(this);
    }

    componentDidMount() {
        //console.log(this.storeReviews("Mar"))
        // for(var i = 0; i < this.state.data.length; i++){
        //     console.log(this.state.data[i].avg);
        // }
        this.setState({ points: this.createPoints()})

    }

    storeReviews(month, year) {
        const arr = [];
        this.props.data["reviews"].forEach((item) => item["date"].includes(month) && item["date"].includes(year) ? arr.push(item) : item);
        //console.log(arr);
        return arr;
    }

    createPoints() {
        var obj = {data: [
            { month: "Jan", avg: this.storeReviews("Jan", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Jan", "2015").reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Jan", "2015").length * 2) / 2) : 0 },
            { month: "Feb", avg: this.storeReviews("Feb", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Feb", "2015").reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Feb", "2015").length * 2) / 2) : 0 },
            { month: "Mar", avg: this.storeReviews("Mar", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Mar", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Mar", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Apr", avg: this.storeReviews("Apr", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Apr", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Apr", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "May", avg: this.storeReviews("May", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("May", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("May", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Jun", avg: this.storeReviews("Jun", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Jun", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Jun", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Jul", avg: this.storeReviews("Jul", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Jul", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Jul", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Aug", avg: this.storeReviews("Aug", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Aug", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Aug", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Sep", avg: this.storeReviews("Sep", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Sep", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Sep", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Oct", avg: this.storeReviews("Oct", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Oct", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Oct", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Nov", avg: this.storeReviews("Nov", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Nov", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Nov", this.state.currentYear).length * 2) / 2) : 0 },
            { month: "Dec", avg: this.storeReviews("Dec", this.state.currentYear).length !== 0 ? (Math.round(this.storeReviews("Dec", this.state.currentYear).reduce((acc, curr) => acc + curr["rating"], 0) / this.storeReviews("Dec", this.state.currentYear).length * 2) / 2) : 0 },
        ],}
        const arr = [];
        for (var i = 0; i < obj.data.length; i++) {
            arr.push(((i / 11) * 500 + 10).toString() + "," + (200 - obj.data[i].avg * 200 / 5).toString())
        }
        console.log("LINE CHART POINTS ARR: ");
        console.log(arr);
        return arr;
    }

    yearChange(year) {
        
        this.setState({ points : this.createPoints(), currentYear: year })
    }

    render() {
        return (
            <div>
            <button onClick={() => this.yearChange("2015")}>2015</button>
            <button onClick={() => this.yearChange("2019")}>2019</button>
            <button onClick={() => this.yearChange("2018")}>2018</button>
            <button onClick={() => this.yearChange("2017")}>2017</button>
            <button onClick={() => this.yearChange("2016")}>2016</button>

                {this.state.points ? <LineChartBox>
                    <MonthlyTrend>
                        Monthly Trend
                    </MonthlyTrend>
                

                    <svg viewBox="0 0 550 250" className="chart graph">

                        <g className="labels y-labels">
                            <LineChartLabel x="0" y="10">5</LineChartLabel>
                            <LineChartLabel x="0" y="45">4</LineChartLabel>
                            <LineChartLabel x="0" y="85">3</LineChartLabel>
                            <LineChartLabel x="0" y="125">2</LineChartLabel>
                            <LineChartLabel x="0" y="165">1</LineChartLabel>
                            <LineChartLabel x="0" y="205">0</LineChartLabel>
                        </g>

                        <g className="data" data-setname="average-monthly-star">
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[0].substr(0, this.state.points[0].indexOf(','))} cy={this.state.points[0].substr(this.state.points[0].indexOf(',') + 1, this.state.points[0].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[1].substr(0, this.state.points[1].indexOf(','))} cy={this.state.points[1].substr(this.state.points[1].indexOf(',') + 1, this.state.points[1].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[2].substr(0, this.state.points[2].indexOf(','))} cy={this.state.points[2].substr(this.state.points[2].indexOf(',') + 1, this.state.points[2].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[3].substr(0, this.state.points[3].indexOf(','))} cy={this.state.points[3].substr(this.state.points[3].indexOf(',') + 1, this.state.points[3].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[4].substr(0, this.state.points[4].indexOf(','))} cy={this.state.points[4].substr(this.state.points[4].indexOf(',') + 1, this.state.points[4].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[5].substr(0, this.state.points[5].indexOf(','))} cy={this.state.points[5].substr(this.state.points[5].indexOf(',') + 1, this.state.points[5].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[6].substr(0, this.state.points[6].indexOf(','))} cy={this.state.points[6].substr(this.state.points[6].indexOf(',') + 1, this.state.points[6].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[7].substr(0, this.state.points[7].indexOf(','))} cy={this.state.points[7].substr(this.state.points[7].indexOf(',') + 1, this.state.points[7].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[8].substr(0, this.state.points[8].indexOf(','))} cy={this.state.points[8].substr(this.state.points[8].indexOf(',') + 1, this.state.points[8].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[9].substr(0, this.state.points[9].indexOf(','))} cy={this.state.points[9].substr(this.state.points[9].indexOf(',') + 1, this.state.points[9].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[10].substr(0, this.state.points[10].indexOf(','))} cy={this.state.points[10].substr(this.state.points[10].indexOf(',') + 1, this.state.points[10].length)} r="4"></circle>
                            <circle stroke="red" fill="white" strokeWidth="2" cx={this.state.points[11].substr(0, this.state.points[11].indexOf(','))} cy={this.state.points[11].substr(this.state.points[11].indexOf(',') + 1, this.state.points[11].length)} r="4"></circle>
                        </g>


                        <g className="labels x-labels">
                            <LineChartLabel x="0" y="220">Jan</LineChartLabel>
                            <LineChartLabel x="45.45" y="220">Feb</LineChartLabel>
                            <LineChartLabel x="90.90" y="220">Mar</LineChartLabel>
                            <LineChartLabel x="136.36" y="220">Apr</LineChartLabel>
                            <LineChartLabel x="181.82" y="220">May</LineChartLabel>
                            <LineChartLabel x="227.27" y="220">Jun</LineChartLabel>
                            <LineChartLabel x="272.73" y="220">Jul</LineChartLabel>
                            <LineChartLabel x="318.18" y="220">Aug</LineChartLabel>
                            <LineChartLabel x="363.64" y="220">Sep</LineChartLabel>
                            <LineChartLabel x="409.09" y="220">Oct</LineChartLabel>
                            <LineChartLabel x="454.55" y="220">Nov</LineChartLabel>
                            <LineChartLabel x="500" y="220">Dec</LineChartLabel>
                        </g>

                        <polyline
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            points={this.state.points ? this.state.points.join("\n") : <div></div>}//this.state.points
                        />

                        <line x1="10" y1="0" x2="10" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="55.45" y1="0" x2="55.45" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="100.91" y1="0" x2="100.91" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="146.36" y1="0" x2="146.36" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="191.82" y1="0" x2="191.82" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="237.27" y1="0" x2="237.27" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="282.73" y1="0" x2="282.73" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="328.18" y1="0" x2="328.18" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="373.64" y1="0" x2="373.64" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="419.09" y1="0" x2="419.09" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="464.55" y1="0" x2="464.55" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="510" y1="0" x2="510" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="0" x2="510" y2="0" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="200" x2="50" y2="200" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="40" x2="510" y2="40" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="80" x2="510" y2="80" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="120" x2="510" y2="120" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="160" x2="510" y2="160" stroke="gray" strokeWidth="0.5" />
                        <line x1="10" y1="200" x2="510" y2="200" stroke="gray" strokeWidth="0.5" />
                    
                    </svg>

                <div>Understand how a business’ rating changes month-to-month. Learn more.</div>
                </LineChartBox> : <div></div>}
            </div>
        )
    };
}
//fill : "red" opacity : 50%
export default LineChart;   