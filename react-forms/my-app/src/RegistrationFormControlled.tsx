import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col" action="#">
        <label className="mb-2" htmlFor="username">
          Username:
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2"
          name="username"
          type="text"
        />
        <label className="mb-2" htmlFor="password">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
          name="password"
          type="password"
        />
        <div className="flex justify-center">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}
