import React from 'react';
import Navbar from '../client/components/Navbar.jsx';
import {shallow} from 'enzyme';

describe('First React component Enzyme test', () => {
    it('renders', () => {
        shallow(<Navbar />);
    });
});