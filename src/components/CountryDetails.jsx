import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
function CountryDetails({ countries }) {
  const { id } = useParams();
  //console.log("alpha3code",id,countries)
  //const[details,setDetails]=useState(null)
  const [countryDetails, setCountryDetails] = useState(undefined);

  const getCountry = () => {
    // console.log("getCountry",id)
    const filterArray = countries.filter(
      (eachCountry) => eachCountry.alpha3Code.toString() === id
    );

    console.log('filterArray', filterArray);
    return filterArray[0];
  };
  useEffect(() => {
    console.log('getCountry()', getCountry());
    setCountryDetails(getCountry());
  }, [id]); // se ejecutara cuando cambie la url

  if (countryDetails === undefined) {
    return <div>Esperando detalles de país</div>;
  }
  return  <div class="col-7">
  <h1>{countryDetails.name.common}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style={{width: "30%"}}>Capital</td>
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
        {countryDetails.borders.map((eachBorder)=>   <li> <Link to={eachBorder}>{eachBorder}</Link></li>  )
            
        }
        </ul>
        </td>
         
      </tr>
    </tbody>
  </table>
</div>;
}

export default CountryDetails;
