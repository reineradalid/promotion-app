import React, { Component } from 'react'
import '../style/services.css'
import {
    PictureOutlined
} from '@ant-design/icons';

import Fade from 'react-reveal/Fade';
import {ReactComponent as InteriorIcon} from '../assets/plan.svg'
import {ReactComponent as ConceptIcon} from '../assets/concept.svg'
import {ReactComponent as ResidentialIcon} from '../assets/residential.svg'
import {ReactComponent as HospitalityIcon} from '../assets/hospitality.svg'


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { active:"interior" }
    }
    render() { 
        let {
            active
        } = this.state
        return ( 
            <div className="service-container">
                <div className="services-title-container">
                    <div>
                        <p className="header">
                            Services
                        </p>
                    </div>
                    <Fade bottom>
                    <div className="services-content-list"> 
                        <div className="services-list-container" style={{alignItems: "center"}}  onClick={()=>this.setState({active:"interior"})}>
                            <div style={{width: '100%', display: 'flex', flexDirection:"row", alignItems: 'center'}}>
                                <InteriorIcon fill="#fff" height={25} width={25} style={{marginRight: '15px'}}/>
                                <p style={{fontSize:active =="interior" ?"22px":""}}>
                                    Interior
                                </p>
                            </div>
                            <p className="diamond" style={{display:active == "interior"?"flex":"none"}} >
                                ◆
                            </p>
                        </div>

                        <div className="services-list-container" style={{alignItems: "center"}} onClick={()=>this.setState({active:"concept"})}>
                            <div style={{width: '100%', display: 'flex', flexDirection:"row", alignItems: 'center'}}>
                                <ConceptIcon fill="#fff" height={25} width={25} style={{marginRight: '15px'}} />
                                <p style={{fontSize:active =="concept" ?"22px":""}}>
                                    Concept
                                </p>
                            </div>
                            <p className="diamond" style={{display:active == "concept"?"flex":"none"}} >
                                ◆
                            </p>
                        </div>
                        <div className="services-list-container" style={{alignItems: "center"}} onClick={()=>this.setState({active:"residential"})}>
                            <div style={{width: '100%', display: 'flex', flexDirection:"row", alignItems: 'center'}}>
                                <ResidentialIcon fill="#fff" height={25} width={25} style={{marginRight: '15px'}} />
                                <p style={{fontSize:active =="residential" ?"22px":""}}>
                                    Residential
                                </p>
                            </div>
                            <p className="diamond" style={{display:active == "residential"?"flex":"none"}} >
                                ◆
                            </p>
                        </div>
                        <div className="services-list-container" style={{alignItems: "center"}} onClick={()=>this.setState({active:"hospital"})}>
                            <div style={{width: '100%', display: 'flex', flexDirection:"row", alignItems: 'center'}}>
                                <HospitalityIcon fill="#fff" height={25} width={25} style={{marginRight: '15px'}} />
                                <p style={{fontSize:active =="hospital" ?"22px":""}}>
                                    Hospitality
                                </p>
                            </div>
                            <p className="diamond" style={{display:active == "hospital"?"flex":"none"}} >
                                ◆
                            </p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className="services-content-container">
                    <Fade right>
                    {
                        data.map(item =>
                            <div className="services-content" style={{display:item.type == active ?"flex" : "none"}}>
                                {/* <PictureOutlined style={{fontSize:"100px", color:"#000" }} /> */}
                                {item.icon}
                                <p className="services-content-title">
                                    {item.title}
                                </p>

                                <p className="services-content-desc">
                                    {item.desc}
                                </p>
                                <div className="services-content-bnt">
                                    Learn More
                                </div>
                            </div>
                        )
                    }
                    </Fade>
                    
                </div>
            </div>
         );
    }
}
 
export default Services;

const data =[
    {
        type:"interior",
        title:'Interior Design',
        desc:"Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
        icon : <InteriorIcon fill="#000" height={70} width={70} style={{marginRight: '15px'}} />
    },
    {
        type:"concept",
        title:'Concept Design',
        desc:"Concept fugit error iure nisi reiciendis fugiat illo pariatur qunem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
        icon : <ConceptIcon fill="#000" height={70} width={70} style={{marginRight: '15px'}} />
    },
    {
        type:"residential",
        title:'Residential Design',
        desc:"Residential tore fugit error iure ionem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
        icon : <ResidentialIcon fill="#000" height={70} width={70} style={{marginRight: '15px'}} />
    },
    {
        type:"hospital",
        title:'Hospitality Design',
        desc:"Hospital fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! C",
        icon : <HospitalityIcon fill="#000" height={70} width={70} style={{marginRight: '15px'}} />
    },
]
