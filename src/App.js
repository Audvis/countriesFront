import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import CreateActivity from './components/CreateActivity/CreateActivity'
import CountriesActivity from './components/CountriesActivity/CountriesActivity'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import About from './components/About/About';
import CountryDetails from './components/CountryDetails/CountryDetails'
import { getCountries, setLoading } from "./actions/actions";
import { connect } from "react-redux";
import axios from 'axios';
import ActivitiesList from './components/ActivitiesList/ActivitiesList';


function App({getCountries, setLoading}) {

const API = 'https://countriesback.herokuapp.com/' 
// const API = 'http://localhost:3001/' 
  

  useEffect(() => {
    const fetchCountries = async () =>{
      const countries = await axios.get(`${API}countries`)
      getCountries(countries.data);
      setLoading(false);
    }
   
    fetchCountries();
    
  },[getCountries,setLoading]);
  
  return (
    <>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route   path="/" component={NavBar} />
    </Switch>
    
      <Route path="/home" component={Home} />
      <Route path="/createActivity" component={CreateActivity} />
      <Route path="/country/:id" component={CountryDetails} />
      <Route path="/activities/:name" component={CountriesActivity} />
      <Route exact path="/activities" component={ActivitiesList} />
      <Route path="/about" component={About} />
    
      
    </>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    getCountries: (countries) => dispatch(getCountries(countries)),
    setLoading: (boolean) => dispatch(setLoading(boolean)),
  };
}


export default connect(
  null,
  mapDispatchToProps
)(App);
