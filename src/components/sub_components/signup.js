import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';

class Signup extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
    render() {
       
        return (
            
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '100%', alignItems:'center', justifyContent:'center',marginTop:50}}>
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
                    <Checkbox style={{float:'left'}}>Remember me</Checkbox>
                    <a style={{float:'right'}} className="login-form-forgot" href="">
                        Forgot password
                    </a>
                
                    </Form.Item>
                    <Form.Item>
                    
                    <Button  style={{float:'center'}}  type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                
                    </Form.Item>
                    <Form.Item>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
          
        );
    }
}


export default Signup;