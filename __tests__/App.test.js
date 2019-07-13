import React from 'react';
import App from '../client/components/App.jsx';
import {shallow} from 'enzyme';
import DetailView from '../client/components/DetailView.jsx';


describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<App />);
    });
});

describe('App', ()=>{
    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(3);
    });
});

