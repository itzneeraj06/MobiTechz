import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './CSS/banner.css'

// Importing local images
import img1 from '../asset/banner1.webp';
import img2 from '../asset/banner2.webp';
import img3 from '../asset/banner3.webp';
import img4 from '../asset/banner4.webp';
import img5 from '../asset/banner5.webp';
import img6 from '../asset/banner6.webp';
import img7 from '../asset/banner7.webp';
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '200px',
}

const slideImages = [
  {
    url: img5,
    caption: 'Slide 2'
  },
  {
    url: img6,
    caption: 'Slide 3'
  },
  {
    url: img7,
    caption: 'Slide 1'
  },
  {
    url: img1,
    caption: 'Slide 2'
  },

  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
  },
  {
    url: img4,
    caption: 'Slide 1'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className='imgbanner' style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <img src={slideImage.url} alt={slideImage.caption} style={{ display: 'none' }} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slideshow;