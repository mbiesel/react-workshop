import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classPrefix, onClickHandler, label }) => {
    return (
        <button
            className={`${classPrefix}__button`}
            onClick={onClickHandler}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    classPrefix: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default Button;