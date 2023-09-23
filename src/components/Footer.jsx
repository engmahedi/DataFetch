import React from 'react';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <div >
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
       
        <div className='container mx-auto flex justify-between px-32 py-10'>
        <p>Copyright © 2023 - All right reserved</p>
          <SocialIcon />
          </div>
          
        
        </footer>
    </div>
  );
};

export default Footer;