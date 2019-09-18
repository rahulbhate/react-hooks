import React, { useState, useEffect } from 'react';
import PropertiesData from '../src/PropertiesData';
import sliderData from '../src/sliderImages'
import '../css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/style.css';
import Card from '../src/components/Card';
import Button from '../src/components/Button';
import ImageSlider from '../src/components/ImageSlider';

const App = () => {
  const [properties, setproperties] = useState(null);
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function goToPrevSlide() {
    const newIndex = [property.index - 1];
    setProperty(properties[newIndex]);
  }
  function goToNextSlide() {
    const newIndex = [property.index + 1];
    setProperty(properties[newIndex]);
  }

  useEffect(() => {
    setIsLoading(true);

    const timeOut = setTimeout(() => {
      callback();
    }, 4000);

    function callback() {
      setproperties(PropertiesData);
      setProperty(PropertiesData[0]);
      setIsLoading(false);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
    <div className="container">
      <Button
        handleClick={goToNextSlide}
        disabled={
          !isLoading && property.index === properties.length - 1 ? true : false
        }
        type="primary"
      >
        <i class="fas fa-chevron-right fa-lg" />
      </Button>
      <Button
        handleClick={goToPrevSlide}
        disabled={!isLoading && property.index === 0 ? true : false}
        type="secondary"
      >
        <i class="fas fa-chevron-left fa-lg" />
      </Button>
      <div style={{clear:'both'}}>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${property.index *
                  (100 / properties.length)}%)`,
              }}
            >
              {properties.map((property_, index) => {
                return (
                  <Card
                    property={property_}
                    statePropertyIndex={property.index}
                    key={property_._id}
                  />
                );
              })}
              
            </div>
            
          </div>
        )}
       
      </div>
    </div>
    <div className="jumbotron">
    <hr />
    </div>
   <ImageSlider options={sliderData} /> 
  
    </>
  );
};
export default App;
