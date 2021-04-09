import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TvPrograms = ({ channel }) => {

    const [programs, setPrograms] = useState([]);

    const url = `https://tv-api-p2x2o.ondigitalocean.app/${channel}.json`;

    useEffect(async () => {
        const response = await fetch(url);
        let data = await response.json();

        for(var JSONelement of data) {
            JSONelement.start = moment(JSONelement.start).format('HH:mm');
        }

        data.sort(sortProgramms("start"));

        setPrograms(data);

    }, [channel]);

    function sortProgramms(prop) {
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }

    const renderListItem = (program) => (
        <li className="program-list__item">
            {program.start}
            <br />
            {program.name}
        </li>
    );

    return (
        <div className="container">
            <div className="row">

                <div className="col-sm">
                </div>

                <div className="col-sm-6">

                    <div>
                        <h1 className="channel-title">{channel}</h1>
                        <ul className="program-list">
                            {programs.map(renderListItem)}
                        </ul>
                    </div>

                </div>

                <div className="col-sm">
                </div>

            </div>
        </div>
    )
};

export default TvPrograms;