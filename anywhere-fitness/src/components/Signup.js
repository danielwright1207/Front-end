import React from 'react';

export default function Signup(props) {
  const { username, password, role } = props.values;
  const {update, submit, errors} = props;

  const handleChange = evt => {
    const { name, value} = evt.target;
    update(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return (
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
        <span></span>
        <label> Password: 
        <input 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <span></span>
        <label> Role: 
          <select name='role' value={role} onChange={handleChange}>
            <option value=''>---select your role---</option>
            <option value='instructor'>Instructor</option>
            <option value='client'>Client</option>
          </select>
        </label>
        <span></span>
        <button onClick={handleSubmit}>Create new account</button>
      </form>
    </div>
  )
}