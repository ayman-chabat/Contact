import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AddContact from './AddContact';
import CContext from './AvatarContext';
import UpdateContact from './updateContact'


function App() {
  const [contacts, setContacts] = useState();
  const [CContact, setCurrentContact] = useState({ 
    user: { id: 0, avatar: `https://api.multiavatar.com/0.png` },
    name: 'Aymane Chabat',
    tel: '0606060606',
    ville: "Tanger"
});
const prevUser = useRef()
useEffect(()=>{
prevUser.current = CContact
},[CContact])
  const [id, setUuid] = useState(crypto.randomUUID())
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row app-wrapper ">
          <div id='upd' className={`col-5 py-0 row`} style={{backgroundColor:`black`,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src={`${CContact == '' ? `https://api.multiavatar.com/${id}.png` : CContact.user.avatar}`} style={{height:'150px',width:'170px'}} alt="" />
            <CContext.Provider>
              <Routes>
                <Route path="/">
                  <Route index element={<UpdateContact info={CContact} infoprev={prevUser.current} setCC={setCurrentContact}/>} />
                  <Route path='new-contact' element={<AddContact prs={'add'} id={id} photo={setUuid} setCC={setCurrentContact}/>} />
                </Route>
              </Routes>
            </CContext.Provider>
          </div>
          <div className="col-7 contact-list">
            <NavBar />
            <CContext.Provider value={{ contacts, setContacts, CContact, setCurrentContact }}>
              <Home prevcontact={prevUser} CC={CContact}/>
            </CContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
