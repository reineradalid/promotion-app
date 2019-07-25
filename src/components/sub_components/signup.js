import React from 'react';
import { Form,  
         Input, 
         Button,
         Modal, 
         Result, 
         Icon,
        Checkbox,
        Col} from 'antd';
import Widget from './widget.js';
import {Register} from '../backend/crud';

class Signup extends React.Component {
    state={
        img :"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        confirmDirty: false,
        autoCompleteResult: [],
        visible: false,
        rTitle:'',
        rSubTitle:'',
        rType:'',
        visibles:false,
        asdddd:true,
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            //console.log(values);
            Register({values});
            setTimeout(() => {   
                this.setState({  visible:true });
                this.setState({  rSubTitle:'' });
                this.setState({  rType:'success' });
                this.setState({  rTitle:'Success' });
              }, 1000);

          }else{
            this.setState({  visible:true });
            this.setState({  rSubTitle:'Try Different account' });
            this.setState({  rType:'warning' });
            this.setState({  rTitle:'Account existed' });
          }
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      handleCancels = e => {
        console.log(e);
        this.setState({
          visibles: false,
        });
      };
      showModal = () => {
        this.setState({
          visibles: true,
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
                        <a onClick={this.showModal}> Sign in </a>
                    </Form.Item>  
                </Form>



                <Modal
                   
                   visible={this.state.visible}
                   onCancel={this.handleCancels}
                   footer={null}
                   style={{ maxHeight: '20vh',
                           maxWidth:'40vh' }}
                   >
                        <Result
                            status={this.state.rType}
                            title={this.state.rTitle}
                            subTitle={this.state.rSubTitle}
                            extra={[
                            // <Button type="primary" key="console">
                            //     Copy
                            // </Button>,
                            
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
                      {/* <Form.Item >
                        
                        <a style={{float:'right'}} className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    
                      </Form.Item>
                     
                      <Form.Item style={{float:'right', marginTop:-30}}>
                          Or <a href=""> register now!</a>
                      </Form.Item>    */}
                    </Form>
                    
                </Modal>
            </div>
          
        );
    }
}


export default Form.create()(Signup);