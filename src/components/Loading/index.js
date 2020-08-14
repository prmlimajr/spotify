import React from 'react';
import LoadingIcon from '../../assets/images/loading.svg';
import './Loading.css';

const Loading = () => (
  <img src={LoadingIcon} alt='Carregando' className='spinner' />
);

export default Loading;
