import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import * as yup from 'yup';
import schema from './validation/SignupSchema';

const initialLoginValues = {
  username: '',
  password: ''
}

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const updateLogin = (name, value) => {
    setLoginValues({ ...loginValues, [name]:value });
  }

  const submitLogin = () => {
    console.log("Here are the submitted values", {loginValues});
    setLoginValues(initialLoginValues);
  }

  return (
    <div>
      <Route path='/login'>
        <Login
          values={loginValues}
          update={updateLogin}
          submit={submitLogin}
        />
      </Route>
    </div>
  );
}

export default App;
