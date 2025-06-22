import { useState } from 'react';
import { signIn } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-4 border rounded max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
        <p className="mt-2 text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;