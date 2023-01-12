
import './App.css';
import { useState,createContext, useContext } from 'react';
import { StoreContext, } from './store';
import TopNameProfile from './TopNameProfile'
export const  ThemeContext = createContext()
function App() {
  const [toggle,setToggle]= useState(false)
  const [theme,setTheme]= useState('dark')
  const [state,dispatch] = useContext(StoreContext)
  console.log(state);
  const ToggleTheme = ()=>{
        setTheme(theme==='dark'?'light':'dark')
  }
  return (
    <div className="App">
      <button onClick={ToggleTheme}>Toggle Theme</button>
      <TopNameProfile/>
    </div>
  );
}

export default App;
