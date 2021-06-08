import React, { Component } from 'react'
import '../style/getStarted.css'
import { Modal } from 'antd';



class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }



    
   showModal = () => {
    this.setState({ visible: true });
  };

   handleOk = () => {
    this.setState({ visible: false });
  };

   handleCancel = () => {
    this.setState({ visible: false });
  };


    render() { 

        let { visible } =this.state


        return ( 
            <>
            <div className="getStarted-container" >
                <div className="filler" />
                <div className="getStarted-content-container" onClick={()=>this.showModal()} style={{backgroundImage:`url(https://preview.colorlib.com/theme/tough/images/bg_1.jpg)`}}>
                    <h1>Get Started</h1>
                    <div className="getStarted-btn">
                        Request a quote
                    </div>
                </div>
            </div>
             <Modal title="Basic Modal" visible={visible} onOk={()=>this.handleOk()} onCancel={()=>this.handleCancel()}>
             <p>Some contents...</p>
             <p>Some contents...</p>
             <p>Some contents...</p>
           </Modal>
           </>
         );
    }
}
 
export default GetStarted;