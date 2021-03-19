import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div className='alert alert-info alert-dismissible fade show' role='alert'>
      {alert}
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.string.isRequired
};

export default Alert;