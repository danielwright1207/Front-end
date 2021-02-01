import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

const initialLoginValues = {
  username: '',
  password: ''
}

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues)

  const update = (name, value) => {
    setLoginValues({...loginValues, [name]:value})
  }

  const submit = () => {
    console.log("Here are the submitted values", {loginValues});
    setLoginValues(initialLoginValues);
  }

  return (
    <div>
      <Route path='/login'>
        <Login values={loginValues} update={update} submit={submit} />
      </Route>
    </div>
  );
}

export default App;
