import React, { useState } from 'react';
import Button from './Button';
import '@fortawesome/fontawesome-free/css/all.css';
const ImageSlider = (props) => {
    console.log(props.options);
  const [photos, setPhotos] = useState(props.options);
  const [slideCount, setSlideCount] = useState(0);
  function goToPrevSlide() {
    setSlideCount(slideCount - 1);
  }
  function goToNextSlide() {
    console.log('called');
    setSlideCount(slideCount + 1);
  }
  return (
    <>
      
        <div className="row">
          <div className="col-sm-12" style={{ position: 'relative'}}>
            {slideCount !== 0 ? (
              <Button handleClick={goToPrevSlide} type="secondary" style={{position: 'absolute', top: '70px',
  right: '15px'}}>
              <i class="fas fa-chevron-left fa-lg" />
              </Button>
            ) : (
              ''
            )}
            
            {photos.map((option, index) => {
              return (
                <>
                  {photos.indexOf(option) === slideCount ? (
                    <div className="col-sm-12">
                      <img src={option.imageSrc} alt={index} />
                    </div>
                   
                  ) : (
                    ''
                  )}
                </>
              );
            })}
            
              <i class="fas fa-circle fa-lg" />
           
            
            {slideCount !== photos.length - 1 ? (
              <Button handleClick={goToNextSlide} type="primary">
              <i class="fas fa-chevron-right fa-lg" />
              </Button>
            ) : (
              ''
            )}
            </div>
           
          </div>
        
     
    </>
  );
};

export default ImageSlider;