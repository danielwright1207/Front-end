import React from "react";

export default function Signup(props) {
  const { name, email, username, password, role } = props.values;
  const { update, submit, errors, disabled } = props;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form>
        <label>
          {" "}
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <span>{errors.name}</span>

        <label>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <span>{errors.email}</span>
        <label>
          {" "}
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <span>{errors.username}</span>
        <label>
          {" "}
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <span>{errors.password}</span>
        <label>
          {" "}
          Role:
          <select name="role" value={role} onChange={handleChange}>
            <option value="">---select your role---</option>
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
        </label>
        <span>{errors.role}</span>
        <button onClick={handleSubmit} disabled={disabled}>
          Create new account
        </button>
      </form>
    </div>
  );
}
