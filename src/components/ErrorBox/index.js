import React from 'react';
import './ErrorBox.css';

import PropTypes from 'prop-types';

import CloseIcon from '../../assets/images/close.svg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <div className='error-container'>
      <p>{message}</p>
      <button onClick={hideError}>
        <img src={CloseIcon} alt='Fechar' />
      </button>
    </div>
  );

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
