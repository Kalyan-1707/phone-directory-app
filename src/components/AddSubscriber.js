import React from 'react'
import Header from './Header'
import './AddSubscriber.css'
import {Link} from 'react-router-dom';
import { Sugar } from 'react-preloaders';



class AddSubscriber extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            id : 0,
            name : " ",
            contact : " ",
            loading:true
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

    componentDidMount = () => {

        setTimeout(() => {

            this.setState({ loading: false });

        }, 1000);

    }



    render()
    {

        return(

            <div className="main-container">

            {
                this.state.loading?<Sugar/>:
            

            <div>
                <Header heading="Add Subscriber"/>
                
                <div className="row body-add-subsriber">
                
                <div className="col s12 m4 offset-m4">
                <form onSubmit={this.addSubscriberEventHandler.bind(this)}>

                    <div className="input-field">
                         <i className="material-icons prefix">account_circle</i>
                         <input type="text" name="name" onChange={this.onClickAdd}  required autoFocus/>
                         <label htmlFor="name">Name</label>
                    </div>

                    <div className="input-field">
                        
                        <i className="material-icons prefix">phone</i>
                        <input type="text" id="contact" name="contact" data-length="10" pattern="[0-9]{10,10}" title="Number Should be 10 digits" onChange={this.onClickAdd}/>
                        <label htmlFor="contact">Contact</label>
                        
                    </div>
                
                    <br/>

                    <div>
                
                     <button className="btn waves-effect left" >
                          <i className="fas fa-user-plus left"></i>
                              Add
                    </button>
                    <Link to="/"><button className="btn waves-effect right" type="button">
                        <i class="fas fa-arrow-left left"></i>
                        back</button></Link>

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

            }

            </div>
        )

    }

}

export default AddSubscriber;