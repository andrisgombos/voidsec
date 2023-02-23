import './App.css';
import about_us from './assets/About_us.svg'
import icon1 from './assets/01.svg'
import icon2 from './assets/02.svg'
import icon3 from './assets/03.svg'
import icon4 from './assets/04.svg'
import icon5 from './assets/05.svg'
import icon6 from './assets/06.svg'
import icon7 from './assets/07.svg'
import bg1 from './assets/VS_bg_1.png'
import bg2 from './assets/VS_bg_2.png'
import header from './assets/Header_logo.svg'
import pg from "./assets/polygon.svg"

function App() {
  return (
  <>
    <div className="vs_background1">
      <img className="vs_bg1" src={bg1}></img>
      <img className="vs_bg2" src={bg2}></img>
      <header className="vs_header">
          <div className="vs_header_left">
            <img className="header_logo" src={header}/>
          </div>
          <div className="vs_header_right">
            <nav className="vs_header_right">
              <a href='#vs_about'>About_us<img className="polygon"src={pg}/></a>
              <a href='#vs_services'>Services<img className="polygon"src={pg}/></a>
              <a href='#vs_contact'>Contact<img className="polygon"src={pg}/></a>
            </nav>
          </div>
      </header>
      <div className="vs_upper1">
      <h3>Filling the <b>void</b> in your<br/> cybersecurity defences.</h3>
      <p className="vs_upper1_p">We help you and your company to overcome the obstacles presented by the emerging cyber threats. We provide an understanding of the possible security issues and their effects on the tested environment. Helping to find a common ground where the identified risks can be mitigated most suitable for the firm.</p>
      </div>
      <div className="vs_upper2">
        <p>If your company's cyber defenses are not up to par, it may be at risk of experiencing a data breach or other cyber-attacks that could have serious consequences, such as financial loss, damage to the company's reputation, and loss of customer trust.</p>
      </div>
    </div>
    <div className="vs_background2">
      <div className="vs_half" />
      <div className="vs_half_blk" />
      {/* <img className="vs_bg2" src={bg2}></img> */}
      <div id='vs_about' className="vs_about">
        <h3>About Us</h3>
        <p>We, VoidSec, as a security consulting firm believe that security should be the fundamental of any IT related projects, organizations, etc. Making the internet a safe space is a responsibility of all participants.</p>
        <p>Our focus is to provide high-quality services at a competitive price. Our team has many years of experience in working in the field of cyber security.</p>
        <p>The founders of VoidSec previously worked as colleagues at a consulting firm and set out to create a new company fueled by young talent, and with a goal providing something that was lacking from the field of cyber security: honesty and great value for price.</p>
        <img className="vs_about_img" src={about_us}></img>
      </div>
      <div id='vs_services' className="vs_services">
        <h3>Services</h3>
        <div className="vs_gridcontainer">
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon1}></img>
            <div className="vs_gridbox">
              <h4>External Infrastructure Penetration Test</h4>
              <p>For uncovering the internet facing vulnerabilities. Black or Grey box approach.</p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon2}></img>
            <div className="vs_gridbox">
              <h4>Internal Infrastructure Penetration Test</h4>
              <p>For uncovering vulnerabilities, potential privilege escalation vectors in Active Directory, testing attack methods - reserved for Red Teaming.</p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon3}></img>
            <div className="vs_gridbox">
              <h4>Web Application Penetration</h4>
              <p>For going in depth with internal or external web applications, in either White or Grey box approach.</p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon4}></img>
            <div className="vs_gridbox">
              <h4>Mobile Application Penetration Test for Android and iOS</h4>
              <p>Uncovering the user and company facing cyber risks.</p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon5}></img>
            <div className="vs_gridbox">
              <h4>Red Team Exercises</h4>
              <p>Normally starting with phishing or assumed breached scenario, but flexibility is provided regarding the starting point and end goal as well as the simulated threat level as needed.</p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon6}></img>
            <div className="vs_gridbox">
              <h4>Binary Application Penetration Test</h4>
              <p>For finding vulnerabilities in binary applications &#123;&#123;including that RCE/LPE.&#125;&#125; </p>
            </div>
          </div>
          <div className="vs_gridobject">
            <img className="vs_gridicon" src={icon7}></img>
            <div className="vs_gridbox">
              <h4>Purple Team Exercises</h4>
              <p>For testing the defenses with the help of the defenders.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='vs_contact' className="vs_contact">
        <h3 style={{marginBottom: 0}}>Contact</h3>
        <p>For inquiry or consultation please reach us at <b>info@voidsec.org</b></p>
        <img className="contact_logo" src={header}/>
      </div>
    </div>
  </>
  );
}

export default App;
