import React from 'react';
import './ShowSubscribers.css'
import Header from './Header'

class ShowSubscribers extends React.Component {

  
  render()
  {
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

        this.props.subscribersList.map( sub => {

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


}

export default ShowSubscribers;
