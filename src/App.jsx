import { useState } from 'react'
import './App.css'
import ContactList from './Components/ContactList'
import SearchAndAdd from './Components/SearchAndAdd'
import Mudal from './Components/Mudal'

function App() {
  const [mudal , setMudal] = useState(false)

  return (
    <>
      <h1 className='text-5xl font-bold text-center'>Todo App</h1>
      <SearchAndAdd mudal={mudal} setMudal={setMudal}/>
      <ContactList />
      <Mudal mudal={mudal} setMudal={setMudal} />
    </>
  )
}

export default App
