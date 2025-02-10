import { useState } from 'react';
import Card from './Card';

export default function Search() {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [isSet, setIsSet] = useState(false);

  function handleSubmit(event) {
    try {
      event.preventDefault();
      setCity(event.target.city.value);
      setCountry(event.target.country.value);
      setIsSet(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" />
        <br />
        <input type="text" name="country" />
        <button type="submit">Search</button>
      </form>
      {isSet && <Card city={city} country={country} isSet={isSet} />}
    </>
  );
}
