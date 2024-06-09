import React from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SkillSlider from '../SkillSlider/SkillSlider';

import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function Home() {
  

  const handleDownload = () => {
    const url = 'https://drive.google.com/file/d/12aLZE82rrbQVtsQNIkhgWvtxPUksRy3X/view'; // replace with your file URL
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ZIAD-CV.pdf'); // replace with your file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




  
  
  const whoIam = useRef(null);
  const education= useRef(null);
  const skills = useRef(null);
  const experience = useRef(null);
  const serve = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = whoIam.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const eduTop = education.current.getBoundingClientRect().top;
      const skillTop = skills.current.getBoundingClientRect().top;
      const exTop = experience.current.getBoundingClientRect().top;
      const serveTop = serve.current.getBoundingClientRect().top;





      if (top < windowHeight * 0.5) {
        $('.whorow').removeClass("opacity-0")
        $('.whorow').addClass("animate__animated");
    $('.whorow').addClass("animate__fadeInLeft");
      }
      if(eduTop < windowHeight * 0.5){
        $('.edu').removeClass("opacity-0")
      $('.edu').addClass("animate__animated");
  $('.edu').addClass("animate__fadeInRight");
      }
      if(skillTop < windowHeight * 0.5){
        $('.skill').removeClass("opacity-0")
      $('.skill').addClass("animate__animated");
  $('.skill').addClass("animate__fadeInUp");
      }
      if(exTop < windowHeight * 0.5){
        $('.ex').removeClass("opacity-0")
      $('.ex').addClass("animate__animated");
  $('.ex').addClass("animate__fadeInLeft");
      }
      if(serveTop < windowHeight * 0.5){
        $('.serve').removeClass("opacity-0")
      $('.serve').addClass("animate__animated");
  $('.serve').addClass("animate__fadeInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return <>
    {/*Hero section*/}
    <div className='container-fluid d-flex align-items-center hero vh-100 overflow-hidden' id='Home'>
    <div  className='homeicons align-self-end p-4'>
          <Link to={'https://www.linkedin.com/in/ziad-hesham-354768237'}><i className="fa-brands icons hicon fa-linkedin me-4 ms-2 fa-3x"></i></Link>
          <Link to={'https://github.com/ZiadHesham20/ZiadHesham20.git'}><i className="fa-brands icons hicon fa-github me-4 fa-3x"></i></Link>
        </div>
     
      <div className='row w-100'>
        <div className='col-lg-3 col-md-4 col-6 colofimage2'>
          <div>
            <img src="./portofilio(2).jpg" className='w-100 rounded-circle' alt="portofolio" />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 mt-5 ps-lg-0 ps-5 ms-auto text-center'>
          <div>
            <h1 className='display-1  ziad2 finalcolor thirdcolor bg-transparent'>ZIAD HESHAM</h1>
            <h2 className='mb-4 finalcolor bg-transparent'><TypewriterComponent
              options={{
                strings: ['Front-End Developer', 'Freelancer'],
                autoStart: true,
                loop: true,
              }}

            /></h2>
            <div className='d-flex justify-content-center'>
            
             <button className='btn btn-outline-secondary  rounded-5 d-flex justify-content-center align-items-center' onClick={handleDownload}>Preview CV</button>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div id='thechange' className='my-5 d-flex align-items-center justify-content-center'>
      <div className='dot'></div>
      <div className='dot mx-4'></div>
      <div className='divider rounded-5'></div>
    </div>
    {/*who I am section*/}
    <div className='container my-5 overflow-hidden' id='About'>
      <div ref={whoIam} className="row flex-row-reverse">
        <div className='col-lg-6'>
          <div>
            <img src="./undraw_hello_re_3evm 1.svg" className='w-100' alt="greeting" />
          </div>
        </div>
        <div   className='col-lg-6 d-flex align-items-center'>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Who I am</h2>
            <p className='opacity-0 whorow  thirdcolor bg-transparent fs-5'>My name is Ziad Hesham and I'm 21 years old.I'm computer science student and Front-End developer.I earned a certificate for completing Front-End course at Route and I'm always looking for new ways to learn and grow.</p>
          </div>
        </div>
      </div>

    </div>
    {/*Education section*/}
    <div className='container p-4 overflow-hidden'>
      <div ref={education} className='row  align-items-center'>
        <div className='col-6  d-lg-flex d-none justify-content-start align-items-center'>
          <div>
            <img  src="./undraw_certificate_re_yadi2.svg" className='w-100' alt="" />
          </div>
        </div>
        <div  className=' col-lg-6 '>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Education</h2>
            <div className='row gy-3 edu opacity-0'>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div>
                  <p className='fw-bold thirdcolor bg-transparent'>2017-2019</p>
                  <div className='d-flex align-items-center'>
                    <i className="fa-solid diffwhite fa-graduation-cap fa-2x me-2  maincoloronly rounded-circle p-3"></i>
                    <h4 className='thirdcolor bg-transparent'>High school</h4>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div>
                  <p className='fw-bold thirdcolor bg-transparent'>2020-2024</p>
                  <div className='d-flex align-items-center'>
                    <i className="fa-solid fa-graduation-cap diffwhite fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                    <div>
                      <h4 className='thirdcolor bg-transparent'>Bachelor of Computer Science</h4>
                      <p className='thirdcolor bg-transparent'>Higher Technological Institute</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*SKILLS section*/}
    <div className='container my-5 overflow-hidden'>
      <div ref={skills} className='text-center skill opacity-0'>
        <h2 className=' display-4 fw-bold my-5 bg-transparent thirdcolor'>Skills</h2>
       <SkillSlider/>
      </div>
    </div>
    {/*Experience section*/}
    <div className='container p-4'>
      <div ref={experience} className='row align-items-center'>
        <div className='col-lg-6 '>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Experience</h2>
            <div className='row gy-3 ex opacity-0'>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite maincoloronly fa-briefcase fa-2x me-2 rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Front-End Developer</h4>
                    <p className='thirdcolor bg-transparent'>Freelancer</p>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-4 ps-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite fa-briefcase fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Certificate For Completing Front-End Course</h4>
                    <p className='thirdcolor bg-transparent'>Route</p>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-4 ps-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite fa-briefcase fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Certificate For Completing Back-End Course</h4>
                    <p className='thirdcolor bg-transparent'>Senior Steps</p>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-4 ps-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite fa-briefcase fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Certificate For Data Challenger Track</h4>
                    <p className='thirdcolor bg-transparent'>Udacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 d-none d-lg-flex justify-content-start align-items-center'>
          <div>
            <img src="./undraw_programming_re_kg9v.svg" className='w-100' alt="experience" />
          </div>
        </div>
      </div>
    </div>
    {/*Projects section*/}
    <div className='container my-5 p-4' id='Projects'>
      <Projects/>
    </div>
    {/*Services section*/}
    <div className='container my-5' id='Services'>
      <div ref={serve} className='text-center'>
        <h2 className=' display-4 fw-bold thirdcolor bg-transparent'>Services</h2>
        <div className='row serve opacity-0 gy-5 p-5 justify-content-around'>
          <div className="col-md-3 p-3 rounded-4 ">
            <img src="./code.svg" className='w-75' alt="Responsive" />
            <h3 className='fw-bold text-center mt-4'>Web Application Development</h3>
          </div>
          <div className="col-md-3 p-3 rounded-4">
            <img src="./Responsive.svg" className='w-75' alt="Responsive" />
            <h3 className='fw-bold text-center mt-4'>Web Responsive</h3>
          </div>
        </div>
      </div>
    </div>
    {/*Footer*/}
    <div className='container-fluid maincolor p-5 '>
      <Footer/>
    </div>
    {/*Back way up button */}

    <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: 100, right: 16 }}
        icon={<SpeedDialIcon icon={<SupportAgentIcon/>} openIcon={<CloseIcon/>} />}
        FabProps={{
          sx: {
            position:"relative",
            bgcolor: 'white',
            '&:hover': {
              bgcolor: 'white',
            },
            '::before': {
              position: 'absolute',
              content: '""',
              bottom: '-7px',
              top: '-7px',
              left: '-7px',
              right: '-7px',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              border: '3px solid #103D80',
              margin:' 0px',
              opacity: '0.8',
              transformOrigin: 'center',
              animation: 'pulseBorder 2s infinite'
          },
            color: '#103D80',
            border: 'solid 3px #103D80',
          }
        }}
      >
        
          <SpeedDialAction
            key='Phone'
            tooltipOpen
            icon={<CallIcon/>}
            tooltipTitle='Phone'
            FabProps={{
              sx: {
                color:'#103D80',
              }
            }}
            onClick={()=>{
              window.location.href = 'tel:+201556491655'
            }}
          />
          <SpeedDialAction
            key='LinkedIn'
            tooltipOpen
            icon={<LinkedInIcon/>}
            tooltipTitle='LinkedIn'
            FabProps={{
              sx: {
                color:'#103D80',
              }
            }}
            onClick={()=>{
              window.location.href = 'https://www.linkedin.com/in/ziad-hesham-354768237'
            }}
          />
          <SpeedDialAction
            key='Whatsapp'
            tooltipOpen
            icon={<WhatsAppIcon/>}
            tooltipTitle='Whatsapp'
            FabProps={{
              sx: {
                color:'#103D80',
              }
            }}
            onClick={()=>{
              window.location.href = 'https://api.whatsapp.com/send/?phone=201126553297&text&type=phone_number&app_absent=0'
            }}
          />
          <SpeedDialAction
            key='Github'
            tooltipOpen
            icon={<GitHubIcon/>}
            tooltipTitle='Github'
            FabProps={{
              sx: {
                color:'#103D80',
              }
            }}
            onClick={()=>{
              window.location.href = 'https://github.com/ZiadHesham20/ZiadHesham20.git'
            }}
          />
      </SpeedDial>
      

      
    <a href='#Home' className='toupbutton opacity-0'>
    <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: 20, right: 16 }}
        icon={<ArrowUpwardIcon />}
        FabProps={{
          sx: {
            bgcolor: '#103D80',
            '&:hover': {
              bgcolor: '#103D80',
            },
            color:'white',
            
          }
        }}
      ></SpeedDial>

    </a>
     </>
}
