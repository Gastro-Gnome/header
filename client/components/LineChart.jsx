import React from 'react';

class LineChart extends React.Component{
constructor(props){
    super(props);
    this.state = { 
        data  : [{"Jan" : 3.0, "Feb" : 4.0, "Mar" : 3.5, "April" : 2.0, "May" : 3.5, "June" : 4.5, "July" : 3.5, "Aug" : 4.5, "Sept" : 4.0, "Oct" : 5, "Nov" : 3.5, "Dec" : 4.0}],
    }
}

render(){
    return(
        <div>
<svg id="mySVG" width="400" height="182">

<g id="gridLayer" pointer-events="none">
<line x1="36.36363636363637" y1="0" x2="36.36363636363637" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="0" y1="36.36363636363637" x2="400" y2="36.36363636363637" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="72.72727272727273" y1="0" x2="72.72727272727273" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="0" y1="72.72727272727273" x2="400" y2="72.72727272727273" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="109.0909090909091" y1="0" x2="109.0909090909091" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="0" y1="109.0909090909091" x2="400" y2="109.0909090909091" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="145.45454545454547" y1="0" x2="145.45454545454547" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="0" y1="145.45454545454547" x2="400" y2="145.45454545454547" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="181.81818181818184" y1="0" x2="181.81818181818184" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="0" y1="181.81818181818184" x2="400" y2="181.81818181818184" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="218.18181818181822" y1="0" x2="218.18181818181822" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="254.5454545454546" y1="0" x2="254.5454545454546" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="290.90909090909093" y1="0" x2="290.90909090909093" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="327.2727272727273" y1="0" x2="327.2727272727273" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
<line x1="363.6363636363637" y1="0" x2="363.6363636363637" y2="182" style="stroke:gray;fill:none;stroke-width:0.2" class="grid">
</line>
	<line x1="400" y1="0" x2="400" y2="182" style="stroke:gray;fill:none;stroke-width:0.5" class="grid">
</line>
</g>

</svg>
</div>
    )
}
}
export default LineChart;