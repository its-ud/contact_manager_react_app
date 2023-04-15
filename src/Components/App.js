import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./Header";
// import { uuid } from "uuidv4"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact,"hehe")
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveContacts)
  //     setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" Component={() => (
          <ContactList contacts={contacts} getContactId={removeContactHandler}/>)
          }/>
          
          <Route path="/add" Component={() => (
          <AddContact addContactHandler={addContactHandler}/>)
          } />
          <Route path="/edit" Component={() => (
          <EditContact addContactHandler={addContactHandler}/>)
          } />
          
          <Route path="/contact/:id" Component={ContactDetails}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
