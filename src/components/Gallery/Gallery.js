import React from 'react';
import s from './Gallery.module.css';
import noimage from '../../images/noimage.jpg';

function Gallery({ poster, title, name }) {
  return (
    <>
      <img
        className={s.poster}
        src={poster ? `https://www.themoviedb.org/t/p/w500${poster}` : noimage}
        alt={title}
      />
      <h3 className={s.text}>{title ? title : name}</h3>
    </>
  );
}

export default Gallery;
