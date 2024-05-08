import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { User2 } from "lucide-react";
import React from "react";

export const Favorites = () => {
  let contacts = [];

  const contactsObject = {
    first_name: "Mor",
    last_name: "Lamotte",
    Phones: [
      {
        type: "mobile",
        tel: "776543232",
        default: true,
      },
      {
        type: "work",
        tel: "777538787",
        default: false,
      },
      {
        type: "Home",
        tel: "338329239",
        default: false,
      },
    ],
    Address: [
      {
        type: "home",
        name: "Mariste",
      },
    ],
    emails: [
      {
        type: "home",
        email: "mor@subito.net",
      },
    ],
    About: [],
  };

  for (let index = 0; index < 20; index++) {
    contacts.push(contactsObject);
  }
  return <div className="p-2 bg-slate-100 dark:bg-slate-900 ">
    <p className="font-semibold">Mes favories</p>
    <div className="whitespace-nowrap rounded-md flex gap-2 overflow-x-auto scrollbar-none mt-2">
      {
        contacts.map((contact, index) => <FavoritesItem key={index} contact={contact}/>)
      }
    </div>
  </div>;
};

const FavoritesItem = ({contact}) => {
  return (
  <button className="p-2 gap-2 flex justify-center items-center flex-col bg-white dark:bg-slate-800 rounded-md min-w-32 hover:bg-slate-200 dark:hover:bg-slate-600">
      <Avatar className="bg-slate-400 h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>
          <User2 />
        </AvatarFallback>
      </Avatar>
      <p className="text-xs text-center">{contact.first_name} {contact.last_name} </p>
    </button>
  );
};
