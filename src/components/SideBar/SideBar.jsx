import React from 'react';
import Filters from '../Filters/Filters';
import { setSwitchSide } from "../../actions/actions";
import { connect } from "react-redux";
import style from './SideBar.module.css';
import SearchBar from "../SearchBar/SearchBar";

const SideBar = ({setSwitchSide}) => {

    function switchSideBar(){
        setSwitchSide(false)
    }

    return (
        <div className={style.sideBar}>
            <button className={style.close} onClick={e => {switchSideBar()}}>X</button>
            <Filters />
             <SearchBar />
        </div>
    )
}


function mapStateToProps(state) {
    return {
      countries: state.countriesList,
      stateLoading: state.stateLoading,
      switchSide: state.stateSwitchSideBar
    };
  }
  export default connect(mapStateToProps,{setSwitchSide})(SideBar);
  