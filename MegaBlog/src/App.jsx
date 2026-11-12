import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth';
import { useDispatch } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser
      .then((userData)=> {
        if(userData) dispatch(login({userData}))
          else dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, []);
  if(loading) {
    return(
      <div>Loading...</div>
    )
  }else {
    return (
      <div>Blog app</div>
    )
  }
}

export default App
