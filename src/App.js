import React, { useCallback, useState } from 'react';

import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import HeaderBar from './components/HeaderBar';

import { AppContextProvider } from './context/AppContext';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="content">
                <LaunchList />
                <LaunchProfile />
            </div>
        </div>
    );
};

export default App;
