import React from 'react';
import BarChart from '../client/components/BarChart';
import {shallow} from 'enzyme';

describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<BarChart />);
    });
});