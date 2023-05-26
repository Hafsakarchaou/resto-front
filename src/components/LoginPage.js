import React, { useEffect, useState} from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    const isValidLogin = verifyLogin(email, password);

    if (isValidLogin) {
      navigate("/admin/home");
    } else {
      setErrorMessage('Incorrect email or password.');
    }
  };

  const verifyLogin = (email, password) => {
    const matchedUser = users.find((user) => user.email === email && user.password === password);
    if (matchedUser)
      {
        localStorage.setItem("localuser",matchedUser)
      }
    return !!matchedUser;
  };

  return (
    <div className="main">
      <h4 className="sign" align="center">Hello Admin!</h4>
      <p className="sign" align="center">Sign in</p>
      {errorMessage && <p className="error" align="center">{errorMessage}</p>}
      <form className="form1" onSubmit={handleFormSubmit}>
        <input
          className="un"
          type="text"
          align="center"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit" align="center">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
