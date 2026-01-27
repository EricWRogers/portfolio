import profilePic from '/yourgeekeric.webp'
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Card from './Card.tsx';
import myVideo from '/FHTrialer.mp4';
import { useEffect } from 'react';



import './App.css'

function App() {
  useEffect(() => {
    const htmlPrefetch = [
      '/project-rusty-security.html',
      '/stop-the-slimes.html',
      '/canis-game-engine.html',
      '/super-pup-studio-unity-utilities.html',
      '/drill-dash.html',
      '/gob-smax-galaxy.html',
      '/otrio.html',
      '/garden-of-doom.html',
      '/flood-runner.html',
      '/frankenstein-hitman.html',
      '/crown-of-screws.html',
    ];

    const runPrefetch = () => {
      htmlPrefetch.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'document';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runPrefetch);
    } else {
      setTimeout(runPrefetch, 200);
    }
  }, []);

  return (
    <>
      <div className='nav-wrapper'>
        <div className='nav-social'>
          <a href="https://www.youtube.com/@yourgeekeric" target="_blank">
            <IoLogoYoutube size={48} className='social' />
          </a>
          <a href='https://x.com/yourgeekeric' target="_blank">
            <FaSquareXTwitter size={48} className='social' />
          </a>
          <a href='https://github.com/EricWRogers' target="_blank">
            <FaGithub size={48} className='social' />
          </a>
          <a href='https://store.steampowered.com/search/?developer=SuperPupStudio' target="_blank">
            <FaSteam size={48} className='social' />
          </a>
          <a href='https://www.linkedin.com/in/eric-rogers-b12874163/'>
            <FaLinkedin size={48} className='social' />
          </a>
        </div>
      </div>
      <div className='intro-wrapper'>
        <div className='profile-wrapper'>
          <img src={profilePic} className="profile" alt="yourgeekeric logo" />
          <h1 style={{ margin: '0', padding: '0' }}>Eric W. Rogers</h1>
          <h2 style={{ padding: '0' }}>Software Developer</h2>
        </div>
        <video width="640" height="360" controls autoPlay loop muted className='videoPlayer'>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <hr />
      <h2>Current Projects</h2>
      <div className='card-wrapper'>
        <div className='card-grid'>
          <Card
            imageSrc="/Portfolio/project-rusty-security.webp"
            link="#"
            gameTitle="Rusty Security Camera"
            iframeSrc="/project-rusty-security.html"
            platformMode='light'
          />
          <Card
            imageSrc="/Portfolio/project-stop-the-slimes.webp"
            link="https://store.steampowered.com/app/2659530/Stop_The_Slimes/"
            gameTitle='Stop The Slimes'
            iframeSrc="/stop-the-slimes.html"
            platform="steam"
            platformMode='dark'
          />
          <Card
            imageSrc="/Portfolio/project-canis-engine.webp"
            link="https://github.com/EricWRogers/canis"
            gameTitle='Canis Game Engine'
            iframeSrc="/canis-game-engine.html"
            platform="github"
            platformMode='light'
          />
        </div>
      </div>
      <hr />
      <h2>Projects</h2>
      <div className='card-wrapper'>
        <div className='card-grid'>
          <Card
            imageSrc="/Portfolio/project-super-pup-utilities.webp"
            link="https://github.com/EricWRogers/SPSUnityUtilities"
            gameTitle='SuperPupStudio Unity Utilities'
            iframeSrc="/super-pup-studio-unity-utilities.html"
            platform="github"
            platformMode='light'
          />
          <Card
            imageSrc="/Portfolio/project-drill-dash.webp"
            link="https://store.steampowered.com/app/1064110/Drill_Dash/"
            gameTitle="Drill Dash"
            iframeSrc="/drill-dash.html"
            platform="steam"
            platformMode='dark'
          />
          <Card
            imageSrc="Portfolio/project-gob.webp"
            link="#"
            gameTitle="Gob Smax Galaxy"
            iframeSrc="/gob-smax-galaxy.html"
            platform="mobile"
            platformMode='light'
          />
          <Card
            imageSrc="Portfolio/project-otrio.webp"
            link="#"
            gameTitle="Otrio"
            iframeSrc="/otrio.html"
            platform="mobile"
            platformMode='dark'
          />
          <Card
            imageSrc="Portfolio/project-garden-of-doom.webp"
            link="https://v3.globalgamejam.org/2023/games/garden-doom-8"
            gameTitle="Garden of Doom"
            iframeSrc="/garden-of-doom.html"
            platformMode='light'
          />
          <Card
            imageSrc="Portfolio/project-flood-runner.webp"
            link="#"
            gameTitle="Flood Runner"
            iframeSrc="/flood-runner.html"
            platformMode='light'
          />
          <Card
            imageSrc="/Portfolio/project-frankenstein-hitman.webp"
            link="https://yourgeekeric.itch.io/frankensteins-hitman"
            gameTitle="Frankenstein's Hitman"
            iframeSrc="/frankenstein-hitman.html"
            platform="itch"
            platformMode='light'
          />
          <Card
            imageSrc="/Portfolio/project-crown-of-screws.webp"
            link="https://yourgeekeric.itch.io/crown-of-screws"
            gameTitle="Crown of Screws"
            iframeSrc="/crown-of-screws.html"
            platform="itch"
            platformMode='light'
          />
        </div>
      </div>
      <p className="read-the-docs">
        YourGeekEric, Copyright © 2025
      </p>
    </>
  )
}

/* <Card
            imageSrc="/Portfolio/project-bath-battle.webp"
            link="https://globalgamejam.org/games/2025/bath-battle-3"
            gameTitle="Bath Battle"
            iframeSrc=""
            platform="itch"
            platformMode='light'
          />
          <Card
            imageSrc="Portfolio/project-flood-runner.webp"
            link="#"
            gameTitle="Flood Runner"
            iframeSrc="/flood-runner.html"
            platform="itch"
            platformMode='light'
          />
          <Card
            imageSrc="Portfolio/project-lw.webp"
            link="#"
            gameTitle="Lightning Wizard"
            iframeSrc="/lightning-wizard.html"
            platform="itch"
            platformMode='light'
          /> */

export default App
