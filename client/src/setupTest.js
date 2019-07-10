//import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, render, mount} from 'enzyme';

Enzyme.configure({ adapter : new Adapter()});