import React from 'react';
import './App.css'
import Header from './Header'

function App() {

  let subs=[
    {
      id : 1,
      name : 'Alpha',
      contact : '987654321'
    },
    {
      id : 2,
      name : 'Hydra',
      contact : '123456789'

    }
  ]
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

      {

        subs.map( sub => {

          return (

            <div className="row" key={sub.id}>

              <div className='col m4 s6'>
          <span className="sub-data">{sub.name}</span>
              </div>

              <div className='col m4 s6'>
          <span className='sub-data'>{sub.contact}</span>
              </div>


            </div>


          )

        } )
  
      
      }





    </div>
  );
}

export default App;
