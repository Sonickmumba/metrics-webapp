import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import image from '../europe.png';
import virus from '../virus.svg';
import styles from './homePage.module.css';
import { fetchCountriesFromAPI } from '../../redux/countries/countries';

import image1 from '../arrow_back_ios_white.svg';
import image2 from '../settings_white.svg';
import image3 from '../settings_voice_white.svg';
import image4 from '../arrow_circle_right_white.svg';

const HomePage = () => {
  const homeBanner = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(235, 76, 137)',
    width: '100%',
    height: '400px',
    gap: '20px',
  };
  const bannerLeft = {
    width: '50%',
    height: '400px',
  };
  const map = {
    width: '100%',
    height: '100%',
    filter: 'brightness(40%)',
    opacity: '0.5',
  };
  // header styling
  const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(222, 72, 129)',
    color: '#fff',
    padding: '0 1rem',
  };
  const tools = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };
  const rightDiv = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };
  const images = {
    width: '30px',
    height: '30px',
    color: '#fff',
  };

  const dispatch = useDispatch();
  const { items, totalConfirmed } = useSelector((state) => ({
    ...state.countries,
  }));

  const [continent, setContinent] = useState('Africa');

  const chooseContinent = (e) => {
    const searchContinent = e.target.value;
    setContinent(e.target.value);
    dispatch(fetchCountriesFromAPI(searchContinent));
  };

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountriesFromAPI(continent));
    }
  }, [dispatch, items.length, continent]);

  return (
    <>
      {/* <Header /> */}

      <header style={header}>
        <div style={rightDiv}>
          <img src={image1} alt="back arrow" style={images} />
          <h3>2022</h3>
        </div>
        <h3>Covid 19 confirmed cases</h3>
        <div style={tools}>
          <select name="continents" id="continent" className={styles.chooseContinent} onChange={chooseContinent}>
            <option value="Asia">Select Another Continent</option>
            <option value="Europe">EUROPE</option>
            <option value="Antarctica">ANTARCTICA</option>
            <option value="Australia">AUSTRALIA</option>
            <option value="Africa">AFRICA</option>
            <option value="North America">NORTH AMERICA</option>
            <option value="South America">SOUTH AMERICA</option>
          </select>

          <div className={styles.rightTools}>
            <img src={image3} alt="mic logo" style={images} />
            <img src={image2} alt="settings logo" style={images} />
          </div>
        </div>
      </header>

      <div style={homeBanner}>
        <div style={bannerLeft}>
          <img src={image} alt="" style={map} />
        </div>
        <div>
          <h1>{continent}</h1>
          <p className={styles.totalConfirmedCases}>
            {totalConfirmed.toLocaleString('en-US')}
            {' '}
            cases
          </p>
        </div>
      </div>
      <section className={styles.homeStats}>
        <p className={styles.statisticsTitle}>STATS BY COUNTRY</p>
        <div className={styles.homegrid}>
          {items.map(({ name, confirmed }) => (
            <div key={name} className={styles.homeitem}>
              <Link to={`/country/${name}`} className={styles.linkNav}>
                <div className={styles.homecontent}>
                  <div className={styles.homeicon}>
                    <img src={image4} alt="back arrow" style={images} />
                  </div>
                  <div className={styles.hometop}>
                    <img src={virus} alt="" className={styles.homeimage} />
                  </div>
                  <div className={styles.homebottom}>
                    <h3 className={styles.Apptitle}>{name}</h3>
                    <p className={styles.Appsubtitle}>{confirmed.toLocaleString('en-US')}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
