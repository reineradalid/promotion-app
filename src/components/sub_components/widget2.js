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
        Popconfirm,
        Divider,
        Alert
      } from 'antd';
import {
        BrowserView,
        MobileView,
        isBrowser,
        isMobile,
        isAndroid
      } from "react-device-detect";
import Signup from './signup.js';



  
  const EditableContext = React.createContext();

  const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );

  const EditableFormRow = Form.create()(EditableRow);

  
class Widget2 extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
        img:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        visible: false,
        key: 'tab1',
        dlLink:'',
        links:'',
        noTitleKey: 'app',
        icon:'close-circle',
        fbLikeicon:'close-circle',
        fbshareicon:'close-circle',
        fbLikeicon:'close-circle',
        downloadIcon:'close-circle',
        title:'Giveaways',
        scolor:'red',
        dcolor:'red',
        sgcolor:'red',
        lcolor:'red',
        disable:true,
        opacity:.7,
        entries:[
          {
            id:'1',
            name:'',
            action:'',
          },
         
        ],
        description:[
          {
            key:1,
            des: 'Sign in/ Signup',
          },
          {
              key:2,
            des: 'Like and Share our page',
          },
          {
              key:3,
            des:'Like and Share the post',
          },
          {
              key:4,
              des:'Download App',
          }
        ], 
      };
  }

  componentDidMount(){
    if (isMobile) {
        if(isAndroid){
          this.setState({ dlLink:'https://play.google.com/store/apps/details?id=com.jobstreaminc.jobstreamapp&hl=en' })  
          console.log(this.state.dlLink)
        }else{
          console.log('ios')
          this.setState({ dlLink: 'https://apps.apple.com/ph/app/jobstream-app/id1254453926' })
        }
        console.log('mobile')     
    }else{
      
      this.setState({ dlLink:'https://play.google.com/store/apps/details?id=com.jobstreaminc.jobstreamapp&hl=en' }) 
      console.log(this.state.dlLink)
    }

  
  }
    
      change = () => {
       
        this.setState({ opacity: 1 });
        this.setState({ disable:false });

      };

        showModal = () => {
        this.setState({
          visible: true,
        });
      };

     
      fbLike =() =>{
        if(this.state.disable == true){
         console.log("Please Sign up")
        }else{
          var newArr = this.state.entries;
        
          newArr.push({ 'name': " test ", 'action':"Like", 'email': 'test@test'});
         
          this.setState({some:'val',entries:newArr})
          console.log(this.state.entries)
  
          this.state.fbLikeicon == 'close-circle' ?  
          this.setState({ fbLikeicon: 'check-circle' }) 
          :
          console.log('done')
  
          this.state.lcolor == 'red' ?  
          this.setState({ lcolor: '#428bca' }) 
          :
          console.log('done')

        }
       
      
      }

      fbshare =() =>{
        var newArr = this.state.entries;
        
        newArr.push({ 'name': " test ", 'action':"Share" ,'email': 'test@test'});
       
        this.setState({some:'val',entries:newArr})
        console.log(this.state.entries)
        
        this.state.fbshareicon == 'close-circle' ?  
        this.setState({ fbshareicon: 'check-circle' }) 
        :
       console.log('done')

       this.state.scolor == 'red' ?  
       this.setState({ scolor: '#428bca' }) 
       :
       console.log('done')
      }


     
      
      
      download =() =>{

        var newArr = this.state.entries;
        
        newArr.push({ 'name': " test ", 'action':"Download" ,'email': 'test@test'});
       
        this.setState({some:'val',entries:newArr})
        console.log(this.state.entries)

        this.state.downloadIcon == 'close-circle' ?  
        this.setState({ downloadIcon: 'check-circle' }) 
       :
       console.log('done')
       this.state.dcolor == 'red' ?  
       this.setState({ dcolor: '#428bca' }) 
       :
       console.log('done')
      }

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
  
    render() {
        return (
            <div  style={{ flex:1, alignItems:'center', justifyContent:'center ', overflowY:'hidden'}} id='cardH'>
              <div style={{ flex:1, alignItems:'center', justifyContent:'center ', marginTop:50,marginBottom:50, marginLeft:5, marginRight:5, overflowX:'hidden', overflowY:'hidden'}} id='cardH'>     
                <Col  type="flex" justify="center" align="middle">
                  <Card
                      style={{ alignItems:'center', 
                              justifyContent:'center', 
                              width:'100%', 
                              borderRadius:10,
                              maxHeight: '200vh',
                              maxWidth:'60vh' 
                              }}
                              title={ <h1 style={{fontSize:25}}>{this.state.title}</h1>}
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
                                  <li key={item.key}>&bull; {item.des}</li>
                              )}                          
                          </div>
                      </div>
                      <div style={{marginBottom:10}}>
                          <div style={{textAlign:'left', color:'gray'}}>
                            
                              <a>
                                <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 , }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Sign up </h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center'}}   span={2}><Icon style={{fontSize:20, color:this.state.sgcolor,  }}  type={this.state.icon} /></Col>               
                                  </Row>
                                </div>
                              </a>
                              <a   disabled={this.state.disable}  href={this.state.dlLink} target="_blank" onClick={this.download}>
                                  <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 , opacity:this.state.opacity}}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Download </h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center'}}   span={2}><Icon style={{fontSize:20, color:this.state.dcolor, opacity:this.state.opacity }}  type={this.state.downloadIcon} /></Col>               
                                  </Row>
                                  </div>
                                </a>
                                <a disabled={this.state.disable} href="https://www.facebook.com/JobStreamApp.Philippines" target='_blank' onClick={this.fbLike}> 
                                
                                  <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 ,  opacity:this.state.opacity}}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}>Like Facebook page</h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center'}}  span={2}><Icon style={{fontSize:20, color:this.state.lcolor , opacity:this.state.opacity}}  type={this.state.fbLikeicon} /></Col>               
                                  </Row>
                                  </div>
                                </a>
                                <a disabled={this.state.disable}  href="https://www.facebook.com/JobStreamApp.Philippines"  target='_blank' onClick={this.fbshare}>
                                
                                <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5,  opacity:this.state.opacity}}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}>Share Facebook page</h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center', }}  span={2}><Icon style={{fontSize:20, color:this.state.scolor,  opacity:this.state.opacity}} type={this.state.fbshareicon}/></Col>               
                                  </Row>
                                </div>
                                </a>
                                <Button onClick={this.change} type="primary">Click</Button>
                                            
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