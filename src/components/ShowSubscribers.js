import React from 'react';
import './ShowSubscribers.css'
import Header from './Header'
import { Link } from "react-router-dom";
import { Sugar } from 'react-preloaders';

class ShowSubscribers extends React.Component {

  constructor()
  {
    super();
    this.state={
      loading:true
    }
  }

  componentDidMount=() => {

    setTimeout(() => {

      this.setState({ loading: false });

    }, 1000);
    
  }

  deleteSubscriberHandler =(id) => {

    this.props.delSubscriber(id);
    
  }

  render()
  {

  return (
    
    <div className="main-container">

    {

      this.state.loading?<Sugar/>:

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
                <button className="btn waves-effect waves-light red" onClick={this.deleteSubscriberHandler.bind(this,sub.id)}>

                  <i className="fas fa-user-minus "></i> 
                  
                </button>
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

    }

  </div>

  );

}


}

export default ShowSubscribers;
