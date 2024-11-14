import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

// Import social data again
import { social } from '../data';

import Logo from '../assets/img/My project-1.png';

function Footer() {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* socials */}
          <div className="flex flex-wrap justify-center space-x-6 items-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* copyright */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
