import React from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';

function DeleteButton(props) {
    const { name, handleClick } = props;

    return (
        <div className='delete-button' onClick={handleClick}>
            {name}
        </div>
    )
}

DeleteButton.defautProps = {
    handleClick: () => {},
}

DeleteButton.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default DeleteButton;

