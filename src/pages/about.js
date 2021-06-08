import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div  style={{height:"100vh", width:"100vw", backgroundColor:"gray",
            backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7vLt4Lci2w1IzCr705lw1UXsNMkkL9m0ig&usqp=CAU)',
            backgroundPosition:"center",
            backgroundSize:"cover"
            }}>
                <p>About</p>
            </div>    
        );
    }
}
 
export default About;