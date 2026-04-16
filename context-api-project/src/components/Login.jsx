import { use, useContext, useState } from 'react'
import UserContext from '../context/userContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    function handleLogin(e) {
      e.preventDefault();
        if(!username || !password) return alert("Please enter username and password");
        setUser({username, password});
    }
  return (
    <>
    <input type="text" name="" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username...' />
    <input type="password" name="" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password...'/>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login