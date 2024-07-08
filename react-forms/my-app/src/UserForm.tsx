import { useState } from 'react';

type User = {
  username: string;
  password: string;
};

type Props = {
  user?: User;
};

export function UserForm({ user }: Props) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');
  const isCreating = user === undefined;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isCreating) {
      console.log('User created');
    } else {
      console.log('User edited');
    }
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
