import React, { useState, useEffect } from 'react';
import propertiesdata from '../src/PropertiesData';
import '../css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/style.css';
import Card from '../src/components/Card';
import Button from '../src/components/Button';

const App = () => {
  const [data, setData] = useState(null);
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function goToPrevSlide() {
    const newIndex = [property.index - 1];
    setProperty(data[newIndex]);
    console.log(data, property);
  }
  function goToNextSlide() {
    const newIndex = [property.index + 1];
    setProperty(data[newIndex]);
    console.log(data, property, isLoading, property.index, data.length);
  }

  useEffect(() => {
    setIsLoading(true);

    const timeOut = setTimeout(() => {
      callback();
    }, 4000);

    function callback() {
      setData(propertiesdata);
      setProperty(propertiesdata[0]);
      setIsLoading(false);
      console.log(isLoading);
    }

    return () => {
      clearTimeout(timeOut);
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="container">
      <Button
        handleClick={goToNextSlide}
        disabled={
          !isLoading && property.index === data.length - 1 ? true : false
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
      <div>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div className={`${property.index} ? active: : deactive`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${property.index *
                  (100 / data.length)}%)`,
              }}
            >
              {data.map((property, index) => {
                return <Card property={property} key={property._id} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
