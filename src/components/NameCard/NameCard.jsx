import React from 'react'
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';
const NameCard = ({suggestName}) => {
    return(
        <a
        target="_blank"
        rel="noreferrer"
        href={`${nameCheapUrl}${suggestName}`} className="card-link">
        <div className="name-card-container">
            <p className="name-card">{suggestName}</p>
        </div>
        </a>
    );
};

export default NameCard;