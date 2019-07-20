import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
    height : 25px;
`;

const RestaurantListItem = ({ name }) => (
    <ItemBox>
        <a href={`/${name}`} text-decoration="underline">
            {name.split('-').map((val) => val[0].toUpperCase()+ val.slice(1)).join(' ')}
        </a>
    </ItemBox>
);

export default RestaurantListItem;