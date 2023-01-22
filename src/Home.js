import React, {useState } from 'react'
import {useSelector } from 'react-redux';
import './App.css';
import Contact from './Contact';

export default function Home({}) {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(true);
  const contacts = useSelector(state=>{
    if (search.trim()=='') {
      return state.contacts;
    }
    return state.contacts.filter(contact => 
      contact.ville.toLowerCase().includes(search.toLowerCase()) || 
      contact.name.toLowerCase().includes(search.toLowerCase()) || 
      contact.tel.toLowerCase().includes(search.toLowerCase()) 
    );

  });

  return (
    <div className="py-2 px-4">
      <div className='row justify-content-between mb-3'>
        <div className="col-5">
          <input type="text"  onChange={(e)=>setSearch(e.target.value)} placeholder='search' className='form-control shadow-none' />
        </div>
        <div className="col-4 order pe-4 text-dark">
          <span onClick={(e)=>setOrder(!order)} style={{cursor:"pointer"}}> <b >order :</b> {order ? 'Desc' : 'Asc'}</span>
        </div>
      </div>
      <div layout className='users-wrapper'>
        {
          order ? [...contacts].sort((a, b) => (a.name < b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />)
            : [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />)
        }
      </div>
    </div>
  )
}
