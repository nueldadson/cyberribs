import React, {useState, useEffect } from 'react';
import { hero } from '../assets/images/index';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';  // Import default styles
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'; // Cube animation styles

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current slide

    const sliderContent = [
      { image: hero, heading: 'Quality Matters', writeup: 'Experience top-notch service.' },
      { image: hero, heading: 'Cyberribs', writeup: 'We always<br/>aim for the<br/>best.' },
    { image: hero, heading: 'Innovation', writeup: 'Pioneering new ideas.' },
  ];

    useEffect(() => {
      const initialTransition = setTimeout(() => {
      setCurrentIndex(1); // Move to the second slide after 2 seconds
    }, 50); // Adjust this value as needed
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length); // Loop through slides
      }, 5000);

      return () => {
        clearInterval(interval); // Clear interval on unmount
        clearTimeout(initialTransition); // Clear initial transition timeout
      }
    }, [sliderContent.length]);

  return (
    <div className='px-8 max-sm:p-4'>
      <AwesomeSlider
        animation="cubeAnimation"
        selected={currentIndex}
        buttons={false}
        className='w-full rounded-[30px] overflow-hidden bg-white'
        style={{ height: 'calc(100vh - 80px)' }}
        infinite
      >
        {sliderContent.map((slide, index) => (
          <div key={index} className='w-full rounded-[30px] overflow-hidden px-12 max-sm:px-8 flex justify-center flex-col min-h-[434px]'
            style={{ height: 'calc(100vh - 80px)', backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
          >
            <div className='-mt-36 flex flex-col gap-2'>
              <span className='text-[#c084fc] font-extrabold tracking-widest'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                {slide.heading}
              </span>
              <p className='text-white text-[54px] max-[500px]:text-[46px] max-[363px]:text-[34px] leading-none font-semibold -mt-1'
                style={{ textShadow: '4px 4px 4px black' }}
                dangerouslySetInnerHTML={{ __html: slide.writeup }}
              />
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  )
}

export default Hero;
