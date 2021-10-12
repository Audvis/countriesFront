import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = [];
    

    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
      pageNumbers.push(i)
        
    }

    return (
        <nav>
           <ul className={style.container}>
          {pageNumbers.map((number) => (
            <li key={number} className={style.li}>
              <a 
              onClick={() => paginate(number)}
              href="#!">
                  {number}
              </a>
            </li>
          ))}
        </ul>
        </nav>
    )
}

export default Pagination
