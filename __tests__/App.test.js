import React from 'react';
import App from '../client/components/App.jsx';
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
});

