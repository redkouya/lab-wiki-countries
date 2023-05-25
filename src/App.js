import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(null);


  useEffect(()=>{
    getData()

  },[])
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountries(response.data);
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  if (countries === null) {
    return (
      <div>        
        <h3>Esperando datos</h3>
      </div>
    );
  }

  return (
  
  <div className="App">  
    <Navbar/>
    <div className='container'>
    
    <CountriesList countries={countries}/>
    <CountryDetails/>
    </div>

  </div>);
}

export default App;
