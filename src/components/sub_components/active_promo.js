import React from 'react';
import {Collapse} from 'antd';
// import {setRecord, getRecord} from '../backend/crud';
// import Item from 'antd/lib/list/Item';
// const { Panel } = Collapse;

const Items = null;



class active_list extends React.Component {

    componentWillMount() {
        // Items = getRecord();    
    }

    render() {
        return (

            <div style={{margin:2, backgroundColor:'#fff', padding:10, borderRadius:10}}>
               <Collapse accordion>

                   {console.log({Items})}
                    {/* {Items.map((item, i) => {
                        return (
                            <Panel header={item} key={i}>
                            <p>Yeah</p>
                            </Panel>
                        );
                    })}; */}
                </Collapse>
            </div>
        );
    }
}

export default active_list;