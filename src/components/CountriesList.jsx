import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const url = 'https://flagpedia.net/data/flags/icon/72x54/';
  return (
    <div >
      {countries.map((eachCountry) => {
        return (
          <Link key={eachCountry._id} to={eachCountry.alpha3Code}>
            <div className="card">
             
              <img
                src={`${url}${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt={eachCountry.name.common}
                width={60}
              />
               <h5>{eachCountry.name.common}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
