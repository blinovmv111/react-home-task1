import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import "./index.scss";


import Header from './components/Header';
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
        <Header/>
        <Sidebar/>
        <MainContentWindow>              
            <Switch>
              <Route component={DiscoverPage} path="/" exact/>
              <Route component={SongsPage} path="/songs"/>
              <Route component={AlbumPage} path="/albums"/>
              <Redirect to="/" from="/*"/>
            </Switch>
        </MainContentWindow> 
        <Footer/>
      </WrapperContent>      
    </BrowserRouter>    
  );
};

export default App;
