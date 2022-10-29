const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/cases';

export const getByContinent = async (continentName) => {
  const response = await fetch(`${BASE_URL}?continent=${continentName}`);

  return response.json();
};

export const getByCountry = async (countryName) => {
  const response = await fetch(`${BASE_URL}?country=${countryName}`);

  return response.json();
};
