import React from 'react';


function Header() 
{

    const HeaderStyling = {
        textAlign:'center',
        padding: 20,
        textTransform : 'uppercase',
        backgroundColor : 'black',
        color : 'white'
    }
    return(

        <div style={HeaderStyling}>
            Phone Directory
        </div>

    )
    
}

export default Header;