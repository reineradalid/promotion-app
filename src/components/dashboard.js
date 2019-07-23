import React from 'react';
import HeadLord from './sub_components/header.js'
import Sidebar from './sidebar.js'
import Widget from './sub_components/widget.js'
import { Menu, Breadcrumb, Icon, Layout, Row, Col} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {

    render() {
   
        return (

            <Layout style={{ minHeight: '100vh' }}>
                
                <Sidebar />
                <Layout>
                    <HeadLord />

                    <Row>
                        <div class="col-12">
                            {/* <HeadLord/> */}
                            <div class="container">
                            <Row gutter={8}>
                                <Col span={6}>
                                    <div>Column</div>
                                </Col>
                                <Col span={6}>
                                    <div>Column</div>
                                </Col>
                                <Col span={6}>
                                    <div>Column</div>
                                </Col>
                                <Col span={6}>
                                    <div>Column</div>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
                                    <Widget/>
                                </div>
                            </Row>
                            
                            </div>
                        </div>

                    </Row>
                </Layout>

                   

            </Layout>
            
            
        );
      }
}
    
export default Dashboard;