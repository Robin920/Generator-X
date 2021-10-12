import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({suggestNames}) => {

    const suggestNamejsx = suggestNames.map((suggestName) => {
        return <NameCard key={suggestName} suggestName={suggestName}/>;
    });
    return(
        <div className="result-container">
          {suggestNamejsx}
        </div>
    );
};

export default ResultContainer;