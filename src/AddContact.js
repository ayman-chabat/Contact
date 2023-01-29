import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from './redux/slices/contactSilce';
import './App.css';
import { useNavigate } from "react-router-dom";

function AddContact({id, photo, setCC}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const phoneRef = useRef();
  const cityRef = useRef();
  const nameRef = useRef();
  useEffect(()=>{setCC('')},[])

  const handleAddContacts =  (e) => {
    let name = nameRef.current.value.trim();
    let tel = phoneRef.current.value.trim();
    let ville = cityRef.current.value.trim();
    if (name =='' || tel=='' || ville =='') {
      return;
    }
    var pic = `https://api.multiavatar.com/${id}.png`
    dispatch(addContact({
      name,ville,tel, id, pic
    }));
    phoneRef.current.value = '';
    nameRef.current.value = '';
    cityRef.current.value = '';
    navigate(-1)
    setCC({
    user: { id: id, avatar: pic },
    name: name,
    tel: tel,
    ville: ville
    })
    photo(crypto.randomUUID())
  }
  return (
    <div className="col-9 mx-auto mt-5 py-2 px-4">
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">Name</label>
          <input type="text" ref={nameRef} className="form-control shadow-none" placeholder="Name" />
        </div>
      </div>
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">Phone Number</label>
          <input type="text" ref={phoneRef} className="form-control shadow-none" placeholder="Phone Number" />
        </div>
        <div className="col">
          <label className="form-label">City</label>
          <input type="text" ref={cityRef} className="form-control shadow-none" placeholder="City"/>
        </div>
      </div>
      <div className="row">
        <button onClick={handleAddContacts} className='col-5 mx-auto btn mt-4 ' style={{ backgroundColor: '#F6EAD3' }}>
          Add
        </button>
      </div>
    </div>
  )
}


export default AddContact;