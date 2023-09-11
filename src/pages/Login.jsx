import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
