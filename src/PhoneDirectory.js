import React from 'react';
//import AddSubscriber from './components/AddSubscriber'
import ShowSubscribers from './components/ShowSubscribers'
class PhoneDirectory extends React.Component
{

    constructor()
    {

        super();
        this.state={
            subscribersList:[
                {
                    id: 1,
                    name: 'Alpha',
                    contact: '987654321'
                },
                {
                    id: 2,
                    name: 'Hydra',
                    contact: '123456789'

                }
            ]
        }

    }

    addSubscriber = (newSubscriber) => {
        
        let subscribersList=this.state.subscribersList;

        console.log("Phone directory");

        if(subscribersList.length>0)
        {
            
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;

        }
        else
        {

            newSubscriber.id =  1;

        }

        subscribersList.push(newSubscriber);
        this.setState(subscribersList);
        console.log(subscribersList);
    
    }


    render()
    {
        return (
        //<AddSubscriber addSubscriber={this.addSubscriber}/>
        <ShowSubscribers subscribersList={this.state.subscribersList}/>
        )
        
    }

}

export default PhoneDirectory;