import React from 'react';
import Header from '../client/components/Header.jsx';
import {shallow} from 'enzyme';

describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<Header />);
    });
});