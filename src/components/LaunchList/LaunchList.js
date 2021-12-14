import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { useStore } from '../../hooks/useStore';
import { useAppContext } from '../../context/AppContext';
import { useFilterData } from '../../hooks/useFilterData';

const className = 'LaunchList';


const LaunchList = ({ data }) => {
    console.log('rerender: LaunchList');

    const renderLaunchList = () => {
        return data?.launches?.map((launch, i) => {
            return (
                <li
                    key={i}
                    className={`${className}__item`}
                    onClick={() => handleIdChange(launch.flight_number)}
                >
                    {launch.mission_name} ({launch.launch_year})
                </li>
            );
        });
    };

    return (
        <div className={className}>
            <h3>Launches</h3>
            <ol className={`${className}__list`}>{renderLaunchList()}</ol>
        </div>
    );
};

LaunchList.propTypes = {
    data: PropTypes.object.isRequired
};

export default LaunchList;
