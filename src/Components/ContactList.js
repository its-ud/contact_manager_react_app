import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

export const ContactList = (props) => {
    console.log(props)

    const deletContactHandler = (id) =>{
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deletContactHandler}></ContactCard>
        )
    })
    return (
        <div className='main'>
            <h1>Contact List
                <Link to="/add">
                <button className='ui button blue right'>Add Contact</button>
                </Link>
            </h1>
            <div className='ui celled list'>
            {renderContactList}
            </div>
        </div>
        
    )
}

export default ContactList;
