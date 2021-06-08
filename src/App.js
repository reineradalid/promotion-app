
import './App.css';
import React, { Component } from 'react'


import Home from './pages/home'
import Counter from './pages/counter'
import Services from './pages/services'
import GetStarted from './pages/getStarted'
import Portfolio from './pages/portfolio'
import Client from './pages/client'
import Footer from './components/footer'

import {
  HomeOutlined,
  InfoCircleOutlined,
  ToolOutlined
} from '@ant-design/icons';

import logo from './style/logo.png'




import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Drawer, Button, Radio, Space } from 'antd';





class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bgcolor: '',
        color:"#fff",
        height:"100px",
        visible: false, placement: 'left' 
      }
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({color: '#191919', bgcolor:"#fff", height:"80px"})
    } else {
      this.setState({color: '#fff', bgcolor:"",height:"100px"})
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
 
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };


  render() { 

    const { placement, visible } = this.state;
    const logo2 ="https://cleanjuice.com/wp-content/uploads/2020/07/white_bg_logo.png"
    return ( 
        <div style={{transition:"ease-in"}}>
         <nav style={{backgroundColor:this.state.bgcolor, height:this.state.height, transition:"all 0.5s ease"}} id="Navs" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="logo">
                    <img src={logo} style={{maxWidth : '80px'}}/>
                </div>
                <ul id="navList" className="nav navbar-nav">
                  <li id="navItem"><Link style={{color:this.state.color}}  activeClass="active"  id="navItem" className="Home" to="Home" spy={true} smooth={true} duration={500} >Home</Link></li>
                  <li id="navItem"><Link style={{color:this.state.color}}  activeClass="active"  id="navItem" className="Counter" to="Counter" spy={true} smooth={true} duration={500}>About</Link></li>
                  <li id="navItem"><Link style={{color:this.state.color}}  activeClass="active"  id="navItem" className="Services" to="Services" spy={true} smooth={true} duration={500}>Services</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          
          <div className="burger-container">
            <div className="burger" onClick={this.showDrawer}>
              <div className="burger-line"/>
              <div className="burger-line"/>
              <div className="burger-line"/>
            </div>
          </div>

          
          <Drawer
            title={
              <div className="logo">
                <img  src={logo2}/>
              </div>
            }
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}
           
          >
       
           <nav  id="NavsMobile"   className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul id="navList" className="nav navbar-nav">
                  <li id="navItem-mobile">
                    <Link  activeClass="active" style={{color:"#000"}}  id="navItem-mobile" className="Home" to="Home" spy={true} smooth={true} duration={500} >
                      <HomeOutlined style={{ marginRight:"10px"}} />   Home
                    </Link>
                  </li>
                  <li id="navItem-mobile">
                    <Link activeClass="active"  style={{color:"#000"}} id="navItem-mobile" className="Counter" to="Counter" spy={true} smooth={true} duration={500}>
                      <InfoCircleOutlined  style={{ marginRight:"10px"}}/>About
                    </Link>
                  </li>

                  <li id="navItem-mobile">
                    <Link activeClass="active"  style={{color:"#000"}} id="navItem-mobile" className="Services" to="Services" spy={true} smooth={true} duration={500}>
                      <ToolOutlined  style={{ marginRight:"10px"}}/>Services
                    </Link>
                  </li>
               </ul>
              </div>
            </div>
          </nav>
          </Drawer>


          <Element name="Home" className="element" >
            <Home id="#Home"/>
          </Element>

          <Element name="Counter" className="element">
            <Counter  id="#Counter"/>
          </Element>
          <Element name="Services" className="element">
            <Services  id="#Services"/>
          </Element>
          {/* <Element  name="GetStarted" className="element">
            <GetStarted id="#GetStarted"/> 
          </Element> */}
          <Element  name="Portfolio" className="element">
            <Portfolio id="#Portfolio"/> 
          </Element>
          <Element  name="Client" className="element">
            <Client id="#Client"/> 
          </Element>
          
          <Footer/>
        </div>
     );
  }
}
 
export default App;