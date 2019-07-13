import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data : null,
    }
    this.retrieveData = this.retrieveData.bind(this)
  }
  componentDidMount(){
      //api call
    console.log('MOUNTED')
    this.retrieveData();
  }

  retrieveData(){ //initially first data entry
    fetch('/header/5d29455e0553ffd83b3d479b', {
      method : 'GET',
    })
    .then(res => res.json())
    //.then(res => console.log(res))
    .then((res)=> this.setState({data : res[0]}))
    //.then(console.log(this.state))
  }

  render() {
    return(
  <div>
    <div>
      <Navbar data={this.state.data}/>
    </div>
    <div>
      {this.state.data ? <Header data={this.state.data}/> : <div></div>}
    </div>
  </div>

    )
  };
}

export default App;