import React from 'react';
import {Card,
        Icon,
        Row,
        Col, 
        Layout, 
        Modal,
        Form,
        Input,
        Checkbox,
        Button,
        Popconfirm
      } from 'antd';
import Signup from './signup.js';



  
  const EditableContext = React.createContext();

  const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );

  const EditableFormRow = Form.create()(EditableRow);

  
class Widget2 extends React.Component {
    state = {
        img:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        visible: false,
        key: 'tab1',
        noTitleKey: 'app',
        icon:'close-circle',
        title:'Giveaways',
        description:[
            {
              id:1,
              des: 'Sign in/ Signup',
            },
            {
                id:2,
              des: 'Like and Share our page',
            },
            {
                id:3,
              des:'Like and Share the post',
            },
            {
                id:4,
                des:'Download App',
            }
          ],
    
         
      };
    
      onTabChange = (key, type) => {
       
        this.setState({ [type]: key });
      };

      iconchange = () => {
       
        this.state.icon == 'close-circle' ?  
        this.setState({ icon: 'check-circle' }) 
        :  
         this.setState({ icon: 'close-circle' });
       
      };
        showModal = () => {
        this.setState({
          visible: true,
        });
      };

      // handleSignIn(e) {
      //   e.preventDefault()
      //   this.props.onSignIn(username, password)
      // }

    
     
     
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
  
    render() {
        return (
            <div  style={{ flex:1, alignItems:'center', justifyContent:'center ', overflowY:'hidden'}} id='cardH'>
              <div style={{ flex:1, alignItems:'center', justifyContent:'center ', marginTop:30,marginBottom:30, overflowX:'hidden', overflowY:'hidden'}} id='cardH'>     
                <Col  type="flex" justify="center" align="middle">
                  <Card
                      style={{ alignItems:'center', 
                              justifyContent:'center', 
                              width:'100%', 
                              borderRadius:10,
                              maxHeight: '200vh',
                              maxWidth:'60vh' 
                              }}
                              title={<h1 style={{fontSize:25}}>{this.state.title}</h1>}
                      // tabList={tabList}
                      activeTabKey={this.state.key}
                      onTabChange={key => {
                          this.onTabChange(key, 'key');
                      }}
                    
                      >
                      {/* {contentList[this.state.key]} */}
                      {/* <Signup/> */}
                      <div >
                          <img style={{width:'100%'}} src={this.state.img} />
                      </div>
                      <div style={{margin:20}}>
                          <div style={{textAlign:'left', color:'gray', fontSize:15}}>
                              {this.items = this.state.description.map((item, key) =>
                                  <li key={item.id}>&bull; {item.des}</li>
                              )}                          
                          </div>
                      </div>
                      <div style={{marginBottom:10}}>
                          <div style={{textAlign:'left', color:'gray'}}>
                            
                              <a  >
                                <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Sign in </h2></Col> 
                                    <Col style={{float:'right'}}   span={2}><Icon style={{fontSize:20, float:'right'}}  type={this.state.icon} /></Col>               
                                  </Row>
                                  </div>
                                  <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Download </h2></Col> 
                                    <Col style={{float:'right'}}   span={2}><Icon style={{fontSize:20, float:'right'}}  type={this.state.icon} /></Col>               
                                  </Row>
                                  </div>
                                  <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}>Like Facebook page</h2></Col> 
                                    <Col style={{float:'right'}}   span={2}><Icon style={{fontSize:20, float:'right'}}  type={this.state.icon} /></Col>               
                                  </Row>

                                </div>
                                <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}>Share Facebook page</h2></Col> 
                                    <Col style={{float:'right'}}   span={2}><Icon style={{fontSize:20, float:'right'}}  type={this.state.icon} /></Col>               
                                  </Row>
                                </div>
                              </a>                    
                          </div>
                      </div>        
                  </Card>
                </Col>
               
              </div>            
                <Modal
                    visible={this.state.visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    style={{ maxHeight: '10vh',
                            maxWidth:'40vh' }}
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
                        <Checkbox style={{float:'left'}}>Remember me</Checkbox>
                        <Button style={{float:'right'}}  type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        
                      </Form.Item>
                      <Form.Item >
                        
                        <a style={{float:'right'}} className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    
                      </Form.Item>
                     
                      <Form.Item style={{float:'right', marginTop:-30}}>
                          Or <a href=""> register now!</a>
                      </Form.Item>   
                    </Form>
                    
                </Modal>              
            </div>





        );
    }
}

export default Widget2;