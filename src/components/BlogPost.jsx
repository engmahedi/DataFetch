

import React from 'react';
import SectionHeading from './SectionHeading';
import SinglePost from './SinglePost';
import Post1 from '../assets/img/post1.jpg';
import Post2 from '../assets/img/post2.jpg';
import Post3 from '../assets/img/post3.jpg';

const BlogPost = () => {

  const postData = [
    {
      id: 1,
      image:Post1,
      title: "Bitcoin and Altcoins.",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer ."
    },
    {
      id: 2,
      image:Post2,
      title: "Eight must read tips",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer ."
    },
    {
      id: 3,
      image:Post3,
      title: "Analysis for beginners.",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer ."
    },
  ]
  return (
    <div>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeading item={{title:"LATEST BLOG POST"}} />
        </div>
        <div className='flex justify-center gap-4 py-10'>
        {
        postData.map((u) => <SinglePost key={u.id} item={ u} />)
      }
        </div>
        
      </div >
      
      
    </div>
  );
};

export default BlogPost;