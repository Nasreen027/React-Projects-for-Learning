import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{
    console.log('generate password function called!');
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numbers) str += "0123456789";
    if(symbols) str += "!@#$%^&*()_+";

    let pass = "";
    for(let i=0; i<length; i++){
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, numbers, symbols]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    generatePassword();
  },[length, numbers, symbols, generatePassword]);

  return (
    <>
    <div className='w-full h-screen bg-black text-white flex flex-col items-center gap-5'>
      <h1 className='text-xl font-bold'>Password Generator</h1>
      <div className='w-1/3 h-1/6 bg-gray-700'>
        <div className='flex p-5'>
          <input
            type="text" 
            className='w-full bg-gray-500 text-white p-2' 
            placeholder='Generated Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            ref={passwordRef} 
          />
          <button 
            className='bg-amber-600 text-white p-2 cursor-pointer'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex gap-3 p-5'>
          <div className='flex items-center gap-2'>
            <input
              type="range" 
              min={6} 
              max={100}
              value={length}
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={()=> {setNumbers((prev)=> !prev)}}
              />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox"
              defaultChecked={symbols}
              onChange={()=> {setSymbols((prev)=> !prev)}}
            />
            <label>Symbols</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
