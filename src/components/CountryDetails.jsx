import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function CountryDetails({ countries }) {
  const { id } = useParams();
  //console.log("alpha3code",id,countries)
  //const[details,setDetails]=useState(null)
  const [countryDetails, setCountryDetails] = useState(undefined);
  const url = 'https://flagpedia.net/data/flags/icon/72x54/';
  const urlCountry = ' https://ih-countries-api.herokuapp.com/countries/';

  const getData = async () => {
    try {
      const response = await axios.get(urlCountry + id)   
      setCountryDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {    
    getData();
  }, [id]); // se ejecutara cuando cambie la url

  if (countryDetails === undefined) {
    return <div>Esperando detalles de país</div>;
  }
  return (
    <div className="col-7">
      <h1>{countryDetails.name.common}</h1>
      <img
        src={`${url}${countryDetails.alpha2Code.toLowerCase()}.png`}
        alt={countryDetails.name.common}
        width={150}
      />
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetails.borders.map((eachBorder) => (
                  <li>
                   
                    <Link  to={`/${eachBorder}`}>{eachBorder}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
