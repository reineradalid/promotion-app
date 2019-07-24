import React from 'react';
import { Table, Divider, Tag,Input, Button, Row} from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    email: 'TEST@asdfkds',
    mobile: '0030030343',
    entries: ['Follow', 'Signup/Signin','like'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    email: 'test2@tetsgs',
    mobile: '09874563121',
    entries: ['Signup/Signin'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '4',
    firstName: 'tom',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '5',
    firstName: 'rex',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '6',
    firstName: 'try',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '7',
    firstName: 'asd',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '8',
    firstName: 'qwe',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '9',
    firstName: 'bvnm',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '10',
    firstName: 'jdfg',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '11',
    firstName: 'Joase',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },
  {
    key: '12',
    firstName: 'asddddd',
    lastName: 'Black',
    email: 'asd@asdasd',
    mobile: '921654245122',
    entries: ['Signin', 'Like'],
  },  
];




class Entrylist extends React.Component {
    state = { fullname:'' }

   
    
    
pickRand = () => {
    var winner = data[Math.floor(Math.random() * data.length)]
    var wfname = winner.firstName
    var wlname = winner.lastName
    this.setState({fullname: wfname+ " " +wlname})
    
  };
    render() {
        return (

            <div style={{margin:2, backgroundColor:'#fff', padding:10, borderRadius:10}}>
                <Row>

                    <Button onClick={this.pickRand} style={{float:'right', margin:10}} type="primary">Random Pick</Button>
                </Row>
               
                {this.state.fullname}
                <Table bordered  dataSource={data} scroll={{y:'50vh'}} >
                    <Column  align='center' colSpan={3} title="First Name" dataIndex="firstName" key="firstName" />
                    <Column  align='center' colSpan={3} title="Last Name" dataIndex="lastName" key="lastName" />
                    <Column  align='center' colSpan={3} title="Email" dataIndex="email" key="email" />
                    <Column  align='center' colSpan={3} title="Mobile" dataIndex="mobile" key="mobile" />
                    <Column
                     align='center' 
                    colSpan={4} 
                        title="Entries"
                        dataIndex="entries"
                        key="entries"
                        render={entries => (
                            <span>
                            {entries.map(entries => (
                                <div style={{margin:5}}>
                                <Row>
                                    <Tag color="blue" key={entries}>
                                    {entries}
                                    </Tag>
                                </Row>
                                </div>
                            ))}
                            </span>
                        )}
                    />
                    <Column
                    colSpan={3}
                         align='center' 
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                              
                            <   a href="javascript:;">Delete</a>
                            <Divider type="vertical" />
                            <   a href="javascript:;">Contact</a>
                            </span>
                        )}
                    />
                </Table>
           
            </div>
        );
    }
}

export default Entrylist;