import React from 'react';
import Header from "./components/header";
import Midsection from './components/midsection';
import Searchpart from './components/searchpart';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className="mainpage">
      <Header />
      <Midsection />
      <Searchpart />
      <Footer />


    </div>
  );
}

export default App;
