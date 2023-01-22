import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateContact } from './redux/slices/contactSilce';
import './App.css';

function UpdateContact({text, info}) {
  const dispatch = useDispatch();
  const [tel,setPhone] = useState('');
  const [ville,setCity] = useState('');
  const [name,setName] = useState('');

  useEffect(()=>{
    setCity(info != undefined ? info.ville : '')
    setName(info != undefined ? info.name : '')
    setPhone(info != undefined ? info.tel : '')
  },[info])


  const handleUpdateContacts =  (e) => {
    let id = info.user.id
    if (name =='' || tel=='' || ville =='') {
      return;
    }
    dispatch(updateContact({
      id, name, ville, tel
    }));
  }
  return (
    <div className="col-9 mx-auto mt-5 py-2 px-4">
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control shadow-none" placeholder="Name" />
        </div>
      </div>
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">Phone Number</label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} value={tel} className="form-control shadow-none" placeholder="Phone Number" />
        </div>
        <div className="col">
          <label className="form-label">City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} value={ville} className="form-control shadow-none" placeholder="City"/>
        </div>
      </div>
      <div className="row">
        <button onClick={handleUpdateContacts} className='col-5 mx-auto btn mt-4 ' style={{ backgroundColor: '#F6EAD3' }}>
          {text}
        </button>
      </div>
    </div>
  )
}


export default UpdateContact;