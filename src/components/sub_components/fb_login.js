import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../../App.css';

class facebookLogin extends Component {

   state = {
     isLoggedIn: false,
     userId: '',
     name: '',
     email: '',
     picture: '',
     data:[{test:'test'}]
   }


  //  async componentDidMount(){
  //   console.log('esd');
    
  //   await console.log(this.state.data);
    
  //  }

  responseFacebook = response => {
   console.log(response);
    this.setState({ name: response.name})
    // this.setState({ email: response.email})
    
    
  }

  componentClicked = () =>{
    console.log(this.state.name)
    console.log(this.state.email)
  }

   render() {
     let fbContent;

     if(this.state.isLoggedIn){
      fbContent = null;
     }else{
       fbContent = ( 
        <FacebookLogin
          appId="672868223140058"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="fb_btn_login"
          icon="fa-facebook"
        />);

     }

     return (
       <div>
          {fbContent}
       </div>
     )
   };

}




export default facebookLogin;




