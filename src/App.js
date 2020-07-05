import React from 'react';
import './App.css'
import Header from './Header'

function App() {
  return (
    <div>
      <Header />
      <button className="addbtn waves-effect">
        Add
      </button>
      <div className="row">
        

    <div className='col m4 s6'>
        <span className="heading">Name</span> 
        </div>

        <div className='col m4 s6'>
        <span className='heading'>Phone</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
