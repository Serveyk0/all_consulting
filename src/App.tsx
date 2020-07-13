import React, { useState } from 'react';
import './App.css';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import MainMenu from './components/menu/main_menu';
import Search from './components/search/search';

export const App = ( props: any) => {
  const [searc, set_search] = useState("");
  const [search_val, set_search_val] = useState("");
  const [app_class, set_app_class] = useState(false);
    return (
      <div className="App">
        <Header set_search={set_search} search_val={search_val} set_search_val={set_search_val}/>
        <div className={( "app_padding" + (app_class ? "app_content" : "")) + (searc !== "" ? " hide_block" : "")}>
          <MainMenu app_class={set_app_class}/>
          { props.children }
        </div>
        <Search search={searc} set_search={set_search} set_search_val={set_search_val} />
        <Footer />
      </div>
    );
}
