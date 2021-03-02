import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div class={`${size} menu-item`}>
        <div class='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div class="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;