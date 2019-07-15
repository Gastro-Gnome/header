import React from 'react';
import BarChart from '../client/components/BarChart';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('First React component Enzyme test', () => {
    const wrapper = shallow(<BarChart />);
    wrapper.find('button#detailViewModal').simulate('click');
    it('renders', () => {
        shallow(<BarChart />)
    });
});