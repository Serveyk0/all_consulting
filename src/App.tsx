import React, { useState } from 'react';
import './App.css';
//@ts-ignore
import { Header } from "./components/header/header.tsx"
//@ts-ignore
import { Footer } from './components/footer/footer.tsx';
//@ts-ignore
import MainMenu from './components/menu/main_menu.tsx';
//@ts-ignore
import Search from './components/search/search.tsx';

export const App = ( props: any) => {
  const [searc, set_search] = useState("");
  const [search_val, set_search_val] = useState("");
  const [app_class, set_app_class] = useState(false);
    return (
      <div className="App">
        <Header set_search={set_search} search_val={search_val} set_search_val={set_search_val}/>
        <div className={(app_class ? "app_content" : "") + (searc !== "" ? " hide_block" : "")}>
          <MainMenu app_class={set_app_class}/>
          { props.children }
        </div>
        <Search search={searc} set_search={set_search} set_search_val={set_search_val} />
        <Footer />
      </div>
    );
}
