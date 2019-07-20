import React from 'react';
import RestaurantListItem from './RestaurantListItem.jsx';
import restaurantNames from '../RestaurantNames.js';
import styled from 'styled-components';

const Box = styled.div`
    display:flex;
    flex-direction : column;
    z-index : 5;
    background-color : white;
`;
const ResturantNameBox = ({names}) => (
    <Box>
        {names.map((name) => (
            <RestaurantListItem name={name} />
        ))}
    </Box>
);
export default ResturantNameBox;