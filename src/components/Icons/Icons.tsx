import veg from '../../assets/images/veg.svg'
import vej from '../../assets/images/vej.svg'
import spicy from '../../assets/images/spicy.svg'

const Icons = () => {
  return (
    <section className='icons'>
        <h3 className='icons__title_mobile'>THE MEANING OF OUR ICONS:</h3>
        <h3 className='icons__title'>THE MEANING OF OUR ICONS:</h3>
        <ul className='icons__wrapper'>
            <li data-aos='slide-right'>
            <img src={veg} alt="veg" />
            <p className='icons__name'>Spicy</p>
        </li>
        <li>
            <img src={vej} alt="vej" />
            <p className='icons__name'>Vegitarian</p>
        </li>
        <li data-aos='slide-left'>
            <img src={spicy} alt="spicy" />
            <p className='icons__name'>Vegan</p>
        </li>
        </ul>
    </section>
  )
}

export default Icons