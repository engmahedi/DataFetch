

import React from 'react';
import { BiLogoFacebook,BiLogoTwitter,BiLogoLinkedin,BiLogoInstagram } from 'react-icons/bi';

const SocialIcon = () => {

  const socialLink = [
    {
      id: 1,
      icon:BiLogoFacebook
    },
    {
      id: 2,
      icon:BiLogoTwitter
    },
    {
      id: 3,
      icon:BiLogoLinkedin
    },
    {
      id: 4,
      icon:BiLogoInstagram
    }
  ];

  return (
    <div>
      <div className="flex gap-1 justify-center">
        {
          socialLink.map((u) => <div key={u.id} className="border border-slate-300 hover:bg-slate-800 text-2xl hover:text-white w-8 h-8 flex items-center justify-center transition">
            <a href="#"><u.icon /></a>
          </div>)
        }
      </div>
      
    </div>
  );
};

export default SocialIcon;