import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
// import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import * as yup from 'yup';
import schema from './validation/SignupSchema';

const initialLoginValues = {
  username: '',
  password: ''
}

const initialSignupValues = {
  username: '',
  password: '',
  role: ''
}

const initialSignupErrors = {
  username: '',
  password: '',
  role: ''
}

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [signupValues, setSignupValues] = useState(initialSignupValues);
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors);
  const [disabled, setDisabled] = useState(true)

  const updateLogin = (name, value) => {
    setLoginValues({ ...loginValues, [name]:value });
  }

  const updateSignup = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setSignupErrors({ ...signupErrors, [name]:'' })
      })
      .catch(err => {
        setSignupErrors({ ...signupErrors, [name]:err.errors[0] })
      });

    setSignupValues( { ...signupValues, [name]:value });
  }

  const submitLogin = () => {
    console.log("Here are the submitted values", {loginValues});
    setLoginValues(initialLoginValues);
  }

  const submitSignup = () => {
    console.log("Here are the submitted values", {signupValues});
    setSignupValues(initialSignupValues);
  }

  useEffect(()=> {
    schema.isValid(signupValues).then(valid => setDisabled(!valid))
  }, [signupValues])

  return (
    <div>
      <nav>
        <h1 className='app-head'>Anywhere Fitness</h1>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        </div>
      </nav>
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login
          values={loginValues}
          update={updateLogin}
          submit={submitLogin}
        />
      </Route>
      <Route path='/signup'>
        <Signup 
          values={signupValues}
          update={updateSignup}
          submit={submitSignup}
          errors={signupErrors}
          disabled={disabled}
        />
      </Route>
    </div>
    </div>
  );
}

export default App;
