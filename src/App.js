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
          <p>{promo.one.title}</p>
          <p>{promo.one.subtitle}</p>
          <img src={promo.one.thumbnail} alt={promo.one.title}/>
          <p>{promo.one.body}</p>
          <br/>
          <p>{promo.two.title}</p>
          <p>{promo.two.subtitle}</p>
          <img src={promo.two.thumbnail} alt={promo.two.title}/>
          <p>{promo.two.body}</p>
          <br/>
          <p>{promo.three.title}</p>
          <p>{promo.three.subtitle}</p>
          <img src={promo.three.thumbnail} alt={promo.three.title}/>
          <p>{promo.three.body}</p>
        </header>
      </div>
    );
  }
}

export default App;
