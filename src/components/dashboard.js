import React from 'react';
import HeadLord from './sub_components/header.js'
import Sidebar from './sidebar.js'

import {Button, Icon, Layout, Row, Col, Statistic} from 'antd';

import Active_list from './sub_components/active_promo.js';
import mod from './backend/crud.js';


class Dashboard extends React.Component {
    
    render() {
   
        return (
            
            <Layout style={{ minHeight: '100vh' }}>
                
                <Sidebar />
                <Layout>
                    <HeadLord />
                    
                    <Row>
                        <div className="col-12">
                            {/* <HeadLord/> */}
                            <div className="container">
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
                            <Row>
                                <Col span={8}>
                                    <div style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
                                    < Active_list/>
                                    </div>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col span={14}>
                                    <div style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
                                        
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
                                        
                                    </div>
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