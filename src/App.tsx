import profilePic from '/yourgeekeric.png'
import StopTheSlimesPic from '/StopTheSlime.png'
import FrankensteinsHitmanPic from '/FrankensteinsHitman.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Card from './Card.tsx';
import myVideo from '/FHTrialer.mp4';



import './App.css'

function App() {

  return (
    <>
      <h1>Eric W. Rogers</h1>
      <div>
      <img src={profilePic} className="profile" alt="yourgeekeric logo" />
        <br />
        <a href="https://www.youtube.com/@yourgeekeric" target="_blank">
          <IoLogoYoutube size={48} className='social'/>
        </a>
        <a href='https://x.com/yourgeekeric' target="_blank">
          <FaSquareXTwitter size={48} className='social'/>
        </a>
        <a href='https://github.com/EricWRogers' target="_blank">
          <FaGithub size={48} className='social'/>
        </a>
        <a href='https://store.steampowered.com/search/?developer=SuperPupStudio' target="_blank">
          <FaSteam size={48} className='social'/>
        </a>
        <a href='https://www.linkedin.com/in/eric-rogers-b12874163/'>
          <FaLinkedin size={48} className='social'/>
        </a>
      </div>
      <video width="640" height="360" controls autoPlay loop muted className='videoPlayer'>
        <source src={myVideo} type="video/mp4" className='videoPlayer'/>
        Your browser does not support the video tag.
      </video>
      <hr/>
      <h2>Projects</h2>
      <Card
        imageSrc={StopTheSlimesPic}
        link="https://store.steampowered.com/app/2659530/Stop_The_Slimes/"
        altText="Stop The Slimes"
        platform="steam"
        platformMode='dark'
      />
      <Card
        imageSrc={FrankensteinsHitmanPic}
        link="https://yourgeekeric.itch.io/frankensteins-hitman"
        altText="Frankenstein's Hitman"
        platform="itch"
        platformMode='light'
      />
      <p className="read-the-docs">
        YourGeekEric, Copyright © 2025
      </p>
    </>
  )
}

export default App
