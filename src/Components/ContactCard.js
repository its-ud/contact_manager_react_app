import React from 'react'
import { Link } from 'react-router-dom'

export const ContactCard = (props) => {
    const {id, name, email} = props.contact

    const passId = () => {
      props.clickHandler(id)
    }
    console.log(props.contact)
  return (
    <div className='item'>
      <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
        <div className='content'>
            <div className='header'>{name}</div>
            <div>{email}</div>
        </div>
      </Link>
        <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={passId}
        ></i>
      <Link to={{pathname: `/edit`, state: {contact: props.contact}}}>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  )
}

export default ContactCard;