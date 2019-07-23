import React from 'react';
import Header from './sub_components/header.js'
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
  PageHeader, 
  Typography
} from 'antd';

class Dashboard extends React.Component {

    render() {
   
        return (
            <div class="row">
                {/* SIDEBAR HERE */}
                <div class="col-12">
                    <Header />
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
                    </div>
                </div>
            </div>
        );
      }
}
    
export default Dashboard;