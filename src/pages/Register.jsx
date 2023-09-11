import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" />
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
