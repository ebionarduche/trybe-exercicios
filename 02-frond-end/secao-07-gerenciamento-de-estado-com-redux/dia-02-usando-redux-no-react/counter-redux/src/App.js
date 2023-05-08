import { connect } from 'react-redux'
import React from 'react';
import './App.css';

function App(props) {
  const { countState } = props;
  return (
    <div className='App'>
      <h1>Contador</h1>
      <h2>{countState}</h2>
      <button>incrementar 1</button> 
      <br />
      <br /> 
      <button>incrementar 5</button>
      

    </div>
  );
}
const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(App);
