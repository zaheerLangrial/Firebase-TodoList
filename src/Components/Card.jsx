import React, { useState } from "react";
import Mudal from "./Mudal";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/Firebase";

function Card({ cont }) {
  const [mudal, setMudal] = useState(false);

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      key={cont.id}
      className=" border px-5 flex flex-col space-y-3 py-3 mb-3"
    >
      <h1 className=" border-b">{cont.name}</h1>
      <h1 className=" border-b">{cont.email}</h1>
      <div className="flex justify-between">
        <button
          onClick={() => setMudal(true)}
          className=" bg-blue-500 px-3 py-1.5 text-white rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => deleteContact(cont.id)}
          className=" bg-red-500 px-3 py-1.5 text-white rounded-md"
        >
          Delete
        </button>
      </div>
      <Mudal setMudal={setMudal} mudal={mudal} updateMudal={true} cont={cont} />
    </div>
  );
}

export default Card;
