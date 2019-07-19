import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }
    this.retrieveData = this.retrieveData.bind(this)
  }
  componentDidMount() {
    //api call
    this.retrieveData();
  }
  
  retrieveData() { //initially first data entry
    console.log('RETRIEVE DATA')
    console.log(window.location.pathname);
    console.log('/header' + window.location.pathname)
    fetch('/header' + window.location.pathname, {
      method: 'GET',
    })
      .then(res => res.json())
      .then((res) => this.setState({ data: res[0] }))
  }

  render() {
  //   if(!this.state.data){
  //     return <div/>
  //  }
  console.log('APP RENDERS')
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {this.state.data ? <Header data={this.state.data}/> : <div />}
          </div>
      </div>
    )
  };
}
export default App;