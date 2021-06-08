import React, { Component } from 'react'
import '../style/counter.css'
import CountUp from "react-countup";
import Fade from 'react-reveal/Fade';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    easingFn = (t, b, c, d) => {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
      };


    render() { 

        const img ="https://preview.colorlib.com/theme/tough/images/image_1.jpg"
        return ( 
            <div className="counter-container">
                <div className="counter-content-container">
                    <div className="content-container"> 
                        <div className="content">
                            <p className="count">
                                <CountUp end={800} duration={8}/>
                            </p>
                            <p className="title">
                                Finished Project
                            </p>
                        </div>
                        <div className="content">
                            <p className="count">
                               <CountUp end={795} duration={8}/>
                            </p>
                            <p className="title">
                                Happy Customer
                            </p>
                        </div>
                    </div>
                    <div className="content-container"> 
                        <Fade bottom>
                            <div className="content">
                                <p className="count">
                                    <CountUp end={1200} duration={8}/>
                                </p>
                                <p className="title">
                                    Working Hours
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <p className="count">
                                <CountUp end={850} duration={8}/>
                                </p>
                                <p className="title">
                                    Cups Of Coffee
                                </p>
                            </div>
                        </Fade>
                    </div>

                </div>
                <div className="counter-image" style={{backgroundImage:`url(${img})`}}/>
                    
            </div>
         );
    }
}
 
export default Counter;