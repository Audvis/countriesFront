import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import CountriesList from "../CountriesList/CountriesList";
import PaginationBar from "../PaginationBar/PaginationBar";

import { connect } from "react-redux";

const Home = ({
  switchSide,
  countriesFilter,
  filterBy,
  filterOrder,
  filterContinent,
  filterActivity,
  countriesActivity,
  stateLoading
}) => {
  //*___statePagination_________________________________________________________________
  const [currentPage, setcurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  //*_____________________________________________________________________________________

  if (stateLoading) {
        return <h2>Loading...</h2>;
      }



  //*switch
  const switchMaster = filterBy;
  const switchOrder = filterOrder;

  //*___filters______________________________________________________________________________________
  //*byActivity
  let countriesState = null;
  filterActivity === "All"
    ? (countriesState = countriesFilter)
    : (countriesState = countriesActivity);

  //*byContinent
  let countries = "";
  filterContinent === "All"
    ? (countries = countriesState)
    : (countries = countriesState.filter(
        (e) => e.continent === filterContinent
      ));

  //*byName
  const orderByName = function (arg) {
    let num = -1;
    let num2 = 1;

    if (arg) {
      num = -1;
      num2 = 1;
    } else {
      num = 1;
      num2 = -1;
    }
    const order = countries.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return num;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return num2;
      return 0;
    });
    return order;
  };
  //*byPopulation
  const orderByPopulation = function (arg) {
    const order = countries.sort((a, b) => {
      if (arg) {
        return a.population - b.population;
      } else {
        return b.population - a.population;
      }
    });
    return order;
  };

  //*____Paginate________________________________________________________________________________________
  //*get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  //*filter
  const currentCountries = switchMaster
    ? orderByName(switchOrder).slice(indexOfFirstCountry, indexOfLastCountry)
    : orderByPopulation(switchOrder).slice(
        indexOfFirstCountry,
        indexOfLastCountry
      );
  //*change page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  //*_____________________________________________________________________________________________________



  return (
    <>
      {switchSide ? (
        <div >
          <SideBar />
        </div>
      ) : (
        <div></div>
      )}

      <div >
        <CountriesList currentCountries={currentCountries} />
      </div>

      <PaginationBar
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    countriesFilter: state.countriesList,
    activitiesFilter: state.activitiesList,
    countriesActivity: state.countriesActivity,
    switchSide: state.stateSwitchSideBar,
    filterBy: state.stateFilterBy,
    filterOrder: state.stateFilterOrder,
    filterContinent: state.stateFilterContinent,
    filterActivity: state.stateFilterActivity,
    stateLoading: state.stateLoading,
  };
}
export default connect(mapStateToProps)(Home);
