import React from "react";
import HeaderBlock from "./components/header/Header";
import RandomNumbers from "./components/content/Content"
import FooterBlock from './components/footer/Footer'

function App() {
  return (
    <div className='html_body'>
      <HeaderBlock />
      <RandomNumbers />
      <FooterBlock />
    </div>
  );
}

export default App;
