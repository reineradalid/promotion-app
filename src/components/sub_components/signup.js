import React from 'react';
import { Form, Input, Button,Modal, Result, Icon, Col} from 'antd';
import {Register} from '../../API/crud';

class Signup extends React.Component {
    
  constructor(props, context) {
    super(props, context);
    this.state={
        img :"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        confirmDirty: false,
        autoCompleteResult: [],
        visible: false,
        rTitle:'',
        rSubTitle:'',
        rType:'',
        v_alert:false,
        asdddd:true,
        user:{
          email: '',
          fname: '',
          lname: ''
        }
    }
  }

      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            //console.log(values);

            var res = Register({values});
            res.then(data=>{
                console.log(data);
                if(data.success === true){
                    this.setState({  v_alert:true });
                    this.setState({  rSubTitle:'Please wait while verifying your entry' });
                    this.setState({  rType:'success' });
                    this.setState({  rTitle:'Success' });
                  setTimeout(() => {   
                    this.alertCancels();
                  }, 2000);


                  var token = data.result.user.sessionToken;
                  sessionStorage.setItem('token', token);
                  sessionStorage.setItem('user_fname', data.result.user.firstName);
                  sessionStorage.setItem('user_lname', data.result.user.lastName);
                  sessionStorage.setItem('user_email', data.result.user.email);


                }else{
                    this.setState({  v_alert:true });
                    this.setState({  rSubTitle:data.error.message });
                    this.setState({  rType:'error' });
                    this.setState({  rTitle:'Ooppss..' });
                  setTimeout(() => {   
                    this.alertCancels();
                  }, 2000);
                }
            })
            

          }else{
            this.setState({  v_alert:true });
            this.setState({  rSubTitle:'Please check your credentials' });
            this.setState({  rType:'warning' });
            this.setState({  rTitle:'Invalid Form' });
          }
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      alertCancels = e => {
        console.log(e);
        this.setState({
          v_alert: false,
        });
      };
      alertshowModal = () => {
        this.setState({
          v_alert: true,
        });
      };

      alerthandleOk = e => {
        console.log(e);
        this.setState({
          v_alert: false,
        });
      };


      imgChange = () => {
        this.setState({
       img: 'https://i.stack.imgur.com/ilBrr.png',
        });
      };
      handleLogin = () => {
        //     this.setState({
        //    disable:false,
          
        //     });
        console.log(this.state.asdddd)
      };

      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };

      validateEmail = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value.includes("@") !== true) {
            callback('Invalid Email');
          } else {
            callback();
        }
      };
 
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{backgroundColor:'#fff', 
                        borderRadius:10, 
                        alignItems:'center', 
                        justifyContent:'center', 
                        maxHeight: '200vh',
                        maxWidth:'60vh'}}>

                <div style={{paddingTop:10}}>
                    <img style={{ maxHeight: '10h',maxWidth:'15vh'}} src={require('../assets/logo.png')} />   
                </div>

                <h1 style={{paddingTop:20, color:'rgba(26,60,107,1)'}}>Signup</h1>

                <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '100%', alignItems:'center', justifyContent:'center',padding:30}}>
                    <Form.Item  >
                        {getFieldDecorator('fname', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your First Name!',
                                }
                                ],
                            })(<Input name='fname' placeholder="First Name" />)}
                    </Form.Item>
                    <Form.Item  >
                        {getFieldDecorator('lname', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                            
                                ],
                            })(<Input  name='lname' placeholder="Last Name"/>)}
                    </Form.Item>
                    <Form.Item  >
                        {getFieldDecorator('email', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },{
                                    validator: this.validateEmail,
                                }
                                ],
                            })(<Input  name='email'  placeholder="email"/>)}
                    </Form.Item>
                    <Form.Item  hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            {
                              validator: this.validateToNextPassword,
                            }
                            ],
                        })(<Input.Password  minLength={8} name='password' placeholder="Password" />)}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                            ],
                        })(<Input.Password minLength={8} onBlur={this.handleConfirmBlur} placeholder="Confirm Password" />)}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('mobile', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                                ],
                            })(<Input addonBefore="+63" maxLength={10} minLength={10} name='mobile' placeholder="987654321" style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item >
                        <Button id="confirm_btn" type="primary" htmlType="submit">Sign Up!</Button><br/>
                      
                    </Form.Item>  
                </Form>



                <Modal
                   
                   visible={this.state.v_alert}
                   onOk={this.alerthandleOk}
                   onCancel={this.alerthandleCancels}
                  //  footer={null}
                   style={{ maxHeight: '15vh',
                           maxWidth:'40vh' }}
                   >
                        <Result
                            status={this.state.rType}
                            title={this.state.rTitle}
                            subTitle={this.state.rSubTitle}
                            extra={[
                            // <Button type="primary" key="console">
                            //     OK
                            // </Button>
                            
                            ]}
                        />
                   
               </Modal>

               <Modal
                    visible={this.state.visibles}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancels}
                    footer={null}
                     style={{
                    Width:'50vh' }}
                
                    >
                    
                    <Form  onSubmit={this.handleSignIn} className="login-form" style={{width: '100%', alignItems:'center', justifyContent:'center',marginTop:50}}>
                      <Form.Item >
                      
                          <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                          
                          />
                      </Form.Item>
                      <Form.Item >
                      
                          <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                      
                          />
                      </Form.Item>
                      <Form.Item >
                        {/* <Checkbox style={{float:'left'}}>Remember me</Checkbox> */}
                        <Col  type="flex" justify="center" align="middle">
                        <Button onClick={this.handleLogin}  asd={this.state.asdddd} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </Col>
                      </Form.Item>
                    </Form>
                    
                </Modal>
            </div>
          
        );
    }
}


export default Form.create()(Signup);