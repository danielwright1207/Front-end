import React from 'react';

export default function Login(props) {
  const { username, password } = props.values;
  const {update, submit} = props;

  const handleChange = evt => {
    const {name, value} = evt.target;
    update(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return(
    <div>
      <form>
        <label> Username: 
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <label> Password: 
          <input 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}