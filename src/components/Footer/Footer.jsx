import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5"><a style={{"text-decoration": "none", "color": "white"}} href="/about" rel="">About Me</a></Typography>
        <Typography variant="h4">
          Hey, my name is Karan Siddiqui. I am a Full-Stack Developer.
        </Typography>
        <Typography variant="h4">
          karansiddiq@gmail.com
        </Typography>
        <Typography variant="h4">
          +91-7626941231
        </Typography>

      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Karansiddiqui" target="black">
          <BsGithub />
        </a>
  
        <a href="https://www.linkedin.com/in/karan-siddiqui/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;