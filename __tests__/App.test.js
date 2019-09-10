import React from 'react';
import App from '../client/components/App.jsx';
import Navbar from '../client/components/Navbar.jsx';
import {shallow} from 'enzyme';
import DetailView from '../client/components/DetailView.jsx';

const clickFn = jest.fn();
describe('First React component Enzyme test', () => {
    const wrap = shallow(<App />)
    it('renders', () => {
        shallow(<App />);
    });
    it('check data', ()=>{
        expect(wrap.state('data')).toEqual(null);
    })
    wrap.find('button#detailViewModal').simulate('click');
    expect(clickFn.toHaveBeenCalled());
    it('should render Detail View Modal', () => {
        shallow(<DetailView />);
    })
});

describe('App div', ()=>{
    it('should render a 3 divs for each component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(3);
    });
    it('should render', async () => {
        const component = shallow(<App />);
    
        expect(component).toMatchSnapshot();
      });
    it('should render navbar', ()=> {
        const component = shallow(<Navbar />);
        expect(component).toMatchSnapshot();

    })
    wrapper.setState({ data : [
        {
            "_id": "5d23bb053885e3813e2e65aa",
            "name": "Blanda, Blick and Deckow",
            "priceRating": "1",
            "tags": "Nicaragua, generate",
            "latitude": "-76.4588",
            "longitude": "151.6568",
            "phone": "(730) 615-7818",
            "website": "http://neal.biz",
            "reviews": [
                {
                    "_id": "5d23bb053885e3813e2e6921",
                    "date": "Sat Mar 21 2015 15:30:17 GMT-0700 (PDT)",
                    "rating": 1
                },
                {
                    "_id": "5d23bb053885e3813e2e6920",
                    "date": "Fri May 31 2019 10:13:40 GMT-0700 (PDT)",
                    "rating": 1
                }
            ]
     }]});

    it('should render header', ()=> {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();

    })

});
