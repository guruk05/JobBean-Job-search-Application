import React from 'react';

const Pagination = ({paginate, totalPosts, jobsPerPage}) => {
    const pageNumbers = []; 

    for(let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
        pageNumbers.push(i);
        } 
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return(
                        <li className="page-item">
                        <a onClick = {() => paginate(number)} href = "!#" className = "page-link">
                            {number} 
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )



export default Pagination;