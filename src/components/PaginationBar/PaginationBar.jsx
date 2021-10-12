import React from "react";
import Pagination from "../Pagination/Pagination";
import { setSwitchSide } from "../../actions/actions";
import { connect } from "react-redux";
import style from "./PaginationBar.module.css";

const PaginationBar = ({
  countriesPerPage,
  totalCountries,
  paginate,
  setSwitchSide,
  switchState,
}) => {

  function switchSideBar() {
    if(switchState){
      setSwitchSide(false);
    }else  setSwitchSide(true);
   
  }

  return (
    <div className={style.bar}>
      <button
      
      className={switchState? style.btn: style.btnOff}
        onClick={(e) => {
          switchSideBar();
        }}
      >
        <span className={style.icon}>
        <i className="fas fa-search"></i>
        </span>
      
      </button>

      <div className={style.pagination}>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={totalCountries}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    switchState: state.stateSwitchSideBar
    
  };
}


export default connect(mapStateToProps, { setSwitchSide })(PaginationBar);
