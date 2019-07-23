import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';


class Signup extends React.Component {
  andleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
 
  render() {
   
    return (
      <div class="col-lg-12">
        <div class="col-lg-8">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
         
        </Form.Item>
        <Form.Item>
        
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

export default Signup;