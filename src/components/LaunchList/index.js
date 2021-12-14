import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import LaunchList from './LaunchList';
import { QUERY_LAUNCH_LIST } from './query';
import { useStore } from '../../hooks/useStore';
import { useAppContext } from '../../context/AppContext';

const LaunchListContainer = () => {
    const { data, error, loading } = useQuery(QUERY_LAUNCH_LIST);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} />;
};

export default LaunchListContainer;
