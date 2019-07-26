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
        Drawer,
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
import FacebookLogin from './fb_login.js';
import {fb_cred} from '../backend/facebookApi.js';
import {Test} from '../backend/crud';




  
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
        img:'https://cdn.dribbble.com/users/1180042/screenshots/5716159/diamant.gif',
				visible: false,
				visible_drawer: false,
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
        

        signUp_status : false,
        signUp_icon_color: 'red',
        signUp_icon : 'close-circle',
        step_status_disable: true,
        dl_icon_color: 'red',
        dl_icon: 'close-circle',
        loginVisible: false,
        fbmodal:false,


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

      componentWillMount(){
        this.verifyQS();
        console.log(fb_cred.name);
      }

      verifyQS = async() =>{

        if(sessionStorage.getItem('token') !== null){
          //console.log(sessionStorage.getItem('user_data'));
          this.setState({ signUp_icon: 'check-circle' });
          this.setState({ signUp_icon_color: '#2ecc71' });
          await this.setState({signUp_status: true});  
          this.steps_enabler();  
          
        }else{
          console.log('Empty session');
        }
      }

      async steps_enabler (){
        console.log(this.state.signUp_status);
        if(this.state.signUp_status === true){
            this.setState({disable: false});
            this.setState({opacity: 1});

        }

      }
        
      download =() =>{

        // var newArr = this.state.entries;
        // newArr.push({ 'name': " test ", 'action':"Download" ,'email': 'test@test'});
        // this.setState({some:'val',entries:newArr})
        // console.log(this.state.entries)

        this.state.dl_icon == 'close-circle' ?  
        this.setState({ dl_icon: 'check-circle' }) 
       :
       console.log('done')
       this.state.dl_icon_color == 'red' ?  
       this.setState({ dl_icon_color: '#428bca' }) 
       :
       console.log('done')
      }

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

      change = () => {
       
        this.setState({ opacity: 1 });
        this.setState({ disable:false });

      };
       
      showModal = () => {
        this.setState({
          loginVisible: true,
        });
      };

      loginHandleCancel = e => {
        console.log(e);
        this.setState({
          loginVisible: false,
        });
			};
			
			showDrawer = () => {
        this.showfbLogin();
				this.setState({
					visible_drawer: true,
        });
        this.setState({
					fbmodal: true,
				});
			};

			closeDrawer = () => {
				this.setState({
					visible_drawer: false,
				});
      };
      
      showfbLogin = () => {
        this.setState({
					fbmodal: true,
				});
      }
      closefbLogin = () =>{
        this.setState({
					fbmodal: false,
				});
      }
  
    render() {
        return (
            <div  style={{ flex:1, alignItems:'center', justifyContent:'center ', overflowY:'hidden'}} id='cardH'>
              <div style={{ flex:1, alignItems:'center', justifyContent:'center ', marginTop:5,marginBottom:5, marginLeft:5, marginRight:5, overflowX:'hidden', overflowY:'hidden'}} id='cardH'>     
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
                     
                          <img style={{width:'100%'}} src={this.state.img} />
                     
                      <Divider/>
                      <div style={{margin:20}}>
                          <div style={{textAlign:'left', color:'gray', fontSize:15}}>
                              {this.items = this.state.description.map((item, key) =>
                                  <li key={item.key}>&bull; {item.des}</li>
                              )}                          
                          </div>
                      </div>
                      <div style={{marginBottom:10}}>
                          <div style={{textAlign:'left', color:'gray'}}>
                            
                              <a onClick={this.showDrawer}>
                                <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 , }}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Sign up </h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center'}}   span={2}><Icon style={{fontSize:20, color:this.state.signUp_icon_color}}  type={this.state.signUp_icon} /></Col>               
                                  </Row>
                                </div>
                              </a>

                              <a disabled={this.state.step_status_disable}  href={this.state.dlLink} target="_blank" onClick={this.download}>
                                  <div style={{marginBottom:10}}>  
                                  <Row   type="flex" justify="space-around" align="middle"  style={{border:'1px solid gray',borderRadius:5 , opacity:this.state.opacity}}>
                                    <Col   span={20}><h2 style={{ float:'left', marginLeft:20}}> Download </h2></Col> 
                                      <Divider type="vertical" />
                                    <Col style={{alignItems:'center'}}   span={2}><Icon style={{fontSize:20, color:this.state.dl_icon_color, opacity:this.state.opacity }}  type={this.state.dl_icon} /></Col>               
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
                                {/* <Button onClick={this.change} type="primary">Click</Button> */}
                                            
                          </div>
                      </div>        
                  </Card>
                </Col>
               
              </div>            
                <Modal
                    visible={this.state.loginVisible}
                    // onOk={this.handleOk}
                    onCancel={this.loginHandleCancel}
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

								<Drawer title="Create a new account" width={430} onClose={this.closeDrawer}visible={this.state.visible_drawer}>
									<div
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											padding: '10px 16px',
											background: '#fff',
											textAlign: 'right',
										}}
									>

											<Col align="middle" type="flex" justify="center">
												
												<Signup />
											</Col>
										</div>
								</Drawer>


                <Modal
                    visible={this.state.fbmodal}
                    // onOk={this.handleOk}
                    onCancel={this.closefbLogin}
                    closable={true}
                    footer={null}
                    style={{ maxHeight: '10vh',
                            maxWidth:'40vh' }}
                    >
                      <Col justify="center" align="middle" type="text" style={{height: "30px;"}}>
                          <FacebookLogin/>
                      </Col>
                    

                </Modal>

						</div>



        );
    }
}


export default Widget2;