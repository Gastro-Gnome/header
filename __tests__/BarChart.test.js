import React from 'react';
import BarChart from '../client/components/BarChart';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('barchart click modal', () => {
    const wrapper = shallow(<BarChart />);
    wrapper.find('button#detailViewModal').simulate('click');
    it('renders', () => {
        shallow(<BarChart />)
    });

});
describe('First React component Enzyme test', () => {
    const wrap = shallow(<App />)
    it('renders', () => {
        shallow(<App />);
    });
    it('check data', ()=>{
        expect(wrap.state('data')).toEqual({                
            zeroCount : 0, 
            oneCount : 0, 
            twoCount : 0, 
            threeCount : 0, 
            fourCount : 0, 
            fiveCount : 0});
    })

    wrap.find('button#detailViewModal').simulate('click');
    expect(clickFn.toHaveBeenCalled());
    it('should render Detail View Modal', () => {
        shallow(<DetailView />);
    })

    it('should call sortReviews on mount', ()=>{

    })
    it('should rerender barchart', ()=>{
        
    })
});