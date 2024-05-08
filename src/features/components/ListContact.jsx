"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useContact } from "@/hooks/useContact";
import { Loader, Share2, Trash, User2 } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ListContact = () => {
  const { contacts, getContacts, deleteContact } = useContact();
  

  useEffect(() => {
    getContacts();
  }, []);

  const handleRemove = async (id) => {
    await deleteContact(id);
    getContacts();
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-900 mt-4 h-full flex">
      <div className="w-full px-4 flex">
        <div className="p-4"></div>
        <div className="flex flex-col gap-4 p-2 h-fit w-full">
          {contacts.map((contact) => {
            return <ListContactItem key={contact.id} contact={contact} handleRemove={handleRemove} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ListContactItem = ({ contact, handleRemove }) => {
  const { getPhones } = useContact();
  const [removing, setRemoving] = useState(false)
  const handdleClick = async () => {
    const phones = await getPhones(contact.id);
    if (phones) {
      console.log(phones);
    }
  }

  return (
    <div  className="w-full [&_div]:hover:flex relative grow px-3 py-3 flex items-center justify-start rounded-sm cursor-pointer gap-4 hover:bg-slate-200  dark:hover:bg-slate-600"
    
    >
      <Avatar className="bg-slate-400 h-8 w-8">
        {contact?.avatar ? (
          <>
            {" "}
            <AvatarImage src={contact?.avatar} alt={""} />
            <AvatarFallback>
              <User2 />
            </AvatarFallback>
          </>
        ) : (
          <AvatarFallback>
            {contact?.first_name[0] + contact?.last_name[0]}
          </AvatarFallback>
        )}
      </Avatar>
      <h6 className="text-lg font-regular">
        {contact?.first_name} {contact?.last_name}
      </h6>
      <div className="absolute end-4 hidden">
        <Button variant="ghost">
          <Share2 />
        </Button>
        <Button variant="ghost"
          onClick={() => {handleRemove(contact.id)
          setRemoving(true)}}
          >
            {!removing ? <Trash /> : <Loader className="animate-spin" />}
          
        </Button>
      </div>
    </div>
  );
};
