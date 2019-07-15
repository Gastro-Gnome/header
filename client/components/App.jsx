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
    console.log('MOUNTED')
    this.retrieveData();
  }

  retrieveData() { //initially first data entry
    fetch('/header/', {
      method: 'GET',
    })
      .then(res => res.json())
      .then((res) => this.setState({ data: res[Math.floor(Math.random() * (100))] }))
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {this.state.data ? <Header data={this.state.data} /> : <div></div>}
        </div>
      </div>
    )
  };
}

export default App;