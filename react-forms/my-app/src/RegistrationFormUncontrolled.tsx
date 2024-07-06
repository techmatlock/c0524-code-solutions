import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col" action="#">
        <label className="mb-2" htmlFor="username">
          Username:
        </label>
        <input className="mb-2" name="username" type="text" />
        <label className="mb-2" htmlFor="password">
          Password:
        </label>
        <input className="mb-2" name="password" type="password" />
        <div className="flex justify-center">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}
