import React, { Component } from 'react'
import '../style/client.css'
import {
    PictureOutlined
} from '@ant-design/icons';
import {Avatar} from 'antd'

import Fade from 'react-reveal/Fade';
import {ReactComponent as InteriorIcon} from '../assets/plan.svg'
import {ReactComponent as ConceptIcon} from '../assets/concept.svg'
import {ReactComponent as ResidentialIcon} from '../assets/residential.svg'
import {ReactComponent as HospitalityIcon} from '../assets/hospitality.svg'
import Slider from 'infinite-react-carousel';
import _ from 'lodash'

const settings =  {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
};

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = { active:"interior" }
    }
    render() { 
        let {
            active
        } = this.state
        return ( 
            <div className="client-container" style={{marginTop: '80px', marginBottom: '40px'}}>
                <div className="clients-title-container">
                  
                        <p className="header">
                            WHAT CLIENTS SAYS ?
                        </p>
                   
                    
                </div>
                <div className="clients-content-container">
                    <Slider  { ...settings }>
                        {
                             _.chunk(data, 2).map((arrChunk, i) =>
                                <>
                                    <div style={{display:'flex', flexDirection : 'row'}}>
                                        {arrChunk.map(item => 
                                            <div style={{display: 'flex', flexDirection: 'row', marginRight: '20px'}}>
                                                <div style={{height: '500px', width: '350px', border: '1px solid #eee', padding: '20px'}}>
                                                    <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
                                                        <Avatar 
                                                            style={{height: '90px', width: '90px'}}
                                                            src={item.img} 
                                                        />
                                                        <p class="phrase" style={{fontWeight: 600, textAlign: 'center',}}>
                                                            {item.phrase}
                                                        </p>
                                                        <div style={{display: 'flex', flexDirection: 'column', position : 'absolute', bottom: 10, alignItems: 'center'}}>
                                                            <strong style={{fontSize: '18px', color: '#f1c40f'}}>{item.name}</strong>
                                                            <small style={{fontWeight: 500, color:'#213e7b'}}>{item.type}</small>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )
                        }
                    </Slider>
                </div>

                <div className="clients-content-container-md">
                    <Slider className="slider" { ...settings } dots>
                        { 
                            _.chunk(data, 1).map((arrChunk, i) =>
                        
                                <>
                                    <div style={{display: 'flex',justifyContent:"center"}}>
                                        {
                                            arrChunk.map(item => 
                                                <div style={{height: '500px', width: '380px', border: '1px solid #eee', padding: '20px'}}>
                                                    <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center'}}>
                
                                                        <Avatar 
                                                            style={{height: '90px', width: '90px'}}
                                                            src={item.img} 
                                                        />
                                                        <p class="phrase" style={{fontWeight: 600, textAlign: 'center',}}>
                                                            {item.phrase}
                                                        </p>
                                                        <div style={{display: 'flex', flexDirection: 'column', position : 'absolute', bottom: 10, alignItems: 'center'}}>
                                                            <strong style={{fontSize: '18px', color: '#f1c40f'}}>{item.name}</strong>
                                                            <small style={{fontWeight: 500, color:'#213e7b'}}>{item.type}</small>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>    
                            )
                        }
                    </Slider>
                </div>

                <div className="clients-content-container-sm">
                    <Slider className="slider"   style={{width:"100%"}} { ...settings } dots>
                        { 
                            _.chunk(data, 1).map((arrChunk, i) =>
                                <>
                                  
                                    <div style={{height: '400px', width: '100%', border: '1px solid #eee', padding: '20px 10px'}}>
                                        {
                                            arrChunk.map(item => 
                                                <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
                                                    <Avatar 
                                                        style={{height: '90px', width: '90px'}}
                                                        src={item.img} 
                                                    />
                                                    <p class="phrase" style={{fontWeight: 600, textAlign: 'center',}}>
                                                        {item.phrase}
                                                    </p>
                                                    <div style={{display: 'flex', flexDirection: 'column', position : 'absolute', bottom: 10, alignItems: 'center'}}>
                                                        <strong style={{fontSize: '18px', color: '#f1c40f'}}>{item.name}</strong>
                                                        <small style={{fontWeight: 500, color:'#213e7b'}}>{item.type}</small>
                                                    </div>
                                                    
                                                </div>
                                            )
                                        }
                                    </div>
                                </>        
                            )
                        }
                    </Slider>
                </div>
            </div>
         );
    }
}
 
export default Clients;

const data =[
    {
        img: "https://haircutinspiration.com/wp-content/uploads/Classic-Tapered-Comb-Over.jpg",
        name:"Juan Carlos",
        phrase: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        type : "CUSTOMER"
    },
    {
        img: "https://media1.tenor.com/images/72769b676838df10ff4f4297e4153c73/tenor.gif?itemid=12690453",
        name:"Lee Ji-Eun",
        phrase: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        type : "CUSTOMER"
    },
    {
        img: "https://haircutinspiration.com/wp-content/uploads/Classic-Tapered-Comb-Over.jpg",
        name:"Juan Carlos",
        phrase: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        type : "CUSTOMER"
    },
    {
        img: "https://haircutinspiration.com/wp-content/uploads/Classic-Tapered-Comb-Over.jpg",
        name:"Juan Carlos",
        phrase: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        type : "CUSTOMER"
    },
]
