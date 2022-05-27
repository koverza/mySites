import React from 'react';

const Label = (props) => {
    return (
        <label {...props} className="button">{props.name}</label>
    );
};

export default Label;