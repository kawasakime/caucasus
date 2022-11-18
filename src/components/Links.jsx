import React from 'react';
import { links } from '../data/conferences';

const Links = () => {
  return (
    <div className='links'>
      {links.map((item, i) => <a key={i} href='/'>{item.title}</a>)}
    </div>
  );
};

export default Links;