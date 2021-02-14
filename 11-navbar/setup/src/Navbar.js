import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height + 15;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        {/* 
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        +                    LOGO and BUTTON                  +
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        */}
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* 
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        +                     ALL THE LINKS                   +
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((eachLinkInDataArray) => {
              const { id, url, text } = eachLinkInDataArray;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        +                     ALL THE ICONS                   +
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        */}
        <ul className='social-icons'>
          {social.map((eachSocialInDataArray) => {
            const { id, url, icon } = eachSocialInDataArray;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
