import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';
import 'rc-slider/assets/index.css';
import Routes from './routes';
import './config/reactotron';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='wrapper'>
            <div className='main-menu'>
              <div className='side'>
                <Sidebar />
              </div>
              <div className='content'>
                <ErrorBox />
                <Header />
                <Routes />
              </div>
            </div>

            <Player />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
