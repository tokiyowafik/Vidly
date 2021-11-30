import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { pageSize, itemsCount, currentPage, handlePageChange } = props;

    let limit = Math.ceil(itemsCount / pageSize);
    if (limit === 1)
        limit = null;

    let items = [];
    for (let i = 1; i <= limit; i++)
        items.push(i);

    return (
        <nav>
            <ul className="pagination">
                {items.map(pageNumber => (
                    <li key={pageNumber} className={pageNumber === currentPage ? 'page-item active' : 'page-item'} onClick={() => handlePageChange(pageNumber)}>
                        <button className="page-link">{pageNumber}</button>
                    </li>)
                )}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired, 
    itemsCount: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    handlePageChange: PropTypes.func.isRequired
}

export default Pagination;