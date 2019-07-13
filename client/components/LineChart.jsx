import React from 'react';
//const points = ["0,100", "20,60", "40,80"];

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {month : "Jan", avg : this.storeReviews("Jan").length !== 0  ? (Math.round(this.storeReviews("Jan").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Jan").length*2)/2) : 0},
                {month : "Feb", avg : this.storeReviews("Feb").length !== 0  ? (Math.round(this.storeReviews("Feb").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Feb").length*2)/2) : 0},
                {month : "Mar", avg : this.storeReviews("Mar").length !== 0  ? (Math.round(this.storeReviews("Mar").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Mar").length*2)/2) : 0},
                {month : "Apr", avg : this.storeReviews("Apr").length !== 0  ? (Math.round(this.storeReviews("Apr").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Apr").length*2)/2) : 0},
                {month : "May", avg : this.storeReviews("May").length !== 0  ? (Math.round(this.storeReviews("May").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("May").length*2)/2) : 0},
                {month : "Jun", avg : this.storeReviews("Jun").length !== 0  ? (Math.round(this.storeReviews("Jun").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Jun").length*2)/2) : 0},
                {month : "Jul", avg : this.storeReviews("Jul").length !== 0  ? (Math.round(this.storeReviews("Jul").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Jul").length*2)/2) : 0},
                {month : "Aug", avg : this.storeReviews("Aug").length !== 0  ? (Math.round(this.storeReviews("Aug").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Aug").length*2)/2) : 0},
                {month : "Sep", avg : this.storeReviews("Sep").length !== 0  ? (Math.round(this.storeReviews("Sep").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Sep").length*2)/2) : 0},
                {month : "Oct", avg : this.storeReviews("Oct").length !== 0  ? (Math.round(this.storeReviews("Oct").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Oct").length*2)/2) : 0},
                {month : "Nov", avg : this.storeReviews("Nov").length !== 0  ? (Math.round(this.storeReviews("Nov").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Nov").length*2)/2) : 0},
                {month : "Dec", avg : this.storeReviews("Dec").length !== 0  ? (Math.round(this.storeReviews("Dec").reduce((acc, curr) => acc + curr["rating"], 0)/this.storeReviews("Dec").length*2)/2) : 0},
            ],
            points : null
        }
    }

    componentDidMount(){   
        //console.log(this.storeReviews("Mar"))
        for(var i = 0; i < this.state.data.length; i++){

            console.log(this.state.data[i].avg);
        }
        this.setState({points : this.createPoints()})
        console.log(this.state.points);

    }

    storeReviews(str){
        const arr = [];
        this.props.data["reviews"].forEach((item) => item["date"].includes(str) ? arr.push(item) : item);
        //console.log(arr);
        return arr;
    }
    createPoints(){
        const arr = [];
        for(var i = 0; i < this.state.data.length; i++){
            arr.push( ((i/11)*500).toString() + "," + (200 - this.state.data[i].avg * 200/5).toString())
        }
        console.log(arr);
        return arr;
    }
    render() {
        return (
            <div>

                LineChart here
        <svg viewBox="0 0 500 200" className="chart graph">
            <g>

        <circle>cx="200" cy="100 r="200" stroke="red" strokeWidth="1"</circle>
            </g>

                    <polyline
                        fill="none"
                        stroke="red"
                        strokeWidth="2"
                        points={this.state.points ? this.state.points.join("\n") : <div></div>}//this.state.points
                    />                

                    <line x1="0" y1="0" x2="0" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="45.45" y1="0" x2="45.45" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="90.91" y1="0" x2="90.91" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="136.36" y1="0" x2="136.36" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="181.82" y1="0" x2="181.82" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="227.27" y1="0" x2="227.27" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="272.73" y1="0" x2="272.73" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="318.18" y1="0" x2="318.18" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="363.64" y1="0" x2="363.64" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="409.09" y1="0" x2="409.09" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="454.55" y1="0" x2="454.55" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="500" y1="0" x2="500" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="0" x2="500" y2="0" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="200" x2="500" y2="200" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="40" x2="500" y2="40" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="160" x2="500" y2="160" stroke="gray" strokeWidth="0.5" />
                    <line x1="0" y1="200" x2="500" y2="200" stroke="gray" strokeWidth="0.5" />
                    <text x="0" y="100">A</text>
                </svg>
            </div>
        )
    };
}

export default LineChart;