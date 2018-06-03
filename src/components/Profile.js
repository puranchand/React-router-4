import React from 'react'
import { Link } from 'react-router-dom';

class Profile extends React.Component{

    render(){
        return(
            <div className="profile">
                <h1>Profile Content</h1>
                <Link to="/"><button>home</button></Link>
            </div>
        )
    }
}

export default Profile;