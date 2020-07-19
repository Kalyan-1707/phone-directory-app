import React from 'react';
import AddSubscriber from './components/AddSubscriber'
import ShowSubscribers from './components/ShowSubscribers'
import { BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends React.Component
{

    constructor()
    {

        super();
        this.state={
            subscribersList:[
                {
                    id:1,
                    name:"abc",
                    contact:9999999999
                }
                
            ]
        }

    }

    delSubscriber = (subscriberId) => {

        let subscribersList=this.state.subscribersList;
        let newList=[];

        subscribersList.forEach( (item) => {

            if(item.id!==subscriberId)
                newList.push(item);

        })


        subscribersList=newList;
        this.setState({subscribersList:newList});
       
    }

    addSubscriber = (newSubscriber) => {
        
        let subscribersList=this.state.subscribersList;

        

        if(subscribersList.length>0)
        {
            
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;

        }
        else
        {

            newSubscriber.id =  1;

        }

        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
        
    
    }


    render()
    {
        return (
       
        <main>
        <Router>
                    <Route path="/" exact
                    render={(props) =>
                    <ShowSubscribers {...props} subscribersList={this.state.subscribersList} delSubscriber={this.delSubscriber} />
                         }>
                    </Route>

                    <Route path="/add"
                        render={({history},props) =>
                            <AddSubscriber history={history} {...props} addSubscriber={this.addSubscriber} />
                        }>
                    </Route>     

        
        </Router>  
        </main>
       
        )
        
    }

}

export default PhoneDirectory;