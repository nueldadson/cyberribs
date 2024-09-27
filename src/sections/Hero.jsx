import React, {useState, useEffect } from 'react';
import { hero, hero1, hero2, hero3, hero4 } from '../assets/images/index';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';  // Import default styles
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'; // Cube animation styles

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current slide

    const sliderContent = [
      { image: hero1, heading: 'CyberRibs', writeup: 'Augmented &<br/>Virtual Reality' },
      { image: hero, heading: 'CyberRibs', writeup: 'We always<br/>aim for the<br/>best.' },
      { image: hero2, heading: 'CyberRibs', writeup: 'Robotics<br/>Programming' },
      { image: hero3, heading: 'CyberRibs', writeup: 'Data Center<br/>& Cloud' },
      { image: hero4, heading: 'CyberRibs', writeup: 'Fintech<br/>Solutions' },
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
    <div className='px-8 max-sm:p-4 bg flex rounded-[30px] min-h-[430px]' style={{ height: 'calc(100vh - 80px)' }} >
      <AwesomeSlider
        animation="cubeAnimation"
        selected={currentIndex}
        buttons={false}
        mobileTouch={false}
        className='w-full rounded-[30px] overflow-hidden bg-orange-300 min-h-[430px]'
        style={{ height: 'calc(100vh - 80px)' }}
        infinite
      >
        {sliderContent.map((slide, index) => (
          <div key={index} className='w-full rounded-[30px] px-12 max-sm:px-4 h-full'
            style={{ minHeight: '430px', height: 'calc(100vh - 80px)', backgroundImage: `url(${slide.image})`, backgroundPosition: 'top center', backgroundSize: 'cover' }}
          >
            <div className='flex-col gap-2 mt-28 herotxtH max-sm:mt-[150px]'>
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
