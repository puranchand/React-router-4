import React from 'react'
import { Link } from 'react-router-dom';

class Contact extends React.Component{

    render(){
        return(
            <div className="contact">
                <h1>Contact Content</h1>
                 <Link to="/"><button>home</button></Link>
            </div>
        )
    }
}

export default Contact;