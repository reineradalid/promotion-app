import React from 'react';
import HeadLord from './sub_components/header.js'
import Sidebar from './sidebar.js'
import { Menu, Button, Icon, Layout, Row, Col, Statistic} from 'antd';
import mod from './backend/crud.js';

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
                            <Row gutter={10}>
                                <Col span={4} style={{backgroundColor: '#2ecc71', padding: '15px', borderRadius: '5px'}}>
                                    <Statistic style={{color: '#fff'}}title="Active Promotion" value={10} prefix={<Icon type="notification" />} />
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Total Users" value={1128} prefix={<Icon type="user" />} />
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Unmerged" value={93} suffix="/ 100" />
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Unmerged" value={93} suffix="/ 100" />
                                    <Button onClick={mod.getRecord} />
                                </Col>
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