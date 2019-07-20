import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
    border : 1px solid black;

`;
const RestaurantListItem = ({ name }) => (
    <ItemBox>
    <a href={`/${name}`} >
        {name.split('-').map((val) => val[0].toUpperCase()+ val.slice(1)).join(' ')}
    </a>
    </ItemBox>
);

export default RestaurantListItem;