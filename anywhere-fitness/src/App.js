import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
// import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import * as yup from 'yup';
import schema from './validation/SignupSchema';
import styled from 'styled-components';
import BGImage from './images/image.jpg';

const initialLoginValues = {
  username: '',
  password: ''
}

const initialSignupValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  role: ''
}

const initialSignupErrors = {
  name: '',
  email: '',
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
      <StyledBGImage>
        <StyledLink>
        <StyledHead>Anywhere Fitness</StyledHead>
        <Link style={{textDecoration:'none'}} to='/'>Home</Link>
        <Link style={{textDecoration:'none'}} to='/login'>Login</Link>
        <Link style={{textDecoration:'none'}} to='/signup'>Signup</Link>
        </StyledLink>
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
    </StyledBGImage>
    </div>
  );
}

const StyledLink = styled.div`

  display:flex;
  flex-flow:row nowrap;
  justify-content:space-around;
  align-items: baseline;

  a {
    border: 2px solid black;
    border-radius: 20%;
    padding: 4px 4px;
    background-color: ${pr => pr.theme.linkBGColor};
  }
`;

const StyledBGImage = styled.div`

  background-image: url(${BGImage});
  background-repeat:no-repeat;
  background-size: 100%;
`;

const StyledHead = styled.h1`

color: ${pr => pr.theme.headColor};

`;

export default App;
