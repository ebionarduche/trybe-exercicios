import { connect } from 'react-redux'
import React from 'react';
import './App.css';
import { actionCreator } from './redux/actions/index';

function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className='App'>
      <h1>Contador</h1>
      <h2>{countState}</h2>

      <button onClick={() => dispatch(actionCreator(1))}>
        incrementar 1
      </button> 
        
       <button onClick={() => dispatch(actionCreator(5))}>
        incrementar 5
      </button> 

  
      

    </div>
  );
}
const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(App);
