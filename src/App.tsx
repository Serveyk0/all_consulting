import React from 'react';
import './App.css';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import { Main_page } from './components/main_page/main_page';

function App() {
  return (
    <div className="App">
      <Header />
      <Main_page />
      <Footer />
    </div>
  );
}

export default App;
