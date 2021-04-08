import React, { useState, useEffect } from 'react';

const TvPrograms = () => {

    const [programs, setPrograms] = useState([]);

useEffect(() => {
    const fetchPrograms = async () => {
        const response = await fetch('https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json');
        const data = await response.json();
        setPrograms(data);
    };
    if (!programs.length) {
        fetchPrograms();
    }
});

const renderListItem = (program) => (
    <li className="program-list__item">
        {program.start}
        <br />
        {program.name}
    </li>
);

    return (
        <div>
            <h1 className="channel-title">SVT 1</h1>
            <ul className="program-list">
                {programs.map(renderListItem)}
            </ul>
        </div>

    )
};

export default TvPrograms;