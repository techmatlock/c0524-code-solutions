import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { FaX } from 'react-icons/fa6';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const patternSpecialChar = /[!@#$%^&*()]/;
  const patternDigits = /\d/;
  const patternCapitalLetter = /[A-Z]/;
  let isRegex = false;
  let passLengthClass = 'hidden';
  let passRequiredClass = 'hidden';

  function checkPass() {
    if (
      patternSpecialChar.test(password) &&
      patternDigits.test(password) &&
      patternCapitalLetter.test(password)
    ) {
      isRegex = true;
    }
    if (password.length < 8 && password.length !== 0) {
      passLengthClass = '';
      passRequiredClass = 'hidden';
    }
    if (password === '') {
      passLengthClass = 'hidden';
      passRequiredClass = '';
    }
  }

  checkPass();

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <label className="w-full mb-2">Password</label>
        <input
          className="mb-2 mr-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        {password.length > 8 && isRegex && (
          <FaCheck className="text-green-500" />
        )}
        {password.length < 8 && <FaX className="text-red-600" />}
      </div>
      <div>
        <p className={`${passRequiredClass} text-red-600`}>
          A password is required.
        </p>
        <p className={`${passLengthClass} text-red-600`}>
          Your password is too short.
        </p>
      </div>
    </>
  );
}
