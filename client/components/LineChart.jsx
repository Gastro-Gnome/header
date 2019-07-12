import React from 'react';
const points = ["0,100", "20,60", "40,80"]
const LineChart = () => (
    <div>
        LineChart here
        <svg viewBox="0 0 500 200" className="chart graph">

  <polyline
     fill="none"
     stroke="red"
     stroke-width="2"
     points={points.join("\n")}
       />
    {/* <polyline 
       fill = "none"
       stroke = "gray"
       stroke-width="1"
       points="
       0,100
       
       "
       /> */}
         <line x1="0" y1="0" x2="0" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="41.67" y1="0" x2="41.67" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="83.33" y1="0" x2="83.33" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="125" y1="0" x2="125" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="166.67" y1="0" x2="166.67" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="208.33" y1="0" x2="208.33" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="250" y1="0" x2="250" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="291.67" y1="0" x2="291.67" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="333.33" y1="0" x2="333.33" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="375" y1="0" x2="375" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="416.67" y1="0" x2="416.67" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="458.33" y1="0" x2="458.33" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="500" y1="0" x2="500" y2="200" stroke="gray" stroke-width="0.5" />
         <line x1="0" y1="0" x2="500" y2="0" stroke="gray" stroke-width="0.5" />
         <line x1="0" y1="200" x2="500" y2="200" stroke="gray" stroke-width="0.5" />
        <line x1="0" y1="40" x2="500" y2="40" stroke="gray" stroke-width="0.5" />
        <line x1="0" y1="80" x2="500" y2="80" stroke="gray" stroke-width="0.5" />
        <line x1="0" y1="120" x2="500" y2="120" stroke="gray" stroke-width="0.5" />
        <line x1="0" y1="160" x2="500" y2="160" stroke="gray" stroke-width="0.5" />
        <line x1="0" y1="200" x2="500" y2="200" stroke="gray" stroke-width="0.5" />
       <text x="0" y="100">A</text>

</svg>
    </div>
);

export default LineChart;