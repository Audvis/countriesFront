import React, {useState} from "react";
import { connect } from "react-redux";
import { getSearch } from "../../actions/actions";
import style from './SearchInput.module.css';

const SearchInput = ({ getSearch, countries }) => {

  const [inputSearch, setinputSearch] = useState('')



  function handleChange(event) {
    setinputSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    let countrySearch = countries.filter(e => e.name.toLowerCase() === inputSearch.toLowerCase())
    if(countrySearch.length === 0){
      getSearch([false])
     
    }else
    getSearch(countrySearch);
    setinputSearch('')
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className={style.form}>
      <input type="text"
      name='input'
      id='search'
      onChange={handleChange}
      value={inputSearch}
      className={style.input}
      />
      <button type="submit" className={style.btn} value={inputSearch}>Search</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countriesList,
  };
}

export default connect(mapStateToProps, { getSearch })(SearchInput);
