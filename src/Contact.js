import React, { useContext } from 'react'
import AvatarContext from './AvatarContext'
import './Contact.css';

function Contact({ person, CC, prevcontact }) {
    const {setCurrentContact } = useContext(AvatarContext);
    const change = (e) => {
        prevcontact.current = CC 
        setCurrentContact(person)
        console.log(CC)
    }
    return (
        <div layout onClick={(e)=>(change(e))} className="mb-3 row p-2  text-light user-card bg-dark" id={person.user.id} style={{cursor:"pointer"}}>
            <div className="align-self-center col-1">
                <img src={person.user.avatar} style={{backgroundColor:`${person.user._color}`}} className='rounded-circle user-avatar' alt=""/>
            </div>
            <div className="ps-5 col-10">
                <h3>{person.name} </h3>
                <ul className='ps-4'>
                    <li>City: {person.ville}</li>
                    <li>Phone: {person.tel}</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact