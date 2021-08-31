import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./sass/index.scss";


import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import WrapperContent from './components/WrapperContent';
import MainContentWindow from './components/MainContentWindow';

import AlbumPage from './pages/Albums';
import DiscoverPage from './pages/Discover';
import SongsPage from './pages/Songs';

const App = () => {
  return (
    <BrowserRouter>
      <WrapperContent>
        <Logo/>
        <Navbar/>
        <Sidebar/>
        <MainContentWindow>              
            <Switch>
              <Route component={DiscoverPage} path="/" exact/>
              <Route component={SongsPage} path="/songs"/>
              <Route component={AlbumPage} path="/albums"/>
            </Switch>
        </MainContentWindow> 
        <Footer/>
      </WrapperContent>      
    </BrowserRouter>    
  );
};

export default App;
