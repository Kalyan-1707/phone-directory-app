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
      <Header heading="Phone Directory"/>
      <button className="addbtn waves-effect">
        Add
      </button>

      
      <div className="row">


        <div className='col  s4'>
          <span className="heading">Name</span>
        </div>

        <div className='col  s4'>
          <span className='heading'>Phone</span>
        </div>

        
      
      </div>

      {

        subs.map( sub => {

          return (

            <div className="row" key={sub.id}>

              <div className='col s4 '>
          <span className="sub-data">{sub.name}</span>
              </div>

              <div className='col s4'>
          <span className='sub-data'>{sub.contact}</span>
              </div>

              <div className='col  s4'>
                <button className="btn waves-effect waves-light red">Delete</button>
              </div>


            </div>


          )

        } )
  
      
      }





    </div>
  );
}

export default App;
