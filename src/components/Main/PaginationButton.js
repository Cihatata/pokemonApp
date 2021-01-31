import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const PaginationButton = ({ name }) => {
  return (name === 'Prev')
    ? (
      <div className="pagination-button">
        <div className="pagination-buttons-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.06678 12.3328C5.11054 12.4379 5.1718 12.5343 5.25932 12.6131L11.3857 18.7438C11.7271 19.0854 12.2784 19.0854 12.6198 18.7438C12.9611 18.4023 12.9611 17.8505 12.6198 17.5089L7.98995 12.8758L18.1248 12.8758C18.6062 12.8758 19 12.4817 19 12C19 11.5183 18.6062 11.1242 18.1248 11.1242L7.9812 11.1242L12.611 6.49109C12.9523 6.14952 12.9523 5.59775 12.611 5.25618C12.2697 4.91461 11.7183 4.91461 11.377 5.25618L5.25057 11.3869C5.1718 11.4657 5.11054 11.5621 5.05802 11.6672C4.97926 11.8774 4.97926 12.1226 5.06678 12.3328Z" fill="#697488" />
          </svg>

        </div>
        <div className="pagination-content">{name}</div>
      </div>
    )
    : (
      <div className="pagination-button">
        <div className="pagination-content">{name}</div>
        <div className="pagination-buttons-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.9332 6.66719C13.8895 6.56209 13.8282 6.46575 13.7407 6.38692L7.61426 0.256176C7.27293 -0.0853938 6.72156 -0.0853937 6.38023 0.256177C6.0389 0.597747 6.0389 1.14951 6.38023 1.49108L11.01 6.12418L0.875203 6.12418C0.393842 6.12418 1.1397e-06 6.5183 1.22392e-06 7C1.30814e-06 7.4817 0.393842 7.87582 0.875204 7.87582L11.0188 7.87582L6.38898 12.5089C6.04765 12.8505 6.04765 13.4023 6.38898 13.7438C6.73031 14.0854 7.28169 14.0854 7.62301 13.7438L13.7494 7.61307C13.8282 7.53425 13.8895 7.43791 13.942 7.33281C14.0207 7.12261 14.0207 6.87738 13.9332 6.66719Z" fill="#697488" />
          </svg>
        </div>
      </div>
    )
}

PaginationButton.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PaginationButton;