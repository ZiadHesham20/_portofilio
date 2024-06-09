import React from 'react'
import { Link } from 'react-router-dom'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

export default function Projects() {
    // array of object for the Projects
    const projectList = [
        //FaHtml5,FaCss3Alt, IoLogoJavascript
        {
          title: "Entertainment Theatre",
          link: "https://entertainment-theatre.netlify.app",
          img: "./movies.svg",
          alt: "Entertainment Theatre",
          description: "This website shows you the trending movies and the top rated movies of all time",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>, <IoLogoJavascript className='iconSize maincolor mx-1 bg-transparent'/> ,<FaReact className='iconSize maincolor mx-1 bg-transparent'/>]
        },
        {
          title: "KNM Travels",
          link: "https://knm-travels.com",
          img: "./Knm.svg",
          alt: "Games2Know",
          description: "KNM is company in Egypt which provide tour and trip management and Transportation service.",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>, <IoLogoJavascript className='iconSize maincolor mx-1 bg-transparent'/> ,<FaReact className='iconSize maincolor mx-1 bg-transparent'/>]
        },
        {
          title: "GPT Genius",
          link: "https://genuis-gpt.vercel.app/chat",
          img: "./gpt.svg",
          alt: "GPT Genius",
          description: "This is a chatbot website powered by the Eden AI API, designed to assist you with your trips.",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>, <IoLogoJavascript className='iconSize maincolor mx-1 bg-transparent'/> ,<RiNextjsFill className='iconSize maincolor mx-1 bg-transparent'/>]
        },
        {
          title: "Toxic Vampires",
          link: "https://toxic-vampires.netlify.app",
          img: "./art.svg",
          alt: "Toxic Vampire",
          description: "This website shows the artwork of Nodisope and Alioartworks.",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>, <IoLogoJavascript className='iconSize maincolor mx-1 bg-transparent'/> ,<FaReact className='iconSize maincolor mx-1 bg-transparent'/>]
        },
        {
          title: "H2 Group",
          link: "https://h2-group.netlify.app",
          img: "./h2g 1.svg",
          alt: "H2 Group",
          description: "H2 Group is a home service company which provide cleaning and residence and cooking services.",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>, <IoLogoJavascript className='iconSize maincolor mx-1 bg-transparent'/> ,<FaReact className='iconSize maincolor mx-1 bg-transparent'/>]
        },
        {
          title: "Tasty Food",
          link: "https://tasty-food-v1.netlify.app",
          img: "./tasty food.svg",
          alt: "tasty food",
          description: "This website about restaurant that serves a delicious food.",
          technologies: [<FaHtml5 className='iconSize maincolor mx-1 bg-transparent'/>,<FaCss3Alt className='iconSize maincolor mx-1 bg-transparent'/>,<FaReact className='iconSize maincolor mx-1 bg-transparent'/> ]
        }
      ];
  return <>
  <div >
        <h2 className=' display-4 fw-bold my-5 thirdcolor text-center bg-transparent'>Projects</h2>
        <div className="ag-offer-block">
          <div className="ag-format-container">
            <ul className="ag-offer_list">
            {projectList.map((elem,idx)=><li className="ag-offer_item" key={idx}>
                <Link to={elem.link} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src={elem.img} className={elem.title == 'KNM Travels'?'w-100 knmImage':'w-100'} alt={elem.alt}/>
                    </div>
                    <div className="ag-offer_title p-3">
                      <h5 className='text-center thirdcolor bg-transparent'>{elem.title}</h5>
                      {elem.technologies.map((elem,idx)=><span key={idx}>{elem}</span>)}
                      
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                     {elem.description}
                    </p>
                  </div>
                </Link>
              </li>  )}
            </ul>
          </div>
        </div>
      </div>
  </>
}
