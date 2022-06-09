import { AiOutlineClose } from 'react-icons/ai';
const SearchModal = (props: any) => {
  return (
    <div className='modal modal__search scale-in-right'>
      <h2 className='modal__search__title'>Search</h2>
      <button className='modal__search_button' type='button'>
        <AiOutlineClose
          style={{ width: '25px', height: '25px' }}
          onClick={props.onClose}
        />
      </button>
      <div className='hero__search_wrapper'>
          <button className='hero__button'></button>
          <input
            className='hero__input hero__modal_input'
            type='text'
            name=''
            placeholder='Search for restaurant cuisine, chef'
          />
        </div>
    </div>
  );
};

export default SearchModal;
