import React, { Component } from 'react'
import './App.css'
import promo from './data/promo.json'
import about from './data/about.json'


class App extends Component {
  render() {

    const promoArr = Object.keys(promo).map(i => promo[i])

    const promofull = promoArr.filter(p => (p.title !== "" || p.body !== ""))
    console.log(promofull)

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {promofull.map(promo => (
            <div>
              <p>{promo.title}</p>
              <p>{promo.subtitle}</p>
              <img src={promo.thumbnail} alt={promo.title} height="200"/>
              <p>{promo.body}</p>
            </div>
          ))}
          <p>{about.title}</p>
          <p>{about.subtitle}</p>
          <p>{about.content}</p>
        </header>
      </div>
    );
  }
}

export default App;
