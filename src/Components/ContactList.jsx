import React from "react";
import Card from "./Card";

function ContactList({contacts}) {
  
  return (
    <div className=" w-full flex flex-col space-y-3 items-center py-5">
      <ul className="grid grid-cols-4 gap-3">
        {contacts.map((cont) => {
          return (
            <Card key={cont.id}  cont={cont} />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
