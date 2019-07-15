import React from 'react';
import DetailView from '../client/components/DetailView.jsx';
import {shallow} from 'enzyme';


describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<DetailView />);
    });
});

describe('DetailView', () => {
    it('button click should open modal', () => {   
    const clickFn = jest.fn();
    const component = shallow(<DetailView onClick={clickFn()} />);
    //expect(component).to.exist
    component.find('button#detailViewModal').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

//const wrapper = shallow(<Button fn = {jest.fn}/>)
//wrapper.instance()someMethod