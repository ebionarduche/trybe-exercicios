import React from 'react';
import './App.css';

function handleClickOne() {
  console.log('Clicou! no botão 01')
}

function handleClickTwo() {
  console.log('Clicou! no botão 02')
}

function handleClickThree() {
  console.log('Clicou! no botão 03')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClickOne}>botão01</button>
        <button onClick={handleClickTwo}>botão02</button>
        <button onClick={handleClickThree}>botão03</button>
      </div>

    )
  }
}

export default App;
