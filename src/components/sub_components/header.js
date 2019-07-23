import React from 'react';
import { PageHeader, Typography, Row, Col, Avatar} from 'antd';

const { Paragraph } = Typography;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const content = (
  <div className="content">
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    
  </div>
);

const user_info = (
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{backgroundColor: '#fff'}}/>
);

const extraContent = (
  <img
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="content"
  />
);

class HeadLord extends React.Component {

    render() {
   
        return (
            <PageHeader style={{maxHeight: '70px', marginBottom: '15px', backgroundColor: '#2c3e50'}}>
                <Row>
                    <Col span={22}><div className="content"></div></Col>
                    <Col span={2}><div className="user_info">{user_info}</div></Col>
                </Row>
            </PageHeader>
        );
      }
}
    
export default HeadLord;