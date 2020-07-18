import React from 'react'
import Header from './Header'
import './AddSubscriber.css'
import {Link} from 'react-router-dom';
class AddSubscriber extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            id : 0,
            name : " ",
            contact : " "
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

        this.setState({
            id: 0,
            name: " ",
            contact: " "
        })

        this.props.history.push("/");

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
                    <label htmlFor="contact">Contact</label>
                    <input type="number" name="contact" onChange={this.onClickAdd}/>
                
                
                <div>
                
                     <button className="btn waves-effect left" >Add</button>
                    <Link to="/"><button className="btn waves-effect right" type="button">back</button></Link>

                </div>
                       
                </form>

                <br/>
                <br/>
                
                <div>
                    <p>Subscriber to be added</p>
                    <p>Name : {this.state.name}</p>
                    <p>contact : {this.state.contact}</p>
                </div>
                
                </div>
                </div>
           
           
            </div>

        )

    }

}

export default AddSubscriber;