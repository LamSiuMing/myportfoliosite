import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="mailto:contactme@tijan.dev" className="contact-link">Hire Me!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! ✨
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Lam Siu Ming</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>passionate <span className="name">Full Stack Developer | Blockchain Developer</span> from Hong KongResults-driven Full-Stack Developer with expertise in Blockchain Technology and extensive experience in developing web applications using TypeScript. Proficient in multiple programing languages such as JavaScript, Python, Solidity, C++, and Next.js framework. A collaborative team player committed to delivering high-quality software products that exceed expectations</Text>
          </div>
          <div className="icons">
            <a href="https://github.com/audreybass140" target="_blank">
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Lam Siu Ming" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;