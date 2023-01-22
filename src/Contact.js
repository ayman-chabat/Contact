import React, { useContext } from 'react'
import AvatarContext from './AvatarContext'
import './Contact.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from './redux/slices/contactSilce';

function Contact({ person }) {
    const {setCurrentContact } = useContext(AvatarContext);
    const dispatch = useDispatch();
    const removeFromContact = () => {
        dispatch(deleteContact({
            id:person.user.id
        }));
    }
    
    return (
        <div layout onClick={(e)=>(setCurrentContact(person))} className="mb-3 row p-2  text-light user-card bg-dark" id={person.user.id} style={{cursor:"pointer"}}>
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
            <button className='col-1 del-btn' onClick={removeFromContact}>
                x
            </button>
        </div>
    )
}

export default Contact