import React from 'react';
import { Card,Icon,Row,Col, Layout, Modal,} from 'antd';
import Signup from './signup.js';



  const contentList = {
    tab1: <p>content1</p>,
    tab2:<Signup/>,
  };

  
class Widget extends React.Component {
    state = {
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
          ]
      };
    
      onTabChange = (key, type) => {
       
        this.setState({ [type]: key });
      };

      iconchange = () => {
        if(this.state.icon == 'close-circle') {
            this.setState({ icon: 'check-circle' });
        }else{
            this.setState({ icon: 'close-circle' });
        }
       
      };
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
  
    render() {
        return (
            <div style={{margin:2, borderRadius:20}}>
                <Layout  style={{ maxHeight: '50vh'  }} >
                <Card
                    style={{ alignItems:'center', 
                            justifyContent:'center', 
                            width:'100%', 
                            borderRadius:10, 
                            }}
                            title={<h1 style={{fontSize:25}}>{this.state.title}</h1>}
                    // tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                  
                    >
                    {/* {contentList[this.state.key]} */}
                    <div >
                        <img style={{width:'100%'}} src={'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                    </div>
                    <div style={{margin:20}}>
                        <div style={{textAlign:'left', color:'gray', fontSize:15}}>
                            {this.items = this.state.description.map((item, key) =>
                                <li key={item.id}>&bull; {item.des}</li>
                            )}                          
                        </div>
                    </div>
                    <a  onClick={this.showModal}>
                        <div style={{marginBottom:10}}>      
                            <Row  type="flex" justify="space-around" align="middle"  style={{border:'1px solid black',borderRadius:10 }}>
                                <Col span={20}><h2 style={{ float:'left', marginLeft:20}}>Sign In</h2></Col>
                                <Col style={{float:'right'}}   span={2}><Icon style={{fontSize:20, float:'right'}}  type={this.state.icon} /></Col>
                            </Row>
                        </div>  
                    </a>
                    <a onClick={()=>{this.iconchange() }}>
                        <div style={{marginBottom:10}}>
                            <Row  type="flex" justify="space-around" align="middle" style={{border:'1px solid black',borderRadius:10}}>
                                <Col  span={20}><h2 style={{float:'left', marginLeft:20}}>Follow us </h2></Col>
                                <Col  style={{float:'right'}} span={2}><Icon  style={{fontSize:20, float:'right'}} type={this.state.icon}/></Col>
                            </Row>
                        </div>
                    </a>
                    <a onClick={()=>{this.iconchange() }}>
                        <div style={{marginBottom:10}}>
                            <Row  type="flex" justify="space-around" align="middle" style={{border:'1px solid black',borderRadius:10}}>
                                <Col span={20}><h2 style={{ float:'left', marginLeft:20}}>Download our App</h2></Col>
                                <Col  style={{float:'right'}}  span={2}><Icon  style={{fontSize:20, float:'right'}}type={this.state.icon} /></Col>
                            </Row>
                        </div>
                    </a>
                    
                </Card>
                </Layout>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <div visible={this.state.visible} style={{alignItems:'center', justifyContent:'center'}} >
                        <Signup/>
                    </div>
                </Modal>
            </div>





        );
    }
}

export default Widget;