import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { UserForm } from './UserForm';

function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
      <UserForm />
    </>
  );
}

export default App;
