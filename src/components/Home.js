import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component{

    render(){
        return(
            <div className="home">
                <h1>Home Content</h1>
                <Link to="/"><button>home</button></Link>
            </div>
        )
    }
}

export default Home;