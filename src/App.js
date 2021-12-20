import React from 'react';
import JoinBlock from './components/JoinBlock';
import reducer from './reducer';
import socket from './socket';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
  });

  const onLogin = () => {
    dispatch({
      type: 'JOINED',
      payload: true,
    });
  };

  console.log(state);

  return <div className="wrapper">{!state.isAuth && <JoinBlock onLogin={onLogin} />}</div>;
}

export default App;
