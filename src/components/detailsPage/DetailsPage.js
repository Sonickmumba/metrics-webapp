import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountryFromAPi } from '../../redux/countries/countries';
import virus from '../SARS-CoV-2_without_background.png';
import './detailsPage.css';
import image1 from '../arrow_back_ios_white.svg';
import image2 from '../settings_white.svg';
import image3 from '../settings_voice_white.svg';
import image4 from '../arrow_circle_right_white.svg';

const DetailsPage = () => {
  const dispatch = useDispatch();

  const { name } = useParams();

  const { country, loading } = useSelector((state) => ({
    // loading: state.loadingBar.default,
    country: state.countries.selected,
  }));

  useEffect(() => {
    dispatch(fetchCountryFromAPi(name));
  }, [dispatch, name]);
  if (loading || !country) {
    return null;
  }

  const { All } = country;
  const data = Object.entries(country).slice(1);

  const images = {
    width: '30px',
    height: '30px',
    color: '#fff',
  };

  return (
    <section className="main-container">
      <header className="header">
        <Link to="/">
          <img src={image1} alt="back arrow" style={images} />
        </Link>
        <h5 className="details-header-title">town/city views</h5>
        <div className="tools">
          <img src={image3} alt="mic logo" style={images} />
          <img src={image2} alt="settings logo" style={images} />
        </div>
      </header>
      <main className="detailsPage-container">
        <div className="detailsPage-image">
          <img src={virus} alt="" className="covidvirus" />
        </div>
        <div className="detailsPage-details">
          <h1 className="detailsPage-details-title">{All.country}</h1>
          <p className="detailsPage-details-subtitle">
            {All.confirmed.toLocaleString('en-US')}
            {' '}
            cases
          </p>
        </div>
      </main>

      <section className="break-down-stats">
        <p className="break-down-section-title">CITY/TOWN BREAKDOWN - 2022</p>
        <div>
          {data.map(([name, { confirmed }]) => (
            <div key={name} className="break-down-details-item">
              <h6 className="details-item-title">{name}</h6>
              <div className="detailsPage-right-container">
                <p>
                  {confirmed.toLocaleString('en-US')}
                  {' '}
                  cases
                </p>
                <img src={image4} alt="back arrow" style={images} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default DetailsPage;
