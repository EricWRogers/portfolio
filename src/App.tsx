import profilePic from '/yourgeekeric.png'
import StopTheSlimesPic from '/StopTheSlime.png'
import FrankensteinsHitmanPic from '/FrankensteinsHitman.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import Card from './Card.tsx';



import './App.css'

function App() {

  return (
    <>
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
      </div>
      <h1>Eric W. Rogers</h1>
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
