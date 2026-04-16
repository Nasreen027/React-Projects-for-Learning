import './App.css'
// import Home from './components/Home'
// import Login from './components/Login'
// import UserContextProvider from './context/UserContextProvider'

import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => {
    setThemeMode('light');
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }
  useEffect(()=> {
      document.querySelector('html').classList.remove('dark', 'light');
      document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (
    // <UserContextProvider>
    //   <Login />
    //   <Home />
    // </UserContextProvider>
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <ThemeBtn />
      <Card />
    </ThemeContextProvider>
  )
}

export default App
