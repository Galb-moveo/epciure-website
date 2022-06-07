const ChefOfWeek = (props: any) => {
  return (
    <div className='chef'>
      <h3 className='chef__title'>Chef of the week:</h3>
      <div className='chef__intro'>
        <div className='chef__image'>
        <img className='chef__image'
          src={props.chef.image}
          alt='chef'
          style={{ width: '478px' }}
        />
         <div className='hide'>{props.chef.name}</div>
         </div>
       
        <p className='chef__description'>{props.chef.description}</p>
      </div>
      <h4 className='chef__res'>{props.chef.title} Restaurants</h4>
      <ul className='chef__res-wrapper'>
        {props.chef.restaurants.map((res: any) => (
          <li key={res.name}>
            <div className='chef__res-item'>
              <img className='chef__res-image' src={res.image} alt='dish' />
              <p className='chef__res-name'>{res.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChefOfWeek;
