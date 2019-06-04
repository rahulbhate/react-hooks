const Card = ({ property, statePropertyIndex }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
    price,
  } = property;

  return (
    <div
      className={`cards ${
        statePropertyIndex === index ? 'active' : 'deactive'
      }`}
      id={`card-${index}`}
    >
      <img src={picture} alt={city} style={{ width: '100%' }} />
      <div>
        <ul>
          <li>
            <i class="fas fa-bed fa-sm" />
            {bedrooms}
          </li>
          <li>
            <i class="fas fa-home fa-sm" />
            {address}
          </li>
          <li>
            <i class="fas fa-restroom fa-sm" />
            {bathrooms}
          </li>
          <li>
            <i class="fas fa-car fa-sm" />
            {carSpaces}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
