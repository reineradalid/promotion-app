import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {useSelector, useDispatch} from 'react-redux';
import {signIn} from '../../Action';
import '../assets/style.css';

class facebookLogin extends Component {

   state = {
     isLoggedIn: false,
     userId: '',
     name: '',
     email: '',
     picture: '',
     data:[]
   }


   componentDidMount(){
    
   }

  responseFacebook = response => {
    console.log(response);
    this.setState({ data: response})
  }

  componentClicked = () => console.log("clicked");

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




