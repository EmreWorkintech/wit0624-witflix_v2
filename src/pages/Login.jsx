/* eslint-disable react/prop-types */
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login(props) {
  const { setUser } = props;
  return (
    <>
      <Header />
      <LoginForm setUser={setUser} />
    </>
  );
}

export default Login;
