import React from 'react';

const Pagination = ({paginate, }) => {
    const pageNumbers = []; 

    for(let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
        pageNumbers.push(i);
        } 
    }

   