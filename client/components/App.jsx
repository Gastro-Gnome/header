import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currRestaurant : {},
    }
  }
  componentDidMount(){
      //api call
  }
  render() {
    return(
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Header />
    </div>
  </div>

    )
  };
}

export default App;