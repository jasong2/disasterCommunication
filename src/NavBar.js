import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component
{
    constructor()
    {
        super()
        this.state={
        }
    }
    render(){
        return(
           <div>
               <Link to="/">
               Login
               </Link>
           </div>
        )
    }
}

export default NavBar