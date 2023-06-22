import { useContext, useState } from 'react'
import './App.css'
import Page from './components/page'
import { Context } from './components/Context'

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode)
  };
  return (
    <Context.Provider value={{darkmode, setDarkmode, handleDarkmode}}>
      <Page />
    </Context.Provider>
  )
}

export default App
