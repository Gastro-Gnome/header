import React from 'react';
import styled from 'styled-components';
import RestaurantNames from '../RestaurantNames.js';
import RestaurantNameBox from './RestaurantNameBox.jsx';

const SearchBar = styled.input`
    width : 100%;
    font-size : 13px;
    height : 100%;
    border: 0px;
    padding:0; 
    margin:0;
    border-collapse: collapse;
`;
const SearchResults = styled.div`
    z-index : 10000;
    width : auto;
`;
class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        results : null
      };
    }
  
    handleInputChange(e) {
        console.log(e.target.value)
        var resultArr = [];
        RestaurantNames.forEach((item) => item.match(e.target.value)?resultArr.push(item) : null)
      this.setState({
        value: e.target.value,
        results : resultArr,
      });
    }
  
    render() {
      return (
          <div id= 'HEYA'>
              <SearchBar
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="tacos, cheap dinner, Max's"
                    size="30"
                    height = "50%"
                >
              </SearchBar>
              <SearchResults>
                  {this.state.results !== null && this.state.value !== ''? <RestaurantNameBox names={this.state.results}/> : <div id = "HEY"/>}
              </SearchResults>
          </div>
      )
    }
  }
  export default Search;