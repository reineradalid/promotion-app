import React, { Component } from 'react'

import Slider from 'infinite-react-carousel';
import '../style/home.css';
import Fade from 'react-reveal/Fade';
import _ from 'lodash'

const settings =  {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };
  const settingsMobile =  {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 3
  };

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity:5,
            desktopImg: []
        }
    }

    enterMouse=()=>{
        // this.setState({opacity: 0})
        console.log()
    }
    render() { 

        return ( 
            <div className="home-container">
                    <div className="home-content-lg">
                        <Slider className="slider" { ...settings } dots>
                            
                            {
                                _.chunk(sample, 3).map((arrChunk, i) =>
                                <>
                                    <div className="home-content-lg">
                                        {arrChunk.map(img => 
                                            <div className="img-content" style={{backgroundImage:`url(${img})`}} >
                                                <div className="img-shade-container">
                                                    <Fade bottom>
                                                        <p># Just a Title</p>
                                                    </Fade>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                                        
                                )
                            }
                            
                        </Slider>
                    </div>

                    <div className="home-content-md">
                    <Slider className="slider" { ...settings } dots>
                            {
                                _.chunk(sample, 2).map((arrChunk, i) =>
                                    <>
                                        <div className="home-content-md">
                                            {arrChunk.map(img => 
                                                <div className="img-content" style={{backgroundImage:`url(${img})`}} >
                                                    <div className="img-shade-container">
                                                        <Fade bottom>
                                                            <p># Just a Title</p>
                                                        </Fade>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>      
                                )
                            }

                    </Slider>
                </div>
                
                <div className="home-content-sm">
                    <Slider className="slider" { ...settings } dots>
                            {
                                _.chunk(sample, 1).map((arrChunk, i) =>
                                <>
                                    <div className="home-content-sm">
                                        {arrChunk.map(img => 
                                            <div className="img-content" style={{backgroundImage:`url(${img})`}} >
                                                <div className="img-shade-container">
                                                    <Fade bottom>
                                                        <p># Just a Title</p>
                                                    </Fade>
                                                </div>
                                            </div>
                                        )}
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
 
export default Home;


const sample =[
    'https://preview.colorlib.com/theme/tough/images/bg_1.jpg',
    'https://preview.colorlib.com/theme/tough/images/bg_2.jpg',
    'https://preview.colorlib.com/theme/tough/images/bg_3.jpg',
    'https://preview.colorlib.com/theme/tough/images/bg_4.jpg',
    'https://preview.colorlib.com/theme/tough/images/image_3.jpg',
    'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]
