import React from 'react';
import Image from './Image';
import catinho from './catinho.jpg'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>catinho</h1>
        <Image source={catinho} alternativeText="Cute cat staring" />
      </main >
    )
  }
}

export default App;
