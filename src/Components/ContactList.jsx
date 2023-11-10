import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Config/Firebase";

function ContactList() {
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
  const deleteContact = async (id) => {
    console.log(id)
    try {
      await deleteDoc(doc(db , 'contacts' , id))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=" w-full flex flex-col space-y-3 items-center py-5">
      <ul className="grid grid-cols-4 gap-3">
        {contacts.map((cont) => {
          return (
            <li key={cont.id} className=" border px-5 flex flex-col space-y-3 py-3 mb-3">
              <h1 className=" border-b">{cont.name}</h1>
              <h1 className=" border-b">{cont.email}</h1>
              <div className="flex justify-between">
                <button className=" bg-blue-500 px-3 py-1.5 text-white rounded-md">
                  Edit
                </button>
                <button onClick={() => deleteContact(cont.id)} className=" bg-red-500 px-3 py-1.5 text-white rounded-md">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
