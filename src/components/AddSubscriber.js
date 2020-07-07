import React from 'react'
import Header from './Header'
import './AddSubscriber.css'
class AddSubscriber extends React.Component
{

    render()
    {

        return(

            <div>
                <Header heading="Add Subscriber"/>
                
                <div className="row body-add-subsriber">
                
                <div className="col s12 m4 offset-m4">
                <form >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone"/>
                </form>
                
                <div>
                
                     <button className="btn waves-effect left">Add</button>
                     <button className="btn waves-effect right">back</button>

                </div>
                
                <br/>
                <br/>
                <div>
                    <p>Subscriber to be added</p>
                    <p>Name : </p>
                    <p>Phone : </p>
                </div>
                
                </div>
                </div>
           
           
            </div>

        )

    }

}

export default AddSubscriber;