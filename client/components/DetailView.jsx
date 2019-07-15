import React from 'react';
import Modal from 'react-modal';
import LineChart from './LineChart.jsx';
import BarChart from './BarChart.jsx';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '600px'
  }
};

const Ratings = styled.div`
font-weight: bold;
margin-bottom: 6px;
font-size: 21px;
line-height: 1.28571em;
color: #d32323;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
const DetailViewBox = styled.button`
display : flex;
flex-direction : row;
`;
const DetailViewIcon = styled.div`
margin-right : 5px;
`;
const SectionHeader = styled.div`
margin-bottom: 11px;
border-bottom: 1px solid #e6e6e6;
`;

const CloseButton = styled.div`
position: absolute;
    right: 3px;
    margin-top: 3px;
    padding-top: 6px;
    border-radius: 3px;
    width: 36px;
    height: 30px;
    font-size: 36px;
    line-height: 18px;
    font-weight: 100;
    color: #666;
    cursor: pointer;
    opacity: 0.5;
`;
Modal.setAppElement(document.getElementById('app'));

class DetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      currentYear : "2015"
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <DetailViewBox className="button#detailViewModal" onClick={this.openModal}>
          <DetailViewIcon className="fas fa-chart-bar" />
          <div>Details</div>
        </DetailViewBox>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 border-bottom="1px solid black" ref={subtitle => this.subtitle = subtitle}><Ratings>Rating Details</Ratings>
          <CloseButton>

          <button className="fas fa-times" onClick={this.closeModal}></button>
          </CloseButton>
          </h2>
          <SectionHeader />
          <button>2015</button>
          <button>2019</button>
          <button>2018</button>
          <button>2017</button>
          <button>2016</button>
          <div><LineChart data={this.props.data} currentYear={this.state.currentYear}/></div>
          <div><BarChart data={this.props.data} /></div>
        </Modal>
      </div>
    );
  }
}

export default DetailView;
