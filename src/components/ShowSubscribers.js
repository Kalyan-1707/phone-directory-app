import React from 'react';
import './ShowSubscribers.css'
import Header from './Header'
import { Link } from "react-router-dom";

class ShowSubscribers extends React.Component {


  deleteSubscriberHandler =(id) => {

    this.props.delSubscriber(id);
    
  }

  render()
  {
  return (
    <div>
      <Header heading="Phone Directory"/>
      
      <br/>
      <br/>
      
      <div className="row">


        <div className='col  s4 m3 offset-m2'>
          <span className="heading">Name</span>
        </div>

        <div className='col  s4 m3 '>
          <span className='heading'>Phone</span>
        </div>

        
      
      </div>

      {

        this.props.subscribersList.map( sub => {

          return (

            <div className="row" key={sub.id}>

              <div className='col s4 m3 offset-m2'>
          <span className="sub-data">{sub.name}</span>
              </div>

              <div className='col s4 m3'>
          <span className='sub-data'>{sub.contact}</span>
              </div>

              <div className='col  s4 m3'>
                <button className="btn waves-effect waves-light red" onClick={this.deleteSubscriberHandler.bind(this,sub.id)}>Delete</button>
              </div>


            </div>


          )

        } )
  
      
      }

      <div className="container">
        <div className="center-align">
      <Link to="/add">
        <button className="addbtn waves-effect">
          Add
      </button>
      </Link>
        </div>
      </div>

    </div>
  );

}


}

export default ShowSubscribers;