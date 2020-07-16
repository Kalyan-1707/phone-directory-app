import React from 'react'
import Header from './Header'
import './AddSubscriber.css'
class AddSubscriber extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            id : 0,
            name : " ",
            phone : " "
        }
        
    }

    onClickAdd = (e) =>
    {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    
    }

    addSubscriberEventHandler= (e) => {

        e.preventDefault();

        this.props.addSubscriber(this.state);


    }

    render()
    {

        return(

            <div>
                <Header heading="Add Subscriber"/>
                
                <div className="row body-add-subsriber">
                
                <div className="col s12 m4 offset-m4">
                <form onSubmit={this.addSubscriberEventHandler.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={this.onClickAdd}/>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" onChange={this.onClickAdd}/>
                
                
                <div>
                
                     <button className="btn waves-effect left" >Add</button>
                     <button className="btn waves-effect right" type="button">back</button>

                </div>
                       
                </form>

                <br/>
                <br/>
                
                <div>
                    <p>Subscriber to be added</p>
                    <p>Name : {this.state.name}</p>
                    <p>Phone : {this.state.phone}</p>
                </div>
                
                </div>
                </div>
           
           
            </div>

        )

    }

}

export default AddSubscriber;