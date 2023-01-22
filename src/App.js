import { useEffect, useState } from 'react';
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
  const [CContact, setCurrentContact] = useState('');
  const [page,setPage] = useState(true)
  useEffect(()=>{
    if (page == true) {
      document.getElementById('upd').style.display = 'flex'
    } else {
      document.getElementById('upd').style.display = 'none'
    }
  },[page])
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row app-wrapper ">
          <div id='upd' className={`col-5 py-0 row`} style={{backgroundColor:`black`,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src={`${CContact == '' ? 'https://api.multiavatar.com/name.png' : CContact.user.avatar}`} style={{height:'150px',width:'170px'}} alt="" />
            <UpdateContact text={'Update Contact'} info={CContact}/>
          </div>
          <div className="col-7 contact-list">
            <NavBar setPage={setPage}/>
            <CContext.Provider value={{ contacts, setContacts, CContact, setCurrentContact }}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path='new-contact' element={<AddContact text={'Add Contact'} setPage={setPage} prs={'add'}/>} />
                </Route>
              </Routes>
            </CContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
