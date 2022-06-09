import logo from '../../assets/images/about-logo.svg';
import ios from '../../assets/images/ios.svg';
import android from '../../assets/images/android.svg';

const AboutUs = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__wrapper'>
          <div>
            <h3 className='about__title'>About Us</h3>
            <div className='about__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                lacus vel justo fermentum bibendum no eu ipsum. Cras porta
                malesuada eros.
              </p>
            </div>
          </div>

          <div className='about__links'>
            <button className='about__link'>
              <img src={ios} alt='ios' />
            </button>
            <button className='about__link'>
              <img src={android} alt='android' />
            </button>
          </div>
        </div>
        
        <div>
          <img className='about__logo' src={logo} alt='logo-about' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
