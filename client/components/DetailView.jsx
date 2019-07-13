import React from 'react';
import Modal from 'react-modal';
import LineChart from './LineChart.jsx';
import BarChart from './BarChart.jsx';
import styled from 'styled-components';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Ratings = styled.div`
font-weight: bold;
margin-bottom: 6px;
font-size: 21px;
line-height: 1.28571em;
color: #d32323;
`;
Modal.setAppElement('#app')

class DetailView extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button className = "button#detailViewModal" onClick={this.openModal}>Details</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            
          <h2 ref={subtitle => this.subtitle = subtitle}><Ratings>Rating Details</Ratings>          <button onClick={this.closeModal}>close</button></h2>
          
          <form>
            <input />
            <button>2015</button>
            <button>2019</button>
            <button>2018</button>
            <button>the modal</button>
          </form>

         <div><LineChart data={this.props.data}/></div>
          <div><BarChart data={this.props.data}/></div>
        </Modal>
      </div>
    );
  }
}

export default DetailView;
 