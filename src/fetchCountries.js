export const fetchCountries = async name => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    );
    if (!response.ok) throw new Error();
    const countries = await response.json();
    return countries;
  } catch (error) {}
};