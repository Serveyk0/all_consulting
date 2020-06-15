import React from 'react';
import './App.css';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import { MainPage } from './components/main_page/main_page';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
