import React from 'react';
import HeadLord from './sub_components/header.js'
import Sidebar from './sidebar.js'
import { Menu, Breadcrumb, Icon, Layout
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {

    render() {
   
        return (

            <Layout style={{ minHeight: '100vh' }}>
                
                <Sidebar />
                <Layout>
                    <HeadLord style={{ background: '#fff', padding: 0 }} />
                </Layout>
            </Layout>
            
            // <Layout>
            // <div class="row">
            //     {/* SIDEBAR HERE */}
            //     
            //     <div class="col-12">
            //         {/* <HeadLord/> */}
            //         <div class="container">
            //         {/* <Row gutter={8}>
            //             <Col span={6}>
            //                 <div>Column</div>
            //             </Col>
            //             <Col span={6}>
            //                 <div>Column</div>
            //             </Col>
            //             <Col span={6}>
            //                 <div>Column</div>
            //             </Col>
            //             <Col span={6}>
            //                 <div>Column</div>
            //             </Col>
            //         </Row> */}
            //         </div>
            //     </div>
            // </div>
            // </Layout>
        );
      }
}
    
export default Dashboard;