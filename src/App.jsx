import { useEffect, useState } from 'react'
import './App.css'
import ContactList from './Components/ContactList'
import SearchAndAdd from './Components/SearchAndAdd'
import Mudal from './Components/Mudal'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './Config/Firebase'

function App() {
  const [mudal , setMudal] = useState(false)
  const [contacts, setContacts] = useState([]);



  useEffect(() => {
    getContacts();
  }, []);
  const getContacts = async () => {
    try {
      const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (snapShot) => {
        const contList = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contList);
        return contList;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className='text-5xl font-bold text-center'>Todo App</h1>
      <SearchAndAdd mudal={mudal} setMudal={setMudal} contacts={contacts} setContacts={setContacts} />
      <ContactList setMudal={setMudal} contacts={contacts} setContacts={setContacts} />
      <Mudal mudal={mudal} setMudal={setMudal} />
    </>
  )
}

export default App
