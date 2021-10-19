import React, { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  const [Page, setPage] = useState(1);

  const beforePage = () => {
    const page = Page - 1;
    setPage(Page - 1);
    paginate(page);
  };

  const afterPage = () => {
    const page = Page + 1;
    setPage(Page + 1);
    paginate(page);
  };

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.container}>
        {pageNumbers.map((number) => (
          <li key={number} className={style.li}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className={style.paginateMovil}>
        {Page === 1 ? (
           <button  className={style.btn}>
           <span className={style.iconStop}>
             <i className="fas fa-chevron-left"></i>
           </span>
         </button>
        ) : (
          <button onClick={beforePage} className={style.btn}>
            <span className={style.icon}>
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
        )}
        <p className={style.pages}>{`${Page}/${Math.ceil(totalCountries / countriesPerPage)}`}</p>
        {Page === Math.ceil(totalCountries / countriesPerPage) ? (
           <button  className={style.btn}>
           <span className={style.iconStop}>
             <i className="fas fa-chevron-right"></i>
           </span>
         </button>
        ) : (
          <button onClick={afterPage} className={style.btn}>
            <span className={style.icon}>
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
