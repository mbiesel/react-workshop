import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import LaunchProfile from './LaunchProfile';
import { QUERY_LAUNCH_PROFILE } from './query';
import { useStore } from '../../hooks/useStore';
import { useAppContext } from '../../context/AppContext';

const LaunchProfileContainer = () => {
    const { data, error, loading } = useQuery(QUERY_LAUNCH_PROFILE, {
        variables: {
            id: String(id)
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a flight from the panel</div>;
    }

    return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
