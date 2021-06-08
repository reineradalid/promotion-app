import React, { Component } from 'react'
import '../style/portfolio.css'
import {
    PictureOutlined
} from '@ant-design/icons';
import Gallery from "react-photo-gallery";
import { photos } from "../components/photo";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { active:"interior" }
    }
    render() { 
        let {
            active
        } = this.state
        return ( 
            <div className="portfolio-container">
                <label style={{fontSize: '32px', color : '#000'}}>Portfolio</label>
                <Gallery photos={photos} direction={"column"}/>
            </div>
         );
    }
}
 
export default Portfolio;

