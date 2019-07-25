import React from 'react';
import { Form,  
         Input, 
         Button,
         Modal, 
         Result } from 'antd';
import Widget from './widget.js';

class Signup extends React.Component {
    state={
        img :"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        confirmDirty: false,
        autoCompleteResult: [],
        visible: false,
        rTitle:'',
        rSubTitle:'',
        rType:''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log(values);
           
            setTimeout(() => {   
                this.setState({  visible:true });
                this.setState({  rSubTitle:'3454561sadasd' });
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

      imgChange = () => {
        this.setState({
       img: 'https://i.stack.imgur.com/ilBrr.png',
        });
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
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                                ],
                            })(<Input name='fname' placeholder="First Name" />)}
                    </Form.Item>
                    <Form.Item  >
                        {getFieldDecorator('lname', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            
                                ],
                            })(<Input  name='lname' placeholder="Last Name"/>)}
                    </Form.Item>
                    <Form.Item  >
                        {getFieldDecorator('email', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                                ],
                            })(<Input  name='email'  placeholder="email" />)}
                    </Form.Item>
                    <Form.Item  hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password  minLength={10} name='password' placeholder="Password" />)}
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
                            })(<Input addonBefore="+63" maxLength={13} minLength={10} name='mobile' placeholder="987654321" style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item >
                        <Button id="confirm_btn" type="primary" htmlType="submit">confirm</Button>
                    </Form.Item>  
                </Form>



                <Modal
                   
                   visible={this.state.visible}
                   onCancel={this.handleCancel}
                   footer={null}
                   style={{ maxHeight: '20vh',
                           maxWidth:'40vh' }}
                   >
                        <Result
                            status={this.state.rType}
                            title={this.state.rTitle}
                            subTitle={this.state.rSubTitle}
                            extra={[
                            <Button type="primary" key="console">
                                Copy
                            </Button>,
                            
                            ]}
                        />
                   
               </Modal>
            </div>
          
        );
    }
}


export default Form.create()(Signup);