import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import promo from './promotions/promo.json'

class App extends Component {
  render() {
    console.log(promo)

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>{promo.title}</p>
          <p>{promo.subtitle}</p>
          <img src={promo.thumbnail} alt={promo.title}/>
          <p>{promo.body}</p>

        </header>
      </div>
    );
  }
}

export default App;
