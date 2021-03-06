import React from 'react';

import './FilterBar.css';
import FilterCategory from "./FilterCategory/FilterCategory";
// USE FORM!!! && RADIUM
const filterBar = (props) => (
    <div styleName='container'>
        {props.categories.map(cat => (
            <FilterCategory key={cat.label} label={cat.label} type={cat.type} options={cat.options} />
        ))}
    </div>
);

export default filterBar;