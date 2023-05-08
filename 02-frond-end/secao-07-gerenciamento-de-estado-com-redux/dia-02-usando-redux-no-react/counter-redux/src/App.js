import { connect } from 'react-redux'
import React from 'react';
import './App.css';
import { actionCreator, actionClick } from './redux/actions/index';

function App(props) {
  const { countState, dispatch, clickCount } = props;
  const dispatchAll = (add = 1) => {
    dispatch(actionCreator(add));
    dispatch(actionClick());
  }

  return (
    <div className='App'>
      <h1>Contador</h1>
      <h2>{countState}</h2>

      <button onClick={() => dispatchAll()}>
        incrementar 1
      </button> 
        
       <button onClick={() => dispatchAll(5)}>
        incrementar 5
      </button> 

      <h3>Número de Clicks: {clickCount}</h3>
  
      

    </div>
  );
}
const mapStateToProps = (state) => ({
  countState: state.count,
  clickCount: state.clicks,
})

export default connect(mapStateToProps)(App);
