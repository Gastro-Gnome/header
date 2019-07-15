import React from 'react';
import LineChart from '../client/components<LineChart.jsx';
import {shallow} from 'enzyme';

describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<LineChart />);
    });
});