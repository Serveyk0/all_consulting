import React from 'react';
import './App.css';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import { MainMenu } from './components/menu/main_menu';

export const App = ( props: any) => {
    return (
      <div className="App">
        <Header />
        <MainMenu />
        { props.children }
        <Footer />
      </div>
    );
}
