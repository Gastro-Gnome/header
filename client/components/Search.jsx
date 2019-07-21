import React from 'react';
import styled from 'styled-components';
import RestaurantNames from '../RestaurantNames.js';
import RestaurantNameBox from './RestaurantNameBox.jsx';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '21%',
      left                  : '38%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width: '246px',
      height: '200px',
    },
    overlay : {
        background : 'transparent'
    }
  };
const SearchBar = styled.input`
    border: 0px;
    padding:0; 
    margin:0;
    border-collapse: collapse;
    border-spacing: 0 0;
    box-sizing: border-box;
    width : 250px;
    font-size : 13px;
    height :30px;
`;
const SearchResults = styled.div`
    z-index : 100;
    width : auto;
`;
const RestaurantSearchBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
`;
const Overlay = styled.div`
  position : absolute;
  top : 0;
  left : 0;
`;
Modal.setAppElement(document.getElementById('header'));
class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        results : null,
        modalIsOpen : false
      };
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    handleInputChange(e) {
        console.log(e.target.value)
        var resultArr = [];
        RestaurantNames.forEach((item) => item.toLowerCase().match(e.target.value.toLowerCase())?resultArr.push(item) : null)
      this.setState({
        value: e.target.value,
        results : resultArr,
      });
      if(e.target.value === ""){
          this.closeModal();
      } else{
          this.openModal();
      }
    }
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'black';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    render() {
      return (
          <div>
            <div>
              <SearchBar
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="tacos, cheap dinner, Max's"
                >
              </SearchBar>

              {/* <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
              >
                  <div>HELLO</div>
              <SearchResults>
                  {this.state.results !== null && this.state.value !== ''? <RestaurantNameBox names={this.state.results}/> : <div>Nothing found</div>}
              </SearchResults>
              </Modal> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldReturnFocusAfterClose={true}
          shouldFocusAfterRender={false}
          ariaHideApp={false}
        >
            <Overlay>
                
            <RestaurantSearchBox>
          <div ref={subtitle => this.subtitle = subtitle}></div>
            </RestaurantSearchBox>
          <SearchResults>
                  {this.state.results !== null && this.state.value !== ''? <RestaurantNameBox names={this.state.results}/> : <div>Nothing found</div>}
              </SearchResults>
            </Overlay>

        </Modal>
        </div>
        </div>
      )
    }
  }
  export default Search;