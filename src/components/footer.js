import React, { Component } from 'react'
import '../style/footer.css'
import {
    FacebookFilled,
    InstagramFilled,
    TwitterSquareFilled
  } from '@ant-design/icons';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-container">
                <div className="footer-social-icons">
                    <FacebookFilled className="icon" />
                    <InstagramFilled className="icon" />
                    <TwitterSquareFilled className="icon" />
                </div>

                <h3>
                    Contact US
                </h3>

                <h4>
                    edwin@jemn-builders.com
                </h4>

                <p>
                    Copyright ©2021 All rights reserved
                </p>
            </div>
         );
    }
}
 
export default Footer;