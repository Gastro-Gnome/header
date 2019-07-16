import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';


const SaveViewBox = styled.button`
    display : flex;
    flex-direction : row;
    color: #666;
    background: #fff;
    border: 1px solid #ccc;
    background-image: none;
    background-repeat: no-repeat;
    transition: all 0.6s;
    transition-property: background-color, background-position, background-size, border-color;
`;
const SaveIcon = styled.div`
    margin-right : 2px;
`;

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
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('header'));
 
class Save extends React.Component {
  constructor() {
    super();
 
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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
          <SaveViewBox onClick={this.openModal}>
            <SaveIcon className="fas fa-bookmark"/>
            <div>Save</div>
          </SaveViewBox>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Save</h2>
        </Modal>
      </div>
    );
  }
}

export default Save;